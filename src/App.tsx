import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Menu from "./Components/menu"
import Clicker from "./Components/clicker";
import Shop from "./Components/Shop"
import { Cookies } from 'react-cookie';

export const cookies = new Cookies();

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Menu />}>

          </Route>

          <Route path="/clicker" element={<Clicker/>}>

          </Route>

          <Route path="/shop" element={<Shop/>}>

          </Route>

        </Routes>
      </Router>
  );
}

export default App;
