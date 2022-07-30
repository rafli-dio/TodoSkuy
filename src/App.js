import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Article from "./pages/Article/Article";
import Todo from "./pages/Todo/Todo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/article" element={<Article />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
