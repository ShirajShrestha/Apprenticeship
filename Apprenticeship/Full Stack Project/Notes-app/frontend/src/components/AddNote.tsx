import Layout from "../layout/Layout";
import { FaLessThan } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { addNewNote } from "../api-client";
// import Markdown from "react-markdown";
// MarkdownTextarea = require("react-markdown-textarea");
// React.renderComponent(<MarkdownTextarea />, document.body);

export interface NoteFormData {
  title: string;
  description: string;
  image: File | null;
}

const AddNote = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<NoteFormData>({
    title: "",
    description: "",
    image: null,
  });
  const [isMarkDown, setIsMarkdown] = useState(false);
  const [desType, setDesType] = useState("MD");

  const goBack = () => {
    navigate("/note");
  };

  const handleTitleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, title: e.target.value });
  };
  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, description: e.target.value });
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFormData({ ...formData, image: file });
    }
  };
  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    addNewNote(formData);
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
      // const textToMd = <Markdown>{e.target.value}</Markdown>;
    } else {
      handleDescriptionChange(e);
    }
  };

  return (
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
          value={formData.title}
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
          value={formData.description}
          // onChange={handleDescriptionChange}
          onChange={handleDescription}
        ></textarea>

        {/* textarea for markdown  */}
        {/* {isMarkDown ? (
          <textarea
            rows={7}
            className="w-full rounded-lg px-1 py-2"
            placeholder="Start typing"
            value={markDownText}
            // onChange={handleDescriptionChange}
            onChange={handleDescription}
          ></textarea>
        ) : null} */}

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
  );
};

export default AddNote;
