import db from "../models";
import { Request, Response } from "express";

export const postNotes = async (
  title: string,
  description: string,
  tags: string,
  image: string,
  file: string
) => {
  try {
    const createdNote = db.Note.create({
      title: title,
      description: description,
      tags: tags,
      image: image,
      file: file,
    });
    return createdNote;
  } catch (error) {
    console.log(error);
  }
};

export const getAllNotes = async () => {
  return await db.Note.findAll();
};

export const getANote = async (req: Request, res: Response, id: string) => {
  const note = await db.Note.findOne({
    where: {
      id: id,
    },
  });
  res.json(note);
};

export const findNote = async (id: any, uid: any) => {
  return await db.Note.findOne({
    where: {
      id: id,
      UserId: uid,
    },
  });
};

export const replaceNote = async (
  note: any,
  title: string,
  description: string,
  tags: string,
  image: string,
  file: string
) => {
  const updatedNote = await note.update({
    title,
    description,
    tags,
    image,
    file,
  });
  return updatedNote;
};

export const softDelete = async (id: any) => {
  return await db.Note.findOne({
    where: {
      id: id,
    },
  });
};
