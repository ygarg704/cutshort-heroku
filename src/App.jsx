import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { FinalPage } from "./pages/end.page";
import { MainPage } from "./pages/main.page";
import { ThirdPage } from "./pages/page-three";
import { SecondPage } from "./pages/page-two";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/secondPage" element={<SecondPage />} />
        <Route path="/thirdPage" element={<ThirdPage />} />
        <Route path="/finalPage" element={<FinalPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
