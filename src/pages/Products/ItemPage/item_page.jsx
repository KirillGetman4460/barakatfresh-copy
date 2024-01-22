import Header from "../../../components/Header/header";
import {useState,useEffect} from 'react'
import { addBasket,minusQuantity,deleteItemBasket,selectTitle } from '../../../store/basketSlice/basketSlice';

import { useSelector,useDispatch } from 'react-redux'
import data from '../../../db/products.json'
import Megamenu from '../../../components/Megamenu/megamenu'

import BreadCrumbs from '../../../components/BreadCrumbs/breadCrumbs'

import { NavLink,useLocation } from "react-router-dom";

import Icon from '@mdi/react';
import { mdiFormatListBulleted,mdiSort,mdiFilterOutline,mdiRadioboxBlank,mdiClose,mdiCheckboxMarked,mdiPlus,mdiCheckboxBlankOutline,mdiMinus,mdiChevronLeft,mdiChevronRight,mdiHomeOutline,mdiCartOutline    } from '@mdi/js';

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
                  <div className="tabs_icon"><Icon path={mdiFormatListBulleted } size={1} /></div>
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
                                        <NavLink to={'/bbq'}>
                                        Show all
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="styles_subcategories__MPoD4">
                                    <ul className='styles_subcategories_list___9jiE'>
                                       
                                        <li className='styles_subcategories_item__mWsEc' onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Fruit & Veg Skewers'))
                                        }}>
                                        <NavLink to={'/bbq'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/Skewres_2_.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Fruit & Veg Skewers</div>
                                            </NavLink>
                                           
                                        </li>
                                        <li className='styles_subcategories_item__mWsEc' onClick={() =>{
                                             setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Meats & Marinates'))}}>
                                        <NavLink to={'/bbq'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_MarinatedMeats_092022_2.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Meats & Marinates</div>
                                            </NavLink>

                                            
                                        </li>
                                        
                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                             setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Burgers Sausages & Buns'))
                                        }}>
                                        <NavLink to={'/bbq'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Sausages_Burgers_092222_3.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Burgers Sausages & Buns</div>
                                            </NavLink>
                                            
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
                                    <NavLink to={'/fruits'}>
                                        Show all
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="styles_subcategories__MPoD4">
                                    <ul className='styles_subcategories_list___9jiE'>

                                    <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                             setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Fruit & Veg Skewers'))
                                        }}>
                                        <NavLink to={'/fruits'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Organic.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Fruit & Veg Skewers</div>
                                            </NavLink>
                                            
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                             setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Meats & Marinates'))
                                        }}>
                                        <NavLink to={'/fruits'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/platters_1_3.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Meats & Marinates</div>
                                            </NavLink>
                                            
                                        </li>
                                       
                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                             setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Mangoes'))
                                        }}>
                                        <NavLink to={'/fruits'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/Mango.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Mangoes</div>
                                            </NavLink>
                                            
                                        </li>
                                       
                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                             setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Cut & Sanitized'))
                                        }}>
                                        <NavLink to={'/fruits'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Cut_Sanitised_091922_1_1.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Cut & Sanitized</div>
                                            </NavLink>
                                            
                                        </li>
                                       

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                             setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Puree'))
                                        }}>
                                        <NavLink to={'/fruits'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/puree_1.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Puree</div>
                                            </NavLink>
                                            
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                             setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Berries'))
                                        }}>
                                        <NavLink to={'/fruits'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Berries_091922_1.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Berries</div>
                                            </NavLink>
                                            
                                        </li>
                                        

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                             setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Melons'))
                                        }}>
                                        <NavLink to={'/fruits'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Melons_091922_1.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Melons</div>
                                            </NavLink>
                                            
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                             setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Citrus'))
                                        }}>
                                        <NavLink to={'/fruits'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Citrus_091922_1.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Citrus</div>
                                            </NavLink>
                                            
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                             setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Organic'))
                                        }}>
                                        <NavLink to={'/fruits'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_OrganicFruits_092022_3.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Organic</div>
                                            </NavLink>
                                            
                                        </li>
                                        

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                             setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Bulk'))
                                        }}>
                                        <NavLink to={'/fruits'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Organics_091922_3_3.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Bulk</div>
                                            </NavLink>
                                            
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="styles_cateogry__Qk2PS">
                                <div className="styles_cateogry_head___695v">
                                    <h4 className='styles_cateogry_head_text__YBp1L'>Vegetables</h4>
                                    <div className="styles_cateogry_head_link__e__6j">
                                    <NavLink to={'/vegetables'}>
                                        Show all
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="styles_subcategories__MPoD4">
                                <ul className='styles_subcategories_list___9jiE'>

<li className='styles_subcategories_item__mWsEc'onClick={() =>{
         setActiveCatigoriesModal(false)
        dispatch(selectTitle('Regular Vegetables'))
    }}>
    <NavLink to={'/vegetables'}>
    <div className="styles_subcategory_thumb__w40Bs">
            <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Organic_091922_2.png" alt="" />
        </div>
        <div className="styles_subcategory_title__1CXbb">Regular Vegetables</div>
        </NavLink>
        
    </li>

    <li className='styles_subcategories_item__mWsEc'onClick={() =>{
         setActiveCatigoriesModal(false)
        dispatch(selectTitle('From India'))
    }}>
    <NavLink to={'/vegetables'}>
    <div className="styles_subcategory_thumb__w40Bs">
            <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_IndianRange.png" alt="" />
        </div>
        <div className="styles_subcategory_title__1CXbb">From India</div>
        </NavLink>
        
    </li>
   
    <li className='styles_subcategories_item__mWsEc'onClick={() =>{
         setActiveCatigoriesModal(false)
        dispatch(selectTitle('Thai/vietnam'))
    }}>
    <NavLink to={'/vegetables'}>
    <div className="styles_subcategory_thumb__w40Bs">
            <img src="https://media.barakatfresh.ae/media/catalog/category/Thai_viet.png" alt="" />
        </div>
        <div className="styles_subcategory_title__1CXbb">Thai/vietnam</div>
        </NavLink>
        
    </li>
   
    <li className='styles_subcategories_item__mWsEc'onClick={() =>{
         setActiveCatigoriesModal(false)
        dispatch(selectTitle('Levant'))
    }}>
    <NavLink to={'/vegetables'}>
    <div className="styles_subcategory_thumb__w40Bs">
            <img src="https://media.barakatfresh.ae/media/catalog/category/Flat_Beans.png" alt="" />
        </div>
        <div className="styles_subcategory_title__1CXbb">Levant</div>
        </NavLink>
        
    </li>
   

    <li className='styles_subcategories_item__mWsEc'onClick={() =>{
         setActiveCatigoriesModal(false)
        dispatch(selectTitle('Locally Grown'))
    }}>
    <NavLink to={'/vegetables'}>
    <div className="styles_subcategory_thumb__w40Bs">
            <img src="https://media.barakatfresh.ae/media/catalog/category/locally_grown.png" alt="" />
        </div>
        <div className="styles_subcategory_title__1CXbb">Locally Grown</div>
        </NavLink>
        
    </li>

    <li className='styles_subcategories_item__mWsEc'onClick={() =>{
         setActiveCatigoriesModal(false)
        dispatch(selectTitle('Leafies'))
    }}>
    <NavLink to={'/vegetables'}>
    <div className="styles_subcategory_thumb__w40Bs">
            <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Leafies.png" alt="" />
        </div>
        <div className="styles_subcategory_title__1CXbb">Leafies</div>
        </NavLink>
        
    </li>
    

    <li className='styles_subcategories_item__mWsEc'onClick={() =>{
         setActiveCatigoriesModal(false)
        dispatch(selectTitle('Cut & Sanitized'))
    }}>
    <NavLink to={'/vegetables'}>
    <div className="styles_subcategory_thumb__w40Bs">
            <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Cut_Sanitised_091922_2_2.png" alt="" />
        </div>
        <div className="styles_subcategory_title__1CXbb">Cut & Sanitized</div>
        </NavLink>
        
    </li>

    <li className='styles_subcategories_item__mWsEc'onClick={() =>{
         setActiveCatigoriesModal(false)
        dispatch(selectTitle('Organic'))
    }}>
    <NavLink to={'/vegetables'}>
    <div className="styles_subcategory_thumb__w40Bs">
            <img src="https://media.barakatfresh.ae/media/catalog/category/Capsicum_Mix.png" alt="" />
        </div>
        <div className="styles_subcategory_title__1CXbb">Organic</div>
        </NavLink>
        
    </li>

    <li className='styles_subcategories_item__mWsEc'onClick={() =>{
         setActiveCatigoriesModal(false)
        dispatch(selectTitle('Bulk'))
    }}>
    <NavLink to={'/vegetables'}>
    <div className="styles_subcategory_thumb__w40Bs">
            <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Bulk_091922_2.png" alt="" />
        </div>
        <div className="styles_subcategory_title__1CXbb">Bulk</div>
        </NavLink>
        
    </li>
</ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="styles_cateogry__Qk2PS">
                                <div className="styles_cateogry_head___695v">
                                    <h4 className='styles_cateogry_head_text__YBp1L'>Fresh Juices</h4>
                                    <div className="styles_cateogry_head_link__e__6j">
                                    <NavLink to={'/fresh_juices'}>
                                        Show all
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="styles_subcategories__MPoD4">
                                    <ul className='styles_subcategories_list___9jiE'>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Mocktails'))
                                        }}>
                                        <NavLink to={'/fresh_juices'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/GI4A6319-1.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Mocktails</div>
                                            </NavLink>
        
                                        </li>


                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Family Packs'))
                                        }}>
                                        <NavLink to={'/fresh_juices'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_FamilyPacks_092022_2.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Family Packs</div>
                                            </NavLink>
        
                                        </li>
                                        
                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Shots'))
                                        }}>
                                        <NavLink to={'/fresh_juices'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Shots_091922_1.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Shots</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Cold Pressed'))
                                        }}>
                                        <NavLink to={'/fresh_juices'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/Burn_Stubborn_1.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Cold Pressed</div>
                                            </NavLink>
        
                                        </li>
                                        
                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Iced Tea'))
                                        }}>
                                        <NavLink to={'/fresh_juices'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/Iced_Tea_1.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Iced Tea</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Juices'))
                                        }}>
                                        <NavLink to={'/fresh_juices'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Juices_091922_2_1.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Juices</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Healthy Juice Range'))
                                        }}>
                                        <NavLink to={'/fresh_juices'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/green_chia.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Healthy Juice Range</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Smoothies'))
                                        }}>
                                        <NavLink to={'/fresh_juices'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Smoothies_091922_1.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Smoothies</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Juice Combos'))
                                        }}>
                                        <NavLink to={'/fresh_juices'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_JuiceCombos_091922_1.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Juice Combos</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Myd Range'))
                                        }}>
                                        <NavLink to={'/fresh_juices'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/myD_CoQ-10.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Myd Range</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Ghaf Range'))
                                        }}>
                                        <NavLink to={'/fresh_juices'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/gi4a6307__1_.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Ghaf Range</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Keto'))
                                        }}>
                                        <NavLink to={'/fresh_juices'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Keto_092022_1.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Keto</div>
                                            </NavLink>
        
                                        </li>
                            
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="styles_cateogry__Qk2PS">
                                <div className="styles_cateogry_head___695v">
                                    <h4 className='styles_cateogry_head_text__YBp1L'>Meats</h4>
                                    <div className="styles_cateogry_head_link__e__6j">
                                    <NavLink to={'/meats'}>
                                        Show all
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="styles_subcategories__MPoD4">
                                    <ul className='styles_subcategories_list___9jiE'>
                                        
                                    <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Chicken'))
                                        }}>
                                        <NavLink to={'/meats'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Chicken_092022_1.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Chicken</div>
                                            </NavLink>
        
                                        </li>
                                       
                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Lamb/mutton'))
                                        }}>
                                        <NavLink to={'/meats'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_LambMutton_092022_1.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Lamb/mutton</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Beef'))
                                        }}>
                                        <NavLink to={'/meats'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Beef_092022_1.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Beef</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Turkey'))
                                        }}>
                                        <NavLink to={'/meats'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Turkey_092022_1.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Turkey</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Seafood'))
                                        }}>
                                        <NavLink to={'/meats'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/Seafood.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Seafood</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Marinated Meats'))
                                        }}>
                                        <NavLink to={'/meats'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_MarinatedMeats_092022_3.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Marinated Meats</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Sausages & Burgers'))
                                        }}>
                                        <NavLink to={'/meats'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Sausages_Burgers_092222_4.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Sausages & Burgers</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Premium Meats'))
                                        }}>
                                        <NavLink to={'/meats'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/chicken.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Premium Meats</div>
                                            </NavLink>
        
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="styles_cateogry__Qk2PS">
                                <div className="styles_cateogry_head___695v">
                                    <h4 className='styles_cateogry_head_text__YBp1L'>Grab N Go</h4>
                                    <div className="styles_cateogry_head_link__e__6j">
                                    <NavLink to={'/grab_to_go'}>
                                        Show all
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="styles_subcategories__MPoD4">
                                    <ul className='styles_subcategories_list___9jiE'>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Keto'))
                                        }}>
                                        <NavLink to={'/grab_to_go'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/Chicken_Tikka.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Keto</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Salads'))
                                        }}>
                                        <NavLink to={'/grab_to_go'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_VegetarianTreats_092222_1.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Salads</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Ready Meals'))
                                        }}>
                                        <NavLink to={'/grab_to_go'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_ReadyMeals_092222_2.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Ready Meals</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Ready Meals'))
                                        }}>
                                        <NavLink to={'/grab_to_go'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/Sandwiches-removebg-preview.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Sandwiches</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Cut Fruits'))
                                        }}>
                                        <NavLink to={'/grab_to_go'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/FRUIT_CUBES.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Cut Fruits</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Cook In The Bag'))
                                        }}>
                                        <NavLink to={'/grab_to_go'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/F649442_-_Chicken_Breast.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Cook In The Bag</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Ready To Cook'))
                                        }}>
                                        <NavLink to={'/grab_to_go'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_ReadyToCook_091922_1.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Ready To Cook</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Fresh Dips'))
                                        }}>
                                        <NavLink to={'/grab_to_go'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/Dips.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Fresh Dips</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Breakfast Pots'))
                                        }}>
                                        <NavLink to={'/grab_to_go'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_BreakfastPots_092222_1.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Breakfast Pots</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Skewers'))
                                        }}>
                                        <NavLink to={'/grab_to_go'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/Skewres_2__1.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Skewers</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Croissants & Danish'))
                                        }}>
                                        <NavLink to={'/grab_to_go'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Croissants_Danish_092222_2.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Croissants & Danish</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Cakes'))
                                        }}>
                                        <NavLink to={'/grab_to_go'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Cakes_092322_1.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Cakes</div>
                                            </NavLink>
        

                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Soups, Sauces & Gravies'))
                                        }}>
                                        <NavLink to={'/grab_to_go'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_SoupsSauces_Gravies_092222_1.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Soups, Sauces & Gravies</div>
                                            </NavLink>
        
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="styles_cateogry__Qk2PS">
                                <div className="styles_cateogry_head___695v">
                                    <h4 className='styles_cateogry_head_text__YBp1L'>Gifting & Party Needs</h4>
                                    <div className="styles_cateogry_head_link__e__6j">
                                    <NavLink to={'/gifting_needs'}>
                                        Show all
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="styles_subcategories__MPoD4">
                                    <ul className='styles_subcategories_list___9jiE'>
                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Gift Baskets'))
                                        }}>
                                        <NavLink to={'/gifting_needs'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/healthy_treat_basket.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Gift Baskets</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Party Platters'))
                                        }}>
                                        <NavLink to={'/gifting_needs'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/berry_bouquet.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Party Platters</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Party Packs'))
                                        }}>
                                        <NavLink to={'/gifting_needs'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/party_lovers.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Party Packs</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Fruit Boxes'))
                                        }}>
                                        <NavLink to={'/gifting_needs'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/berries_more.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Fruit Boxes</div>
                                            </NavLink>
        
                                        </li>
                                       

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Cakes'))
                                        }}>
                                        <NavLink to={'/gifting_needs'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Cakes_092322_2.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Cakes</div>
                                            </NavLink>
        
                                        </li>
                                       
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="styles_cateogry__Qk2PS">
                                <div className="styles_cateogry_head___695v">
                                    <h4 className='styles_cateogry_head_text__YBp1L'>Organics</h4>
                                    <div className="styles_cateogry_head_link__e__6j">
                                    <NavLink to={'/organic'}>
                                        Show all
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="styles_subcategories__MPoD4">
                                    <ul className='styles_subcategories_list___9jiE'>
                                    <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Organic Vegetables'))
                                        }}>
                                        <NavLink to={'/organic'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Cakes_092322_2.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Organic Vegetables</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Organic Fruits'))
                                        }}>
                                        <NavLink to={'/organic'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_OrganicFruits_092022_4.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Organic Fruits</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Organic Milk'))
                                        }}>
                                        <NavLink to={'/organic'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_OrganicMilk_092022_2.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Organic Milk</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Organic Eggs'))
                                        }}>
                                        <NavLink to={'/organic'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_OrganicEggs_092022_1.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Organic Eggs</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Grocery'))
                                        }}>
                                        <NavLink to={'/organic'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Grocery_092022_1.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Grocery</div>
                                            </NavLink>
        
                                        </li>
                                       
                                        
                        
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="styles_cateogry__Qk2PS">
                                <div className="styles_cateogry_head___695v">
                                    <h4 className='styles_cateogry_head_text__YBp1L'>Bakery</h4>
                                    <div className="styles_cateogry_head_link__e__6j">
                                    <NavLink to={'/bakery'}>
                                        Show all
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="styles_subcategories__MPoD4">
                                    <ul className='styles_subcategories_list___9jiE'>
                                    <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Croissants & Danish'))
                                        }}>
                                        <NavLink to={'/bakery'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Croissants_Danish_092222_1_1.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Croissants & Danish</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Bread & Loafs'))
                                        }}>
                                        <NavLink to={'/bakery'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Bread_Loafs_092222_1.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Bread & Loafs</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Keto'))
                                        }}>
                                        <NavLink to={'/bakery'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/Keto_Pecan.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Keto</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Donuts'))
                                        }}>
                                        <NavLink to={'/bakery'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/Donuts_1.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Donuts</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Buns & Rolls'))
                                        }}>
                                        <NavLink to={'/bakery'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Buns_Rolls_092222_1.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Buns & Rolls</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Cookies & Muffins'))
                                        }}>
                                        <NavLink to={'/bakery'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Cakes_092222_1_1.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Cookies & Muffins</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Cakes'))
                                        }}>
                                        <NavLink to={'/bakery'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Cookies_Muffins_092222_2.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Cakes</div>
                                            </NavLink>
        
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="styles_cateogry__Qk2PS">
                                <div className="styles_cateogry_head___695v">
                                    <h4 className='styles_cateogry_head_text__YBp1L'>Dairy & Eggs</h4>
                                    <div className="styles_cateogry_head_link__e__6j">
                                    <NavLink to={'/dairy_eggs'}>
                                        Show all
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="styles_subcategories__MPoD4">
                                    <ul className='styles_subcategories_list___9jiE'>
                                    <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Fresh Milk'))
                                        }}>
                                        <NavLink to={'/dairy_eggs'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_FreshMilk_092322_2.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Fresh Milk</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Long Shelf Life Milk'))
                                        }}>
                                        <NavLink to={'/dairy_eggs'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_LongShelfLife-Milk_092322_1.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Long Shelf Life Milk</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Milk Alternatives'))
                                        }}>
                                        <NavLink to={'/dairy_eggs'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_MilkAlternatives_092322_1.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Milk Alternatives</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Eggs'))
                                        }}>
                                        <NavLink to={'/dairy_eggs'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Eggs_092322_1.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Eggs</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Paneer & Tofu'))
                                        }}>
                                        <NavLink to={'/dairy_eggs'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Paneer_Tofu_092322_1.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Paneer & Tofu</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Butter & Ghee'))
                                        }}>
                                        <NavLink to={'/dairy_eggs'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Butter_Ghee_092322_1.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Butter & Ghee</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Yogurt & Lassi'))
                                        }}>
                                        <NavLink to={'/dairy_eggs'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Yogurt_Lassi_092322_1.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Yogurt & Lassi</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Cream & Laban'))
                                        }}>
                                        <NavLink to={'/dairy_eggs'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Cream_Laban_092322_1.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Cream & Laban</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Cheese'))
                                        }}>
                                        <NavLink to={'/dairy_eggs'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Cheese_092322_1.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Cheese</div>
                                            </NavLink>
        
                                        </li>
                                       
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="styles_cateogry__Qk2PS">
                                <div className="styles_cateogry_head___695v">
                                    <h4 className='styles_cateogry_head_text__YBp1L'>Ice Cream</h4>
                                    <div className="styles_cateogry_head_link__e__6j">
                                    <NavLink to={'/ice_cream'}>
                                        Show all
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="styles_subcategories__MPoD4">
                                    <ul className='styles_subcategories_list___9jiE'>
                                    <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Ice Creams'))
                                        }}>
                                        <NavLink to={'/ice_cream'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Icecreams_091922_4.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Ice Creams</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Juice Pops'))
                                        }}>
                                        <NavLink to={'/ice_cream'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_JuicePops_092322_1.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Juice Pops</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Sorbet'))
                                        }}>
                                        <NavLink to={'/ice_cream'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Sorbet_092322_1.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Sorbet</div>
                                            </NavLink>
        
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="styles_cateogry__Qk2PS">
                                <div className="styles_cateogry_head___695v">
                                    <h4 className='styles_cateogry_head_text__YBp1L'>Pantry</h4>
                                    <div className="styles_cateogry_head_link__e__6j">
                                    <NavLink to={'/pantry'}>
                                        Show all
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="styles_subcategories__MPoD4">
                                    <ul className='styles_subcategories_list___9jiE'>
                                    <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Rice & Pulses'))
                                        }}>
                                        <NavLink to={'/pantry'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/rice_pulses.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Rice & Pulses</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Dates & Nuts'))
                                        }}>
                                        <NavLink to={'/pantry'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Dates_Nuts_092322_2.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Dates & Nuts</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Tea & Coffee'))
                                        }}>
                                        <NavLink to={'/pantry'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Sorbet_092322_1.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Tea & Coffee</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Chocolates & Sweets'))
                                        }}>
                                        <NavLink to={'/pantry'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/chocolates.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Chocolates & Sweets</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Herbs & Spices'))
                                        }}>
                                        <NavLink to={'/pantry'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/Spices_condiments.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Herbs & Spices</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Oil, Ghee & Butter Range'))
                                        }}>
                                        <NavLink to={'/pantry'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/Ghee_Oil.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Oil, Ghee & Butter Range</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Water'))
                                        }}>
                                        <NavLink to={'/pantry'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_Water_092322_1.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Water</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Water'))
                                        }}>
                                        <NavLink to={'/pantry'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_OrganicGrocery_092322_2.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Organic Grocery</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Indian Breakfast'))
                                        }}>
                                        <NavLink to={'/pantry'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/1457586_IndianBreakfast_092322_1.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Indian Breakfast</div>
                                            </NavLink>
        
                                        </li>

                                        <li className='styles_subcategories_item__mWsEc'onClick={() =>{
                                            setActiveCatigoriesModal(false)
                                            dispatch(selectTitle('Pasta'))
                                        }}>
                                        <NavLink to={'/pantry'}>
                                        <div className="styles_subcategory_thumb__w40Bs">
                                                <img src="https://media.barakatfresh.ae/media/catalog/category/shutterstock_2117856260.png" alt="" />
                                            </div>
                                            <div className="styles_subcategory_title__1CXbb">Pasta</div>
                                            </NavLink>
        
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