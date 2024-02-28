import { MdDeleteForever } from "react-icons/md";
import * as apiClient from "../api-client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNoteStore } from "../store";

export interface Note {
  id: number;
  title: string;
  description: string;
  image: string;
  status: string;
  createdAt: any;
}

const NoteList = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedNotes = await apiClient.fetchNotes();
        if (fetchedNotes) {
          setNotes(fetchedNotes.notes);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id: number) => {
    await apiClient.deleteNote(id);
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  const openNote = async (id: number) => {
    const getNote = await apiClient.fetchNoteById(id);
    const noteToEdit = getNote.notes;
    useNoteStore.getState().setNoteData(noteToEdit);
    navigate("/edit-note");
  };

  return (
    <>
      <div className="grid gap-2 my-4 grid-cols-2 ">
        {notes.map((note) => (
          <div
            className="bg-primary-light mb-2 rounded-md p-2 min-h-40 flex flex-col justify-between "
            key={note.id}
            onClick={() => openNote(note.id)}
          >
            <div>
              <h3 className="text-lg font-bold truncate ... ">{note.title} </h3>
              <div className="truncate ...">{note.description} </div>
            </div>
            <div className=" flex flex-row justify-between items-center">
              <small>{formatDate(note.createdAt)}</small>
              <button onClick={() => handleDelete(note.id)}>
                <MdDeleteForever />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NoteList;
