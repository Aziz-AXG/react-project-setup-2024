import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
