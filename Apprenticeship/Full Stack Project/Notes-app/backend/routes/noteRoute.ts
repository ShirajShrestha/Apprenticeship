import express, { Request, Response } from "express";
const router = express.Router();

import db from "../models";

router.post("/createnote", async (req: Request, res: Response) => {
  const { title, description, tags } = req.body;
  try {
    const createNewNote = await db.Note.create({
      title: title,
      description: description,
      tags: tags,
    });
    if (createNewNote) {
      res.status(200).json({ message: "New Note Created Successfully" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Error occured" });
  }
});

export default router;
