"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

const llema = new GoogleGenerativeAI(
  process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API!
);
const model = llema.getGenerativeModel({
  model: "gemini-1.5-flash",
  generationConfig: {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 4,
    responseMimeType: "text/plain",
  },
});

export async function Title(title: string) {
  const text = model.startChat({
    history: [],
  });
  const answer = (await text.sendMessage(title)).response.text();
  console.log(answer);
  const tagAnswer = answer.replaceAll(" ", "-");
  return tagAnswer;
}
