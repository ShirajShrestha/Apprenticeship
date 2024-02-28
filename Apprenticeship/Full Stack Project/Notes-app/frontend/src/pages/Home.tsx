import { FaPlus, FaSearch, FaUser, FaBars } from "react-icons/fa";
import Layout from "../layout/Layout";
import { useNavigate } from "react-router-dom";
import NoteList from "../components/NoteList";

const Home = () => {
  const navigate = useNavigate();
  const openNote = () => {
    navigate("/add-note");
  };

  return (
    <Layout>
      <div className=" m-auto w-80">
        <div className="flex flex-row items-center justify-between mb-2">
          <h1 className="text-3xl font-bold font-sans m-1 text-primary-light mb-4">
            My Notes
          </h1>
          <span className="flex flex-row gap-2">
            <span className="text-primary-light border border-primary-light rounded-full p-1">
              <FaUser size={20} />
            </span>
            <span className="text-primary-light border border-primary-light rounded-full p-1">
              <FaBars size={20} />
            </span>
          </span>
        </div>
        <div className="flex flex-row gap-2 ">
          <input
            type="text"
            className="border rounded-lg px-2 py-1 bg-primary-light w-2/3"
            placeholder="Search..."
          />
          <span className="border border-slate-600 rounded-full">
            <button className="text-primary-light m-2">
              <FaSearch />
            </button>
          </span>
          <span className="border border-slate-600 rounded-full ml-8">
            <button className="text-primary-light m-2" onClick={openNote}>
              <FaPlus />
            </button>
          </span>
        </div>

        <h2 className="text-3xl font-bold font-sans m-1 text-primary-light mb-4">
          Your Notes
        </h2>
        <span className="overflow-scroll">
          <NoteList />
        </span>
      </div>
    </Layout>
  );
};

export default Home;
