import "./App.css";
import { MenuDetail } from "./components/MenuDetail/MenuDetail/MenuDetail";
import { Salad } from "./components/MenuDetail/tabs/tabs-list/salad";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <MenuDetail /> */}
      <Router>
        <Routes>
          <Route path="/" element={<MenuDetail />}></Route>
          <Route path="/salad" element={<Salad />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
