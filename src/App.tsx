import { Route, Routes } from "react-router-dom";

import Details from "./views/Details";

import Home from "./views/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Details />} />
    </Routes>
  );
}

export default App;
