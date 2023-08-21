import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PatientsPage from "./pages/PatientsPage";
import CreatePage from "./pages/CreatePage";

function App() {

  return (
    <>
    <div className="bg-customBackground min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} ></Route>
          <Route path="/about" element={<AboutPage />} ></Route>
          <Route path="/patients" element={<PatientsPage />} ></Route>
          <Route path="/create" element={<CreatePage />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
