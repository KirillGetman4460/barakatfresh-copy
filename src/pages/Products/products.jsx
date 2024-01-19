import Header from "../../components/Header/header";
import {useState,useRef,useEffect} from 'react'
import { useSelector } from 'react-redux'
import data from '../../db/products.json'
import data2 from '../../db/products2.json'

import Megamenu from '../../components/Megamenu/megamenu'
import Filter from '../../components/Filter/filter'
import Products from '../../components/Products/products'
import FilterChecbox from '../../components/Filter/filterChecbox'
import FilterMultiSelect from '../../components/Filter/filterMultiSelect'
import BreadCrumbs from '../../components/BreadCrumbs/breadCrumbs'

import { NavLink } from "react-router-dom";

import Icon from '@mdi/react';
import { mdiSort,mdiFilterOutline,mdiRadioboxBlank,mdiClose,mdiCheckboxMarked,mdiCheckboxBlankOutline,mdiChevronLeft,mdiChevronRight,mdiHomeOutline,mdiCartOutline    } from '@mdi/js';


const PageProducts = () =>{
    const [products,setProducts] = useState(data2.products.all)

  const [origin,setOrigin] = useState(['UAE','South Africa','India','Colombia','Thailand','Egypt','Kenya','China','Lebanon','Vietnam','Chile','Iran','Italy','Turkey','Brazil','Peru','Sri Lanka','Serbia','USA','Ukraine'])
  const [tags,setTags] = useState(['By Air','RIPEN AT HOME','Premium By Air','STEAL DEAL','Ready to eat','Ripen at Home','Ripen at home','Best for Gifting','By Air !','By Air ! Ripen at Home','By Air! Ripen at Home','For cooking','Ideal for Cooking','In High Demand','MUST BUY','Premium by Air','RIPEN AT HOME (RAW)','SWEET & TASTY'])

  const [title,setTitle] = useState('Fruits')

  const [selectPrice,setSelectPrice] = useState('')

  const [selectedCountries, setSelectedCountries] = useState([]);

  const [selectedTags, setSelectedTags] = useState([]);

  const [selected, setSelected] = useState([]);
  const [tagsSelected,setTagsSelected] = useState([])

  const [activeSort,setActiveSort] = useState(false)

  const [activeFilt,setActiveFilt] = useState(false)

  const [activeOrigin,setActiveOrigin] = useState(false)

  const [activeTags,setActiveTags] = useState(false)

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

const filterBySubcats = (sel) => {
  

  if (sel === 'All') {
    setProducts(data2.products.all)
    setTitle('Fruits')
    return;
  }

  if (sel === 'Puree') {
    setProducts(data2.products.puree)

   
    setTitle('Puree')
  }
  if (sel === 'Regular Fruits') {
    setProducts(data2.products.regular_fruits)
   
    setTitle('Regular Fruits')
  }
  if (sel === 'Fruit Platters') {
    setProducts(data2.products.fruit_platters)
    
    setTitle('Fruit Platters')
  }
  if (sel === 'Mangoes') {
    setProducts(data2.products.mangoes)
   
    setTitle('Mangoes')
  }
  if (sel === 'Cut & Sanitized') {
    setProducts(data2.products.cut_sanitized)
   
    setTitle('Cut & Sanitized')
  }
  if (sel === 'Berries') {
    setProducts(data2.products.berries)
    
    setTitle('Berries')
  }
  if (sel === 'Melons') {
    setProducts(data2.products.melons)
    
    setTitle('Melons')
  }
  if (sel === 'Citrus') {
    setProducts(data2.products.citrus)
    
    setTitle('Citrus')
  }
  if (sel === 'Organic') {
    setProducts(data2.products.organic)
   
    setTitle('Organic')
  }
  if (sel === 'Bulk') {
    setProducts(data2.products.bulk)
    
    setTitle('Bulk')
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
    let sortedProducts = [...products];

    if (selectedCountries.length !== 0) {
      sortedProducts = sortedProducts.filter(product => selectedCountries.includes(product.origin));
    }

    sortedProducts.sort((a, b) => a.origin.localeCompare(b.origin));

    setProducts(sortedProducts);
  };

  const sortProductsByTags = () => {

    
    let sortedProducts = [...products];
  
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
    setProducts(data2.products.all)
  }

  const [isFixed, setIsFixed] = useState(false);

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
            <div className="megamenu modile">
            <ul className="megamenu__list">
                <li className="megamenu__item">
                    <span>Bbq Range</span>
                    <div className="megamenu_child">
                      <div className="submenu">
                        <div className="br_wrapper">
                          <ul className="submenu_list">
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Organic.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                  Regular Fruits
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                </li>
                <li className="megamenu__item">
                    <span>Fruits</span>
                </li>
                <li className="megamenu__item">
                    <span>Vegetables</span>
                </li>
                <li className="megamenu__item">
                    <span>Fresh Juices</span>
                </li>
                <li className="megamenu__item">
                    <span>Meats</span>
                </li>
                <li className="megamenu__item">
                    <span>Grab N Go</span>
                </li>
                <li className="megamenu__item">
                    <span>Gifting & Party Needs</span>
                </li>
                <li className="megamenu__item">
                    <span>Organics</span>
                </li>
                <li className="megamenu__item">
                    <span>Bakery</span>
                </li>
                <li className="megamenu__item">
                    <span>Dairy & Eggs</span>
                </li>
                <li className="megamenu__item">
                    <span>Ice Cream</span>
                </li>
                <li className="megamenu__item">
                    <span>Pantry</span>
                </li>
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
            <FilterMultiSelect title={'Tags'} origin={tags} sortProductsByCountry={sortProductsByTags} handleCountrySelectChange={handleTagsSelectChange} handleSelectChange={handleTagsChange} selected={tagsSelected}></FilterMultiSelect>
          </div>

          <Products title={title} products={products} filterBySubcats={filterBySubcats} filterByPrice={filterByPrice} selectPrice={selectPrice} setSelectPrice={setSelectPrice} ></Products>
        </div>
        <div className="layout_tabs">
          <ul className="tabs">
              <li className="tabs_item">
                <div className="tabs_link">
                  <div className="tabs_icon"><Icon path={mdiHomeOutline} size={1} /></div>
                  <div className="tabs_title">Home</div>
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
      </div>
        </>
       

    )
}
export default PageProducts