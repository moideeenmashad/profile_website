import Navbar from "../Layouts/Navbar/Navbar";
import Main from "../Pages/Main";
import ProgressBar from "../Components/Progress_Bar/ProgressBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page404 from "../Pages/Page404";

function App() {
  return (
    <>
      <BrowserRouter>
        <ProgressBar />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="*" exact element={<Page404/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
