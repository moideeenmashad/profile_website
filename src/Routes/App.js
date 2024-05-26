import Main from "../Pages/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page404 from "../Pages/Page404";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="*" exact element={<Page404/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
