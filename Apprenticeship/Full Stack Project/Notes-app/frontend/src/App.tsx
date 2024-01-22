import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./forms/Login/Login";
import Register from "./forms/Register/Register";
import Home from "./pages/Home";
import Note from "./pages/Note";

function App() {
  return (
    <>
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Home /> */}
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/note" element={<Note />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
