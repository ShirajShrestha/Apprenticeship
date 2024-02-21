import Layout from "../layout/Layout";
import { FaCode, FaFileImage, FaLessThan } from "react-icons/fa";
import { BsPaperclip } from "react-icons/bs";
// MarkdownTextarea = require("react-markdown-textarea");
// React.renderComponent(<MarkdownTextarea />, document.body);

const Note = () => {
  return (
    <Layout>
      <div className="flex flex-row place-content-between ">
        <span className="bg-white p-4 rounded-full mx-2 ">
          <FaLessThan />
        </span>

        <span className="text-primary-blue bg-secondary-light font-bold px-4 py-2 rounded-lg mt-2 cursor-pointer">
          Save
        </span>
      </div>

      <input
        type="text"
        placeholder="Title"
        className="px-1 py-2 rounded-lg w-full max-w-md mt-4 mb-2"
      />
      <p className="text-primary-light mb-2 px-1">Date</p>

      <textarea
        name=""
        id=""
        rows={14}
        className="w-full rounded-lg px-1 py-2"
        placeholder="Start typing"
      ></textarea>
      <div className="rounded-3xl bg-primary-light p-2 flex flex-row place-content-evenly">
        <span className="bg-white p-2 rounded-full mx-2 ">
          <FaFileImage />
        </span>
        <span className="bg-white p-2 rounded-full mx-2 ">
          <FaCode />
        </span>
        <span className="bg-white p-2 rounded-full ">
          <BsPaperclip />
        </span>
      </div>
    </Layout>
  );
};

export default Note;
