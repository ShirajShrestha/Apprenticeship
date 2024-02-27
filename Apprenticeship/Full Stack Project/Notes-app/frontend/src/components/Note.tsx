import { MdDeleteForever } from "react-icons/md";

import { NoteType } from "../../../backend/shared/types";

type Props = {
  eachNote: NoteType;
};

const Note = ({ eachNote }: Props) => {
  return (
    <div className="bg-primary-light mb-2 rounded-md p-2 min-h-40 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-bold">{eachNote.title} </h3>
        <div>{eachNote.description} </div>
      </div>
      <div className=" flex flex-row justify-between items-center">
        <small>2/22/2024</small>
        <MdDeleteForever />
      </div>
    </div>
  );
};

export default Note;
