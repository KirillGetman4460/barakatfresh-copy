import {useState,useRef, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Megamenu from '../../components/Megamenu/megamenu'
import Filter from '../../components/Filter/filter'
import Products from '../../components/Products/products'
import FilterChecbox from '../../components/Filter/filterChecbox'
import FilterMultiSelect from '../../components/Filter/filterMultiSelect'
import BreadCrumbs from '../../components/BreadCrumbs/breadCrumbs'


const PageProducts = () =>{

    const [products,setProducts] = useState([
        {
            id:1,
            name:"Mandarin Kinnow Box",
            photo: 'https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/m/a/mandarin-pakistan-1100.jpg',
            country :"Pakistan",
            valut:"AED",
            price:48.50,
            new_price:25.00,
            package:"box",
            type:"bulk",
            quantity:1
        },
        {
            id:2,
            name:"Strawberry Egypt Box 2.5kg",
            photo: 'https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/s/t/strawberry1.jpg',
            country :"Egypt",
            valut:"AED",
            price:78.00,
            new_price:65.00,
            package:"box",
            type:"bulk",
            quantity:1
        },
        {
            id:3,
            name:"Mango Egypt",
            photo: 'https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/m/a/mango_egypt_4kg_box.jpg',
            country :"Pakistan",
            valut:"AED",
            price:65.00,
            new_price:50.00,
            package:"box",
            type:"bulk",
            quantity:1
        },
        {
            id:4,
            name:"Strawberry Egypt 250g",
            photo: 'https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/s/h/shutterstock_1855009942.jpg',
            country :"South Africa",
            valut:"AED",
            price:14.00,
            new_price:7.50,
            package:"box",
            type:"bulk",
            quantity:1
        },
        {
            id:5,
            name:"Mandarins 500g",
            photo: 'https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/m/a/mandarin.jpg',
            country :"Pakistan",
            valut:"AED",
            price:6.00,
            new_price: 1.00,
            package:"box",
            type:"bulk",
            quantity:1
        },
        {
            id:6,
            name:"Mango Puree 1L",
            photo: 'https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/g/i/gi4a6338.jpg',
            country :"UAE",
            valut:"AED",
            price:35.00, 
            package:"box",
            type:"puree",
            quantity:1
        },
        {
          id:7,
          name:"Mango Puree 1L",
          photo: 'https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/g/i/gi4a6342.jpg',
          country :"UAE",
          valut:"AED",
          price:35.00, 
          package:"box",
          type:"puree",
          quantity:1
      },
      {
        id:8,
        name:"Mango Puree 1L",
        photo: 'https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/g/i/gi4a6346.jpg',
        country :"UAE",
        valut:"AED",
        price:45.00, 
        package:"box",
        type:"puree",
        quantity:1
    },
    {
      id:9,
      name:"Raspberry Puree 1L",
      photo: 'https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/g/i/gi4a6336.jpg',
      country :"UAE",
      valut:"AED",
      price:45.00, 
      package:"box",
      type:"puree",
      quantity:1
    },
    {
      id:11,
      name:"Blackberry Puree 1L",
      photo: 'https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/g/i/gi4a6343.jpg',
      country :"UAE",
      valut:"AED",
      price:54.00, 
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

  const [selected, setSelected] = useState([]);

  const {basket} = useSelector(state => state.basket)


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

  const handleSelectChange = (event) => {
    setSelected((prev) => {  
      const isSelected = prev.includes(event);
  
      if (isSelected) {
       
        return prev.filter((item) => item !== event);
      } else {
        return [...prev, event];
      }
    });
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
    setSelected([])
    sortProductsByCountry()
    setProducts(originalProducts.current)
  }

    return(

        <div className="wrapper">
          <Megamenu></Megamenu>   
          <BreadCrumbs title={title}></BreadCrumbs>
        <div className="content">
          <div className="filter__categories"> 
            <Filter></Filter>
            <FilterChecbox></FilterChecbox>
            <FilterChecbox></FilterChecbox>
            <FilterMultiSelect title={'Origin'} origin={origin} sortProductsByCountry={sortProductsByCountry} handleCountrySelectChange={handleCountrySelectChange} resetSelectedCountries={resetSelectedCountries} selected={selected} handleSelectChange={handleSelectChange}></FilterMultiSelect>
            <FilterMultiSelect title={'Tags'} origin={tags}></FilterMultiSelect>
          </div>

          <Products title={title} products={products} filterBySubcats={filterBySubcats} filterByPrice={filterByPrice} selectPrice={selectPrice} setSelectPrice={setSelectPrice} ></Products>
        </div>
      </div>

    )
}
export default PageProducts