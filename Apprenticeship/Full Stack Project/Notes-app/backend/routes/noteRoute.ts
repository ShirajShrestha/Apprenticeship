import express from "express";
const router = express.Router();
import {
  deleteNote,
  getNote,
  getNotes,
  postNote,
  updateNote,
} from "../controllers/noteController";

// Add note
router.post("/postNote", postNote);
// Get all notes
router.get("/getNotes", getNotes);
// Get single note
router.get("/:id", getNote);
// Update note
router.put("/:id", updateNote);
// Delete note
router.delete("/:id", deleteNote);

export default router;
