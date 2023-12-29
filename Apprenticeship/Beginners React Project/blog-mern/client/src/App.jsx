import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import AddBlog from "./pages/blog/AddBlog";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/add-blog" element={<AddBlog />} />
      </Routes>
    </>
  );
}

export default App;
