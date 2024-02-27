// import Note from "./Note";
import { MdDeleteForever } from "react-icons/md";
import * as apiClient from "../api-client";
import { useEffect, useState } from "react";
import { DiVim } from "react-icons/di";

export interface Note {
  id: number;
  title: string;
  description: string;
  image: string;
}

const NoteList = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedNotes = await apiClient.fetchNotes();
        console.log(fetchedNotes);
        console.log(notes);

        if (fetchedNotes) {
          setNotes(fetchedNotes);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h2 className="text-3xl font-bold">Your Notes</h2>
      <div className="grid gap-2 my-4 grid-cols-2 ">
        {notes.map((note) => (
          <div>{note.title}</div>
        ))}
        {/* {notes.map((note) => (
        <div className="bg-primary-light mb-2 rounded-md p-2 min-h-40 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold">{note.title} </h3>
            <div>{note.description} </div>
          </div>
          <div className=" flex flex-row justify-between items-center">
            <small>2/22/2024</small>
            <MdDeleteForever />
          </div>
        </div>
      ))} */}
        {/* {allNotes.map((note) => (
        <Note eachNote={note} />
      ))} */}
        {/* <div className="space-y-3">
      <h2 className="text-3xl font-bold">Your Notes</h2>
      <div className="grid md:grid-cols-3 gap-4"></div>
    </div> */}
      </div>
    </>
  );
};

export default NoteList;
