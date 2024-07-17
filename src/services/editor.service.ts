"use server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API;
const genAi = new GoogleGenerativeAI(apiKey!);
const model = genAi.getGenerativeModel({
  model: "gemini-1.5-flash",
  generationConfig: {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 200,
    responseMimeType: "text/plain",
  },
});

export const aiEditor = async (content: string) => {
  try {
    const chatSession = model.startChat({
      history: [],
    });
    const billionaire = await chatSession.sendMessage(content!);
    const llema = billionaire.response.text();
    console.log(llema);
    return { data: llema };
  } catch (error) {
    console.log(error);
  }
};
