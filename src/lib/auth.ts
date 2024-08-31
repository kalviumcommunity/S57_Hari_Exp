import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "../../prisma/prisma";
import type { User } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: User & {
      token: string;
    };
  }
}

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    GithubProvider,
    GoogleProvider({
      allowDangerousEmailAccountLinking: true,
      authorization: {
        access_type: "offline",
        prompt: "consent",
        params: {
          scope: [
            "https://www.googleapis.com/auth/userinfo.email",
            "https://www.googleapis.com/auth/userinfo.profile",
          ].join(" "),
        },
        response: "code",
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          id: user.id,
          email: user.email,
          picture: user.image,
          name: user.name,
        };
      }
      return token;
    },
    async session({ token, session }) {
      return {
        ...session,
        user: {
          ...session,
          id: token.sub,
          email: token.email,
          name: token.name,
          image: token.picture,
        },
      };
    },
    async signIn({ profile, account }) {
      const checkUser = await prisma.user.findFirst({
        where: {
          email: profile?.email as string,
        },
      });
      console.log(account?.access_token);
      if (!checkUser) {
        const user = await prisma.user.create({
          data: {
            email: profile?.email as string,
            name: profile?.name as string,
            emailVerfied: true,
            image: profile?.picture,
          },
        });
        if (!user) return false;
        return true;
      }
      return true;
    },
  },
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error",
  },
});
