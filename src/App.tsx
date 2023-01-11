import { Container } from "@mui/system";
import { Route, Routes } from "react-router-dom";

import Details from "./views/Details";

import Home from "./views/Home";

function App() {
  return (
    <Container
      maxWidth="md"
      sx={{
        mt: 3,
        mb: 3,
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </Container>
  );
}

export default App;
