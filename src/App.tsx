import Quiz from "./components/Quiz";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import QuizScore from "./components/Score";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
        <Route path='/score' element={<QuizScore/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
