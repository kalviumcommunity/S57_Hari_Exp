import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import prisma from "../../prisma/prisma";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [GithubProvider],
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
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
  // pages: {
  //   signIn: "/auth/signin",
  //   signOut: "/auth/signout",
  // },
});
