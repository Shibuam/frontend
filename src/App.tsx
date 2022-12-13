import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Componets/Navigation";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

function App() {
  return (
    <div>
      <Navigation />
      <Router basename={window.location.pathname || ""}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
