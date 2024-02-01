import {useRef} from 'react'
import Header from "../../components/Header/header";
import Megamenu from '../../components/Megamenu/megamenu'
import { addBasket,minusQuantity,deleteItemBasket,selectTitle } from '../../store/basketSlice/basketSlice';
import { Navigation, Pagination,Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector,useDispatch } from 'react-redux'
import {useState,useEffect} from 'react'
import { NavLink } from "react-router-dom";
import data from '../../db/products.json'
import Icon from '@mdi/react';

import { mdiChevronLeft,mdiHomeOutline,mdiCartOutline,mdiMinus,mdiPlus,mdiFormatListBulleted   } from '@mdi/js';
import './style/style.scss'
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css';
const MainPage = () =>{
    const [isFixed, setIsFixed] = useState(false);

    const [productsBbq,setProductBbq] = useState(data.products_bbq.fruit_veg_skewers.slice(0, 15))
    const [productsGrabGo,setProductsGrabGo] = useState(data.products_grab_go.cut_fruits.slice(0, 15))
    const [productsIceCream,setProductsIceCream] = useState(data.products_ice_cream.all.slice(0, 15))
    const [prdocutsMeats,setProductMeats] = useState(data.products_meats.all.slice(0, 15))
    const [prdocutsPantry,setProductPantry] = useState(data.products_pantry.all.slice(0, 15))
    const [productsGiftingNeeds,setProductsGiftingNeeds] = useState(data.products_gifting_needs.all.slice(0, 15))
    const [productsOrganics, setproductsOrganics] = useState(data.products_organics.all.slice(0, 15))
    const [productsBulk, setProductsBulk] = useState(data.products.bulk.slice(0, 15))
    const [productsJuices, setProductsJuices] = useState(data.products_fresh_juices.all.slice(0, 15))
    const [productsEggs, setProductsEggs] = useState(data.products_dairy_eggs.eggs.slice(0, 15))
    const [productsReadyToCook, setProductsReadyToCook] = useState(data.products_grab_go.ready_meals.slice(0, 15))
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
        setProductBbq(productsBbq.map(obj => ({ ...obj, quantity: 1 })))      
        setProductsGrabGo(productsGrabGo.map(obj => ({ ...obj, quantity: 1 })))
        setProductsIceCream(productsIceCream.map(obj => ({ ...obj, quantity: 1 })))
        setProductMeats(prdocutsMeats.map(obj => ({ ...obj, quantity: 1 })))
        setProductPantry(prdocutsPantry.map(obj => ({ ...obj, quantity: 1 })))
        setProductsGiftingNeeds(productsGiftingNeeds.map(obj => ({ ...obj, quantity: 1 })))
        setproductsOrganics(productsOrganics.map(obj => ({ ...obj, quantity: 1 })))
        setProductsJuices(productsJuices.map(obj => ({ ...obj, quantity: 1 })))
        setProductsEggs(productsEggs.map(obj => ({ ...obj, quantity: 1 })))
        setProductsReadyToCook(productsReadyToCook.map(obj => ({ ...obj, quantity: 1 })))
        setProductsBulk(productsBulk.map(obj => ({ ...obj, quantity: 1 })))
      },[])

    const [activeCatigoriesModal,setActiveCatigoriesModal] = useState(false)
    return(
        <div id="__next">
            <div className={`${isFixed ? 'fixed' : ''}`}>
                <Header></Header>
                <Megamenu></Megamenu>  
            </div>
            
         <div className="fixed__modile">
         <div className="megamenu modile">
        </div>
         </div>

        <div className="styles_layout__XOnb3">
            <div className="styles_layout_content__z1Aw8">
                <div>
                    <div className="br_wrapper main br_mb10 br_mt20">
                    <div className="styles_heroslider__VyI6P">
                            <Swiper
                                spaceBetween={0}
                                slidesPerView={1}
                                modules={[Navigation]}
                                navigation
                                ref={swiperRef}
                               
                            >
                                <SwiperSlide>
                                <span
                                     className="styles_heroslider_link__oRd9B"><img alt=""
                                            src="https://media.barakatfresh.ae/media/codazon/slideshow/w/e/web_banner_-_steal_deal_-_nov2023_wk3_with_mandarin-01.jpg"
                                            width="1180" height="324" decoding="async" data-nimg="1"
                                            style={{color:"black"}} />
                                </span>
                                </SwiperSlide>
                                <SwiperSlide>
                                <span
                                     className="styles_heroslider_link__oRd9B"><img alt=""
                                            src="https://media.barakatfresh.ae/media/codazon/slideshow/b/r/breakfast_pots_-_online_banner-01_3_1.jpg"
                                            width="1180" height="324" decoding="async" data-nimg="1"
                                            style={{color:"black"}} /></span>
                                </SwiperSlide>
                                <SwiperSlide>
                               <span
                                     className="styles_heroslider_link__oRd9B"><img alt=""
                                            src="https://media.barakatfresh.ae/media/codazon/slideshow/m/i/microsoftteams-image_41__3.png"
                                            width="1180" height="324" decoding="async" data-nimg="1"
                                            style={{color:"black"}} /></span>
                                </SwiperSlide>
                                <SwiperSlide>
                               <span
                                     className="styles_heroslider_link__oRd9B"><img alt=""
                                            src="https://media.barakatfresh.ae/media/codazon/slideshow/1/7/1779256_bbqbanner_ads_1180x324_110823.jpg"
                                            width="1180" height="324" decoding="async" data-nimg="1"
                                            style={{color:"black"}} /></span>
                                </SwiperSlide>
                                <SwiperSlide>
                                <span
                                     className="styles_heroslider_link__oRd9B"><img alt=""
                                            src="https://media.barakatfresh.ae/media/codazon/slideshow/w/e/website_banner.jpg"
                                            width="1180" height="324" decoding="async" data-nimg="1"
                                            style={{color:"black"}} /></span>
                                </SwiperSlide>
                                <SwiperSlide>
                               <span
                                     className="styles_heroslider_link__oRd9B"><img alt=""
                                            src="https://media.barakatfresh.ae/media/codazon/slideshow/g/a/gaza_-_donation_drive-01_3_.jpg"
                                            width="1180" height="324" decoding="async" data-nimg="1"
                                            style={{color:"black"}} /></span>
                                </SwiperSlide>
                            </Swiper>
                           
                        </div>
                    <div className="styles_heroslider__VyI6P mobile">
                    <Swiper
                                spaceBetween={0}
                                slidesPerView={1}
                                
                                
                                ref={swiperRef}
                               
                            >
                                <SwiperSlide>
                                <span
                                     className="styles_heroslider_link__oRd9B"><img alt=""
                                            src="https://media.barakatfresh.ae/media/codazon/slideshow/b/a/barakat_fresh_-_banners_v2-07_1.jpg"
                                            width="1180" height="324" decoding="async" data-nimg="1"
                                            style={{color:"black"}} />
                                </span>
                                </SwiperSlide>
                                <SwiperSlide>
                                <span
                                     className="styles_heroslider_link__oRd9B"><img alt=""
                                            src="https://media.barakatfresh.ae/media/codazon/slideshow/a/p/app_banner_-_steal_deal_-_nov2023_wk3_with_mandarin-02_1.jpg"
                                            width="1180" height="324" decoding="async" data-nimg="1"
                                            style={{color:"black"}} /></span>
                                </SwiperSlide>
                                <SwiperSlide>
                               <span
                                     className="styles_heroslider_link__oRd9B"><img alt=""
                                            src="https://media.barakatfresh.ae/media/codazon/slideshow/b/r/breakfast_pots_-_online_banner-02_3_1_1.jpg"
                                            width="1180" height="324" decoding="async" data-nimg="1"
                                            style={{color:"black"}} /></span>
                                </SwiperSlide>
                                <SwiperSlide>
                               <span
                                     className="styles_heroslider_link__oRd9B"><img alt=""
                                            src="https://media.barakatfresh.ae/media/codazon/slideshow/m/i/microsoftteams-image_42__3.png"
                                            width="1180" height="324" decoding="async" data-nimg="1"
                                            style={{color:"black"}} /></span>
                                </SwiperSlide>
                                <SwiperSlide>
                                <span
                                     className="styles_heroslider_link__oRd9B"><img alt=""
                                            src="https://media.barakatfresh.ae/media/codazon/slideshow/1/7/1779256_bbqbanner_ads_750x388_110823_1.jpg"
                                            width="1180" height="324" decoding="async" data-nimg="1"
                                            style={{color:"black"}} /></span>
                                </SwiperSlide>
                                <SwiperSlide>
                               <span
                                     className="styles_heroslider_link__oRd9B"><img alt=""
                                            src="https://media.barakatfresh.ae/media/codazon/slideshow/k/e/keto_-_app_size_1.jpg"
                                            width="1180" height="324" decoding="async" data-nimg="1"
                                            style={{color:"black"}} /></span>
                                </SwiperSlide>
                            </Swiper>
                    </div>
                    </div>
                    <div className="styles_home_categories___yL3o mobile">
            <div>
                <div className="styles_catgrid_head__H4wu1"
                ><h2 className="styles_catgrid_heading__z6EX2">Shop by Category</h2>
                <span className="styles_catgrid_headlink__1T_e1">
                    <NavLink to={'/'}>Show all</NavLink>
                </span>
                </div>
                <div className="styles_catgrid_box__Ujrzq">
                    <ul className="styles_catgrid_list__jkfux">
                        <li className="styles_catgrid_item__68w_j">
                            <NavLink to={'/bbq'}>
                                <span className="styles_catgrid_link__uhC2z">
                                    <span className="styles_catgrid_image__J5oNv">
                                        <img alt="category" src="https://media.barakatfresh.ae/media/catalog/category/BBQ.png" width="200" height="200" decoding="async" data-nimg="1" loading="lazy" />
                                        </span>
                                        <span className="styles_catgrid_title__zoMaj">Bbq Range</span>
                                        </span>
                                        </NavLink>

                                        </li>
                                        <li className="styles_catgrid_item__68w_j">
                                            <NavLink to={'/fruits'}>
                                                <span className="styles_catgrid_link__uhC2z">
                                                    <span className="styles_catgrid_image__J5oNv">
                                                        <img alt="category" src="https://media.barakatfresh.ae/media/catalog/category/1457586_Fruits_091922_2.png" width="200" height="200" decoding="async" data-nimg="1" loading="lazy" /></span><span className="styles_catgrid_title__zoMaj">Fruits</span></span></NavLink></li><li className="styles_catgrid_item__68w_j"><NavLink to={'/vegetables'}><span className="styles_catgrid_link__uhC2z"><span className="styles_catgrid_image__J5oNv"><img alt="category" src="https://media.barakatfresh.ae/media/catalog/category/1457586_Vegetables_091922_1.png" width="200" height="200" decoding="async" data-nimg="1" loading="lazy" /></span><span className="styles_catgrid_title__zoMaj">Vegetables</span></span></NavLink></li><li className="styles_catgrid_item__68w_j"><NavLink to={'/fresh_juices'}><span className="styles_catgrid_link__uhC2z"><span className="styles_catgrid_image__J5oNv"><img alt="category" src="https://media.barakatfresh.ae/media/catalog/category/1457586_Juices_091922_1_4.png" width="200" height="200" decoding="async" data-nimg="1" loading="lazy" /></span><span className="styles_catgrid_title__zoMaj">Fresh Juices</span></span></NavLink></li><li className="styles_catgrid_item__68w_j"><NavLink to={'/meats'}><span className="styles_catgrid_link__uhC2z"><span className="styles_catgrid_image__J5oNv"><img alt="category" src="https://media.barakatfresh.ae/media/catalog/category/1457586_Meats_091922_1.png" width="200" height="200" decoding="async" data-nimg="1" loading="lazy" /></span><span className="styles_catgrid_title__zoMaj">Meats</span></span></NavLink></li><li className="styles_catgrid_item__68w_j"><NavLink to={'/grab_to_go'}><span className="styles_catgrid_link__uhC2z"><span className="styles_catgrid_image__J5oNv"><img alt="category" src="https://media.barakatfresh.ae/media/catalog/category/1457586_ReadyToEat_091922_1.png" width="200" height="200" decoding="async" data-nimg="1" loading="lazy" /></span><span className="styles_catgrid_title__zoMaj">Grab N Go</span></span></NavLink></li><li className="styles_catgrid_item__68w_j"><NavLink to={'/gifting_needs'}><span className="styles_catgrid_link__uhC2z"><span className="styles_catgrid_image__J5oNv"><img alt="category" src="https://media.barakatfresh.ae/media/catalog/category/1457586_GiftBaskets_092222_2.png" width="200" height="200" decoding="async" data-nimg="1" loading="lazy" /></span><span className="styles_catgrid_title__zoMaj">Gifting &amp; Party Needs</span></span></NavLink></li><li className="styles_catgrid_item__68w_j"><NavLink to={'/organics'}><span className="styles_catgrid_link__uhC2z"><span className="styles_catgrid_image__J5oNv"><img alt="category" src="https://media.barakatfresh.ae/media/catalog/category/1457586_Organics_091922_3_2.png" width="200" height="200" decoding="async" data-nimg="1" loading="lazy" /></span><span className="styles_catgrid_title__zoMaj">Organics</span></span></NavLink></li><li className="styles_catgrid_item__68w_j"><NavLink to={'/bakery'}><span className="styles_catgrid_link__uhC2z"><span className="styles_catgrid_image__J5oNv"><img alt="category" src="https://media.barakatfresh.ae/media/catalog/category/1457586_Bakery_091922_2.png" width="200" height="200" decoding="async" data-nimg="1" loading="lazy" /></span><span className="styles_catgrid_title__zoMaj">Bakery</span></span></NavLink></li><li className="styles_catgrid_item__68w_j"><NavLink to={'/dairy_eggs'}><span className="styles_catgrid_link__uhC2z"><span className="styles_catgrid_image__J5oNv"><img alt="category" src="https://media.barakatfresh.ae/media/catalog/category/1457586_Dairy_Eggs_091922_1.png" width="200" height="200" decoding="async" data-nimg="1" loading="lazy" /></span><span className="styles_catgrid_title__zoMaj">Dairy &amp; Eggs</span></span></NavLink></li><li className="styles_catgrid_item__68w_j"><NavLink to={'/ice_cream'}><span className="styles_catgrid_link__uhC2z"><span className="styles_catgrid_image__J5oNv"><img alt="category" src="https://media.barakatfresh.ae/media/catalog/category/1457586_Icecreams_091922_3.png" width="200" height="200" decoding="async" data-nimg="1" loading="lazy" /></span><span className="styles_catgrid_title__zoMaj">Ice Cream</span></span></NavLink></li><li className="styles_catgrid_item__68w_j"><NavLink to={'/pantry'}><span className="styles_catgrid_link__uhC2z"><span className="styles_catgrid_image__J5oNv"><img alt="category" src="https://media.barakatfresh.ae/media/catalog/category/1457586_Pantry_091922_1.png" width="200" height="200" decoding="async" data-nimg="1" loading="lazy" /></span><span className="styles_catgrid_title__zoMaj">Pantry</span></span></NavLink></li></ul></div></div></div>
                    <div className="br_wrapper">
                        
                        <div className="br_mb50">
                            <div className="styles_banner___0eKA "><span
                                    className="styles_banner_link__41bCY"><img className="styles_banner_image__Hl4R4"
                                            src="https://media.barakatfresh.ae/media/wysiwyg/Express_Delivery_90_Mins_-_1800x75_Link_V2_1_.jpg" /></span>
                            </div>
                            <div className="styles_banner___0eKA mobile"><span
                                    className="styles_banner_link__41bCY"><img className="styles_banner_image__Hl4R4"
                                            src="https://media.barakatfresh.ae/media/wysiwyg/Express_Delivery_90_Mins_-_750x130_Link_V2_1_.jpg" /></span>
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
                                                </div>
                                                {product.percent_off &&  <span className="styles_miniature_percent__Y0sR7">{product.percent_off}</span>}
                                           

                                               
                                                    <div className="styles_miniature_image__XbgdR">
                                                        <NavLink to={`/${product.id}`} state={{ product }}

                                                        >
                                                        <img alt="product"
                                                            src={product.image}
                                                            width="420" height="420" decoding="async" data-nimg="1"
                                                            loading="lazy" style={{color:"black"}} />
                                                        </NavLink>
                                                     
                                                    
                                                     <div className="products__item__miniature">
                       

                        <div className={`products__item__add__btn main ${activeBtn.some(item => item === product.id) ? "active" : ""}`} onClick={() => {
                            setActiveBtn([...activeBtn, product.id])      
                             
                        }}>
                            {activeBtn.some(item => item === product.id) && <span className='icon__btn__add' onClick={() =>{
                                if(product.quantity !== 0){
                                    product.quantity--
                                    dispatch(minusQuantity(product))
                                    dispatch(deleteItemBasket(product))
                                    return
                                }
                            }}><Icon path={mdiMinus} size={1} color={'white'} /></span>}

                            {activeBtn.some(item => item === product.id) && <div className='product__quantity'>{product.quantity}</div>}
                            {activeBtn.some(item => item === product.id) ?
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
                                                    {product.special_price_raw ? 
                                                        <div className="styles_pricing_regular__sizHW"><span
                                                        className="styles_pricing_strike__m89Q_">{product.price}</span><span
                                                        className="styles_pricing_special__qHGqh">AED {product.special_price_raw}</span></div>
                                                        :  <div className="styles_pricing_regular__sizHW"><span
                                                        className="styles_pricing_regular__sizHW">{product.price}</span></div>
                                                    }
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
                                <div className="styles_myitems_list__UK74U mobile">
     
      {productsBbq.map((product,i) => (
 
  <div className="styles_myitems_item__XSuD6">
                                        <div className="styles_miniature__bauyi">
                                            <div className="styles_miniature_thumb__pC4As">
                                                <div className="styles_miniature_badges__0wu3u">
                                                    <div className="styles_badges__FtItY"><span
                                                         className="styles_badges_item__I757N">Expiry - 31st
                                                            Jan</span></div>
                                                </div>
                                                {product.percent_off &&  <span className="styles_miniature_percent__Y0sR7">{product.percent_off}</span>}
                                           

                                               
                                                    <div className="styles_miniature_image__XbgdR">
                                                        <NavLink to={`/${product.id}`} state={{ product }}

                                                        >
                                                        <img alt="product"
                                                            src={product.image}
                                                            width="420" height="420" decoding="async" data-nimg="1"
                                                            loading="lazy" style={{color:"black"}} />
                                                        </NavLink>
                                                     
                                                    
                                                        <div className="products__item__miniature">
                       

                       <div className={`products__item__add__btn main ${activeBtn.some(item => item === product.id) ? "active" : ""}`} onClick={() => {
                           setActiveBtn([...activeBtn, product.id])      
                            
                       }}>
                           {activeBtn.some(item => item === product.id) && <span className='icon__btn__add' onClick={() =>{
                               if(product.quantity !== 0){
                                   product.quantity--
                                   dispatch(minusQuantity(product))
                                   dispatch(deleteItemBasket(product))
                                   return
                               }
                           }}><Icon path={mdiMinus} size={1} color={'white'} /></span>}

                           {activeBtn.some(item => item === product.id) && <div className='product__quantity'>{product.quantity}</div>}
                           {activeBtn.some(item => item === product.id) ?
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
                                                    {product.special_price_raw ? 
                                                        <div className="styles_pricing_regular__sizHW"><span
                                                        className="styles_pricing_strike__m89Q_">{product.price}</span><span
                                                        className="styles_pricing_special__qHGqh">AED {product.special_price_raw}</span></div>
                                                        :  <div className="styles_pricing_regular__sizHW"><span
                                                        className="styles_pricing_regular__sizHW">{product.price}</span></div>
                                                    }
                                                    </div>
                                                </div>
                                                <div className="styles_miniature_configs__T57kw"><template
                                                        data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                            </div>
                                        </div>
                                    </div>
 
      ))}
    
   
                                </div>
                                
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div className="styles_banner___0eKA"><span
                                     className="styles_banner_link__41bCY"><img className="styles_banner_image__Hl4R4"
                                            src="https://media.barakatfresh.ae/media/codazon/slideshow/m/i/microsoftteams-image_27_.png" /></span>
                            </div>
                            <div className="styles_banner___0eKA mobile"><span
                                     className="styles_banner_link__41bCY"><img className="styles_banner_image__Hl4R4"
                                            src="https://media.barakatfresh.ae/media/codazon/slideshow/m/i/microsoftteams-image_41__3.png" /></span>
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
                                                </div>{product.percent_off &&  <span className="styles_miniature_percent__Y0sR7">{product.percent_off}</span>}
                                               
                                                    <div className="styles_miniature_image__XbgdR">
                                                    <NavLink to={`/${product.id}`} state={{ product }}

>
<img alt="product"
    src={product.image}
    width="420" height="420" decoding="async" data-nimg="1"
    loading="lazy" style={{color:"black"}} />
</NavLink>
<div className="products__item__miniature">
                       

                       <div className={`products__item__add__btn main ${activeBtn.some(item => item === product.id) ? "active" : ""}`} onClick={() => {
                           setActiveBtn([...activeBtn, product.id])      
                            
                       }}>
                           {activeBtn.some(item => item === product.id) && <span className='icon__btn__add' onClick={() =>{
                               if(product.quantity !== 0){
                                   product.quantity--
                                   dispatch(minusQuantity(product))
                                   dispatch(deleteItemBasket(product))
                                   return
                               }
                           }}><Icon path={mdiMinus} size={1} color={'white'} /></span>}

                           {activeBtn.some(item => item === product.id) && <div className='product__quantity'>{product.quantity}</div>}
                           {activeBtn.some(item => item === product.id) ?
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
                                                    {product.special_price_raw ? 
                                                        <div className="styles_pricing_regular__sizHW"><span
                                                        className="styles_pricing_strike__m89Q_">{product.price}</span><span
                                                        className="styles_pricing_special__qHGqh">AED {product.special_price_raw}</span></div>
                                                        :  <div className="styles_pricing_regular__sizHW"><span
                                                        className="styles_pricing_regular__sizHW">{product.price}</span></div>
                                                    }
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
                                <div className="styles_myitems_list__UK74U mobile">
                                {productsGrabGo.map((product,i) => (
  <div className="styles_myitems_item__XSuD6">
                                        <div className="styles_miniature__bauyi">
                                            <div className="styles_miniature_thumb__pC4As">
                                                <div className="styles_miniature_badges__0wu3u">
                                                    <div className="styles_badges__FtItY"><span
                                                         className="styles_badges_item__I757N">Expiry - 31st
                                                            Jan</span></div>
                                                </div>{product.percent_off &&  <span className="styles_miniature_percent__Y0sR7">{product.percent_off}</span>}
                                               
                                                    <div className="styles_miniature_image__XbgdR">
                                                    <NavLink to={`/${product.id}`} state={{ product }}

>
<img alt="product"
    src={product.image}
    width="420" height="420" decoding="async" data-nimg="1"
    loading="lazy" style={{color:"black"}} />
</NavLink>
<div className="products__item__miniature">
                       

                       <div className={`products__item__add__btn main ${activeBtn.some(item => item === product.id) ? "active" : ""}`} onClick={() => {
                           setActiveBtn([...activeBtn, product.id])      
                            
                       }}>
                           {activeBtn.some(item => item === product.id) && <span className='icon__btn__add' onClick={() =>{
                               if(product.quantity !== 0){
                                   product.quantity--
                                   dispatch(minusQuantity(product))
                                   dispatch(deleteItemBasket(product))
                                   return
                               }
                           }}><Icon path={mdiMinus} size={1} color={'white'} /></span>}

                           {activeBtn.some(item => item === product.id) && <div className='product__quantity'>{product.quantity}</div>}
                           {activeBtn.some(item => item === product.id) ?
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
                                                    {product.special_price_raw ? 
                                                        <div className="styles_pricing_regular__sizHW"><span
                                                        className="styles_pricing_strike__m89Q_">{product.price}</span><span
                                                        className="styles_pricing_special__qHGqh">AED {product.special_price_raw}</span></div>
                                                        :  <div className="styles_pricing_regular__sizHW"><span
                                                        className="styles_pricing_regular__sizHW">{product.price}</span></div>
                                                    }
                                                    </div>
                                                </div>
                                                <div className="styles_miniature_configs__T57kw"><template
                                                        data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                            </div>
                                        </div>
                                    </div>
  
      ))}
                                </div>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div className="styles_banner___0eKA"><span
                                     className="styles_banner_link__41bCY"><img className="styles_banner_image__Hl4R4"
                                            src="https://media.barakatfresh.ae/media/catalog/tmp/category/Best_Food_-_Unlock_Flavorful_Savings_-_Online_Banner-01.jpg" /></span>
                            </div>

                            <div className="styles_banner___0eKA mobile"><span
                                     className="styles_banner_link__41bCY"><img className="styles_banner_image__Hl4R4"
                                            src="https://media.barakatfresh.ae/media/wysiwyg/home/mid-section/Eweborganic1.jpg" /></span>
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
                                                </div>{product.percent_off &&  <span className="styles_miniature_percent__Y0sR7">{product.percent_off}</span>}
                                               
                                                    <div className="styles_miniature_image__XbgdR">
                                                    <NavLink to={`/${product.id}`} state={{ product }}

>
<img alt="product"
    src={product.image}
    width="420" height="420" decoding="async" data-nimg="1"
    loading="lazy" style={{color:"black"}} />
</NavLink>
<div className="products__item__miniature">
                       

                       <div className={`products__item__add__btn main ${activeBtn.some(item => item === product.id) ? "active" : ""}`} onClick={() => {
                           setActiveBtn([...activeBtn, product.id])      
                            
                       }}>
                           {activeBtn.some(item => item === product.id) && <span className='icon__btn__add' onClick={() =>{
                               if(product.quantity !== 0){
                                   product.quantity--
                                   dispatch(minusQuantity(product))
                                   dispatch(deleteItemBasket(product))
                                   return
                               }
                           }}><Icon path={mdiMinus} size={1} color={'white'} /></span>}

                           {activeBtn.some(item => item === product.id) && <div className='product__quantity'>{product.quantity}</div>}
                           {activeBtn.some(item => item === product.id) ?
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
                                                    {product.special_price_raw ? 
                                                        <div className="styles_pricing_regular__sizHW"><span
                                                        className="styles_pricing_strike__m89Q_">{product.price}</span><span
                                                        className="styles_pricing_special__qHGqh">AED {product.special_price_raw}</span></div>
                                                        :  <div className="styles_pricing_regular__sizHW"><span
                                                        className="styles_pricing_regular__sizHW">{product.price}</span></div>
                                                    }
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
                                <div className="styles_myitems_list__UK74U mobile">
                                {productsIceCream.map((product,i) => (
  <div className="styles_myitems_item__XSuD6">
                                        <div className="styles_miniature__bauyi">
                                            <div className="styles_miniature_thumb__pC4As">
                                                <div className="styles_miniature_badges__0wu3u">
                                                    <div className="styles_badges__FtItY"><span
                                                         className="styles_badges_item__I757N">Expiry - 31st
                                                            Jan</span></div>
                                                </div>{product.percent_off &&  <span className="styles_miniature_percent__Y0sR7">{product.percent_off}</span>}
                                               
                                                    <div className="styles_miniature_image__XbgdR">
                                                    <NavLink to={`/${product.id}`} state={{ product }}

>
<img alt="product"
    src={product.image}
    width="420" height="420" decoding="async" data-nimg="1"
    loading="lazy" style={{color:"black"}} />
</NavLink>
<div className="products__item__miniature">
                       

                       <div className={`products__item__add__btn main ${activeBtn.some(item => item === product.id) ? "active" : ""}`} onClick={() => {
                           setActiveBtn([...activeBtn, product.id])      
                            
                       }}>
                           {activeBtn.some(item => item === product.id) && <span className='icon__btn__add' onClick={() =>{
                               if(product.quantity !== 0){
                                   product.quantity--
                                   dispatch(minusQuantity(product))
                                   dispatch(deleteItemBasket(product))
                                   return
                               }
                           }}><Icon path={mdiMinus} size={1} color={'white'} /></span>}

                           {activeBtn.some(item => item === product.id) && <div className='product__quantity'>{product.quantity}</div>}
                           {activeBtn.some(item => item === product.id) ?
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
                                                    {product.special_price_raw ? 
                                                        <div className="styles_pricing_regular__sizHW"><span
                                                        className="styles_pricing_strike__m89Q_">{product.price}</span><span
                                                        className="styles_pricing_special__qHGqh">AED {product.special_price_raw}</span></div>
                                                        :  <div className="styles_pricing_regular__sizHW"><span
                                                        className="styles_pricing_regular__sizHW">{product.price}</span></div>
                                                    }
                                                    </div>
                                                </div>
                                                <div className="styles_miniature_configs__T57kw"><template
                                                        data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                            </div>
                                        </div>
                                    </div>
  
      ))}
                                </div>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div className="styles_banner___0eKA">
                             <span
                                     className="styles_banner_link__41bCY"><img className="styles_banner_image__Hl4R4"
                                            src="https://media.barakatfresh.ae/media/wysiwyg/Premium_Meat_-_Banner_1180x324_2_100523.jpg" /></span>
                            </div>

                            <div className="styles_banner___0eKA mobile">
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
                                                </div>{product.percent_off &&  <span className="styles_miniature_percent__Y0sR7">{product.percent_off}</span>}
                                               
                                                    <div className="styles_miniature_image__XbgdR">
                                                    <NavLink to={`/${product.id}`} state={{ product }}

>
<img alt="product"
    src={product.image}
    width="420" height="420" decoding="async" data-nimg="1"
    loading="lazy" style={{color:"black"}} />
</NavLink>
<div className="products__item__miniature">
                       

                       <div className={`products__item__add__btn main ${activeBtn.some(item => item === product.id) ? "active" : ""}`} onClick={() => {
                           setActiveBtn([...activeBtn, product.id])      
                            
                       }}>
                           {activeBtn.some(item => item === product.id) && <span className='icon__btn__add' onClick={() =>{
                               if(product.quantity !== 0){
                                   product.quantity--
                                   dispatch(minusQuantity(product))
                                   dispatch(deleteItemBasket(product))
                                   return
                               }
                           }}><Icon path={mdiMinus} size={1} color={'white'} /></span>}

                           {activeBtn.some(item => item === product.id) && <div className='product__quantity'>{product.quantity}</div>}
                           {activeBtn.some(item => item === product.id) ?
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
                                                    {product.special_price_raw ? 
                                                        <div className="styles_pricing_regular__sizHW"><span
                                                        className="styles_pricing_strike__m89Q_">{product.price}</span><span
                                                        className="styles_pricing_special__qHGqh">AED {product.special_price_raw}</span></div>
                                                        :  <div className="styles_pricing_regular__sizHW"><span
                                                        className="styles_pricing_regular__sizHW">{product.price}</span></div>
                                                    }
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
                                <div className="styles_myitems_list__UK74U mobile">
                                {prdocutsMeats.map((product,i) => (
  <div className="styles_myitems_item__XSuD6">
                                        <div className="styles_miniature__bauyi">
                                            <div className="styles_miniature_thumb__pC4As">
                                                <div className="styles_miniature_badges__0wu3u">
                                                    <div className="styles_badges__FtItY"><span
                                                         className="styles_badges_item__I757N">Expiry - 31st
                                                            Jan</span></div>
                                                </div>{product.percent_off &&  <span className="styles_miniature_percent__Y0sR7">{product.percent_off}</span>}
                                               
                                                    <div className="styles_miniature_image__XbgdR">
                                                    <NavLink to={`/${product.id}`} state={{ product }}

>
<img alt="product"
    src={product.image}
    width="420" height="420" decoding="async" data-nimg="1"
    loading="lazy" style={{color:"black"}} />
</NavLink>
<div className="products__item__miniature">
                       

                       <div className={`products__item__add__btn main ${activeBtn.some(item => item === product.id) ? "active" : ""}`} onClick={() => {
                           setActiveBtn([...activeBtn, product.id])      
                            
                       }}>
                           {activeBtn.some(item => item === product.id) && <span className='icon__btn__add' onClick={() =>{
                               if(product.quantity !== 0){
                                   product.quantity--
                                   dispatch(minusQuantity(product))
                                   dispatch(deleteItemBasket(product))
                                   return
                               }
                           }}><Icon path={mdiMinus} size={1} color={'white'} /></span>}

                           {activeBtn.some(item => item === product.id) && <div className='product__quantity'>{product.quantity}</div>}
                           {activeBtn.some(item => item === product.id) ?
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
                                                    {product.special_price_raw ? 
                                                        <div className="styles_pricing_regular__sizHW"><span
                                                        className="styles_pricing_strike__m89Q_">{product.price}</span><span
                                                        className="styles_pricing_special__qHGqh">AED {product.special_price_raw}</span></div>
                                                        :  <div className="styles_pricing_regular__sizHW"><span
                                                        className="styles_pricing_regular__sizHW">{product.price}</span></div>
                                                    }
                                                    </div>
                                                </div>
                                                <div className="styles_miniature_configs__T57kw"><template
                                                        data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                            </div>
                                        </div>
                                    </div>
  
      ))}
                                </div>
                            </div>
                        </div>
                        
                        <div className="br_mb50">
                            <div className="styles_banner___0eKA"><span
                                     className="styles_banner_link__41bCY"><img className="styles_banner_image__Hl4R4"
                                            src="https://media.barakatfresh.ae/media/wysiwyg/Family_Size_-_Banner_v2-01.jpg" /></span>
                            </div>
                            <div className="styles_banner___0eKA mobile">
                             <span
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
                                                </div>{product.percent_off &&  <span className="styles_miniature_percent__Y0sR7">{product.percent_off}</span>}
                                               
                                                    <div className="styles_miniature_image__XbgdR">
                                                    <NavLink to={`/${product.id}`} state={{ product }}

>
<img alt="product"
    src={product.image}
    width="420" height="420" decoding="async" data-nimg="1"
    loading="lazy" style={{color:"black"}} />
</NavLink>
<div className="products__item__miniature">
                       

                       <div className={`products__item__add__btn main ${activeBtn.some(item => item === product.id) ? "active" : ""}`} onClick={() => {
                           setActiveBtn([...activeBtn, product.id])      
                            
                       }}>
                           {activeBtn.some(item => item === product.id) && <span className='icon__btn__add' onClick={() =>{
                               if(product.quantity !== 0){
                                   product.quantity--
                                   dispatch(minusQuantity(product))
                                   dispatch(deleteItemBasket(product))
                                   return
                               }
                           }}><Icon path={mdiMinus} size={1} color={'white'} /></span>}

                           {activeBtn.some(item => item === product.id) && <div className='product__quantity'>{product.quantity}</div>}
                           {activeBtn.some(item => item === product.id) ?
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
                                                    {product.special_price_raw ? 
                                                        <div className="styles_pricing_regular__sizHW"><span
                                                        className="styles_pricing_strike__m89Q_">{product.price}</span><span
                                                        className="styles_pricing_special__qHGqh">AED {product.special_price_raw}</span></div>
                                                        :  <div className="styles_pricing_regular__sizHW"><span
                                                        className="styles_pricing_regular__sizHW">{product.price}</span></div>
                                                    }
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
                                <div className="styles_myitems_list__UK74U mobile">
                                {prdocutsPantry.map((product,i) => (
  <div className="styles_myitems_item__XSuD6">
                                        <div className="styles_miniature__bauyi">
                                            <div className="styles_miniature_thumb__pC4As">
                                                <div className="styles_miniature_badges__0wu3u">
                                                    <div className="styles_badges__FtItY"><span
                                                         className="styles_badges_item__I757N">Expiry - 31st
                                                            Jan</span></div>
                                                </div>{product.percent_off &&  <span className="styles_miniature_percent__Y0sR7">{product.percent_off}</span>}
                                               
                                                    <div className="styles_miniature_image__XbgdR">
                                                    <NavLink to={`/${product.id}`} state={{ product }}

>
<img alt="product"
    src={product.image}
    width="420" height="420" decoding="async" data-nimg="1"
    loading="lazy" style={{color:"black"}} />
</NavLink>
<div className="products__item__miniature">
                       

                       <div className={`products__item__add__btn main ${activeBtn.some(item => item === product.id) ? "active" : ""}`} onClick={() => {
                           setActiveBtn([...activeBtn, product.id])      
                            
                       }}>
                           {activeBtn.some(item => item === product.id) && <span className='icon__btn__add' onClick={() =>{
                               if(product.quantity !== 0){
                                   product.quantity--
                                   dispatch(minusQuantity(product))
                                   dispatch(deleteItemBasket(product))
                                   return
                               }
                           }}><Icon path={mdiMinus} size={1} color={'white'} /></span>}

                           {activeBtn.some(item => item === product.id) && <div className='product__quantity'>{product.quantity}</div>}
                           {activeBtn.some(item => item === product.id) ?
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
                                                    {product.special_price_raw ? 
                                                        <div className="styles_pricing_regular__sizHW"><span
                                                        className="styles_pricing_strike__m89Q_">{product.price}</span><span
                                                        className="styles_pricing_special__qHGqh">AED {product.special_price_raw}</span></div>
                                                        :  <div className="styles_pricing_regular__sizHW"><span
                                                        className="styles_pricing_regular__sizHW">{product.price}</span></div>
                                                    }
                                                    </div>
                                                </div>
                                                <div className="styles_miniature_configs__T57kw"><template
                                                        data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                            </div>
                                        </div>
                                    </div>
  
      ))}
                                </div>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div className="styles_banner___0eKA"><span
                                     className="styles_banner_link__41bCY"><img className="styles_banner_image__Hl4R4"
                                            src="https://media.barakatfresh.ae/media/app/ExpressDelivery-90-mins-web.jpg" /></span>
                            </div>
                            <div className="styles_banner___0eKA mobile">
                             <span
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
                                                </div>{product.percent_off &&  <span className="styles_miniature_percent__Y0sR7">{product.percent_off}</span>}
                                               
                                                    <div className="styles_miniature_image__XbgdR">
                                                    <NavLink to={`/${product.id}`} state={{ product }}

>
<img alt="product"
    src={product.image}
    width="420" height="420" decoding="async" data-nimg="1"
    loading="lazy" style={{color:"black"}} />
</NavLink>
<div className="products__item__miniature">
                       

                       <div className={`products__item__add__btn main ${activeBtn.some(item => item === product.id) ? "active" : ""}`} onClick={() => {
                           setActiveBtn([...activeBtn, product.id])      
                            
                       }}>
                           {activeBtn.some(item => item === product.id) && <span className='icon__btn__add' onClick={() =>{
                               if(product.quantity !== 0){
                                   product.quantity--
                                   dispatch(minusQuantity(product))
                                   dispatch(deleteItemBasket(product))
                                   return
                               }
                           }}><Icon path={mdiMinus} size={1} color={'white'} /></span>}

                           {activeBtn.some(item => item === product.id) && <div className='product__quantity'>{product.quantity}</div>}
                           {activeBtn.some(item => item === product.id) ?
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
                                                    {product.special_price_raw ? 
                                                        <div className="styles_pricing_regular__sizHW"><span
                                                        className="styles_pricing_strike__m89Q_">{product.price}</span><span
                                                        className="styles_pricing_special__qHGqh">AED {product.special_price_raw}</span></div>
                                                        :  <div className="styles_pricing_regular__sizHW"><span
                                                        className="styles_pricing_regular__sizHW">{product.price}</span></div>
                                                    }
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
                                <div className="styles_myitems_list__UK74U mobile">
                                {productsGiftingNeeds.map((product,i) => (
  <div className="styles_myitems_item__XSuD6">
                                        <div className="styles_miniature__bauyi">
                                            <div className="styles_miniature_thumb__pC4As">
                                                <div className="styles_miniature_badges__0wu3u">
                                                    <div className="styles_badges__FtItY"><span
                                                         className="styles_badges_item__I757N">Expiry - 31st
                                                            Jan</span></div>
                                                </div>{product.percent_off &&  <span className="styles_miniature_percent__Y0sR7">{product.percent_off}</span>}
                                               
                                                    <div className="styles_miniature_image__XbgdR">
                                                    <NavLink to={`/${product.id}`} state={{ product }}

>
<img alt="product"
    src={product.image}
    width="420" height="420" decoding="async" data-nimg="1"
    loading="lazy" style={{color:"black"}} />
</NavLink>
<div className="products__item__miniature">
                       

                       <div className={`products__item__add__btn main ${activeBtn.some(item => item === product.id) ? "active" : ""}`} onClick={() => {
                           setActiveBtn([...activeBtn, product.id])      
                            
                       }}>
                           {activeBtn.some(item => item === product.id) && <span className='icon__btn__add' onClick={() =>{
                               if(product.quantity !== 0){
                                   product.quantity--
                                   dispatch(minusQuantity(product))
                                   dispatch(deleteItemBasket(product))
                                   return
                               }
                           }}><Icon path={mdiMinus} size={1} color={'white'} /></span>}

                           {activeBtn.some(item => item === product.id) && <div className='product__quantity'>{product.quantity}</div>}
                           {activeBtn.some(item => item === product.id) ?
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
                                                    {product.special_price_raw ? 
                                                        <div className="styles_pricing_regular__sizHW"><span
                                                        className="styles_pricing_strike__m89Q_">{product.price}</span><span
                                                        className="styles_pricing_special__qHGqh">AED {product.special_price_raw}</span></div>
                                                        :  <div className="styles_pricing_regular__sizHW"><span
                                                        className="styles_pricing_regular__sizHW">{product.price}</span></div>
                                                    }
                                                    </div>
                                                </div>
                                                <div className="styles_miniature_configs__T57kw"><template
                                                        data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                            </div>
                                        </div>
                                    </div>
  
      ))}
                                </div>
                            </div>
                        </div>
                       
                        <div className="br_mb50">
                            <div className="styles_banner___0eKA"><span
                                     className="styles_banner_link__41bCY"><img className="styles_banner_image__Hl4R4"
                                            src="https://media.barakatfresh.ae/media/wysiwyg/home/mid-section/Eweborganic1.jpg" /></span>
                            </div>

                            <div className="styles_banner___0eKA mobile">
                             <span
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
                                                </div>{product.percent_off &&  <span className="styles_miniature_percent__Y0sR7">{product.percent_off}</span>}
                                               
                                                    <div className="styles_miniature_image__XbgdR">
                                                    <NavLink to={`/${product.id}`} state={{ product }}

>
<img alt="product"
    src={product.image}
    width="420" height="420" decoding="async" data-nimg="1"
    loading="lazy" style={{color:"black"}} />
</NavLink>
<div className="products__item__miniature">
                       

                       <div className={`products__item__add__btn main ${activeBtn.some(item => item === product.id) ? "active" : ""}`} onClick={() => {
                           setActiveBtn([...activeBtn, product.id])      
                            
                       }}>
                           {activeBtn.some(item => item === product.id) && <span className='icon__btn__add' onClick={() =>{
                               if(product.quantity !== 0){
                                   product.quantity--
                                   dispatch(minusQuantity(product))
                                   dispatch(deleteItemBasket(product))
                                   return
                               }
                           }}><Icon path={mdiMinus} size={1} color={'white'} /></span>}

                           {activeBtn.some(item => item === product.id) && <div className='product__quantity'>{product.quantity}</div>}
                           {activeBtn.some(item => item === product.id) ?
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
                                                    {product.special_price_raw ? 
                                                        <div className="styles_pricing_regular__sizHW"><span
                                                        className="styles_pricing_strike__m89Q_">{product.price}</span><span
                                                        className="styles_pricing_special__qHGqh">AED {product.special_price_raw}</span></div>
                                                        :  <div className="styles_pricing_regular__sizHW"><span
                                                        className="styles_pricing_regular__sizHW">{product.price}</span></div>
                                                    }
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
                                <div className="styles_myitems_list__UK74U mobile">
                                {productsOrganics.map((product,i) => (
  <div className="styles_myitems_item__XSuD6">
                                        <div className="styles_miniature__bauyi">
                                            <div className="styles_miniature_thumb__pC4As">
                                                <div className="styles_miniature_badges__0wu3u">
                                                    <div className="styles_badges__FtItY"><span
                                                         className="styles_badges_item__I757N">Expiry - 31st
                                                            Jan</span></div>
                                                </div>{product.percent_off &&  <span className="styles_miniature_percent__Y0sR7">{product.percent_off}</span>}
                                               
                                                    <div className="styles_miniature_image__XbgdR">
                                                    <NavLink to={`/${product.id}`} state={{ product }}

>
<img alt="product"
    src={product.image}
    width="420" height="420" decoding="async" data-nimg="1"
    loading="lazy" style={{color:"black"}} />
</NavLink>
<div className="products__item__miniature">
                       

                       <div className={`products__item__add__btn main ${activeBtn.some(item => item === product.id) ? "active" : ""}`} onClick={() => {
                           setActiveBtn([...activeBtn, product.id])      
                            
                       }}>
                           {activeBtn.some(item => item === product.id) && <span className='icon__btn__add' onClick={() =>{
                               if(product.quantity !== 0){
                                   product.quantity--
                                   dispatch(minusQuantity(product))
                                   dispatch(deleteItemBasket(product))
                                   return
                               }
                           }}><Icon path={mdiMinus} size={1} color={'white'} /></span>}

                           {activeBtn.some(item => item === product.id) && <div className='product__quantity'>{product.quantity}</div>}
                           {activeBtn.some(item => item === product.id) ?
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
                                                    {product.special_price_raw ? 
                                                        <div className="styles_pricing_regular__sizHW"><span
                                                        className="styles_pricing_strike__m89Q_">{product.price}</span><span
                                                        className="styles_pricing_special__qHGqh">AED {product.special_price_raw}</span></div>
                                                        :  <div className="styles_pricing_regular__sizHW"><span
                                                        className="styles_pricing_regular__sizHW">{product.price}</span></div>
                                                    }
                                                    </div>
                                                </div>
                                                <div className="styles_miniature_configs__T57kw"><template
                                                        data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                            </div>
                                        </div>
                                    </div>
  
      ))}
                                </div>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div className="styles_banner___0eKA"><span
                                     className="styles_banner_link__41bCY"><img className="styles_banner_image__Hl4R4"
                                            src="https://media.barakatfresh.ae/media/wysiwyg/home/mid-section/EWBulkBuy.png" /></span>
                            </div>

                            <div className="styles_banner___0eKA mobile">
                             <span
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
                                                </div>{product.percent_off &&  <span className="styles_miniature_percent__Y0sR7">{product.percent_off}</span>}
                                               
                                                    <div className="styles_miniature_image__XbgdR">
                                                    <NavLink to={`/${product.id}`} state={{ product }}

>
<img alt="product"
    src={product.image}
    width="420" height="420" decoding="async" data-nimg="1"
    loading="lazy" style={{color:"black"}} />
</NavLink>
<div className="products__item__miniature">
                       

                       <div className={`products__item__add__btn main ${activeBtn.some(item => item === product.id) ? "active" : ""}`} onClick={() => {
                           setActiveBtn([...activeBtn, product.id])      
                            
                       }}>
                           {activeBtn.some(item => item === product.id) && <span className='icon__btn__add' onClick={() =>{
                               if(product.quantity !== 0){
                                   product.quantity--
                                   dispatch(minusQuantity(product))
                                   dispatch(deleteItemBasket(product))
                                   return
                               }
                           }}><Icon path={mdiMinus} size={1} color={'white'} /></span>}

                           {activeBtn.some(item => item === product.id) && <div className='product__quantity'>{product.quantity}</div>}
                           {activeBtn.some(item => item === product.id) ?
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
                                                    {product.special_price_raw ? 
                                                        <div className="styles_pricing_regular__sizHW"><span
                                                        className="styles_pricing_strike__m89Q_">{product.price}</span><span
                                                        className="styles_pricing_special__qHGqh">AED {product.special_price_raw}</span></div>
                                                        :  <div className="styles_pricing_regular__sizHW"><span
                                                        className="styles_pricing_regular__sizHW">{product.price}</span></div>
                                                    }
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
                                <div className="styles_myitems_list__UK74U mobile">
                                {productsBulk.map((product,i) => (
  <div className="styles_myitems_item__XSuD6">
                                        <div className="styles_miniature__bauyi">
                                            <div className="styles_miniature_thumb__pC4As">
                                                <div className="styles_miniature_badges__0wu3u">
                                                    <div className="styles_badges__FtItY"><span
                                                         className="styles_badges_item__I757N">Expiry - 31st
                                                            Jan</span></div>
                                                </div>{product.percent_off &&  <span className="styles_miniature_percent__Y0sR7">{product.percent_off}</span>}
                                               
                                                    <div className="styles_miniature_image__XbgdR">
                                                    <NavLink to={`/${product.id}`} state={{ product }}

>
<img alt="product"
    src={product.image}
    width="420" height="420" decoding="async" data-nimg="1"
    loading="lazy" style={{color:"black"}} />
</NavLink>
<div className="products__item__miniature">
                       

                       <div className={`products__item__add__btn main ${activeBtn.some(item => item === product.id) ? "active" : ""}`} onClick={() => {
                           setActiveBtn([...activeBtn, product.id])      
                            
                       }}>
                           {activeBtn.some(item => item === product.id) && <span className='icon__btn__add' onClick={() =>{
                               if(product.quantity !== 0){
                                   product.quantity--
                                   dispatch(minusQuantity(product))
                                   dispatch(deleteItemBasket(product))
                                   return
                               }
                           }}><Icon path={mdiMinus} size={1} color={'white'} /></span>}

                           {activeBtn.some(item => item === product.id) && <div className='product__quantity'>{product.quantity}</div>}
                           {activeBtn.some(item => item === product.id) ?
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
                                                    {product.special_price_raw ? 
                                                        <div className="styles_pricing_regular__sizHW"><span
                                                        className="styles_pricing_strike__m89Q_">{product.price}</span><span
                                                        className="styles_pricing_special__qHGqh">AED {product.special_price_raw}</span></div>
                                                        :  <div className="styles_pricing_regular__sizHW"><span
                                                        className="styles_pricing_regular__sizHW">{product.price}</span></div>
                                                    }
                                                    </div>
                                                </div>
                                                <div className="styles_miniature_configs__T57kw"><template
                                                        data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                            </div>
                                        </div>
                                    </div>
  
      ))}
                                </div>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div className="styles_banner___0eKA"><span
                                     className="styles_banner_link__41bCY"><img className="styles_banner_image__Hl4R4"
                                            src="https://media.barakatfresh.ae/media/wysiwyg/home/mid-section/WebBannerAED-25E1.gif" /></span>
                            </div>
                            <div className="styles_banner___0eKA mobile"><span
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
                                                </div>{product.percent_off &&  <span className="styles_miniature_percent__Y0sR7">{product.percent_off}</span>}
                                               
                                                    <div className="styles_miniature_image__XbgdR">
                                                    <NavLink to={`/${product.id}`} state={{ product }}

>
<img alt="product"
    src={product.image}
    width="420" height="420" decoding="async" data-nimg="1"
    loading="lazy" style={{color:"black"}} />
</NavLink>
<div className="products__item__miniature">
                       

                       <div className={`products__item__add__btn main ${activeBtn.some(item => item === product.id) ? "active" : ""}`} onClick={() => {
                           setActiveBtn([...activeBtn, product.id])      
                            
                       }}>
                           {activeBtn.some(item => item === product.id) && <span className='icon__btn__add' onClick={() =>{
                               if(product.quantity !== 0){
                                   product.quantity--
                                   dispatch(minusQuantity(product))
                                   dispatch(deleteItemBasket(product))
                                   return
                               }
                           }}><Icon path={mdiMinus} size={1} color={'white'} /></span>}

                           {activeBtn.some(item => item === product.id) && <div className='product__quantity'>{product.quantity}</div>}
                           {activeBtn.some(item => item === product.id) ?
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
                                                    {product.special_price_raw ? 
                                                        <div className="styles_pricing_regular__sizHW"><span
                                                        className="styles_pricing_strike__m89Q_">{product.price}</span><span
                                                        className="styles_pricing_special__qHGqh">AED {product.special_price_raw}</span></div>
                                                        :  <div className="styles_pricing_regular__sizHW"><span
                                                        className="styles_pricing_regular__sizHW">{product.price}</span></div>
                                                    }
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
                                <div className="styles_myitems_list__UK74U mobile">
                                {productsJuices.map((product,i) => (
  <div className="styles_myitems_item__XSuD6">
                                        <div className="styles_miniature__bauyi">
                                            <div className="styles_miniature_thumb__pC4As">
                                                <div className="styles_miniature_badges__0wu3u">
                                                    <div className="styles_badges__FtItY"><span
                                                         className="styles_badges_item__I757N">Expiry - 31st
                                                            Jan</span></div>
                                                </div>{product.percent_off &&  <span className="styles_miniature_percent__Y0sR7">{product.percent_off}</span>}
                                               
                                                    <div className="styles_miniature_image__XbgdR">
                                                    <NavLink to={`/${product.id}`} state={{ product }}

>
<img alt="product"
    src={product.image}
    width="420" height="420" decoding="async" data-nimg="1"
    loading="lazy" style={{color:"black"}} />
</NavLink>
<div className="products__item__miniature">
                       

                       <div className={`products__item__add__btn main ${activeBtn.some(item => item === product.id) ? "active" : ""}`} onClick={() => {
                           setActiveBtn([...activeBtn, product.id])      
                            
                       }}>
                           {activeBtn.some(item => item === product.id) && <span className='icon__btn__add' onClick={() =>{
                               if(product.quantity !== 0){
                                   product.quantity--
                                   dispatch(minusQuantity(product))
                                   dispatch(deleteItemBasket(product))
                                   return
                               }
                           }}><Icon path={mdiMinus} size={1} color={'white'} /></span>}

                           {activeBtn.some(item => item === product.id) && <div className='product__quantity'>{product.quantity}</div>}
                           {activeBtn.some(item => item === product.id) ?
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
                                                    {product.special_price_raw ? 
                                                        <div className="styles_pricing_regular__sizHW"><span
                                                        className="styles_pricing_strike__m89Q_">{product.price}</span><span
                                                        className="styles_pricing_special__qHGqh">AED {product.special_price_raw}</span></div>
                                                        :  <div className="styles_pricing_regular__sizHW"><span
                                                        className="styles_pricing_regular__sizHW">{product.price}</span></div>
                                                    }
                                                    </div>
                                                </div>
                                                <div className="styles_miniature_configs__T57kw"><template
                                                        data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                            </div>
                                        </div>
                                    </div>
  
      ))}
                                </div>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div className="styles_banner___0eKA"><span
                                     className="styles_banner_link__41bCY"><img className="styles_banner_image__Hl4R4"
                                            src="https://media.barakatfresh.ae/media/wysiwyg/Vip_revised.jpg" /></span>
                            </div>

                            <div className="styles_banner___0eKA mobile"><span
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
                                                </div>{product.percent_off &&  <span className="styles_miniature_percent__Y0sR7">{product.percent_off}</span>}
                                               
                                                    <div className="styles_miniature_image__XbgdR">
                                                    <NavLink to={`/${product.id}`} state={{ product }}

>
<img alt="product"
    src={product.image}
    width="420" height="420" decoding="async" data-nimg="1"
    loading="lazy" style={{color:"black"}} />
</NavLink>
<div className="products__item__miniature">
                       

                       <div className={`products__item__add__btn main ${activeBtn.some(item => item === product.id) ? "active" : ""}`} onClick={() => {
                           setActiveBtn([...activeBtn, product.id])      
                            
                       }}>
                           {activeBtn.some(item => item === product.id) && <span className='icon__btn__add' onClick={() =>{
                               if(product.quantity !== 0){
                                   product.quantity--
                                   dispatch(minusQuantity(product))
                                   dispatch(deleteItemBasket(product))
                                   return
                               }
                           }}><Icon path={mdiMinus} size={1} color={'white'} /></span>}

                           {activeBtn.some(item => item === product.id) && <div className='product__quantity'>{product.quantity}</div>}
                           {activeBtn.some(item => item === product.id) ?
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
                                                    {product.special_price_raw ? 
                                                        <div className="styles_pricing_regular__sizHW"><span
                                                        className="styles_pricing_strike__m89Q_">{product.price}</span><span
                                                        className="styles_pricing_special__qHGqh">AED {product.special_price_raw}</span></div>
                                                        :  <div className="styles_pricing_regular__sizHW"><span
                                                        className="styles_pricing_regular__sizHW">{product.price}</span></div>
                                                    }
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
                                <div className="styles_myitems_list__UK74U mobile">
                                {productsEggs.map((product,i) => (
  <div className="styles_myitems_item__XSuD6">
                                        <div className="styles_miniature__bauyi">
                                            <div className="styles_miniature_thumb__pC4As">
                                                <div className="styles_miniature_badges__0wu3u">
                                                    <div className="styles_badges__FtItY"><span
                                                         className="styles_badges_item__I757N">Expiry - 31st
                                                            Jan</span></div>
                                                </div>{product.percent_off &&  <span className="styles_miniature_percent__Y0sR7">{product.percent_off}</span>}
                                               
                                                    <div className="styles_miniature_image__XbgdR">
                                                    <NavLink to={`/${product.id}`} state={{ product }}

>
<img alt="product"
    src={product.image}
    width="420" height="420" decoding="async" data-nimg="1"
    loading="lazy" style={{color:"black"}} />
</NavLink>
<div className="products__item__miniature">
                       

                       <div className={`products__item__add__btn main ${activeBtn.some(item => item === product.id) ? "active" : ""}`} onClick={() => {
                           setActiveBtn([...activeBtn, product.id])      
                            
                       }}>
                           {activeBtn.some(item => item === product.id) && <span className='icon__btn__add' onClick={() =>{
                               if(product.quantity !== 0){
                                   product.quantity--
                                   dispatch(minusQuantity(product))
                                   dispatch(deleteItemBasket(product))
                                   return
                               }
                           }}><Icon path={mdiMinus} size={1} color={'white'} /></span>}

                           {activeBtn.some(item => item === product.id) && <div className='product__quantity'>{product.quantity}</div>}
                           {activeBtn.some(item => item === product.id) ?
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
                                                    {product.special_price_raw ? 
                                                        <div className="styles_pricing_regular__sizHW"><span
                                                        className="styles_pricing_strike__m89Q_">{product.price}</span><span
                                                        className="styles_pricing_special__qHGqh">AED {product.special_price_raw}</span></div>
                                                        :  <div className="styles_pricing_regular__sizHW"><span
                                                        className="styles_pricing_regular__sizHW">{product.price}</span></div>
                                                    }
                                                    </div>
                                                </div>
                                                <div className="styles_miniature_configs__T57kw"><template
                                                        data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                            </div>
                                        </div>
                                    </div>
  
      ))}
                                </div>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div className="styles_banner___0eKA"><span
                                     className="styles_banner_link__41bCY"><img className="styles_banner_image__Hl4R4"
                                            src="https://media.barakatfresh.ae/media/wysiwyg/home/mid-section/EWfreshdip2.jpg" /></span>
                            </div>
                            <div className="styles_banner___0eKA mobile"><span
                                     className="styles_banner_link__41bCY"><img className="styles_banner_image__Hl4R4"
                                            src="https://media.barakatfresh.ae/media/wysiwyg/Vip_revised.jpg" /></span>
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
                                                </div>{product.percent_off &&  <span className="styles_miniature_percent__Y0sR7">{product.percent_off}</span>}
                                               
                                                    <div className="styles_miniature_image__XbgdR">
                                                    <NavLink to={`/${product.id}`} state={{ product }}

>
<img alt="product"
    src={product.image}
    width="420" height="420" decoding="async" data-nimg="1"
    loading="lazy" style={{color:"black"}} />
</NavLink>
<div className="products__item__miniature">
                       

                       <div className={`products__item__add__btn main ${activeBtn.some(item => item === product.id) ? "active" : ""}`} onClick={() => {
                           setActiveBtn([...activeBtn, product.id])      
                            
                       }}>
                           {activeBtn.some(item => item === product.id) && <span className='icon__btn__add' onClick={() =>{
                               if(product.quantity !== 0){
                                   product.quantity--
                                   dispatch(minusQuantity(product))
                                   dispatch(deleteItemBasket(product))
                                   return
                               }
                           }}><Icon path={mdiMinus} size={1} color={'white'} /></span>}

                           {activeBtn.some(item => item === product.id) && <div className='product__quantity'>{product.quantity}</div>}
                           {activeBtn.some(item => item === product.id) ?
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
                                                        {product.special_price_raw ? 
                                                        <div className="styles_pricing_regular__sizHW"><span
                                                        className="styles_pricing_strike__m89Q_">{product.price}</span><span
                                                        className="styles_pricing_special__qHGqh">AED {product.special_price_raw}</span></div>
                                                        :  <div className="styles_pricing_regular__sizHW"><span
                                                        className="styles_pricing_regular__sizHW">{product.price}</span></div>
                                                    }
                                                        
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
                                <div className="styles_myitems_list__UK74U mobile">
                                {productsReadyToCook.map((product,i) => (
  <div className="styles_myitems_item__XSuD6">
                                        <div className="styles_miniature__bauyi">
                                            <div className="styles_miniature_thumb__pC4As">
                                                <div className="styles_miniature_badges__0wu3u">
                                                    <div className="styles_badges__FtItY"><span
                                                         className="styles_badges_item__I757N">Expiry - 31st
                                                            Jan</span></div>
                                                </div>{product.percent_off &&  <span className="styles_miniature_percent__Y0sR7">{product.percent_off}</span>}
                                               
                                                    <div className="styles_miniature_image__XbgdR">
                                                    <NavLink to={`/${product.id}`} state={{ product }}

>
<img alt="product"
    src={product.image}
    width="420" height="420" decoding="async" data-nimg="1"
    loading="lazy" style={{color:"black"}} />
</NavLink>
<div className="products__item__miniature">
                       

                       <div className={`products__item__add__btn main ${activeBtn.some(item => item === product.id) ? "active" : ""}`} onClick={() => {
                           setActiveBtn([...activeBtn, product.id])      
                            
                       }}>
                           {activeBtn.some(item => item === product.id) && <span className='icon__btn__add' onClick={() =>{
                               if(product.quantity !== 0){
                                   product.quantity--
                                   dispatch(minusQuantity(product))
                                   dispatch(deleteItemBasket(product))
                                   return
                               }
                           }}><Icon path={mdiMinus} size={1} color={'white'} /></span>}

                           {activeBtn.some(item => item === product.id) && <div className='product__quantity'>{product.quantity}</div>}
                           {activeBtn.some(item => item === product.id) ?
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
                                                    {product.special_price_raw ? 
                                                        <div className="styles_pricing_regular__sizHW"><span
                                                        className="styles_pricing_strike__m89Q_">{product.price}</span><span
                                                        className="styles_pricing_special__qHGqh">AED {product.special_price_raw}</span></div>
                                                        :  <div className="styles_pricing_regular__sizHW"><span
                                                        className="styles_pricing_regular__sizHW">{product.price}</span></div>
                                                    }
                                                    </div>
                                                </div>
                                                <div className="styles_miniature_configs__T57kw"><template
                                                        data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                            </div>
                                        </div>
                                    </div>
  
      ))}
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
    )
}
export default MainPage