import Header from "./components/Header";
import Loader from "./components/Loader";
import HomePage from "./components/pages/HomePage";
import SingleCoin from "./components/pages/SingleCoin";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="bg-[#14161A]">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coin/:id" element={<SingleCoin />} />
      </Routes>
    </div>
  );
}

export default App;
