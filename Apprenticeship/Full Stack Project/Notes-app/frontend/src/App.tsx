import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./forms/Login/Login";
import Register from "./forms/Register/Register";
import Home from "./pages/Home";
import AddNote from "./components/AddNote";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/add-note" element={<AddNote />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
