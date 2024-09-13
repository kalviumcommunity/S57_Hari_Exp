"use server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import prisma from "../../../prisma/prisma";
import { users } from "../auth/auth.service";
import { revalidatePath, revalidateTag } from "next/cache";
import { redis } from "@/lib/redis";
import { Ratelimit } from "@upstash/ratelimit";
import { headers } from "next/headers";
import { ragChat } from "@/lib/ragChat";
import Chat from "@/components/chat/chat";
import { aiUseChatAdapter } from "@upstash/rag-chat/nextjs";
import { type Message } from "ai";

interface SendChatInterface {
  messages: Message[];
}
export async function sendChat({ messages }: SendChatInterface) {
  const { userId } = await getUser();
  const sessionId = userId?.id;

  try {
    const lastMessage = messages[messages.length - 1]?.content;
    const chat = await ragChat.chat(lastMessage, {
      streaming: true,
      sessionId,
    });
    console.log(chat.context);
    return aiUseChatAdapter(chat);
  } catch (error) {
    console.log(error);
  }
}

async function getUser() {
  const { user } = await users();
  const userId = await prisma.user.findFirst({
    where: {
      email: user?.email!,
    },
  });
  if (!userId) {
    return {
      error: "User not found",
    };
  } else {
    return {
      userId: userId,
    };
  }
}
