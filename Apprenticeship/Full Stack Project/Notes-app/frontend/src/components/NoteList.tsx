import { MdDeleteForever } from "react-icons/md";
import * as apiClient from "../api-client";
import { useEffect, useState } from "react";
export interface Note {
  id: number;
  title: string;
  description: string;
  image: string;
  status: string;
}

export interface FetchedNotes {
  noates: Note[];
}

const NoteList = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedNotes = await apiClient.fetchNotes();
        // console.log(fetchedNotes?.notes);
        if (fetchedNotes) {
          setNotes(fetchedNotes?.notes);
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

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  const openNote = () => {};

  return (
    <>
      <div className="grid gap-2 my-4 grid-cols-2 ">
        {notes.map((note) => (
          <div
            className="bg-primary-light mb-2 rounded-md p-2 min-h-40 flex flex-col justify-between "
            key={note.id}
            onClick={openNote}
          >
            <div>
              <h3 className="text-lg font-bold truncate ... ">{note.title} </h3>
              <div className="truncate ...">{note.description} </div>
              {/* <div>{truncateText(note.description, 8)} </div> */}
            </div>
            <div className=" flex flex-row justify-between items-center">
              <small>2/22/2024</small>
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
