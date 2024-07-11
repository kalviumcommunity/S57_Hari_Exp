"use server";

import { auth, signIn } from "@/lib/auth";

export async function users() {
  const session = await auth();
  return {
    ...session,
  };
}

export async function SigninGoogleAction() {
  await signIn("google");
}
export async function SigninGithubAction() {
  await signIn("github");
}
