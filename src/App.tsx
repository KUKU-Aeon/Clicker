import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Clicker from "./Components/clicker";
import Shop from "./Components/Shop"

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Clicker/>}>

          </Route>

          <Route path="/shop" element={<Shop/>}>

          </Route>

        </Routes>
      </Router>
  );
}

export default App;
