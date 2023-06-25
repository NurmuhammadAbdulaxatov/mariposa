import { Route, Routes } from "react-router-dom";
import "./index.scss";
import Group from "./Pages/Group/Group";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/group" element={<Group/>}/>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
