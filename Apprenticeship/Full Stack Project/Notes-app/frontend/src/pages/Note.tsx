import Layout from "../layout/Layout";
// MarkdownTextarea = require("react-markdown-textarea");
// React.renderComponent(<MarkdownTextarea />, document.body);

const Note = () => {
  return (
    <Layout>
      <input
        type="text"
        placeholder="Title"
        className="px-1 py-2 rounded-lg w-full max-w-md mt-4 mb-2"
      />
      <p className="text-primary-light mb-2 px-1">Date</p>
      <textarea
        name=""
        id=""
        rows={18}
        className="w-full rounded-lg px-1 py-2"
        placeholder="Start typing"
      ></textarea>
      <button className="text-primary-blue bg-secondary-light font-bold px-4 py-2 rounded-lg mt-2 cursor-pointer">
        Save
      </button>
    </Layout>
  );
};

export default Note;
