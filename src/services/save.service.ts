"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "../../prisma/prisma";
import { users } from "./auth.service";
import { Ratelimit } from "@upstash/ratelimit";
import { headers } from "next/headers";
import { redis } from "@/lib/redis";

import { Note } from "@prisma/client";

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(4, "120s"),
});
export const save = async (
  html: string,
  tag: string,
  tags: string | string[]
) => {
  const up = headers().get("x-forwared-for");
  const { success, remaining } = await ratelimit.limit(up);
  console.log(success, remaining);
  try {
    if (remaining === 0 && !success) {
      return {
        error: "Rate Limit Exceeded",
        reason:
          "You have exceeded the allowed number of requests; please wait a few minutes and try again",
      };
    }
    const session = await users();
    const userss = await prisma.user.findFirst({
      where: {
        email: session.user?.email,
      },
    });
    let nootbook = await prisma.nootbook.findFirst({
      where: {
        userId: userss?.id,
      },
    });
    if (!nootbook) {
      nootbook = await prisma.nootbook.create({
        data: {
          userId: userss?.id,
        },
      });
    }
    const notes: Note = await prisma.note.create({
      data: {
        notes: html,
        nootbookId: nootbook.id,
        tag: tag,
        tags: tags,
      },
    });
    console.log(notes);
    // llema(userss?.id, notes);
    // store(userss?.notebookId, notes, notes.id);
    revalidatePath(`/nootbook/${tag}`);
    revalidatePath(`/nootbook/overview`);
    return {
      success: notes,
    };
  } catch (error) {
    console.log(error);
  }
};

// async function llema(userId: string, notes: {}) {
//   const post = `user:${userId}`;
//   const data = await redis.hset(post, {
//     [`postid:${Date.now()}`]: notes,
//   });
//   console.log(data);
// }
