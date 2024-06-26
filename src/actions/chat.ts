"use server";
import { toast, useToast } from "@/components/ui/use-toast";
import { auth, signIn } from "@/lib/auth";
import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY as string);
// async function run() {
//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
//   const result = await model.generateContent(["What is hari?"]);
//   console.log(result.response.text());
// }
// run();

export async function q() {
  const session = await auth();
  return session;
}

export async function SigninAction() {
  await signIn("github");
}
