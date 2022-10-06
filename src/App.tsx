import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";

import { Routes, Route } from "react-router-dom";

import "./scss/app.scss";
import { Cart } from "./pages/Cart/Cart";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/react-pizza-v2" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
