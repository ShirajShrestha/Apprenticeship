import { Request, Response } from "express";
import { getANote, getAllNotes, postNotes } from "../repository/noteRepository";

export const postNote = async (req: Request, res: Response) => {
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
