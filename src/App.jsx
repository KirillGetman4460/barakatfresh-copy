import PageProducts from './pages/Products/products';
import PageBasket from './pages/Basket/basket';
import Footer from './components/Footer/footer'

import {Route,Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageProducts />} />
        <Route path="/basket" element={<PageBasket />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
