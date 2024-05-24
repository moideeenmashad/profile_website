import Navbar from "../Layouts/Navbar/Navbar";
import Main from "../Pages/Main";
import ProgressBar from "../Components/Progress_Bar/ProgressBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <ProgressBar />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
