import Header from "./components/Header/header";
import Megamenu from './components/Megamenu/megamenu'
import Filter from './components/Filter/filter'
import Products from './components/Products/products'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="wrapper">
        <Megamenu></Megamenu>
        <div className="content">
          <Filter></Filter>
          <Products></Products>
        </div>
        

      </div>
    </div>
  );
}

export default App;
