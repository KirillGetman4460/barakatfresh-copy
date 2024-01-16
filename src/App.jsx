import {useState,useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addBasket } from './store/basketSlice/basketSlice';
import Header from "./components/Header/header";
import Megamenu from './components/Megamenu/megamenu'
import Filter from './components/Filter/filter'
import Products from './components/Products/products'
import FilterChecbox from './components/Filter/filterChecbox'
import FilterMultiSelect from './components/Filter/filterMultiSelect'
import BreadCrumbs from './components/BreadCrumbs/breadCrumbs'

import Mandarin from './img/mandarin-pakistan-1100.jpg'
import PureeMango from './img/PureeImg/gi4a6338.jpg'
function App() {

  const [products,setProducts] = useState([
    {
        name:"Mandarin Kinnow Box",
        photo: Mandarin,
        country :"Pakistan",
        valut:"AED",
        price:48.50,
        new_price:25.00,
        package:"box",
        type:"bulk",
        quantity:1
    },
    {
        name:"Mandarin Kinnow Box",
        photo: Mandarin,
        country :"Egypt",
        valut:"AED",
        price:48.50,
        new_price:29.95,
        package:"box",
        type:"bulk",
        quantity:1
    },
    {
        name:"Mandarin Kinnow Box",
        photo: Mandarin,
        country :"Pakistan",
        valut:"AED",
        price:48.50,
        new_price:29.95,
        package:"box",
        type:"bulk",
        quantity:1
    },
    {
        name:"Mandarin Kinnow Box",
        photo: Mandarin,
        country :"South Africa",
        valut:"AED",
        price:48.50,
        new_price:29.00,
        package:"box",
        type:"bulk",
        quantity:1
    },
    {
        name:"Mandarin Kinnow Box",
        photo: Mandarin,
        country :"Pakistan",
        valut:"AED",
        price:48.50,
        new_price:29.95,
        package:"box",
        type:"bulk",
        quantity:1
    },
    {
        name:"Mango Puree 1L",
        photo: PureeMango,
        country :"UAE",
        valut:"AED",
        price:35.00,
        package:"box",
        type:"puree",
        quantity:1
    },
])

  const [origin,setOrigin] = useState(['UAE','South Africa','India','Colombia','Thailand','Egypt','Kenya','China','Lebanon','Vietnam','Chile','Iran','Italy','Turkey','Brazil','Peru','Sri Lanka','Serbia','USA','Ukraine'])
  const [tags,setTags] = useState(['By Air','RIPEN AT HOME','Premium By Air','STEAL DEAL','Ready to eat','Ripen at Home','Ripen at home','Best for Gifting','By Air !','By Air ! Ripen at Home','By Air! Ripen at Home','For cooking','Ideal for Cooking','In High Demand','MUST BUY','Premium by Air','RIPEN AT HOME (RAW)','SWEET & TASTY'])

  const [title,setTitle] = useState('Fruits')

  const [selectPrice,setSelectPrice] = useState('')

  const [selectedCountries, setSelectedCountries] = useState([]);


  const filterByPrice = () =>{
    if(selectPrice === 'bestsaving'){
        setProducts([...products].sort((a,b)=> a.new_price - b.new_price))
        return
    }
    if(selectPrice === 'low'){
        setProducts([...products].sort((a,b)=> b.price - a.price))
        return
    }
    if(selectPrice === 'high'){
        setProducts([...products].sort((a,b)=> a.price - b.price))
    }
  }

  const originalProducts = useRef(products);

const filterBySubcats = (sel) => {
  let sortedProducts = [...originalProducts.current];

  if (sel === 'All') {
    setProducts(originalProducts.current);
    setTitle('Fruits')
    return;
  }

  if (sel === 'Puree') {
    sortedProducts = sortedProducts.filter(product => product.type === 'puree');
    setTitle('Puree')
  }
  if (sel === 'Regular Fruits') {
    sortedProducts = sortedProducts.filter(product => product.type === 'regular_fruits');
    setTitle('Regular Fruits')
  }
  if (sel === 'Fruit Platters') {
    sortedProducts = sortedProducts.filter(product => product.type === 'fruit_platters');
    setTitle('Fruit Platters')
  }
  if (sel === 'Mangoes') {
    sortedProducts = sortedProducts.filter(product => product.type === 'mangoes');
    setTitle('Mangoes')
  }
  if (sel === 'Cut & Sanitized') {
    sortedProducts = sortedProducts.filter(product => product.type === 'cut_sanitized');
    setTitle('Cut & Sanitized')
  }
  if (sel === 'Berries') {
    sortedProducts = sortedProducts.filter(product => product.type === 'berries');
    setTitle('Berries')
  }
  if (sel === 'Melons') {
    sortedProducts = sortedProducts.filter(product => product.type === 'melons');
    setTitle('Melons')
  }
  if (sel === 'Citrus') {
    sortedProducts = sortedProducts.filter(product => product.type === 'citrus');
    setTitle('Citrus')
  }
  if (sel === 'Organic') {
    sortedProducts = sortedProducts.filter(product => product.type === 'organic');
    setTitle('Organic')
  }
  if (sel === 'Bulk') {
    sortedProducts = sortedProducts.filter(product => product.type === 'bulk');
    setTitle('Bulk')
  }

  setProducts(sortedProducts);
}

  const handleCountrySelectChange = (event) => {
    const checkSelect = selectedCountries.find(item => item === event)
    if(!checkSelect){
      setSelectedCountries(prev => [...prev, event])
      return
    }
    
  };

  const sortProductsByCountry = () => {
    let sortedProducts = [...products];

    if (selectedCountries.length !== 0) {
      sortedProducts = sortedProducts.filter(product => selectedCountries.includes(product.country));
    }

    sortedProducts.sort((a, b) => a.country.localeCompare(b.country));

    setProducts(sortedProducts);
  };

  const sortProductsByTags = () =>{
    let sortedProducts = [...products];

    if (selectedCountries.length !== 0) {
      sortedProducts = sortedProducts.filter(product => selectedCountries.includes(product.country));
    }

    sortedProducts.sort((a, b) => a.country.localeCompare(b.country));

    setProducts(sortedProducts);
  }

  const resetSelectedCountries = () =>{
    setSelectedCountries([])
    sortProductsByCountry()
    setProducts(originalProducts.current)
  }

  return (
    <div className="App">
      <Header></Header>
      <div className="wrapper">
          <Megamenu></Megamenu>   
          <BreadCrumbs></BreadCrumbs>
        <div className="content">
          <div className="filter__categories"> 
            <Filter></Filter>
            <FilterChecbox></FilterChecbox>
            <FilterChecbox></FilterChecbox>
            <FilterMultiSelect title={'Origin'} origin={origin} sortProductsByCountry={sortProductsByCountry} handleCountrySelectChange={handleCountrySelectChange} resetSelectedCountries={resetSelectedCountries}></FilterMultiSelect>
            <FilterMultiSelect title={'Tags'} origin={tags}></FilterMultiSelect>
          </div>

          <Products title={title} products={products} filterBySubcats={filterBySubcats} filterByPrice={filterByPrice} selectPrice={selectPrice} setSelectPrice={setSelectPrice} ></Products>
        </div>
        

      </div>
    </div>
  );
}

export default App;
