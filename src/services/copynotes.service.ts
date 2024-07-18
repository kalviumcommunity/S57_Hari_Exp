"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "../../prisma/prisma";
import { users } from "./auth.service";

export async function llema(noteId: string) {
  const regex = /^[0-9a-fA-F]{24}$/;
  if (!regex.test(noteId)) {
    return {
      llemaa: "Provide valid Copy Id",
    };
  }
  const email = await users();
  const id = await prisma.user.findFirst({
    where: {
      email: email.user?.email,
    },
  });
  const note = await prisma.note.findFirst({
    where: {
      id: noteId,
    },
  });
  if (!note) {
    return {
      invalid: "Invalid Id",
    };
  }
  const noteCheck = await prisma.note.findFirst({
    where: {
      tag: note.tag,
      Nootbook: {
        userId: id.id,
      },
    },
  });
  if (noteCheck) {
    return {
      llema: "Already exist",
    };
  }
  const nootbook = await prisma.nootbook.findFirst({
    where: {
      userId: id.id,
    },
  });
  const copy = await prisma.note.create({
    data: {
      notes: note?.notes,
      tags: note?.tags,
      tag: note?.tag,
      Nootbook: {
        connect: {
          id: nootbook?.id,
          userId: id.id,
        },
      },
    },
  });

  if (copy.id) {
    revalidatePath("/nootbook/overview");
    return { success: "llema" };
  }
}
