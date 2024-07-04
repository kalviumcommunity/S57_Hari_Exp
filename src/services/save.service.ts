import prisma from "../../prisma/prisma";
import { user } from "./auth.service";

export const save = async (editor) => {
  const session = await user();
  const users = await prisma.user.findFirst({
    where: {
      email: session.user?.email,
    },
  });
  const html = await editor.getHTML();
  let nootbook = await prisma.nootbook.findFirst({
    where: {
      userId: users?.id,
    },
  });
  if (!nootbook) {
    nootbook = await prisma.nootbook.create({
      data: {
        userId: users?.id,
      },
    });
  }
  try {
    const notes = await prisma.note.create({
      data: {
        notes: html,
        nootbookId: nootbook.id,
      },
    });
    console.log(notes);
  } catch (error) {
    console.log(error);
  }
};
