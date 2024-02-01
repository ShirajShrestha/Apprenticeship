import express, { Request, Response } from "express";
const router = express.Router();

import db from "../models";
import { getNotes, postNote } from "../controllers/noteController";

// Add note
router.post("/postNote", postNote);

// Get all notes
router.get("/getNotes", getNotes);

// Get single note
router.get("/.getNote/:id");

export default router;
