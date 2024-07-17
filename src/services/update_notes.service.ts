"use server";

import type { Editor } from "@tiptap/react";
import { prisma } from "../../prisma/prisma";
import { revalidatePath } from "next/cache";

export async function updateNotes(tag: any, content: Editor) {
  if (!content) {
    return {
      error: "content",
    };
  }
  console.log(tag);
  const notes = await prisma.note.update({
    where: {
      id: tag,
    },
    data: {
      notes: content,
    },
  });
  revalidatePath(`/nootbook/${notes.tag}`);
  if (!notes) {
    return {
      error: "Note not found",
    };
  }
  console.log("1");
  return {
    success: true,
  };
}
