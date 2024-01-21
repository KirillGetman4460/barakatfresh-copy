import Header from "../../../components/Header/header";
import {useState,useEffect} from 'react'
import { addBasket,minusQuantity,deleteItemBasket } from '../../../store/basketSlice/basketSlice';

import { useSelector,useDispatch } from 'react-redux'
import data from '../../../db/products.json'
import Megamenu from '../../../components/Megamenu/megamenu'

import BreadCrumbs from '../../../components/BreadCrumbs/breadCrumbs'

import { NavLink,useLocation } from "react-router-dom";

import Icon from '@mdi/react';
import { mdiSort,mdiFilterOutline,mdiRadioboxBlank,mdiClose,mdiCheckboxMarked,mdiPlus,mdiCheckboxBlankOutline,mdiMinus,mdiChevronLeft,mdiChevronRight,mdiHomeOutline,mdiCartOutline    } from '@mdi/js';

import './style/style.scss'
const ItemPage = () =>{
    
    const [products,setProducts] = useState(data.products_bbq.all)

  const [origin,setOrigin] = useState(['UAE','South Africa','India','Colombia','Thailand','Egypt','Kenya','China','Lebanon','Vietnam','Chile','Iran','Italy','Turkey','Brazil','Peru','Sri Lanka','Serbia','USA','Ukraine'])
  const [tags,setTags] = useState(['By Air','RIPEN AT HOME','Premium By Air','STEAL DEAL','Ready to eat','Ripen at Home','Ripen at home','Best for Gifting','By Air !','By Air ! Ripen at Home','By Air! Ripen at Home','For cooking','Ideal for Cooking','In High Demand','MUST BUY','Premium by Air','RIPEN AT HOME (RAW)','SWEET & TASTY'])
  const [subCatsItem,setSubCatsItem] = useState([
    {title:"ALL",img:"https://media.barakatfresh.ae/media/catalog/category/BBQ.png"},
    {title:"Fruit & Veg Skewers",img:"https://media.barakatfresh.ae/media/catalog/category/Skewres_2_.png"},
    {title:"Meats & Marinates",img:"https://media.barakatfresh.ae/media/catalog/category/1457586_MarinatedMeats_092022_2.png"},
    {title:"Burgers Sausages & Buns",img:"https://media.barakatfresh.ae/media/catalog/category/1457586_Sausages_Burgers_092222_3.png"}
])

const {state} = useLocation()
const [title,setTitle] = useState(state.product.name)

const dispatch = useDispatch()
  const[activeCouter,setActiveCouter] = useState(false)

  const [selectPrice,setSelectPrice] = useState('')

  const [selectedCountries, setSelectedCountries] = useState([]);

  const [selectedTags, setSelectedTags] = useState([]);

  const [selected, setSelected] = useState([]);
  const [tagsSelected,setTagsSelected] = useState([])

  const [activeSort,setActiveSort] = useState(false)

  const [activeFilt,setActiveFilt] = useState(false)

  const [activeOrigin,setActiveOrigin] = useState(false)

  const [activeTags,setActiveTags] = useState(false)

  const mainTitle = useSelector(state => state.basket.title)

  const [selectSubCats,setSelectSubCats] = useState(mainTitle)

  const {basket} = useSelector(state => state.basket)
  

  const filterByPrice = () =>{
    if(selectPrice === 'bestsaving'){
        setProducts([...products].sort((a,b)=> a.price_raw - b.price_raw))
        return
    }
    if(selectPrice === 'high'){
        setProducts([...products].sort((a,b)=> b.price_raw - a.price_raw))
        return
    }
    if(selectPrice === 'low'){
      setProducts([...products].sort((a,b)=> a.price_raw - b.price_raw))
      return
    }
  }

const filterBySubcats = () => {
  
  if (selectSubCats === 'ALL') {
    setProducts(data.products_bbq.all)
    setTitle('BBQ Range')
    return;
  }

  if (selectSubCats === 'Fruit & Veg Skewers') {
    setProducts(data.products_bbq.fruit_veg_skewers)

    setTitle('Fruit & Veg Skewers')
  }
  if (selectSubCats === 'Meats & Marinates') {
    setProducts(data.products_bbq.meats_marinates)
   
    setTitle('Meats & Marinates')
  }
  if (selectSubCats === 'Burgers Sausages & Buns') {
    setProducts(data.products_bbq.burgers_sausages_buns)
    
    setTitle('Burgers Sausages & Buns')
  }
  
}

  const handleCountrySelectChange = (event) => {
    const checkSelect = selectedCountries.find(item => item === event)
    if(!checkSelect){
      setSelectedCountries(prev => [...prev, event])
      return
    }
    
  };
  const handleTagsSelectChange = (event) => {
    const checkSelect = selectedTags.find(item => item === event)
    if(!checkSelect){
      setSelectedTags(prev => [...prev, event])
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

  const handleTagsChange = (event) => {
    setTagsSelected((prev) => {  
      const isSelected = prev.includes(event);
  
      if (isSelected) {
       
        return prev.filter((item) => item !== event);
      } else {
        return [...prev, event];
      }
    });
  };


  const sortProductsByCountry = () => {
    let sortedProducts = [...data.products_bbq.all];

    if (selectedCountries.length !== 0) {
      sortedProducts = sortedProducts.filter(product => selectedCountries.includes(product.origin));
    }

    sortedProducts.sort((a, b) => a.origin.localeCompare(b.origin));

    setProducts(sortedProducts);
  };

  const sortProductsByTags = () => {
    let sortedProducts = [...data.products_bbq.all];

    if (selectedTags.length !== 0) {
      sortedProducts = sortedProducts.filter(
        (product) =>
          product.additional_data &&
          product.additional_data.labels &&
          selectedTags.some((countryLabel) =>
            product.additional_data.labels.includes(countryLabel)
          )
      );
    }

    sortedProducts.sort((a, b) => {
      const labelsA = (a.additional_data && a.additional_data.labels) || [];
      const labelsB = (b.additional_data && b.additional_data.labels) || [];

      const labelA = labelsA.length > 0 ? labelsA[0] : "";
      const labelB = labelsB.length > 0 ? labelsB[0] : "";

      return labelA.localeCompare(labelB);
    });

    setProducts(sortedProducts);
  };

  const resetSelectedCountries = () =>{
    setSelectedCountries([])
    setSelected([])
    sortProductsByCountry()
    setProducts(data.products.all)
    setSelectedTags([])
  }

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() =>{
    setSelectSubCats(mainTitle)
  },[mainTitle])

  useEffect(() =>{
    filterBySubcats()
  },[selectSubCats,mainTitle])

  const [activeCatigoriesModal,setActiveCatigoriesModal] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
          
          const scrollTop = window.scrollY;
          setIsFixed(scrollTop > 100);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return(
        <>
        <div className={`${isFixed ? 'fixed' : ''}`}>
            <Header></Header>

            <Megamenu></Megamenu>
            
            
        </div>
        <div className="fixed__modile">
            {/* <div className="megamenu modile">
            <ul className="megamenu__list">
                 <NavLink to={'/bbq'}>
                 <li className="megamenu__item">
                    <span>Bbq Range</span>
                </li>
                 </NavLink>
                <NavLink to={'/fruits'}>
                <li className="megamenu__item">
                    <span>Fruits</span>
                </li>
                </NavLink>
                <NavLink to={'/vegetables'}>
                <li className="megamenu__item">
                    <span>Vegetables</span>
                </li>
                </NavLink>
                <NavLink to={'/fresh_juices'}>
                <li className="megamenu__item">
                    <span>Fresh Juices</span>
                </li>
                </NavLink>
                <NavLink to={'/meats'}>
                <li className="megamenu__item">
                    <span>Meats</span>
                </li>
                </NavLink>
                <NavLink to={'/grab_to_go'}>
                <li className="megamenu__item">
                    <span>Grab N Go</span>
                </li>
                </NavLink>
                <NavLink to={'/gifting_needs'}>
                <li className="megamenu__item">
                    <span>Gifting & Party Needs</span>
                </li>
                </NavLink>
                <NavLink to={'/organics'}>
                <li className="megamenu__item">
                    <span>Organics</span>
                </li>
                </NavLink>
                <NavLink to={'/bakery'}>
                <li className="megamenu__item">
                    <span>Bakery</span>
                </li>
                </NavLink>
                <NavLink to={'/dairy_eggs'}>
                <li className="megamenu__item">
                    <span>Dairy & Eggs</span>
                </li>
                </NavLink>
                <NavLink to={'/ice_cream'}>
                <li className="megamenu__item">
                    <span>Ice Cream</span>
                </li>
                </NavLink>
                <NavLink to={'/pantry'}>
                <li className="megamenu__item">
                    <span>Pantry</span>
                </li>
                </NavLink>
               
               
            </ul>
        </div> */}
            <div className="layout_head">
                <div className="rootheader">
                    <NavLink to={'/'}>
                    <div className="rootheader_back">
                        <div className="rootheader_back__icon">
                            <Icon path={mdiChevronLeft} size={1} color={'rgb(96, 96, 96)'} />
                        </div>
                        
                    </div>
                    </NavLink>
                    
                    <div className="rootheader_title">{state.product.name}</div>
                </div>
            </div>
            </div>
         <div className="wrapper">
            
          <BreadCrumbs title={title}></BreadCrumbs>
        <div className="content">
                        <div className="item__conteiner">
                            <div className="item__left">
                                <div className="item__img">
                                    <img src={state.product.image} alt="" />
                                </div>
                            </div>
                            <div className="item__right">
                                <div className="br_large_12 br_columns item_page">
                                    <div className="styles_details_head__UIQ9T">
                                        <div className="styles_details_title__FTmb3">
                                            {state.product.name}
                                        </div>
                                    </div>
                                    <div className="styles_details_pricebox__4Uj4u">
                                        <div>
                                            <div className="styles_price_top__rjlJJ">
                                                <div className="styles_price_value__54hUJ styles_special__bf_RD">
                                                    {state.product.price}
                                                </div>
                                                <div className="styles_price_vat__B5mGN">
                                                    (Inclusive all VAT)
                                                </div>
                                            </div>
                                           <div className="styles_price_bottom__4VCM5">
                                                <div className="styles_price_striked__DQSIW">
                                                {state.product.price}
                                                </div>
                                                <div className="styles_price_off__7IaJ1">
                                                55% OFF
                                                </div>
                                           </div>

                                        </div>
                                    </div>
                                    <div className="styles_details_variants__K_zWk">
                                        <div>
                                          <div className="styles_variations_title__mo6jW">
                                            <span className="styles_variations_value__Ga1_2">
                                                Size: 1 pack
                                            </span>
                                        </div>  
                                        </div>
                                    </div>
                                    <div className="styles_details_cartqty__Tsvir">
                                      {activeCouter && 
                                      <div className="add_cart_counter">
                                      <button className="add_cart_counter__btn"
                                        onClick={() =>{   
                                               

                                          if(state.product.quantity !== 0){
                                            state.product.quantity--
                                            dispatch(minusQuantity(state.product))
                                            dispatch(deleteItemBasket(state.product))
                                            return

                                        }
                                        setActiveCouter(false)
                                        
                                      }}
                                      >
                                        <Icon path={mdiMinus} size={1} color={'#2cc84d'} />
                                      </button>
                                      <span className="add_cart_counter_title">
                                        {state.product.quantity}
                                      </span>
                                      <button className="add_cart_counter__btn" onClick={() => {
                                        dispatch(addBasket(state.product))
                                        state.product.quantity++
                                      }}>
                                      <Icon path={mdiPlus} size={1} color={'#2cc84d'} />
                                      </button>
                                    </div>
                                      }
                                      
                                        <div className="styles_addcart___k10a" onClick={() => setActiveCouter(true)}>
                                            <div className="styles_addcart_button__nsWkU">

                                                <button onClick={() =>  dispatch(addBasket(state.product))} className="styles_bbutton__c_Hr1 styles_bbutton_primary__u_4Y4">
                                                    <span>ADD TO CART</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

         
        </div>
        <div className="layout_tabs">
          <ul className="tabs">
              <li className="tabs_item">
                <NavLink to={'/'}>
                <div className="tabs_link">
                  <div className="tabs_icon"><Icon path={mdiHomeOutline} size={1} /></div>
                  <div className="tabs_title">Home</div>
                </div>
                </NavLink>
                
              </li>
              <li className="tabs_item" onClick={() => setActiveCatigoriesModal(true)}>
                
                <div className="tabs_link">
                  <div className="tabs_icon"><Icon path={mdiCartOutline } size={1} /></div>
                  <div className="tabs_title">Categories</div>
                  
                </div>
                
               
              </li>
              <li className="tabs_item">
                <NavLink to={'/basket'}>
                <div className="tabs_link">
                  <div className="tabs_icon"><Icon path={mdiCartOutline } size={1} /></div>
                  <div className="tabs_title">Cart</div>
                  <div className="tabs__basket__count">
                    {basket.length}
                  </div>
                </div>
                </NavLink>
               
              </li>
          </ul>
        </div>
        <div className={`catigories__modal ${activeCatigoriesModal ? "active" : ""}`}>
            <div className="styles_layout_head__MwRSe">
                <div className="styles_rootheader__Z2vaD">
                    <div className="styles_rootheader_back__B_zcz" onClick={() =>setActiveCatigoriesModal(false)}>
                    <NavLink to={'/'}>
                    <div className="rootheader_back">
                        <div className="rootheader_back__icon">
                            <Icon path={mdiChevronLeft} size={1} color={'rgb(96, 96, 96)'} />
                        </div>
                        
                    </div>
                    </NavLink>
                    </div>
                    <div className="styles_rootheader_title__KYVsS">
                    Categories
                    </div>
                </div>
            </div>
            <div className="styles_layout_content__MXhSs">
                <div className='styles_categories__lVYo4'>
                    <ul>

                        <li>
                            <div className="styles_cateogry__Qk2PS">
                                <div className="styles_cateogry_head___695v">
                                    <h4 className='styles_cateogry_head_text__YBp1L'>Bbq Range</h4>
                                    <div className="styles_cateogry_head_link__e__6j">
                                        Show all
                                    </div>
                                </div>
                                <div className="styles_subcategories__MPoD4">
                                    <ul className='styles_subcategories_list___9jiE'>
                                       
                                        <li className='styles_subcategories_item__mWsEc'>
                                        <NavLink to={'/'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/Skewres_2_.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Fruit & Veg Skewers</div>
                                            </NavLink>
                                           
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_MarinatedMeats_092022_2.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Meats & Marinates</div>
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Sausages_Burgers_092222_3.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Burgers Sausages & Buns</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="styles_cateogry__Qk2PS">
                                <div className="styles_cateogry_head___695v">
                                    <h4 className='styles_cateogry_head_text__YBp1L'>Fruits</h4>
                                    <div className="styles_cateogry_head_link__e__6j">
                                        Show all
                                    </div>
                                </div>
                                <div className="styles_subcategories__MPoD4">
                                    <ul className='styles_subcategories_list___9jiE'>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/Skewres_2_.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Fruit & Veg Skewers</div>
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_MarinatedMeats_092022_2.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Meats & Marinates</div>
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Sausages_Burgers_092222_3.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Burgers Sausages & Buns</div>
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Sausages_Burgers_092222_3.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Burgers Sausages & Buns</div>
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Sausages_Burgers_092222_3.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Burgers Sausages & Buns</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="styles_cateogry__Qk2PS">
                                <div className="styles_cateogry_head___695v">
                                    <h4 className='styles_cateogry_head_text__YBp1L'>Fruits</h4>
                                    <div className="styles_cateogry_head_link__e__6j">
                                        Show all
                                    </div>
                                </div>
                                <div className="styles_subcategories__MPoD4">
                                    <ul className='styles_subcategories_list___9jiE'>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/Skewres_2_.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Fruit & Veg Skewers</div>
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_MarinatedMeats_092022_2.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Meats & Marinates</div>
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Sausages_Burgers_092222_3.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Burgers Sausages & Buns</div>
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Sausages_Burgers_092222_3.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Burgers Sausages & Buns</div>
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Sausages_Burgers_092222_3.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Burgers Sausages & Buns</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="styles_cateogry__Qk2PS">
                                <div className="styles_cateogry_head___695v">
                                    <h4 className='styles_cateogry_head_text__YBp1L'>Fruits</h4>
                                    <div className="styles_cateogry_head_link__e__6j">
                                        Show all
                                    </div>
                                </div>
                                <div className="styles_subcategories__MPoD4">
                                    <ul className='styles_subcategories_list___9jiE'>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/Skewres_2_.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Fruit & Veg Skewers</div>
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_MarinatedMeats_092022_2.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Meats & Marinates</div>
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Sausages_Burgers_092222_3.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Burgers Sausages & Buns</div>
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Sausages_Burgers_092222_3.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Burgers Sausages & Buns</div>
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Sausages_Burgers_092222_3.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Burgers Sausages & Buns</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="styles_cateogry__Qk2PS">
                                <div className="styles_cateogry_head___695v">
                                    <h4 className='styles_cateogry_head_text__YBp1L'>Fruits</h4>
                                    <div className="styles_cateogry_head_link__e__6j">
                                        Show all
                                    </div>
                                </div>
                                <div className="styles_subcategories__MPoD4">
                                    <ul className='styles_subcategories_list___9jiE'>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/Skewres_2_.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Fruit & Veg Skewers</div>
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_MarinatedMeats_092022_2.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Meats & Marinates</div>
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Sausages_Burgers_092222_3.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Burgers Sausages & Buns</div>
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Sausages_Burgers_092222_3.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Burgers Sausages & Buns</div>
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Sausages_Burgers_092222_3.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Burgers Sausages & Buns</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="styles_cateogry__Qk2PS">
                                <div className="styles_cateogry_head___695v">
                                    <h4 className='styles_cateogry_head_text__YBp1L'>Fruits</h4>
                                    <div className="styles_cateogry_head_link__e__6j">
                                        Show all
                                    </div>
                                </div>
                                <div className="styles_subcategories__MPoD4">
                                    <ul className='styles_subcategories_list___9jiE'>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/Skewres_2_.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Fruit & Veg Skewers</div>
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_MarinatedMeats_092022_2.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Meats & Marinates</div>
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Sausages_Burgers_092222_3.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Burgers Sausages & Buns</div>
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Sausages_Burgers_092222_3.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Burgers Sausages & Buns</div>
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Sausages_Burgers_092222_3.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Burgers Sausages & Buns</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="styles_cateogry__Qk2PS">
                                <div className="styles_cateogry_head___695v">
                                    <h4 className='styles_cateogry_head_text__YBp1L'>Fruits</h4>
                                    <div className="styles_cateogry_head_link__e__6j">
                                        Show all
                                    </div>
                                </div>
                                <div className="styles_subcategories__MPoD4">
                                    <ul className='styles_subcategories_list___9jiE'>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/Skewres_2_.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Fruit & Veg Skewers</div>
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_MarinatedMeats_092022_2.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Meats & Marinates</div>
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Sausages_Burgers_092222_3.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Burgers Sausages & Buns</div>
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Sausages_Burgers_092222_3.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Burgers Sausages & Buns</div>
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Sausages_Burgers_092222_3.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Burgers Sausages & Buns</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="styles_cateogry__Qk2PS">
                                <div className="styles_cateogry_head___695v">
                                    <h4 className='styles_cateogry_head_text__YBp1L'>Fruits</h4>
                                    <div className="styles_cateogry_head_link__e__6j">
                                        Show all
                                    </div>
                                </div>
                                <div className="styles_subcategories__MPoD4">
                                    <ul className='styles_subcategories_list___9jiE'>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/Skewres_2_.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Fruit & Veg Skewers</div>
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_MarinatedMeats_092022_2.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Meats & Marinates</div>
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Sausages_Burgers_092222_3.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Burgers Sausages & Buns</div>
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Sausages_Burgers_092222_3.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Burgers Sausages & Buns</div>
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Sausages_Burgers_092222_3.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Burgers Sausages & Buns</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="styles_cateogry__Qk2PS">
                                <div className="styles_cateogry_head___695v">
                                    <h4 className='styles_cateogry_head_text__YBp1L'>Fruits</h4>
                                    <div className="styles_cateogry_head_link__e__6j">
                                        Show all
                                    </div>
                                </div>
                                <div className="styles_subcategories__MPoD4">
                                    <ul className='styles_subcategories_list___9jiE'>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/Skewres_2_.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Fruit & Veg Skewers</div>
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_MarinatedMeats_092022_2.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Meats & Marinates</div>
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Sausages_Burgers_092222_3.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Burgers Sausages & Buns</div>
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Sausages_Burgers_092222_3.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Burgers Sausages & Buns</div>
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Sausages_Burgers_092222_3.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Burgers Sausages & Buns</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="styles_cateogry__Qk2PS">
                                <div className="styles_cateogry_head___695v">
                                    <h4 className='styles_cateogry_head_text__YBp1L'>Fruits</h4>
                                    <div className="styles_cateogry_head_link__e__6j">
                                        Show all
                                    </div>
                                </div>
                                <div className="styles_subcategories__MPoD4">
                                    <ul className='styles_subcategories_list___9jiE'>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/Skewres_2_.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Fruit & Veg Skewers</div>
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_MarinatedMeats_092022_2.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Meats & Marinates</div>
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Sausages_Burgers_092222_3.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Burgers Sausages & Buns</div>
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Sausages_Burgers_092222_3.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Burgers Sausages & Buns</div>
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Sausages_Burgers_092222_3.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Burgers Sausages & Buns</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="styles_cateogry__Qk2PS">
                                <div className="styles_cateogry_head___695v">
                                    <h4 className='styles_cateogry_head_text__YBp1L'>Fruits</h4>
                                    <div className="styles_cateogry_head_link__e__6j">
                                        Show all
                                    </div>
                                </div>
                                <div className="styles_subcategories__MPoD4">
                                    <ul className='styles_subcategories_list___9jiE'>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/Skewres_2_.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Fruit & Veg Skewers</div>
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_MarinatedMeats_092022_2.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Meats & Marinates</div>
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Sausages_Burgers_092222_3.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Burgers Sausages & Buns</div>
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Sausages_Burgers_092222_3.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Burgers Sausages & Buns</div>
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Sausages_Burgers_092222_3.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Burgers Sausages & Buns</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="styles_cateogry__Qk2PS">
                                <div className="styles_cateogry_head___695v">
                                    <h4 className='styles_cateogry_head_text__YBp1L'>Fruits</h4>
                                    <div className="styles_cateogry_head_link__e__6j">
                                        Show all
                                    </div>
                                </div>
                                <div className="styles_subcategories__MPoD4">
                                    <ul className='styles_subcategories_list___9jiE'>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/Skewres_2_.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Fruit & Veg Skewers</div>
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_MarinatedMeats_092022_2.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Meats & Marinates</div>
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Sausages_Burgers_092222_3.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Burgers Sausages & Buns</div>
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Sausages_Burgers_092222_3.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Burgers Sausages & Buns</div>
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc'>
                                            <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Sausages_Burgers_092222_3.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Burgers Sausages & Buns</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
        </>
       

    )
}
export default ItemPage