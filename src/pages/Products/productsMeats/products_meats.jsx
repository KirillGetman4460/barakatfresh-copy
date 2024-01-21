import Header from "../../../components/Header/header";
import {useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import data from '../../../db/products.json'

import Megamenu from '../../../components/Megamenu/megamenu'
import Filter from '../../../components/Filter/filter'
import Products from '../../../components/Products/products'
import FilterMultiSelect from '../../../components/Filter/filterMultiSelect'
import BreadCrumbs from '../../../components/BreadCrumbs/breadCrumbs'

import { NavLink } from "react-router-dom";

import Icon from '@mdi/react';
import { mdiSort,mdiFilterOutline,mdiRadioboxBlank,mdiClose,mdiCheckboxMarked,mdiCheckboxBlankOutline,mdiChevronLeft,mdiChevronRight,mdiHomeOutline,mdiCartOutline    } from '@mdi/js';


const PageProductsMeats = () =>{
    const [products,setProducts] = useState(data.products_meats.all)

  const [origin,setOrigin] = useState(['UAE','South Africa','India','Colombia','Thailand','Egypt','Kenya','China','Lebanon','Vietnam','Chile','Iran','Italy','Turkey','Brazil','Peru','Sri Lanka','Serbia','USA','Ukraine'])
  const [tags,setTags] = useState(['By Air','RIPEN AT HOME','Premium By Air','STEAL DEAL','Ready to eat','Ripen at Home','Ripen at home','Best for Gifting','By Air !','By Air ! Ripen at Home','By Air! Ripen at Home','For cooking','Ideal for Cooking','In High Demand','MUST BUY','Premium by Air','RIPEN AT HOME (RAW)','SWEET & TASTY'])
  const [subCatsItem,setSubCatsItem] = useState([
    {title:"ALL",img:"https://media.barakatfresh.ae/media/catalog/category/1457586_Meats_091922_1.png"},
    {title:"Chicken",img:"https://media.barakatfresh.ae/media/catalog/category/1457586_Chicken_092022_1.png"},
    {title:"Lamb/Mutton",img:"https://media.barakatfresh.ae/media/catalog/category/1457586_LambMutton_092022_1.png"},
    {title:"Beef",img:"https://media.barakatfresh.ae/media/catalog/category/1457586_Beef_092022_1.png"},
    {title:"Turkey",img:"https://media.barakatfresh.ae/media/catalog/category/1457586_Turkey_092022_1.png"},
    {title:"Seafood",img:"https://media.barakatfresh.ae/media/catalog/category/Seafood.png"},

    {title:"Marinated Meats",img:"https://media.barakatfresh.ae/media/catalog/category/1457586_MarinatedMeats_092022_3.png"},

    {title:"Sausages & Burgers",img:"https://media.barakatfresh.ae/media/catalog/category/1457586_Sausages_Burgers_092222_4.png"},

    {title:"Premium Meats",img:"https://media.barakatfresh.ae/media/catalog/category/chicken.png"},

])


  const [title,setTitle] = useState('Meats')

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
    setProducts(data.products_meats.all)
    setTitle('Meats')
    return;
  }

  if (selectSubCats === 'Chicken') {
    setProducts(data.products_meats.chicken)

    setTitle('Chicken')
  }
  if (selectSubCats === 'Lamb/Mutton') {
    setProducts(data.products_meats.lamb_mutton)
   
    setTitle('Lamb/Mutton')
  }
  if (selectSubCats === 'Beef') {
    setProducts(data.products_meats.beef)
    
    setTitle('Beef')
  }
  if (selectSubCats === 'Turkey') {
    setProducts(data.products_meats.turkey)
    
    setTitle('Turkey')
  }
  if (selectSubCats === 'Seafood') {
    setProducts(data.products_meats.seafood)
    
    setTitle('Seafood')
  }
  if (selectSubCats === 'Marinated Meats') {
    setProducts(data.products_meats.marinated_meats)
    
    setTitle('Marinated Meats')
  }
  if (selectSubCats === 'Sausages & Burgers') {
    setProducts(data.products_meats.sausages_burgers)
    
    setTitle('Sausages & Burgers')
  }
  if (selectSubCats === 'Premium Meats') {
    setProducts(data.products_meats.premium_meats)
    
    setTitle('Premium Meats')
  }
}


