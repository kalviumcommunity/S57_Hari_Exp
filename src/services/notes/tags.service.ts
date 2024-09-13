"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

const ai = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API!);
const model = ai.getGenerativeModel({
  model: "gemini-1.5-flash",
  generationConfig: {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 40,
    responseMimeType: "text/plain",
  },
});

export async function genTags(tags: string) {
  let lists: string[] = [];
  const tagss = model.startChat({
    history: [],
  });
  const response = (await tagss.sendMessage(tags)).response.text();
  console.log(response.toString());
  response
    .trim()
    .replace(/-/g, " ")
    .split("\n")
    .map((string) => lists.push(string.trim()));
  console.log(lists);
  return lists;
}
