import express from "express";
const router = express.Router();
import { getNotes, postNote, updateNote } from "../controllers/noteController";

// Add note
router.post("/postNote", postNote);
// Get all notes
router.get("/getNotes", getNotes);
// Get single note
router.get("/.getNote/:id");
// Update note
router.put("/update/:id", updateNote);

export default router;
