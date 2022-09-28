import logo from './logo.svg';
import './style.css';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Head_tail from "./Head_tail";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="head_tail" element={<Head_tail />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
