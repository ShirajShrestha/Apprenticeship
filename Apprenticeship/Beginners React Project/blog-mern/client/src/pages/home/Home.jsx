import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import axios from "axios";
import classes from "./home.module.css";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { blogList, setBlogList, loading, setLoading } =
    useContext(GlobalContext);
  const navigate = useNavigate();

  const fetchBlogList = async () => {
    setLoading(true);
    const response = await axios.get("http://localhost:8000/api/blogs");
    const result = await response.data;

    if (result && result.blogList && result.blogList.length) {
      setBlogList(result.blogList);
      setLoading(false);
    } else {
      setLoading(false);
      setBlogList([]);
    }
  };

  const handleDelete = async (id) => {
    const response = await axios.delete(
      `http://localhost:8000/api/blogs/delete/${id}`
    );
    const result = await response.data;

    if (result?.message) {
      fetchBlogList();
      // navigate(0)
    }
  };
  const handleEdit = (item) => {
    navigate("/add-blog", { state: { item } });
  };

  useEffect(() => {
    fetchBlogList();
  }, []);
  return (
    <div className={classes.wrapper}>
      <h1>Blog List</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={classes.blogList}>
          {blogList && blogList.length ? (
            blogList.map((item) => (
              <div key={item._id}>
                <p>{item.title} </p>
                <p>{item.description} </p>
                <FaEdit onClick={() => handleEdit(item)} size={30} />
                <FaTrash onClick={() => handleDelete(item._id)} size={30} />
              </div>
            ))
          ) : (
            <h2>Blog List is empty.</h2>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
