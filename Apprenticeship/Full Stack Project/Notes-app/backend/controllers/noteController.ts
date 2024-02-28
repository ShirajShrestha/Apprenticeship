import { Request, Response } from "express";
import {
  DeleteCurrentNote,
  findNote,
  getANote,
  getAllNotes,
  postNotes,
  replaceNote,
} from "../repository/noteRepository";
import { log } from "console";

export const postNote = async (req: Request, res: Response) => {
  console.log(req.body);
  const { title, description, tags, image, file } = req.body;
  try {
    const postNewNote = await postNotes(title, description, tags, image, file);
    if (postNewNote) {
      res.status(200).json({ message: "New Note Created Successfully" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Error occured" });
  }
};

export const getNotes = async (req: Request, res: Response) => {
  try {
    const notes = await getAllNotes();
    res.json({ notes });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getNote = async (req: Request, res: Response) => {
  try {
    const id = req.params.id.toString();
    const notes = await getANote(req, res, id);
    res.json({ notes });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching a note" });
  }
};

export const updateNote = async (req: Request, res: Response) => {
  const { id, uid } = req.params;
  const { title, description, tags, image, file } = req.body;

  try {
    const note = await findNote(id, uid);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    const updatedNote = await replaceNote(
      id,
      title,
      description,
      tags,
      image,
      file
    );

    res.status(201).json(updatedNote);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const deleteNote = async (req: Request, res: Response) => {
  const id = req.params.id;
  // const note = getNote(req, res, );
  try {
    const response = await DeleteCurrentNote(id);
    if (response) {
      res.status(200).json({ message: " Note Deleted Successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting note" });
  }
};
