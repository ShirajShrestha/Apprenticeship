import Layout from "../layout/Layout";
import { FaLessThan } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNoteStore } from "../store";
import * as apiClient from "../api-client";

const EditNote = () => {
  const noteData = useNoteStore((state) => state.noteData);
  const setNoteData = useNoteStore((state) => state.setNoteData);
  //   const { noteData, setNoteData, updateNoteTitle } = useNoteStore();
  const { updateNoteTitle, updateNoteDescription, updateNoteImage } =
    useNoteStore();

  const navigate = useNavigate();
  console.log(noteData);

  const [isMarkDown, setIsMarkdown] = useState(false);
  const [desType, setDesType] = useState("MD");

  const goBack = () => {
    navigate("..");
  };

  useEffect(() => {
    setNoteData(noteData);
  }, [noteData, setNoteData]);

  const handleTitleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newTitle = e.target.value;
    updateNoteTitle(newTitle);
  };
  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newDescription = e.target.value;
    updateNoteDescription(newDescription);
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newImage = e.target.files[0];
      updateNoteImage(newImage);
    }
  };
  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    // addNewNote(formData);
    if (noteData && noteData.id) {
      apiClient.updataNote(noteData.id, noteData);
    }
    console.log(noteData);

    navigate("/");
  };

  const handleDesChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isMarkDown == true) {
      setIsMarkdown(false);
      setDesType("MD");
    } else {
      setIsMarkdown(true);
      setDesType("Text");
    }
  };

  const handleDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (isMarkDown) {
    } else {
      handleDescriptionChange(e);
    }
  };

  return (
    <div>
      <Layout>
        <form>
          <div className="flex flex-row place-content-between ">
            <span className="bg-white p-4 rounded-full mx-2 " onClick={goBack}>
              <FaLessThan />
            </span>

            <button
              className="text-primary-blue bg-secondary-light font-bold px-4 py-2 rounded-lg mt-2 cursor-pointer"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
          <input
            type="text"
            placeholder="Title"
            className="px-1 py-2 rounded-lg w-full max-w-md mt-4 mb-2"
            value={noteData?.title}
            onChange={handleTitleChange}
          />

          <div className="flex flex-row gap-2 my-2 ">
            <button
              className="bg-white rounded-md px-2 py-1"
              onClick={handleDesChange}
            >
              {desType}
            </button>
          </div>

          <textarea
            rows={14}
            className="w-full rounded-lg px-1 py-2"
            placeholder="Start typing"
            value={noteData?.description}
            onChange={handleDescription}
          ></textarea>

          {isMarkDown ? (
            <button className="bg-white rounded-md px-2 py-1 float-end mr-2">
              Convert
            </button>
          ) : null}

          <div className="text-white">
            <input
              type="file"
              accept="image/*"
              className="my-2 "
              onChange={handleImageChange}
            />
          </div>
        </form>
      </Layout>
    </div>
  );
};

export default EditNote;
