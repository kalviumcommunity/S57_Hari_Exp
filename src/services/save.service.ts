"use server";
import { revalidatePath } from "next/cache";
import prisma from "../../prisma/prisma";
import { users } from "./auth.service";
import { redis } from "@/lib/redis";

import { Note } from "@prisma/client";
import { Ratelimit } from "@upstash/ratelimit";

// const ratelimit = new Ratelimit({
//   redis,
//   limiter: Ratelimit.slidingWindow(10, "120s"),
// });
export const save = async (
  html: string,
  tag: string,
  tags: string | string[]
) => {
  // const headers = new Headers().get("x-forward-for");
  try {
    //   const { success } = await ratelimit.limit(headers);
    //   if (success) {
    //     return {
    //       message: "rate limit exceeded",
    //     };
    //   }
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
    // store(userss?.notebookId, notes, notes.id)
    revalidatePath(`/nootbook/overview`);
    revalidatePath(`/nootbook/${tag}`);

    return {
      success: notes,
    };
  } catch (error) {
    console.log(error);
  }
};

async function cacheIn(userId: string, notes: {}) {
  const post = `user:${userId}`;
  const data = await redis.hset(post, {
    [`postid:${Date.now()}`]: notes,
  });
  console.log(data);
}
