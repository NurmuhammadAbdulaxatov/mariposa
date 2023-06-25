import { Route, Routes } from "react-router-dom";
import "./index.scss";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