const handleCountrySelectChange = (event) => {
  setSelectedCountries(prev => {
    const isAlreadySelected = prev.includes(event);

    if (isAlreadySelected) {

      return prev.filter(item => item !== event);
    } else {

      return [...prev, event];
    }
  });
};
const [activeCatigoriesModal,setActiveCatigoriesModal] = useState(false)
const handleTagsSelectChange = (event) => {
  setSelectedTags(prev => {
    const isAlreadySelected = prev.includes(event);

    if (isAlreadySelected) {

      return prev.filter(item => item !== event);
    } else {

      return [...prev, event];
    }
  });
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
    let sortedProducts = [...data.products_meats.all];

    if (selectedCountries.length !== 0) {
      sortedProducts = sortedProducts.filter(product => selectedCountries.includes(product.origin));
    }

    sortedProducts.sort((a, b) => a.origin.localeCompare(b.origin));

    setProducts(sortedProducts);
  };

  const sortProductsByTags = () => {

    
    let sortedProducts = [...data.products_meats.all];
  
    if (selectedTags.length !== 0) {
      sortedProducts = sortedProducts.filter(product => 
        product.additional_data && product.additional_data.labels && 
        selectedTags.some(countryLabel => product.additional_data.labels.includes(countryLabel))
      );
    }
  
    sortedProducts.sort((a, b) => {
      const labelsA = a.additional_data && a.additional_data.labels || [];
      const labelsB = b.additional_data && b.additional_data.labels || [];
  
      const labelA = labelsA.length > 0 ? labelsA[0] : '';
      const labelB = labelsB.length > 0 ? labelsB[0] : '';
  
      return labelA.localeCompare(labelB);
    });
  
    setProducts(sortedProducts);
  }

  

  const resetSelectedCountries = () =>{
    setSelectedCountries([])
    setSelected([])
    sortProductsByCountry()
    setProducts(data.data.products_meats.all)
    setSelectedTags([])
  }

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() =>{
    setSelectSubCats(mainTitle)
  },[mainTitle])

  useEffect(() =>{
    filterBySubcats()
  },[selectSubCats,mainTitle])

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
      useEffect(() =>{
        products.map(item => item.quantity = 1)
      },[products])
    return(
        <>
        <div className={`${isFixed ? 'fixed' : ''}`}>
            <Header></Header>

            <Megamenu></Megamenu>
            
            
        </div>
        <div className="fixed__modile">
            <div className="megamenu modile">
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
        </div>
            <div className="products_taskbar">
              <div className="taskbar">
                <div className="taskbar_prime"></div>
                <div className="taskbar_actions">
                  <div className="sorting" onClick={() => setActiveSort(true)}>
                  <div className="sorting_toggle">
                    <div className="sorting_toggle_icon">                
                      <Icon path={mdiSort} size={1} />
                    </div>
                    <div className="sorting_toggle_text">
                      Sort
                    </div>
                  </div>
                  </div>
                  <div className="filters__modile" onClick={() => setActiveFilt(true)}>
                    <div className="filters_toggle">
                      <div className="filters_toggle_icon">
                      <Icon path={mdiFilterOutline} size={1} />
                      </div>
                      <div className="filters_toggle_text">
                        Filter
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`bottomsheet ${activeSort ? "active" :""}`}>
                  <div className="bottomsheet_overlay" onClick={() => setActiveSort(false)}></div>
                  <div className="bottomsheet_content">
                    <div className="sortopts">
                      <div className="sortopts_title">Sort by</div>
                      <ul className="sortopts_list">
                        <li className="sortopts_item" onClick={() => setActiveSort(false)}>
                          <div className="formradio">
                            <div className="formradio_icon"><Icon path={mdiRadioboxBlank} color={"#2cc84d"} size={1} /></div>
                            <span className="formradio_title" onClick={() => setSelectPrice('')}>Best Sellers</span>
                          </div>
                        </li>
                        <li className="sortopts_item" onClick={() => {
                          setActiveSort(false)
                          setSelectPrice('bestsaving')
                        }}>
                          <div className="formradio">
                            <div className="formradio_icon"><Icon path={mdiRadioboxBlank} color={"#2cc84d"} size={1} /></div>
                            <span className="formradio_title">Biggest Saving</span>
                          </div>
                        </li>
                        <li className="sortopts_item" onClick={() => {
                          setActiveSort(false)
                          setSelectPrice('high')
                        }}>
                          <div className="formradio">
                            <div className="formradio_icon"><Icon path={mdiRadioboxBlank} color={"#2cc84d"} size={1} /></div>
                            <span className="formradio_title">Price: Low to High</span>
                          </div>
                        </li>
                        <li className="sortopts_item" onClick={() => {
                          setActiveSort(false)
                          setSelectPrice('low')
                        }}>
                          <div className="formradio">
                            <div className="formradio_icon"><Icon path={mdiRadioboxBlank} color={"#2cc84d"} size={1} /></div>
                            <span className="formradio_title">Price: High to Low</span>
                          </div>
                        </li>
                      </ul>
                    </div>

                  </div>
                </div>

                <div className={`fsmodal ${activeFilt ? "active" :""}`}>
                  <div className="fsmodal_content">
                    <div>
                      <div className="filterpop_header">
                        <div className="filterpop_close" onClick={() => setActiveFilt(false)}><Icon path={mdiClose} color={"rgb(96, 96, 96)"} size={1} /></div>
                        <h4 className="filterpop_heading">Filter by</h4>
                        <div className="filterpop_reset">Reset all</div>
                      </div>
                    </div>
                    <div>
                      <div className="filterblock">
                        <div className="filterblock_head">
                          <div className="filterblock_head" onClick={() => setActiveOrigin(true)}>
                            <div className="filterblock_title">Origin</div>
                            <div className="filterblock_chev"></div>
                          </div>

                        </div>
                      </div>
                      <div className="filterblock">
                        <div className="filterblock_head">
                          <div className="filterblock_head" onClick={() => setActiveTags(true)}>
                            <div className="filterblock_title">Tags</div>
                            <div className="filterblock_chev"></div>
                          </div>

                        </div>
                      </div>
                    </div>
                    <div className="filterpop_footer">
                      <div className="bbutton_primary"><span>Show results (228)</span></div>
                    </div>
                  </div>
                </div>

                <div className={`fsmodal origin ${activeOrigin ? "active" :""}`}>
                <div className="fsmodal_content">
                  
                        <div>
                      <div className="filterpop_header">
                        <div className="filterpop_close" onClick={() => setActiveOrigin(false)}><Icon path={mdiChevronLeft} color={"rgb(96, 96, 96)"} size={1} /></div>
                        <h4 className="filterpop_heading">Origin</h4>
                        <div className="filterpop_reset">Reset</div>
                      </div>
                    </div>

                    <div>
                      <div className="filterblock_body">
                        <ul className="filterblock_items">
                        {origin.map((item,i) => (
                        <li className="multi__select__list__item" onClick={() => {
                            handleCountrySelectChange(item)
                            handleSelectChange(i)
                        }}>
                            {selected && selected.some(item => item === i) ? <Icon path={mdiCheckboxMarked} color={'#2cc84d'} value={false} size={1} /> :   <Icon path={mdiCheckboxBlankOutline } size={1} color={'#2cc84d'} />}   
                            <span className="multi__select__text">{item}</span>
                        </li>
                    ))}
                        </ul>
                      </div>

                    </div>
                 
                    
                    <div className="filterpop_footer origin">
                      <div className="bbutton_primary" onClick={() => setActiveOrigin(false)}><span>APPLY</span></div>
                    </div>
                  </div>
                </div>

                <div className={`fsmodal tags ${activeTags ? "active" :""}`}>
                <div className="fsmodal_content">
                  
                        <div>
                      <div className="filterpop_header">
                        <div className="filterpop_close" onClick={() => setActiveTags(false)}><Icon path={mdiChevronLeft} color={"rgb(96, 96, 96)"} size={1} /></div>
                        <h4 className="filterpop_heading">Tags</h4>
                        <div className="filterpop_reset">Reset</div>
                      </div>
                    </div>

                    <div>
                      <div className="filterblock_body">
                        <ul className="filterblock_items">
                        {tags.map((item,i) => (
                        <li className="multi__select__list__item" onClick={() => {
                            handleCountrySelectChange(item)
                            handleSelectChange(i)
                        }}>
                            {selected && selected.some(item => item === i) ? <Icon path={mdiCheckboxMarked} color={'#2cc84d'} value={false} size={1} /> :   <Icon path={mdiCheckboxBlankOutline } size={1} color={'#2cc84d'} />}   
                            <span className="multi__select__text">{item}</span>
                        </li>
                    ))}
                        </ul>
                      </div>

                    </div>
                 
                    
                    <div className="filterpop_footer origin">
                      <div className="bbutton_primary" onClick={() => setActiveTags(false)}><span>APPLY</span></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            </div>
         <div className="wrapper">
            
          <BreadCrumbs title={title}></BreadCrumbs>
        <div className="content">
          <div className="filter__categories"> 
            <Filter></Filter>
            {/* <FilterChecbox></FilterChecbox>
            <FilterChecbox></FilterChecbox> */}
            <FilterMultiSelect title={'Origin'} origin={origin} sortProductsByCountry={sortProductsByCountry} handleCountrySelectChange={handleCountrySelectChange} resetSelectedCountries={resetSelectedCountries} selected={selected} handleSelectChange={handleSelectChange} ></FilterMultiSelect>
            <FilterMultiSelect title={'Tags'} origin={tags} sortProductsByCountry={sortProductsByTags} handleCountrySelectChange={handleTagsSelectChange} resetSelectedCountries={resetSelectedCountries} handleSelectChange={handleTagsChange} selected={tagsSelected}></FilterMultiSelect>
          </div>

          <Products subCatsItem={subCatsItem} title={title} products={products} filterBySubcats={filterBySubcats} selectSubCats={selectSubCats} setSelectSubCats={setSelectSubCats}  filterByPrice={filterByPrice} selectPrice={selectPrice} setSelectPrice={setSelectPrice} ></Products>
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
export default PageProductsMeats