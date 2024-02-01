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
  return await db.Notes.findAll();
};

export const getANote = async (req: Request, res: Response, id: string) => {
  const note = await db.Note.findOne({
    where: {
      id: id,
    },
  });
  res.json(note);
};
