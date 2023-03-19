import { Login } from "./Login";
import { ProfileEdit } from "./ProfileEdit";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/profileedit" element={<ProfileEdit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
