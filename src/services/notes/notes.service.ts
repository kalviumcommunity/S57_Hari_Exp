"use server";

import { redis } from "@/lib/redis";
import prisma from "../../../prisma/prisma";
import { users } from "../auth/auth.service";

export async function notes() {
  try {
    const email = await users();
    const id = await prisma.user.findFirst({
      where: {
        email: email?.user?.email,
      },
    });
    let cachedNoteIds = await cachedNotes(id?.id as string);
    if (cachedNoteIds.error) {
      return {
        error: cachedNoteIds.error,
      };
    }
    const result = await Promise.all(
      (cachedNoteIds.success ?? []).map(async (noteId) => {
        console.log(noteId);
        return await prisma.note.findFirst({
          where: {
            id: noteId,
          },
          orderBy: {
            createdAt: "desc",
          },
        });
      })
    );
    // let notes = [];
    // for (const noteId of cachedNoteIds.success) {
    //   console.log(noteId);
    //   const note = await redis.get(`user:${id.id}:note:${noteId}`);
    //   notes.push(note);
    // }
    console.log(result);
    return {
      notes: result,
    };
  } catch (error) {
    console.log(error);
  }
}

async function cachedNotes(userId: string) {
  try {
    let notes = await redis.smembers(`user:${userId}:notes`);
    console.log(notes);
    return {
      success: notes,
    };
  } catch (error) {
    return {
      error: error,
    };
  }
}
