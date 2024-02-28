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
  return await db.Note.findAll({
    order: [["createdAt", "DESC"]], // Sort by createdAt field in descending order
  });
};

export const getANote = async (req: Request, res: Response, id: string) => {
  return await db.Note.findOne({
    where: {
      id: id,
    },
  });
  // return res.json(note);
};

export const findNote = async (id: any, uid: any) => {
  return await db.Note.findOne({
    where: {
      id: id,
      // UserId: uid,
    },
  });
};

export const replaceNote = async (
  id: number | string,
  title: string,
  description: string,
  tags: string,
  image: string,
  file: string
) => {
  console.log(id, title, description, image);

  const updatedNote = await db.Note.update(
    {
      title,
      description,
      tags,
      image,
      file,
    },
    { where: { id: id } }
  );
  return updatedNote;
};

export const DeleteCurrentNote = async (id: any) => {
  return await db.Note.destroy({
    where: {
      id: id,
    },
  });
};
