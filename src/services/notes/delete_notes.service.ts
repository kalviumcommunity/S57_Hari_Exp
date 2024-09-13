"use server";
import { revalidatePath } from "next/cache";
import prisma from "../../../prisma/prisma";
import { users } from "../auth/auth.service";
import { redis } from "@/lib/redis";

export async function delete_note(noteId: string) {
  const user = await users();
  if (!user.user?.email) {
    return {
      message: "You do not have permission to delete",
    };
  }
  const userId = await prisma.user.findFirst({
    where: {
      email: user.user.email,
    },
  });
  const notebook = await prisma.nootbook.findFirst({
    where: {
      userId: userId.id,
    },
  });
  const note = await prisma.note.delete({
    where: {
      nootbookId: notebook?.id,
      id: noteId,
    },
  });
  let deelte = await delete_cached_notes(userId?.id as string, noteId);
  if (deelte.err) {
    return {
      message: "Try again",
    };
  }
  if (!note) {
    return {
      message: "Try again",
    };
  }
  revalidatePath("nootbook/overview");
  return {
    message: "deleted successfully",
  };
}

async function delete_cached_notes(userId: string, noteId: string) {
  let s = await redis.srem(`user:${userId}:notes`, noteId);
  if (s === 1) {
    return {
      note: `note ${noteId} removes`,
    };
  } else {
    return {
      err: `note ${noteId} not removed`,
    };
  }
}
