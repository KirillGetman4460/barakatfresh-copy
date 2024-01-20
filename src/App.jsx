import PageProducts from './pages/Products/products';
import PageProductsBbq from './pages/Products/prodcutsBbq/products_bbq';
import PageProductsVegetables from './pages/Products/productsVegetables/products_vegetables'
import PageProductsFreshJuices from './pages/Products/productsFreshJuices/products_fresh_juices'
import PageProductsMeats from './pages/Products/productsMeats/products_meats'
import PageProductsGrabGo from './pages/Products/productsGrabGo/productsGrabGo'
import PageProductsOrganics from './pages/Products/productsOrganics/productsOrganics'
import PageProductsGiftingNeeds from './pages/Products/productsGiftingNeeds/productsGiftingNeeds'
import ProductsDairyEggs from './pages/Products/productsDairyEggs/productsDairyEggs'
import ProductsBakery from './pages/Products/productsBakery/productsBakery'
import ProductsIceCream from './pages/Products/productsIceCream/productsIceCream'
import ProductsPantry from './pages/Products/productsPantry/productsPantry'
import PageBasket from './pages/Basket/basket';
import MainPage from './pages/Main/mainPage'
import Footer from './components/Footer/footer'

import {Route,Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/fruits" element={<PageProducts />} />
        <Route path="/" element={<MainPage></MainPage>}/>
        <Route path="/bbq" element={<PageProductsBbq />} />
        <Route path="/vegetables" element={<PageProductsVegetables />} />
        <Route path="/fresh_juices" element={<PageProductsFreshJuices />} />
        <Route path="/meats" element={<PageProductsMeats />} />
        <Route path="/grab_to_go" element={<PageProductsGrabGo />} />
        <Route path="/organics" element={<PageProductsOrganics />} />
        <Route path="/gifting_needs" element={<PageProductsGiftingNeeds />} /> 
        <Route path="/bakery" element={<ProductsBakery />} /> 
        <Route path="/dairy_eggs" element={<ProductsDairyEggs />} /> 
        <Route path="/ice_cream" element={<ProductsIceCream />} /> 
        <Route path="/pantry" element={<ProductsPantry />} /> 
        <Route path="/basket" element={<PageBasket />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}



export default App;
