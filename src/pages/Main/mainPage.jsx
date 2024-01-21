import {useRef} from 'react'
import Header from "../../components/Header/header";
import Megamenu from '../../components/Megamenu/megamenu'
import { addBasket,minusQuantity,deleteItemBasket } from '../../store/basketSlice/basketSlice';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector,useDispatch } from 'react-redux'
import {useState,useEffect} from 'react'
import { NavLink } from "react-router-dom";
import data from '../../db/products.json'
import Icon from '@mdi/react';

import { mdiSort,mdiFilterOutline,mdiRadioboxBlank,mdiClose,mdiCheckboxMarked,mdiCheckboxBlankOutline,mdiChevronLeft,mdiChevronRight,mdiHomeOutline,mdiCartOutline,mdiMinus,mdiPlus    } from '@mdi/js';
import './style/style.scss'
import 'swiper/css/navigation';
import 'swiper/css';
const MainPage = () =>{
    const [isFixed, setIsFixed] = useState(false);

    const [productsBbq,setProductBbq] = useState(data.products_bbq.all)
    const [productsGrabGo,setProductsGrabGo] = useState(data.products_grab_go.all)
    const [productsIceCream,setProductsIceCream] = useState(data.products_ice_cream.all)
    const [prdocutsMeats,setProductMeats] = useState(data.products_meats.all)
    const [prdocutsPantry,setProductPantry] = useState(data.products_pantry.all)
    const [productsGiftingNeeds,setProductsGiftingNeeds] = useState(data.products_gifting_needs.all)
    const [productsOrganics, setproductsOrganics] = useState(data.products_organics.all)
    const [productsBulk, setProductsBulk] = useState(data.products.bulk)
    const [productsJuices, setProductsJuices] = useState(data.products_fresh_juices.all)
    const [productsEggs, setProductsEggs] = useState(data.products_dairy_eggs.eggs)
    const [productsReadyToCook, setProductsReadyToCook] = useState(data.products_grab_go.ready_meals)
    const [active,setActive] = useState(null)

    const [activeBtn,setActiveBtn] = useState([])

    const dispatch = useDispatch()

    const swiperRef = useRef(null);

    const {basket} = useSelector(state => state.basket)
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
        productsBbq.map(obj => obj.quantity = 1);
        productsGrabGo.map(obj => obj.quantity = 1);
        productsIceCream.map(obj => obj.quantity = 1)
        prdocutsMeats.map(obj => obj.quantity = 1)
        prdocutsPantry.map(obj => obj.quantity = 1)
        productsGiftingNeeds.map(obj => obj.quantity = 1)
        productsOrganics.map(obj => obj.quantity = 1)
        productsJuices.map(obj => obj.quantity = 1)
        productsEggs.map(obj => obj.quantity = 1)
        productsReadyToCook.map(obj => obj.quantity = 1)
      },[])
    return(
        <div id="__next">
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
         </div>
        
        <div className="styles_layout__XOnb3">
            <div className="styles_layout_content__z1Aw8">
                <div>
                    <div className="br_wrapper br_mb10 br_mt20">
                        <div className="styles_heroslider__VyI6P"><a
                             className="styles_heroslider_nav__hxUxJ styles_left__U0pvb"><i className="mdi mdi-chevron-left"
                                    style={{lineHeight:0}}></i></a>
                            <div id="homehero" className="owl-carousel"><a
                                    href="https://barakatfresh.ae/latest-promotions.html"><span
                                     className="styles_heroslider_link__oRd9B"><img alt=""
                                            src="https://media.barakatfresh.ae/media/codazon/slideshow/w/e/web_banner_-_steal_deal_-_nov2023_wk3_with_mandarin-01.jpg"
                                            width="1180" height="324" decoding="async" data-nimg="1"
                                            style={{color:"black"}} /></span></a><a
                                    href="https://barakatfresh.ae/ready-to-eat/breakfast-pots.html"><span
                                     className="styles_heroslider_link__oRd9B"><img alt=""
                                            src="https://media.barakatfresh.ae/media/codazon/slideshow/b/r/breakfast_pots_-_online_banner-01_3_1.jpg"
                                            width="1180" height="324" decoding="async" data-nimg="1"
                                            style={{color:"black"}} /></span></a><a
                                    href="https://barakatfresh.ae/fresh-juices/mocktails.html"><span
                                     className="styles_heroslider_link__oRd9B"><img alt=""
                                            src="https://media.barakatfresh.ae/media/codazon/slideshow/m/i/microsoftteams-image_41__3.png"
                                            width="1180" height="324" decoding="async" data-nimg="1"
                                            style={{color:"black"}} /></span></a><a
                                    href="https://barakatfresh.ae/bbq-range.html"><span
                                     className="styles_heroslider_link__oRd9B"><img alt=""
                                            src="https://media.barakatfresh.ae/media/codazon/slideshow/1/7/1779256_bbqbanner_ads_1180x324_110823.jpg"
                                            width="1180" height="324" decoding="async" data-nimg="1"
                                            style={{color:"black"}} /></span></a><a
                                    href="https://barakatfresh.ae/keto-range.html"><span
                                     className="styles_heroslider_link__oRd9B"><img alt=""
                                            src="https://media.barakatfresh.ae/media/codazon/slideshow/w/e/website_banner.jpg"
                                            width="1180" height="324" decoding="async" data-nimg="1"
                                            style={{color:"black"}} /></span></a><a
                                    href="https://www.emiratesrc.ae/gaza/Default_en.aspx"><span
                                     className="styles_heroslider_link__oRd9B"><img alt=""
                                            src="https://media.barakatfresh.ae/media/codazon/slideshow/g/a/gaza_-_donation_drive-01_3_.jpg"
                                            width="1180" height="324" decoding="async" data-nimg="1"
                                            style={{color:"black"}} /></span></a><a
                                    href="https://barakatfresh.ae/fresh-juices.html"><span
                                     className="styles_heroslider_link__oRd9B"><img alt=""
                                            src="https://media.barakatfresh.ae/media/codazon/slideshow/b/a/barakat_fresh_-_banners_v2-01.jpg"
                                            width="1180" height="324" decoding="async" data-nimg="1"
                                            style={{color:"black"}} /></span></a><a
                                    href="https://barakatfresh.ae/whychoosebarakat"><span
                                     className="styles_heroslider_link__oRd9B"><img alt=""
                                            src="https://media.barakatfresh.ae/media/codazon/slideshow/b/a/barakat_fresh_-_banners_v2-04.jpg"
                                            width="1180" height="324" decoding="async" data-nimg="1"
                                            style={{color:"black"}} /></span></a></div><a
                             className="styles_heroslider_nav__hxUxJ styles_right__mwjpA"><i
                                 className="mdi mdi-chevron-right" style={{lineHeight:0}}></i></a>
                        </div>
                    </div><template data-dgst="DYNAMIC_SERVER_USAGE"></template>
                    <div className="br_wrapper">
                        <div className="br_mb50">
                            <div className="styles_banner___0eKA"><span
                                    className="styles_banner_link__41bCY"><img className="styles_banner_image__Hl4R4"
                                            src="https://media.barakatfresh.ae/media/wysiwyg/Express_Delivery_90_Mins_-_1800x75_Link_V2_1_.jpg" /></span>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div>
                                <div className="styles_myitems_head__WGXb2">
                                    <h2 className="styles_myitems_heading__hZrvZ">Bbq Range</h2>
                                </div>
                                <div className="styles_myitems_list__UK74U">
                                    {/* <a
                                     className="styles_myitems_nav__PVypE styles_left__yNTs7">
                                        <i
                                         className="mdi mdi-chevron-left" style={{lineHeight:0}}></i></a> */}
                                    
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
      modules={[Navigation]}
      navigation
      ref={swiperRef}
      breakpoints={{
        340: {
            slidesPerView: 1,
        },
        440: {
            slidesPerView: 1,
        },
        540: {
            slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        970: {
          slidesPerView: 3,
        },
        971: {
            slidesPerView: 4,
          },
      }}
    >
     
      {productsBbq.map((product,i) => (
  <SwiperSlide>
  <div className="styles_myitems_item__XSuD6">
                                        <div className="styles_miniature__bauyi">
                                            <div className="styles_miniature_thumb__pC4As">
                                                <div className="styles_miniature_badges__0wu3u">
                                                    <div className="styles_badges__FtItY"><span
                                                         className="styles_badges_item__I757N">Expiry - 31st
                                                            Jan</span></div>
                                                </div><span className="styles_miniature_percent__Y0sR7">59%</span>
                                               
                                                    <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                            src={product.image}
                                                            width="420" height="420" decoding="async" data-nimg="1"
                                                            loading="lazy" style={{color:"black"}} />
                                                     <div className="products__item__miniature">
                       

                        <div className={`products__item__add__btn main ${activeBtn.some(item => item === i) ? "active" : ""}`} onClick={() => {
                            setActiveBtn([...activeBtn, i])       
                        }}>
                            {activeBtn.some(item => item === i) && <span className='icon__btn__add' onClick={() =>{
                                product.quantity--
                                dispatch(minusQuantity(product))
                                dispatch(deleteItemBasket(product))
                            }}><Icon path={mdiMinus} size={1} color={'white'} /></span>}

                            {activeBtn.some(item => item === i) && <div className='product__quantity'>{product.quantity}</div>}
                            {activeBtn.some(item => item === i) ?
                                <span className='icon__btn__add' onClick={() => {
                                    product.quantity++
                                    dispatch(addBasket(product))
                                }}><Icon path={mdiPlus} size={1} color={'white'}  /></span> : <span className='icon__btn__add' onClick={() => {
                                    dispatch(addBasket(product))
                                }}><Icon path={mdiPlus} size={1} color={'white'}  /></span>
                            }
                            
                        </div>
                    </div>
                                                    </div>
                                                
                                            </div>
                                            <div className="styles_miniature_addcart__nrwcj">
                                                <div className="styles_addtocart__vPSiL">
                                                    <div className="styles_addtocart_container__R8iNc">
                                                        <div className="styles_addtocart_box__4cn_x">
                                                            <div
                                                             className="styles_addtocart_toggle__KC7th styles_increment__OgBkV styles_disabled__V450K">
                                                                <i className="mdi mdi-plus styles_addtocart_icon__TQaFF"
                                                                    style={{lineHeight:0}}></i>
                                                            </div>
                                                            <div className="styles_addtocart_textbox__nF655">
                                                                <span></span>
                                                            </div>
                                                            <div
                                                             className="styles_addtocart_toggle__KC7th styles_decrement__yGYLo">
                                                                <i className="mdi mdi-minus styles_addtocart_icon__TQaFF"
                                                                    style={{lineHeight:0}}></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="styles_miniature_origin__0XxsK"></div>
                                            <div>
                                                <div className="styles_miniature_name__NNCqq"><span
                                                     className="styles_miniature_name_text__9uWQ2">{product.name}</span></div>
                                                <div className="styles_miniature_price__5I4vS">
                                                    <div className="styles_pricing__k23Ku">
                                                        <div className="styles_pricing_regular__sizHW"><span
                                                             className="styles_pricing_strike__m89Q_">{product.price}</span><span
                                                             className="styles_pricing_special__qHGqh">{product.price_raw}</span></div>
                                                    </div>
                                                </div>
                                                <div className="styles_miniature_configs__T57kw"><template
                                                        data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                            </div>
                                        </div>
                                    </div>
  </SwiperSlide>
      ))}
    
    </Swiper>

                                    
                                </div>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div className="styles_banner___0eKA"><span
                                     className="styles_banner_link__41bCY"><img className="styles_banner_image__Hl4R4"
                                            src="https://media.barakatfresh.ae/media/codazon/slideshow/m/i/microsoftteams-image_27_.png" /></span>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div>
                                <div className="styles_myitems_head__WGXb2">
                                    <h2 className="styles_myitems_heading__hZrvZ">Grab n Go</h2>
                                </div>
                                <div className="styles_myitems_list__UK74U">
                                <Swiper
      spaceBetween={50}
      slidesPerView={4}
      modules={[Navigation]}
      navigation
      breakpoints={{
        340: {
            slidesPerView: 1,
        },
        440: {
            slidesPerView: 1,
        },
        540: {
            slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        970: {
          slidesPerView: 3,
        },
        971: {
            slidesPerView: 4,
          },
      }}
      ref={swiperRef}
    >
      {productsGrabGo.map((product,i) => (
  <SwiperSlide>
  <div className="styles_myitems_item__XSuD6">
                                        <div className="styles_miniature__bauyi">
                                            <div className="styles_miniature_thumb__pC4As">
                                                <div className="styles_miniature_badges__0wu3u">
                                                    <div className="styles_badges__FtItY"><span
                                                         className="styles_badges_item__I757N">Expiry - 31st
                                                            Jan</span></div>
                                                </div><span className="styles_miniature_percent__Y0sR7">59%</span>
                                               
                                                    <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                            src={product.image}
                                                            width="420" height="420" decoding="async" data-nimg="1"
                                                            loading="lazy" style={{color:"black"}} />
                                                     <div className="products__item__miniature">
                       

                        <div className={`products__item__add__btn main ${activeBtn.some(item => item === i) ? "active" : ""}`} onClick={() => {
                            setActiveBtn([...activeBtn, i])       
                        }}>
                            {activeBtn.some(item => item === i) && <span className='icon__btn__add' onClick={() =>{
                                product.quantity--
                                dispatch(minusQuantity(product))
                                dispatch(deleteItemBasket(product))
                            }}><Icon path={mdiMinus} size={1} color={'white'} /></span>}

                            {activeBtn.some(item => item === i) && <div className='product__quantity'>{product.quantity}</div>}
                            {activeBtn.some(item => item === i) ?
                                <span className='icon__btn__add' onClick={() => {
                                    product.quantity++
                                    dispatch(addBasket(product))
                                }}><Icon path={mdiPlus} size={1} color={'white'}  /></span> : <span className='icon__btn__add' onClick={() => {
                                    dispatch(addBasket(product))
                                }}><Icon path={mdiPlus} size={1} color={'white'}  /></span>
                            }
                            
                        </div>
                    </div>
                                                    </div>
                                                
                                            </div>
                                            <div className="styles_miniature_addcart__nrwcj">
                                                <div className="styles_addtocart__vPSiL">
                                                    <div className="styles_addtocart_container__R8iNc">
                                                        <div className="styles_addtocart_box__4cn_x">
                                                            <div
                                                             className="styles_addtocart_toggle__KC7th styles_increment__OgBkV styles_disabled__V450K">
                                                                <i className="mdi mdi-plus styles_addtocart_icon__TQaFF"
                                                                    style={{lineHeight:0}}></i>
                                                            </div>
                                                            <div className="styles_addtocart_textbox__nF655">
                                                                <span></span>
                                                            </div>
                                                            <div
                                                             className="styles_addtocart_toggle__KC7th styles_decrement__yGYLo">
                                                                <i className="mdi mdi-minus styles_addtocart_icon__TQaFF"
                                                                    style={{lineHeight:0}}></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="styles_miniature_origin__0XxsK"></div>
                                            <div>
                                                <div className="styles_miniature_name__NNCqq"><span
                                                     className="styles_miniature_name_text__9uWQ2">{product.name}</span></div>
                                                <div className="styles_miniature_price__5I4vS">
                                                    <div className="styles_pricing__k23Ku">
                                                        <div className="styles_pricing_regular__sizHW"><span
                                                             className="styles_pricing_strike__m89Q_">{product.price}</span><span
                                                             className="styles_pricing_special__qHGqh">{product.price_raw}</span></div>
                                                    </div>
                                                </div>
                                                <div className="styles_miniature_configs__T57kw"><template
                                                        data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                            </div>
                                        </div>
                                    </div>
  </SwiperSlide>
      ))}
    </Swiper>
                                    
                                    
                                </div>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div className="styles_banner___0eKA"><span
                                     className="styles_banner_link__41bCY"><img className="styles_banner_image__Hl4R4"
                                            src="https://media.barakatfresh.ae/media/catalog/tmp/category/Best_Food_-_Unlock_Flavorful_Savings_-_Online_Banner-01.jpg" /></span>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div>
                                <div className="styles_myitems_head__WGXb2">
                                    <h2 className="styles_myitems_heading__hZrvZ">Ice Cream</h2>
                                </div>
                                <div className="styles_myitems_list__UK74U">
            
<Swiper
      spaceBetween={50}
      slidesPerView={4}
      modules={[Navigation]}
      navigation
      breakpoints={{
        340: {
            slidesPerView: 1,
        },
        440: {
            slidesPerView: 1,
        },
        540: {
            slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        970: {
          slidesPerView: 3,
        },
        971: {
            slidesPerView: 4,
          },
      }}
      ref={swiperRef}
    >
        
      {productsIceCream.map((product,i) => (
  <SwiperSlide>
  <div className="styles_myitems_item__XSuD6">
                                        <div className="styles_miniature__bauyi">
                                            <div className="styles_miniature_thumb__pC4As">
                                                <div className="styles_miniature_badges__0wu3u">
                                                    <div className="styles_badges__FtItY"><span
                                                         className="styles_badges_item__I757N">Expiry - 31st
                                                            Jan</span></div>
                                                </div><span className="styles_miniature_percent__Y0sR7">59%</span>
                                               
                                                    <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                            src={product.image}
                                                            width="420" height="420" decoding="async" data-nimg="1"
                                                            loading="lazy" style={{color:"black"}} />
                                                     <div className="products__item__miniature">
                       

                        <div className={`products__item__add__btn main ${activeBtn.some(item => item === i) ? "active" : ""}`} onClick={() => {
                            setActiveBtn([...activeBtn, i])       
                        }}>
                            {activeBtn.some(item => item === i) && <span className='icon__btn__add' onClick={() =>{
                                product.quantity--
                                dispatch(minusQuantity(product))
                                dispatch(deleteItemBasket(product))
                            }}><Icon path={mdiMinus} size={1} color={'white'} /></span>}

                            {activeBtn.some(item => item === i) && <div className='product__quantity'>{product.quantity}</div>}
                            {activeBtn.some(item => item === i) ?
                                <span className='icon__btn__add' onClick={() => {
                                    product.quantity++
                                    dispatch(addBasket(product))
                                }}><Icon path={mdiPlus} size={1} color={'white'}  /></span> : <span className='icon__btn__add' onClick={() => {
                                    dispatch(addBasket(product))
                                }}><Icon path={mdiPlus} size={1} color={'white'}  /></span>
                            }
                            
                        </div>
                    </div>
                                                    </div>
                                                
                                            </div>
                                            <div className="styles_miniature_addcart__nrwcj">
                                                <div className="styles_addtocart__vPSiL">
                                                    <div className="styles_addtocart_container__R8iNc">
                                                        <div className="styles_addtocart_box__4cn_x">
                                                            <div
                                                             className="styles_addtocart_toggle__KC7th styles_increment__OgBkV styles_disabled__V450K">
                                                                <i className="mdi mdi-plus styles_addtocart_icon__TQaFF"
                                                                    style={{lineHeight:0}}></i>
                                                            </div>
                                                            <div className="styles_addtocart_textbox__nF655">
                                                                <span></span>
                                                            </div>
                                                            <div
                                                             className="styles_addtocart_toggle__KC7th styles_decrement__yGYLo">
                                                                <i className="mdi mdi-minus styles_addtocart_icon__TQaFF"
                                                                    style={{lineHeight:0}}></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="styles_miniature_origin__0XxsK"></div>
                                            <div>
                                                <div className="styles_miniature_name__NNCqq"><span
                                                     className="styles_miniature_name_text__9uWQ2">{product.name}</span></div>
                                                <div className="styles_miniature_price__5I4vS">
                                                    <div className="styles_pricing__k23Ku">
                                                        <div className="styles_pricing_regular__sizHW"><span
                                                             className="styles_pricing_strike__m89Q_">{product.price}</span><span
                                                             className="styles_pricing_special__qHGqh">{product.price_raw}</span></div>
                                                    </div>
                                                </div>
                                                <div className="styles_miniature_configs__T57kw"><template
                                                        data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                            </div>
                                        </div>
                                    </div>
  </SwiperSlide>
      ))}
    </Swiper>
                                         
                                   
                                </div>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div className="styles_banner___0eKA">
                             <span
                                     className="styles_banner_link__41bCY"><img className="styles_banner_image__Hl4R4"
                                            src="https://media.barakatfresh.ae/media/wysiwyg/Premium_Meat_-_Banner_1180x324_2_100523.jpg" /></span>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div>
                                <div className="styles_myitems_head__WGXb2">
                                    <h2 className="styles_myitems_heading__hZrvZ">Meats</h2>
                                </div>
                                <div className="styles_myitems_list__UK74U">
                                <Swiper
      spaceBetween={50}
      slidesPerView={4}
      modules={[Navigation]}
      navigation
      breakpoints={{
        340: {
            slidesPerView: 1,
        },
        440: {
            slidesPerView: 1,
        },
        540: {
            slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        970: {
          slidesPerView: 3,
        },
        971: {
            slidesPerView: 4,
          },
      }}
      ref={swiperRef}
    >
       {prdocutsMeats.map((product,i) => (
  <SwiperSlide>
  <div className="styles_myitems_item__XSuD6">
                                        <div className="styles_miniature__bauyi">
                                            <div className="styles_miniature_thumb__pC4As">
                                                <div className="styles_miniature_badges__0wu3u">
                                                    <div className="styles_badges__FtItY"><span
                                                         className="styles_badges_item__I757N">Expiry - 31st
                                                            Jan</span></div>
                                                </div><span className="styles_miniature_percent__Y0sR7">59%</span>
                                               
                                                    <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                            src={product.image}
                                                            width="420" height="420" decoding="async" data-nimg="1"
                                                            loading="lazy" style={{color:"black"}} />
                                                     <div className="products__item__miniature">
                       

                        <div className={`products__item__add__btn main ${activeBtn.some(item => item === i) ? "active" : ""}`} onClick={() => {
                            setActiveBtn([...activeBtn, i])       
                        }}>
                            {activeBtn.some(item => item === i) && <span className='icon__btn__add' onClick={() =>{
                                product.quantity--
                                dispatch(minusQuantity(product))
                                dispatch(deleteItemBasket(product))
                            }}><Icon path={mdiMinus} size={1} color={'white'} /></span>}

                            {activeBtn.some(item => item === i) && <div className='product__quantity'>{product.quantity}</div>}
                            {activeBtn.some(item => item === i) ?
                                <span className='icon__btn__add' onClick={() => {
                                    product.quantity++
                                    dispatch(addBasket(product))
                                }}><Icon path={mdiPlus} size={1} color={'white'}  /></span> : <span className='icon__btn__add' onClick={() => {
                                    dispatch(addBasket(product))
                                }}><Icon path={mdiPlus} size={1} color={'white'}  /></span>
                            }
                            
                        </div>
                    </div>
                                                    </div>
                                                
                                            </div>
                                            <div className="styles_miniature_addcart__nrwcj">
                                                <div className="styles_addtocart__vPSiL">
                                                    <div className="styles_addtocart_container__R8iNc">
                                                        <div className="styles_addtocart_box__4cn_x">
                                                            <div
                                                             className="styles_addtocart_toggle__KC7th styles_increment__OgBkV styles_disabled__V450K">
                                                                <i className="mdi mdi-plus styles_addtocart_icon__TQaFF"
                                                                    style={{lineHeight:0}}></i>
                                                            </div>
                                                            <div className="styles_addtocart_textbox__nF655">
                                                                <span></span>
                                                            </div>
                                                            <div
                                                             className="styles_addtocart_toggle__KC7th styles_decrement__yGYLo">
                                                                <i className="mdi mdi-minus styles_addtocart_icon__TQaFF"
                                                                    style={{lineHeight:0}}></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="styles_miniature_origin__0XxsK"></div>
                                            <div>
                                                <div className="styles_miniature_name__NNCqq"><span
                                                     className="styles_miniature_name_text__9uWQ2">{product.name}</span></div>
                                                <div className="styles_miniature_price__5I4vS">
                                                    <div className="styles_pricing__k23Ku">
                                                        <div className="styles_pricing_regular__sizHW"><span
                                                             className="styles_pricing_strike__m89Q_">{product.price}</span><span
                                                             className="styles_pricing_special__qHGqh">{product.price_raw}</span></div>
                                                    </div>
                                                </div>
                                                <div className="styles_miniature_configs__T57kw"><template
                                                        data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                            </div>
                                        </div>
                                    </div>
  </SwiperSlide>
      ))}
    </Swiper>
                                    
                                  
                                </div>
                            </div>
                        </div>
                        
                        <div className="br_mb50">
                            <div className="styles_banner___0eKA"><span
                                     className="styles_banner_link__41bCY"><img className="styles_banner_image__Hl4R4"
                                            src="https://media.barakatfresh.ae/media/wysiwyg/Family_Size_-_Banner_v2-01.jpg" /></span>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div>
                                <div className="styles_myitems_head__WGXb2">
                                    <h2 className="styles_myitems_heading__hZrvZ">Family Packs</h2>
                                </div>
                                <div className="styles_myitems_list__UK74U">
                                <Swiper
      spaceBetween={50}
      slidesPerView={4}
      modules={[Navigation]}
      navigation
      ref={swiperRef}
    >
      {prdocutsPantry.map((product,i) => (
  <SwiperSlide>
  <div className="styles_myitems_item__XSuD6">
                                        <div className="styles_miniature__bauyi">
                                            <div className="styles_miniature_thumb__pC4As">
                                                <div className="styles_miniature_badges__0wu3u">
                                                    <div className="styles_badges__FtItY"><span
                                                         className="styles_badges_item__I757N">Expiry - 31st
                                                            Jan</span></div>
                                                </div><span className="styles_miniature_percent__Y0sR7">59%</span>
                                               
                                                    <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                            src={product.image}
                                                            width="420" height="420" decoding="async" data-nimg="1"
                                                            loading="lazy" style={{color:"black"}} />
                                                     <div className="products__item__miniature">
                       

                        <div className={`products__item__add__btn main ${activeBtn.some(item => item === i) ? "active" : ""}`} onClick={() => {
                            setActiveBtn([...activeBtn, i])       
                        }}>
                            {activeBtn.some(item => item === i) && <span className='icon__btn__add' onClick={() =>{
                                product.quantity--
                                dispatch(minusQuantity(product))
                                dispatch(deleteItemBasket(product))
                            }}><Icon path={mdiMinus} size={1} color={'white'} /></span>}

                            {activeBtn.some(item => item === i) && <div className='product__quantity'>{product.quantity}</div>}
                            {activeBtn.some(item => item === i) ?
                                <span className='icon__btn__add' onClick={() => {
                                    product.quantity++
                                    dispatch(addBasket(product))
                                }}><Icon path={mdiPlus} size={1} color={'white'}  /></span> : <span className='icon__btn__add' onClick={() => {
                                    dispatch(addBasket(product))
                                }}><Icon path={mdiPlus} size={1} color={'white'}  /></span>
                            }
                            
                        </div>
                    </div>
                                                    </div>
                                                
                                            </div>
                                            <div className="styles_miniature_addcart__nrwcj">
                                                <div className="styles_addtocart__vPSiL">
                                                    <div className="styles_addtocart_container__R8iNc">
                                                        <div className="styles_addtocart_box__4cn_x">
                                                            <div
                                                             className="styles_addtocart_toggle__KC7th styles_increment__OgBkV styles_disabled__V450K">
                                                                <i className="mdi mdi-plus styles_addtocart_icon__TQaFF"
                                                                    style={{lineHeight:0}}></i>
                                                            </div>
                                                            <div className="styles_addtocart_textbox__nF655">
                                                                <span></span>
                                                            </div>
                                                            <div
                                                             className="styles_addtocart_toggle__KC7th styles_decrement__yGYLo">
                                                                <i className="mdi mdi-minus styles_addtocart_icon__TQaFF"
                                                                    style={{lineHeight:0}}></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="styles_miniature_origin__0XxsK"></div>
                                            <div>
                                                <div className="styles_miniature_name__NNCqq"><span
                                                     className="styles_miniature_name_text__9uWQ2">{product.name}</span></div>
                                                <div className="styles_miniature_price__5I4vS">
                                                    <div className="styles_pricing__k23Ku">
                                                        <div className="styles_pricing_regular__sizHW"><span
                                                             className="styles_pricing_strike__m89Q_">{product.price}</span><span
                                                             className="styles_pricing_special__qHGqh">{product.price_raw}</span></div>
                                                    </div>
                                                </div>
                                                <div className="styles_miniature_configs__T57kw"><template
                                                        data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                            </div>
                                        </div>
                                    </div>
  </SwiperSlide>
      ))}
    </Swiper>
                                   
                                    
                                </div>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div className="styles_banner___0eKA"><span
                                     className="styles_banner_link__41bCY"><img className="styles_banner_image__Hl4R4"
                                            src="https://media.barakatfresh.ae/media/app/ExpressDelivery-90-mins-web.jpg" /></span>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div>
                                <div className="styles_myitems_head__WGXb2">
                                    <h2 className="styles_myitems_heading__hZrvZ">Gift Baskets</h2>
                                </div>
                                <div className="styles_myitems_list__UK74U">
                                <Swiper
      spaceBetween={50}
      slidesPerView={4}
      modules={[Navigation]}
      navigation
      ref={swiperRef}
    >
     {productsGiftingNeeds.map((product,i) => (
  <SwiperSlide>
  <div className="styles_myitems_item__XSuD6">
                                        <div className="styles_miniature__bauyi">
                                            <div className="styles_miniature_thumb__pC4As">
                                                <div className="styles_miniature_badges__0wu3u">
                                                    <div className="styles_badges__FtItY"><span
                                                         className="styles_badges_item__I757N">Expiry - 31st
                                                            Jan</span></div>
                                                </div><span className="styles_miniature_percent__Y0sR7">59%</span>
                                               
                                                    <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                            src={product.image}
                                                            width="420" height="420" decoding="async" data-nimg="1"
                                                            loading="lazy" style={{color:"black"}} />
                                                     <div className="products__item__miniature">
                       

                        <div className={`products__item__add__btn main ${activeBtn.some(item => item === i) ? "active" : ""}`} onClick={() => {
                            setActiveBtn([...activeBtn, i])       
                        }}>
                            {activeBtn.some(item => item === i) && <span className='icon__btn__add' onClick={() =>{
                                product.quantity--
                                dispatch(minusQuantity(product))
                                dispatch(deleteItemBasket(product))
                            }}><Icon path={mdiMinus} size={1} color={'white'} /></span>}

                            {activeBtn.some(item => item === i) && <div className='product__quantity'>{product.quantity}</div>}
                            {activeBtn.some(item => item === i) ?
                                <span className='icon__btn__add' onClick={() => {
                                    product.quantity++
                                    dispatch(addBasket(product))
                                }}><Icon path={mdiPlus} size={1} color={'white'}  /></span> : <span className='icon__btn__add' onClick={() => {
                                    dispatch(addBasket(product))
                                }}><Icon path={mdiPlus} size={1} color={'white'}  /></span>
                            }
                            
                        </div>
                    </div>
                                                    </div>
                                                
                                            </div>
                                            <div className="styles_miniature_addcart__nrwcj">
                                                <div className="styles_addtocart__vPSiL">
                                                    <div className="styles_addtocart_container__R8iNc">
                                                        <div className="styles_addtocart_box__4cn_x">
                                                            <div
                                                             className="styles_addtocart_toggle__KC7th styles_increment__OgBkV styles_disabled__V450K">
                                                                <i className="mdi mdi-plus styles_addtocart_icon__TQaFF"
                                                                    style={{lineHeight:0}}></i>
                                                            </div>
                                                            <div className="styles_addtocart_textbox__nF655">
                                                                <span></span>
                                                            </div>
                                                            <div
                                                             className="styles_addtocart_toggle__KC7th styles_decrement__yGYLo">
                                                                <i className="mdi mdi-minus styles_addtocart_icon__TQaFF"
                                                                    style={{lineHeight:0}}></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="styles_miniature_origin__0XxsK"></div>
                                            <div>
                                                <div className="styles_miniature_name__NNCqq"><span
                                                     className="styles_miniature_name_text__9uWQ2">{product.name}</span></div>
                                                <div className="styles_miniature_price__5I4vS">
                                                    <div className="styles_pricing__k23Ku">
                                                        <div className="styles_pricing_regular__sizHW"><span
                                                             className="styles_pricing_strike__m89Q_">{product.price}</span><span
                                                             className="styles_pricing_special__qHGqh">{product.price_raw}</span></div>
                                                    </div>
                                                </div>
                                                <div className="styles_miniature_configs__T57kw"><template
                                                        data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                            </div>
                                        </div>
                                    </div>
  </SwiperSlide>
      ))}
    </Swiper>
                                    
                                </div>
                            </div>
                        </div>
                       
                        <div className="br_mb50">
                            <div className="styles_banner___0eKA"><span
                                     className="styles_banner_link__41bCY"><img className="styles_banner_image__Hl4R4"
                                            src="https://media.barakatfresh.ae/media/wysiwyg/home/mid-section/Eweborganic1.jpg" /></span>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div>
                                <div className="styles_myitems_head__WGXb2">
                                    <h2 className="styles_myitems_heading__hZrvZ">Organics</h2><span
                                     className="styles_myitems_headlink__MiemD"><a
                                            href="https://barakatfresh.ae/organics.html">Show all</a></span>
                                </div>
                                <div className="styles_myitems_list__UK74U">
                                <Swiper
      spaceBetween={50}
      slidesPerView={4}
      modules={[Navigation]}
      breakpoints={{
        340: {
            slidesPerView: 1,
        },
        440: {
            slidesPerView: 1,
        },
        540: {
            slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        970: {
          slidesPerView: 3,
        },
        971: {
            slidesPerView: 4,
          },
      }}
      navigation
      ref={swiperRef}
    >
     {productsOrganics.map((product,i) => (
  <SwiperSlide>
  <div className="styles_myitems_item__XSuD6">
                                        <div className="styles_miniature__bauyi">
                                            <div className="styles_miniature_thumb__pC4As">
                                                <div className="styles_miniature_badges__0wu3u">
                                                    <div className="styles_badges__FtItY"><span
                                                         className="styles_badges_item__I757N">Expiry - 31st
                                                            Jan</span></div>
                                                </div><span className="styles_miniature_percent__Y0sR7">59%</span>
                                               
                                                    <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                            src={product.image}
                                                            width="420" height="420" decoding="async" data-nimg="1"
                                                            loading="lazy" style={{color:"black"}} />
                                                     <div className="products__item__miniature">
                       

                        <div className={`products__item__add__btn main ${activeBtn.some(item => item === i) ? "active" : ""}`} onClick={() => {
                            setActiveBtn([...activeBtn, i])       
                        }}>
                            {activeBtn.some(item => item === i) && <span className='icon__btn__add' onClick={() =>{
                                product.quantity--
                                dispatch(minusQuantity(product))
                                dispatch(deleteItemBasket(product))
                            }}><Icon path={mdiMinus} size={1} color={'white'} /></span>}

                            {activeBtn.some(item => item === i) && <div className='product__quantity'>{product.quantity}</div>}
                            {activeBtn.some(item => item === i) ?
                                <span className='icon__btn__add' onClick={() => {
                                    product.quantity++
                                    dispatch(addBasket(product))
                                }}><Icon path={mdiPlus} size={1} color={'white'}  /></span> : <span className='icon__btn__add' onClick={() => {
                                    dispatch(addBasket(product))
                                }}><Icon path={mdiPlus} size={1} color={'white'}  /></span>
                            }
                            
                        </div>
                    </div>
                                                    </div>
                                                
                                            </div>
                                            <div className="styles_miniature_addcart__nrwcj">
                                                <div className="styles_addtocart__vPSiL">
                                                    <div className="styles_addtocart_container__R8iNc">
                                                        <div className="styles_addtocart_box__4cn_x">
                                                            <div
                                                             className="styles_addtocart_toggle__KC7th styles_increment__OgBkV styles_disabled__V450K">
                                                                <i className="mdi mdi-plus styles_addtocart_icon__TQaFF"
                                                                    style={{lineHeight:0}}></i>
                                                            </div>
                                                            <div className="styles_addtocart_textbox__nF655">
                                                                <span></span>
                                                            </div>
                                                            <div
                                                             className="styles_addtocart_toggle__KC7th styles_decrement__yGYLo">
                                                                <i className="mdi mdi-minus styles_addtocart_icon__TQaFF"
                                                                    style={{lineHeight:0}}></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="styles_miniature_origin__0XxsK"></div>
                                            <div>
                                                <div className="styles_miniature_name__NNCqq"><span
                                                     className="styles_miniature_name_text__9uWQ2">{product.name}</span></div>
                                                <div className="styles_miniature_price__5I4vS">
                                                    <div className="styles_pricing__k23Ku">
                                                        <div className="styles_pricing_regular__sizHW"><span
                                                             className="styles_pricing_strike__m89Q_">{product.price}</span><span
                                                             className="styles_pricing_special__qHGqh">{product.price_raw}</span></div>
                                                    </div>
                                                </div>
                                                <div className="styles_miniature_configs__T57kw"><template
                                                        data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                            </div>
                                        </div>
                                    </div>
  </SwiperSlide>
      ))}
    </Swiper>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div className="styles_banner___0eKA"><span
                                     className="styles_banner_link__41bCY"><img className="styles_banner_image__Hl4R4"
                                            src="https://media.barakatfresh.ae/media/wysiwyg/home/mid-section/EWBulkBuy.png" /></span>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div>
                                <div className="styles_myitems_head__WGXb2">
                                    <h2 className="styles_myitems_heading__hZrvZ">Bulk Buy</h2>
                                </div>
                                <div className="styles_myitems_list__UK74U">
                                <Swiper
      spaceBetween={50}
      slidesPerView={4}
      modules={[Navigation]}
      navigation
      breakpoints={{
        340: {
            slidesPerView: 1,
        },
        440: {
            slidesPerView: 1,
        },
        540: {
            slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        970: {
          slidesPerView: 3,
        },
        971: {
            slidesPerView: 4,
          },
      }}
      ref={swiperRef}
    >
      {productsBulk.map((product,i) => (
  <SwiperSlide>
  <div className="styles_myitems_item__XSuD6">
                                        <div className="styles_miniature__bauyi">
                                            <div className="styles_miniature_thumb__pC4As">
                                                <div className="styles_miniature_badges__0wu3u">
                                                    <div className="styles_badges__FtItY"><span
                                                         className="styles_badges_item__I757N">Expiry - 31st
                                                            Jan</span></div>
                                                </div><span className="styles_miniature_percent__Y0sR7">59%</span>
                                               
                                                    <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                            src={product.image}
                                                            width="420" height="420" decoding="async" data-nimg="1"
                                                            loading="lazy" style={{color:"black"}} />
                                                     <div className="products__item__miniature">
                       

                        <div className={`products__item__add__btn main ${activeBtn.some(item => item === i) ? "active" : ""}`} onClick={() => {
                            setActiveBtn([...activeBtn, i])       
                        }}>
                            {activeBtn.some(item => item === i) && <span className='icon__btn__add' onClick={() =>{
                                product.quantity--
                                dispatch(minusQuantity(product))
                                dispatch(deleteItemBasket(product))
                            }}><Icon path={mdiMinus} size={1} color={'white'} /></span>}

                            {activeBtn.some(item => item === i) && <div className='product__quantity'>{product.quantity}</div>}
                            {activeBtn.some(item => item === i) ?
                                <span className='icon__btn__add' onClick={() => {
                                    product.quantity++
                                    dispatch(addBasket(product))
                                }}><Icon path={mdiPlus} size={1} color={'white'}  /></span> : <span className='icon__btn__add' onClick={() => {
                                    dispatch(addBasket(product))
                                }}><Icon path={mdiPlus} size={1} color={'white'}  /></span>
                            }
                            
                        </div>
                    </div>
                                                    </div>
                                                
                                            </div>
                                            <div className="styles_miniature_addcart__nrwcj">
                                                <div className="styles_addtocart__vPSiL">
                                                    <div className="styles_addtocart_container__R8iNc">
                                                        <div className="styles_addtocart_box__4cn_x">
                                                            <div
                                                             className="styles_addtocart_toggle__KC7th styles_increment__OgBkV styles_disabled__V450K">
                                                                <i className="mdi mdi-plus styles_addtocart_icon__TQaFF"
                                                                    style={{lineHeight:0}}></i>
                                                            </div>
                                                            <div className="styles_addtocart_textbox__nF655">
                                                                <span></span>
                                                            </div>
                                                            <div
                                                             className="styles_addtocart_toggle__KC7th styles_decrement__yGYLo">
                                                                <i className="mdi mdi-minus styles_addtocart_icon__TQaFF"
                                                                    style={{lineHeight:0}}></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="styles_miniature_origin__0XxsK"></div>
                                            <div>
                                                <div className="styles_miniature_name__NNCqq"><span
                                                     className="styles_miniature_name_text__9uWQ2">{product.name}</span></div>
                                                <div className="styles_miniature_price__5I4vS">
                                                    <div className="styles_pricing__k23Ku">
                                                        <div className="styles_pricing_regular__sizHW"><span
                                                             className="styles_pricing_strike__m89Q_">{product.price}</span><span
                                                             className="styles_pricing_special__qHGqh">{product.price_raw}</span></div>
                                                    </div>
                                                </div>
                                                <div className="styles_miniature_configs__T57kw"><template
                                                        data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                            </div>
                                        </div>
                                    </div>
  </SwiperSlide>
      ))}

    </Swiper>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div className="styles_banner___0eKA"><span
                                     className="styles_banner_link__41bCY"><img className="styles_banner_image__Hl4R4"
                                            src="https://media.barakatfresh.ae/media/wysiwyg/home/mid-section/WebBannerAED-25E1.gif" /></span>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div>
                                <div className="styles_myitems_head__WGXb2">
                                    <h2 className="styles_myitems_heading__hZrvZ">Juice Pops</h2>
                                </div>
                                <div className="styles_myitems_list__UK74U">
                                <Swiper
      spaceBetween={50}
      slidesPerView={4}
      modules={[Navigation]}
      breakpoints={{
        340: {
            slidesPerView: 1,
        },
        440: {
            slidesPerView: 1,
        },
        540: {
            slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        970: {
          slidesPerView: 3,
        },
        971: {
            slidesPerView: 4,
          },
      }}
      navigation
      ref={swiperRef}
    >
     {productsJuices.map((product,i) => (
  <SwiperSlide>
  <div className="styles_myitems_item__XSuD6">
                                        <div className="styles_miniature__bauyi">
                                            <div className="styles_miniature_thumb__pC4As">
                                                <div className="styles_miniature_badges__0wu3u">
                                                    <div className="styles_badges__FtItY"><span
                                                         className="styles_badges_item__I757N">Expiry - 31st
                                                            Jan</span></div>
                                                </div><span className="styles_miniature_percent__Y0sR7">59%</span>
                                               
                                                    <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                            src={product.image}
                                                            width="420" height="420" decoding="async" data-nimg="1"
                                                            loading="lazy" style={{color:"black"}} />
                                                     <div className="products__item__miniature">
                       

                        <div className={`products__item__add__btn main ${activeBtn.some(item => item === i) ? "active" : ""}`} onClick={() => {
                            setActiveBtn([...activeBtn, i])       
                        }}>
                            {activeBtn.some(item => item === i) && <span className='icon__btn__add' onClick={() =>{
                                product.quantity--
                                dispatch(minusQuantity(product))
                                dispatch(deleteItemBasket(product))
                            }}><Icon path={mdiMinus} size={1} color={'white'} /></span>}

                            {activeBtn.some(item => item === i) && <div className='product__quantity'>{product.quantity}</div>}
                            {activeBtn.some(item => item === i) ?
                                <span className='icon__btn__add' onClick={() => {
                                    product.quantity++
                                    dispatch(addBasket(product))
                                }}><Icon path={mdiPlus} size={1} color={'white'}  /></span> : <span className='icon__btn__add' onClick={() => {
                                    dispatch(addBasket(product))
                                }}><Icon path={mdiPlus} size={1} color={'white'}  /></span>
                            }
                            
                        </div>
                    </div>
                                                    </div>
                                                
                                            </div>
                                            <div className="styles_miniature_addcart__nrwcj">
                                                <div className="styles_addtocart__vPSiL">
                                                    <div className="styles_addtocart_container__R8iNc">
                                                        <div className="styles_addtocart_box__4cn_x">
                                                            <div
                                                             className="styles_addtocart_toggle__KC7th styles_increment__OgBkV styles_disabled__V450K">
                                                                <i className="mdi mdi-plus styles_addtocart_icon__TQaFF"
                                                                    style={{lineHeight:0}}></i>
                                                            </div>
                                                            <div className="styles_addtocart_textbox__nF655">
                                                                <span></span>
                                                            </div>
                                                            <div
                                                             className="styles_addtocart_toggle__KC7th styles_decrement__yGYLo">
                                                                <i className="mdi mdi-minus styles_addtocart_icon__TQaFF"
                                                                    style={{lineHeight:0}}></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="styles_miniature_origin__0XxsK"></div>
                                            <div>
                                                <div className="styles_miniature_name__NNCqq"><span
                                                     className="styles_miniature_name_text__9uWQ2">{product.name}</span></div>
                                                <div className="styles_miniature_price__5I4vS">
                                                    <div className="styles_pricing__k23Ku">
                                                        <div className="styles_pricing_regular__sizHW"><span
                                                             className="styles_pricing_strike__m89Q_">{product.price}</span><span
                                                             className="styles_pricing_special__qHGqh">{product.price_raw}</span></div>
                                                    </div>
                                                </div>
                                                <div className="styles_miniature_configs__T57kw"><template
                                                        data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                            </div>
                                        </div>
                                    </div>
  </SwiperSlide>
      ))}
    </Swiper>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div className="styles_banner___0eKA"><span
                                     className="styles_banner_link__41bCY"><img className="styles_banner_image__Hl4R4"
                                            src="https://media.barakatfresh.ae/media/wysiwyg/Vip_revised.jpg" /></span>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div>
                                <div className="styles_myitems_head__WGXb2">
                                    <h2 className="styles_myitems_heading__hZrvZ">Eggs</h2>
                                </div>
                                <div className="styles_myitems_list__UK74U">
                                <Swiper
      spaceBetween={50}
      slidesPerView={4}
      modules={[Navigation]}
      navigation
      breakpoints={{
        340: {
            slidesPerView: 1,
        },
        440: {
            slidesPerView: 1,
        },
        540: {
            slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        970: {
          slidesPerView: 3,
        },
        971: {
            slidesPerView: 4,
          },
      }}
      ref={swiperRef}
    >
      {productsEggs.map((product,i) => (
  <SwiperSlide>
  <div className="styles_myitems_item__XSuD6">
                                        <div className="styles_miniature__bauyi">
                                            <div className="styles_miniature_thumb__pC4As">
                                                <div className="styles_miniature_badges__0wu3u">
                                                    <div className="styles_badges__FtItY"><span
                                                         className="styles_badges_item__I757N">Expiry - 31st
                                                            Jan</span></div>
                                                </div><span className="styles_miniature_percent__Y0sR7">59%</span>
                                               
                                                    <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                            src={product.image}
                                                            width="420" height="420" decoding="async" data-nimg="1"
                                                            loading="lazy" style={{color:"black"}} />
                                                     <div className="products__item__miniature">
                       

                        <div className={`products__item__add__btn main ${activeBtn.some(item => item === i) ? "active" : ""}`} onClick={() => {
                            setActiveBtn([...activeBtn, i])       
                        }}>
                            {activeBtn.some(item => item === i) && <span className='icon__btn__add' onClick={() =>{
                                product.quantity--
                                dispatch(minusQuantity(product))
                                dispatch(deleteItemBasket(product))
                            }}><Icon path={mdiMinus} size={1} color={'white'} /></span>}

                            {activeBtn.some(item => item === i) && <div className='product__quantity'>{product.quantity}</div>}
                            {activeBtn.some(item => item === i) ?
                                <span className='icon__btn__add' onClick={() => {
                                    product.quantity++
                                    dispatch(addBasket(product))
                                }}><Icon path={mdiPlus} size={1} color={'white'}  /></span> : <span className='icon__btn__add' onClick={() => {
                                    dispatch(addBasket(product))
                                }}><Icon path={mdiPlus} size={1} color={'white'}  /></span>
                            }
                            
                        </div>
                    </div>
                                                    </div>
                                                
                                            </div>
                                            <div className="styles_miniature_addcart__nrwcj">
                                                <div className="styles_addtocart__vPSiL">
                                                    <div className="styles_addtocart_container__R8iNc">
                                                        <div className="styles_addtocart_box__4cn_x">
                                                            <div
                                                             className="styles_addtocart_toggle__KC7th styles_increment__OgBkV styles_disabled__V450K">
                                                                <i className="mdi mdi-plus styles_addtocart_icon__TQaFF"
                                                                    style={{lineHeight:0}}></i>
                                                            </div>
                                                            <div className="styles_addtocart_textbox__nF655">
                                                                <span></span>
                                                            </div>
                                                            <div
                                                             className="styles_addtocart_toggle__KC7th styles_decrement__yGYLo">
                                                                <i className="mdi mdi-minus styles_addtocart_icon__TQaFF"
                                                                    style={{lineHeight:0}}></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="styles_miniature_origin__0XxsK"></div>
                                            <div>
                                                <div className="styles_miniature_name__NNCqq"><span
                                                     className="styles_miniature_name_text__9uWQ2">{product.name}</span></div>
                                                <div className="styles_miniature_price__5I4vS">
                                                    <div className="styles_pricing__k23Ku">
                                                        <div className="styles_pricing_regular__sizHW"><span
                                                             className="styles_pricing_strike__m89Q_">{product.price}</span><span
                                                             className="styles_pricing_special__qHGqh">{product.price_raw}</span></div>
                                                    </div>
                                                </div>
                                                <div className="styles_miniature_configs__T57kw"><template
                                                        data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                            </div>
                                        </div>
                                    </div>
  </SwiperSlide>
      ))}
    </Swiper>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div className="styles_banner___0eKA"><span
                                     className="styles_banner_link__41bCY"><img className="styles_banner_image__Hl4R4"
                                            src="https://media.barakatfresh.ae/media/wysiwyg/home/mid-section/EWfreshdip2.jpg" /></span>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div>
                                <div className="styles_myitems_head__WGXb2">
                                    <h2 className="styles_myitems_heading__hZrvZ">Ready to cook</h2>
                                </div>
                                <div className="styles_myitems_list__UK74U">
                                <Swiper
      spaceBetween={50}
      slidesPerView={4}
      modules={[Navigation]}
      breakpoints={{
        340: {
            slidesPerView: 1,
        },
        440: {
            slidesPerView: 1,
        },
        540: {
            slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        970: {
          slidesPerView: 3,
        },
        971: {
            slidesPerView: 4,
          },
      }}
      navigation
      ref={swiperRef}
    >
      {productsReadyToCook.map((product,i) => (
  <SwiperSlide>
  <div className="styles_myitems_item__XSuD6">
                                        <div className="styles_miniature__bauyi">
                                            <div className="styles_miniature_thumb__pC4As">
                                                <div className="styles_miniature_badges__0wu3u">
                                                    <div className="styles_badges__FtItY"><span
                                                         className="styles_badges_item__I757N">Expiry - 31st
                                                            Jan</span></div>
                                                </div><span className="styles_miniature_percent__Y0sR7">59%</span>
                                               
                                                    <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                            src={product.image}
                                                            width="420" height="420" decoding="async" data-nimg="1"
                                                            loading="lazy" style={{color:"black"}} />
                                                     <div className="products__item__miniature">
                       

                        <div className={`products__item__add__btn main ${activeBtn.some(item => item === i) ? "active" : ""}`} onClick={() => {
                            setActiveBtn([...activeBtn, i])       
                        }}>
                            {activeBtn.some(item => item === i) && <span className='icon__btn__add' onClick={() =>{
                                product.quantity--
                                dispatch(minusQuantity(product))
                                dispatch(deleteItemBasket(product))
                            }}><Icon path={mdiMinus} size={1} color={'white'} /></span>}

                            {activeBtn.some(item => item === i) && <div className='product__quantity'>{product.quantity}</div>}
                            {activeBtn.some(item => item === i) ?
                                <span className='icon__btn__add' onClick={() => {
                                    product.quantity++
                                    dispatch(addBasket(product))
                                }}><Icon path={mdiPlus} size={1} color={'white'}  /></span> : <span className='icon__btn__add' onClick={() => {
                                    dispatch(addBasket(product))
                                }}><Icon path={mdiPlus} size={1} color={'white'}  /></span>
                            }
                            
                        </div>
                    </div>
                                                    </div>
                                                
                                            </div>
                                            <div className="styles_miniature_addcart__nrwcj">
                                                <div className="styles_addtocart__vPSiL">
                                                    <div className="styles_addtocart_container__R8iNc">
                                                        <div className="styles_addtocart_box__4cn_x">
                                                            <div
                                                             className="styles_addtocart_toggle__KC7th styles_increment__OgBkV styles_disabled__V450K">
                                                                <i className="mdi mdi-plus styles_addtocart_icon__TQaFF"
                                                                    style={{lineHeight:0}}></i>
                                                            </div>
                                                            <div className="styles_addtocart_textbox__nF655">
                                                                <span></span>
                                                            </div>
                                                            <div
                                                             className="styles_addtocart_toggle__KC7th styles_decrement__yGYLo">
                                                                <i className="mdi mdi-minus styles_addtocart_icon__TQaFF"
                                                                    style={{lineHeight:0}}></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="styles_miniature_origin__0XxsK"></div>
                                            <div>
                                                <div className="styles_miniature_name__NNCqq"><span
                                                     className="styles_miniature_name_text__9uWQ2">{product.name}</span></div>
                                                <div className="styles_miniature_price__5I4vS">
                                                    <div className="styles_pricing__k23Ku">
                                                        <div className="styles_pricing_regular__sizHW"><span
                                                             className="styles_pricing_strike__m89Q_">{product.price}</span><span
                                                             className="styles_pricing_special__qHGqh">{product.price_raw}</span></div>
                                                    </div>
                                                </div>
                                                <div className="styles_miniature_configs__T57kw"><template
                                                        data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                            </div>
                                        </div>
                                    </div>
  </SwiperSlide>
      ))}
    
    </Swiper>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
               
            </div>
        </div>
        <div className="styles_popmodal__92B84 styles_expanded__Pevv5">
            <div className="styles_popmodal_overlay__wkwC0"></div>
            <div className="styles_popmodal_content__zsGqK"></div>
        </div><template data-dgst="DYNAMIC_SERVER_USAGE"></template>
        <div className="Toastify"></div>
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
    )
}
export default MainPage