import { ragChat } from "@/lib/ragChat";
import { users } from "@/services/auth/auth.service";
import { aiUseChatAdapter } from "@upstash/rag-chat/nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const { user } = await users();
  if (!user) {
    return res.status(401);
  }
  const { messages } = await req.json();

  //checking the last mmessage
  const lastMessage = messages[messages.length - 1].content;

  const session = await ragChat.chat(lastMessage, {
    sessionId: user.id,
    streaming: true, // TODO: this should be set to true to avoid latency issues
  });

  console.log(session);
  return aiUseChatAdapter(session);
}
