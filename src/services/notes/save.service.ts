"use server";
import { revalidatePath } from "next/cache";
import prisma from "../../../prisma/prisma";
import { users } from "../auth/auth.service";
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
    const note = await prisma.note.create({
      data: {
        notes: html,
        nootbookId: nootbook.id,
        tag: tag,
        tags: tags,
      },
    });
    console.log(note);
    await cacheNotes(userss.id, note.id, note);
    // llema(userss?.id, notes);
    // store(userss?.notebookId, notes, notes.id)
    revalidatePath(`/nootbook/overview`);
    revalidatePath(`/nootbook/${tag}`);

    return {
      success: note,
    };
  } catch (error) {
    console.log(error);
  }
};

//noteiDS
async function cacheNotes(
  userId: string,
  noteId: string,
  notes: {
    id: string;
    tag: string;
    tags: string[];
    notes: string;
    createdAt: Date;
    updatedAt: Date;
    nootbookId: string | null;
  }
) {
  const note = await redis.sadd(`user:${userId}:notes`, noteId);
  const notesave = await redis.set(`user:${userId}:note:${noteId}`, notes);
  console.log(notesave);
  console.log(note);
}
