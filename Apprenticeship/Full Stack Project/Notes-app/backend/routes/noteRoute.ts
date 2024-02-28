import express from "express";
const router = express.Router();
import {
  deleteNote,
  getNotes,
  postNote,
  updateNote,
} from "../controllers/noteController";

// Add note
router.post("/postNote", postNote);
// Get all notes
router.get("/getNotes", getNotes);
// Get single note
router.get("/.getNote/:id");
// Update note
router.put("/:id", updateNote);
// Delete note
router.delete("/:id", deleteNote);

export default router;
