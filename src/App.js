import Header from "./components/Header";
import HomePage from "./components/pages/HomePage";
import SingleCoin from "./components/pages/SingleCoin";
import { Routes, Route } from "react-router-dom";
import News from "./components/pages/News";

function App() {
  return (
    <div className="bg-[#14161A] min-h-[100vh]">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coin/:id" element={<SingleCoin />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
