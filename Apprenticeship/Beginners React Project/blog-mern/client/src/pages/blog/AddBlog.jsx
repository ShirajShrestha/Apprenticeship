import { useContext, useEffect } from "react";
import classes from "./addBlog.module.css";
import { GlobalContext } from "../../context/GlobalState";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const AddBlog = () => {
  const { formData, setFormData, isEdit, setIsEdit } =
    useContext(GlobalContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleDataSave = async () => {
    const response = isEdit
      ? await axios.put(
          `http://localhost:8000/api/blogs/update/${location.state.item._id}`,
          {
            title: formData.title,
            description: formData.description,
          }
        )
      : await axios.post("http://localhost:8000/api/blogs/add", {
          title: formData.title,
          description: formData.description,
        });

    const result = await response.data;

    if (result) {
      setIsEdit(false);
      setFormData({
        title: "",
        description: "",
      });
      navigate("/");
    }
  };

  useEffect(() => {
    console.log(location);
    if (location.state) {
      const { item } = location.state;
      setIsEdit(true);
      setFormData({
        title: item.title,
        description: item.description,
      });
    }
  }, [location]);

  return (
    <div className={classes.wrapper}>
      <h1>{isEdit ? "Edit Blog" : "Add New Blog"}</h1>
      <div className={classes.formwrapper}>
        <input
          type="text"
          name="title"
          placeholder="Enter Blog Title"
          id="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="5"
          placeholder="Enter Blog Description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        ></textarea>
        <button onClick={handleDataSave}>{isEdit ? "Edit" : "Add "}</button>
      </div>
    </div>
  );
};

export default AddBlog;
