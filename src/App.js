import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Article from "./pages/Article/Article";
import Todo from "./pages/Todo/Todo";
import FormArticle from "./pages/Article/FormArticle/FormArticle";
import DetailArticle from "./pages/Article/DetailArticle/DetailArticle";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/article" element={<Article />} />
          <Route
            path="/article/detail-article/:id"
            element={<DetailArticle />}
          />
          <Route path="/article/form-article" element={<FormArticle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
