import Header from "../../components/Header/header";
import Megamenu from '../../components/Megamenu/megamenu'
import { useSelector } from 'react-redux'
import {useState,useEffect} from 'react'
import { NavLink } from "react-router-dom";
import Icon from '@mdi/react';
import { mdiSort,mdiFilterOutline,mdiRadioboxBlank,mdiClose,mdiCheckboxMarked,mdiCheckboxBlankOutline,mdiChevronLeft,mdiChevronRight,mdiHomeOutline,mdiCartOutline    } from '@mdi/js';
import './style/style.scss'
const MainPage = () =>{
    const [isFixed, setIsFixed] = useState(false);

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
    return(
        <div id="__next">
            <div className={`${isFixed ? 'fixed' : ''}`}>
            <Header></Header>

            <Megamenu></Megamenu>
            
            
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
                            <div className="styles_banner___0eKA"><a
                                    href="https://barakatfresh.ae/express-delivery.html"><span
                                    className="styles_banner_link__41bCY"><img className="styles_banner_image__Hl4R4"
                                            src="https://media.barakatfresh.ae/media/wysiwyg/Express_Delivery_90_Mins_-_1800x75_Link_V2_1_.jpg" /></span></a>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div>
                                <div className="styles_myitems_head__WGXb2">
                                    <h2 className="styles_myitems_heading__hZrvZ">Latest promotions</h2>
                                </div>
                                <div className="styles_myitems_list__UK74U"><a
                                     className="styles_myitems_nav__PVypE styles_left__yNTs7"><i
                                         className="mdi mdi-chevron-left" style={{lineHeight:0}}></i></a>
                                    
                                    <div id="latest_promotions" className="owl-carousel">
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"><span
                                                             className="styles_badges_item__I757N">Expiry - 31st
                                                                Jan</span></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">55%</span><a
                                                        href="https://barakatfresh.ae/bayara-pistachios-powder-150g.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/b/a/bayara_pistachio_kernels_jumbo_1.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                         className="styles_miniature_name_text__9uWQ2">Bayara Pistachio
                                                            Kernels Jumbo 400g</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    61.75</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    27.50</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"><span
                                                             className="styles_badges_item__I757N">Expiry - 31st
                                                                Jan</span></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">59%</span><a
                                                        href="https://barakatfresh.ae/bayara-pistachio-kernels-jumbo-400g.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/b/a/bayara_almonds_blanched_jumbo_200g.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
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
                                                         className="styles_miniature_name_text__9uWQ2">Bayara Almonds
                                                            Blanched Jumbo 200g</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    20.75</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    8.50</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"><span
                                                             className="styles_badges_item__I757N">Expiry - 31st
                                                                Jan</span></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">55%</span><a
                                                        href="https://barakatfresh.ae/sweet-corn-elite-500g.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/b/a/bayara_pine_seeds_turkey_100g.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
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
                                                         className="styles_miniature_name_text__9uWQ2">Bayara Pine Seeds
                                                            Turkey 100g</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    46.75</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    21.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"><span
                                                             className="styles_badges_item__I757N">Expiry - 31st
                                                                Jan</span></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">55%</span><a
                                                        href="https://barakatfresh.ae/strawberry-box.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/b/a/bayara_pistachios_powder_150g.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                         className="styles_miniature_name_text__9uWQ2">Bayara Pistachios
                                                            Powder 150g</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    36.75</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    16.50</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"><span
                                                             className="styles_badges_item__I757N">STEAL DEAL</span>
                                                        </div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">51%</span><a
                                                        href="https://barakatfresh.ae/snack-cucumber-baby-cucumber-250g.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/s/w/sweet_corn_500g.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Sweet Corn
                                                            550-650g</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    8.00</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    3.95</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">36%</span><a
                                                        href="https://barakatfresh.ae/garlic-peeled-200g.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/s/t/strawberry_packet_1kg_morocco.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">Morocco</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Strawberry 1Kg
                                                            Box</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    59.00</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    37.75</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"><span
                                                             className="styles_badges_item__I757N">STEAL DEAL</span>
                                                        </div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">63%</span><a
                                                        href="https://barakatfresh.ae/strawberry-australia-250g.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/c/u/cucumber_baby_org_1.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Snack Cucumber
                                                            (Baby Cucumber)</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    8.00</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    2.95</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">28%</span><a
                                                        href="https://barakatfresh.ae/strawberry-australia-250g.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/g/a/garlic-fresh-peeled-200g.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">China</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Garlic Peeled
                                                            200g</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    5.50</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    3.95</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">46%</span><a
                                                        href="https://barakatfresh.ae/strawberry-australia-250g.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/s/h/shutterstock_1855009942.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">Egypt</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Strawberry Egypt
                                                            250g</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    14.00</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    7.50</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"><span
                                                             className="styles_badges_item__I757N">STEAL DEAL</span>
                                                        </div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">83%</span><a
                                                        href="https://barakatfresh.ae/mandarin-turkey.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/m/a/mandarin.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                         className="styles_miniature_name_text__9uWQ2">Mandarins
                                                            500g</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    6.00</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    1.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div><a className="styles_myitems_nav__PVypE styles_right__HStKy"><i
                                         className="mdi mdi-chevron-right" style={{lineHeight:0}}></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div className="styles_banner___0eKA"><a href="https://barakatfresh.ae/ready-to-eat.html"><span
                                     className="styles_banner_link__41bCY"><img className="styles_banner_image__Hl4R4"
                                            src="https://media.barakatfresh.ae/media/codazon/slideshow/m/i/microsoftteams-image_27_.png" /></span></a>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div>
                                <div className="styles_myitems_head__WGXb2">
                                    <h2 className="styles_myitems_heading__hZrvZ">Grab n Go</h2>
                                </div>
                                <div className="styles_myitems_list__UK74U"><a
                                     className="styles_myitems_nav__PVypE styles_left__yNTs7"><i
                                         className="mdi mdi-chevron-left" style={{lineHeight:0}}></i></a>
                                    <div id="grab_n_go" className="owl-carousel">
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/paneer-croquette-50g-x-6pc.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/p/a/paneer_croquette_6pc.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Paneer Croquette
                                                            50g x 6pc</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 21.75</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/veg-burger-pattie-50g-x-6pc.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/v/e/vegetarian_burger_6pc.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Veg Burger Pattie
                                                            50g x 6pc</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 12.75</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"><span
                                                             className="styles_badges_item__I757N">Premium Quality</span>
                                                        </div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">9%</span><a
                                                        href="https://barakatfresh.ae/mixed-vegetable-kofta-50g-x-6pc.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/m/i/mixed_vegetable_kofta_6pc.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Mixed Vegetable
                                                            Kofta 50g x 6pc</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    14.00</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    12.75</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"><span
                                                             className="styles_badges_item__I757N">Chef&#x27;s
                                                                Choice</span></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">9%</span><a
                                                        href="https://barakatfresh.ae/lentil-tikki-50g-x-6pc.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/l/e/lentil_tikki_6pc.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Lentil Tikki 50g x
                                                            6pc</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    10.45</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    9.50</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">9%</span><a
                                                        href="https://barakatfresh.ae/aloo-paneer-tikki-50g-x-6pc.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/p/o/potato_paneer_tikki.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Potato Paneer
                                                            Tikki 50g x 6pc</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    14.25</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    12.95</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">15%</span><a
                                                        href="https://barakatfresh.ae/vegetable-cutlet-50g-x-6pc.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/v/e/vegetable_cutlet_6_pc.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Vegetable Cutlet
                                                            50g x 6pc</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    12.75</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    10.85</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/acai-berry-delight-breakfast-pot-250g.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/a/c/acai.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Acai Berry Delight
                                                            Breakfast Pot 250g</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 13.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/peach-glow-breakfast-pot-250g.html">
                                                        
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/p/e/peach_glow.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Peach Glow
                                                            Breakfast Pot 250g</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 13.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/ruby-bircher-breakfast-pot-250g.html">
                                                        
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/r/u/ruby_bircher.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Ruby Bircher
                                                            Breakfast Pot 250g</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 13.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/turkey-cranberry-pie-2-pc-abela.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/6/4/640_turkey_cranberry_pie.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Turkey Cranberry
                                                            Pie -2 Pc</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 27.50</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div><a className="styles_myitems_nav__PVypE styles_right__HStKy"><i
                                         className="mdi mdi-chevron-right" style={{lineHeight:0}}></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div className="styles_banner___0eKA"><a href="https://barakatfresh.ae/best-products.html"><span
                                     className="styles_banner_link__41bCY"><img className="styles_banner_image__Hl4R4"
                                            src="https://media.barakatfresh.ae/media/catalog/tmp/category/Best_Food_-_Unlock_Flavorful_Savings_-_Online_Banner-01.jpg" /></span></a>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div>
                                <div className="styles_myitems_head__WGXb2">
                                    <h2 className="styles_myitems_heading__hZrvZ">Best Products</h2>
                                </div>
                                <div className="styles_myitems_list__UK74U"><a
                                     className="styles_myitems_nav__PVypE styles_left__yNTs7"><i
                                         className="mdi mdi-chevron-left" style={{lineHeight:0}}></i></a>
                                    <div id="best_products" className="owl-carousel">
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">10%</span><a
                                                        href="https://barakatfresh.ae/best-super-cashews-bag-375gms-twin-pack.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/b/e/best_super_cashews_bag_375gm_twin_pack_2_.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Best Super Cashews
                                                            Bag 375g Twin Pack</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    95.00</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    85.50</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">10%</span><a
                                                        href="https://barakatfresh.ae/best-pure-natural-cashews-bag-325gms-twin-pack.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/b/e/best_pure_natural_cashews_bag_325gm_twin_pack.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Best Pure &amp;
                                                            Natural Cashews Bag 325g Twin Pack</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    66.20</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    59.60</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">30%</span><a
                                                        href="https://barakatfresh.ae/tamrah-coconut-chocolate-zipper-bag-100gms.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/b/c/bcp713_tamrah_coconut_chocolate_zipper_bag_100gm_buy_2_30_off_6291014129182.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Tamrah Coconut
                                                            Chocolate Zipper Bag 100g Twin Pack</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    23.60</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    16.50</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">10%</span><a
                                                        href="https://barakatfresh.ae/best-pure-natural-almonds-bag-325gms-twin-pack.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/b/e/best_pure_natural_almonds_bag_325gm_twin_pack.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Best Pure &amp;
                                                            Natural Almonds Bag 325g Twin Pack</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    59.25</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    53.30</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">25%</span><a
                                                        href="https://barakatfresh.ae/tamrah-cappuccino-chocolate-zipper-bag-100gms.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/b/c/bcp770_tamrah_cappuccino_chocolate_zipper_bag_100gm_buy_2_25_off_6291014129205.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Tamrah Cappuccino
                                                            Chocolate Zipper Bag 100g Twin Pack</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    23.60</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    17.70</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">10%</span><a
                                                        href="https://barakatfresh.ae/best-salted-dry-roast-bag-375gms-twin-pack.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/b/e/best_salted_dry_roast_bag_375gm_twin_pack.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Best Salted Dry
                                                            Roast Bag 375g Twin Pack</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    53.20</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    47.90</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/tamrah-cappuccino-chocolate-100g.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/t/a/tamrah_cappuccino_chocolate_zipper_bag_100gm.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Tamrah Cappuccino
                                                            Chocolate 100g</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 10.50</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/tamrah-orange-chocolate-100g.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/t/a/tamrah_orange_chocolate_zipper_bag_100gm.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Tamrah Orange
                                                            Chocolate 100g</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 10.50</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/tamrah-orange-chocolate-100g.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/t/a/tamrah_coconut_chocolate_zipper_bag_100g.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Tamrah Coconut
                                                            Chocolate 100g</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 9.50</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/tamrah-coconut-chocolate-100g.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/w/h/whatsapp_image_2023-11-23_at_10.16.57.jpeg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Best Sunflower
                                                            Seeds 50g</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 3.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div><a className="styles_myitems_nav__PVypE styles_right__HStKy"><i
                                         className="mdi mdi-chevron-right" style={{lineHeight:0}}></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div className="styles_banner___0eKA"><a
                                    href="https://barakatfresh.ae/meats/premium-meats.html"><span
                                     className="styles_banner_link__41bCY"><img className="styles_banner_image__Hl4R4"
                                            src="https://media.barakatfresh.ae/media/wysiwyg/Premium_Meat_-_Banner_1180x324_2_100523.jpg" /></span></a>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div>
                                <div className="styles_myitems_head__WGXb2">
                                    <h2 className="styles_myitems_heading__hZrvZ">Meats</h2>
                                </div>
                                <div className="styles_myitems_list__UK74U"><a
                                     className="styles_myitems_nav__PVypE styles_left__yNTs7"><i
                                         className="mdi mdi-chevron-left" style={{lineHeight:0}}></i></a>
                                    <div id="meats" className="owl-carousel">
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"><span
                                                             className="styles_badges_item__I757N">PREMIUM QUALITY</span>
                                                        </div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/chicken-thigh-boneless-4-pc.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/f/6/f648206-premium-chicken-thigh-boneless-1.png"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">Brazil</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Chicken Thigh
                                                            Boneless (4 Pc)</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 27.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"><span
                                                             className="styles_badges_item__I757N">PREMIUM QUALITY</span>
                                                        </div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/beef-meatball-farmer-style-20piece.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/b/e/beef_meatball_farmer_style_20_pieces_.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Beef Meatball
                                                            Farmer Style 20piece</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 38.95</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"><span
                                                             className="styles_badges_item__I757N">PREMIUM QUALITY</span>
                                                        </div>
                                                    </div><a href="https://barakatfresh.ae/chicken-breast-2-pc.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/c/h/chicken-breast-500gm.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">Brazil</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Chicken Breast
                                                        </span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 22.95</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"><span
                                                             className="styles_badges_item__I757N">PREMIUM QUALITY</span>
                                                        </div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/chicken-drumstick-premium-10-pc.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/n/e/new-2-f648207-chicken-drumstick-premium-500g.png"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">Brazil</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Chicken Drumstick
                                                            (Premium) - 10 Pc</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 24.95</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"><span
                                                             className="styles_badges_item__I757N">PREMIUM QUALITY</span>
                                                        </div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/beef-burger-farmer-style-4-piece.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/b/e/beef_burger_farmer_style_4_pieces_.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Beef Burger Farmer
                                                            Style 4 Piece</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 42.75</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"><span
                                                             className="styles_badges_item__I757N">PREMIUM QUALITY</span>
                                                        </div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/arabic-lamb-shoulder-kofta-500g.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/a/r/arabic_lamb_shoulder_kofta_500_gm_.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Arabic Lamb
                                                            Shoulder Kofta 500g</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 50.50</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a href="https://barakatfresh.ae/beef-short-ribs-500g.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/b/r/brazil_short_ribs.png"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">Brazil</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Beef Short Ribs
                                                            1Kg</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 43.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"><span
                                                             className="styles_badges_item__I757N">PREMIUM QUALITY</span>
                                                        </div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/marinated-lamb-chops-300g.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/m/a/marinated_lamb_chops_300_gm_.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Marinated Lamb
                                                            Chops 300g</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 131.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"><span
                                                             className="styles_badges_item__I757N">PREMIUM QUALITY</span>
                                                        </div>
                                                    </div><a href="https://barakatfresh.ae/lamb-tikka-500g.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/l/a/lamb_tikka_500_gm_.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Lamb Tikka
                                                            500g</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 103.50</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/chicken-leek-pie-100g-x-6pc.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/c/h/chicken_leek_pie_100g_x_6pc.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Chicken Leek Pie
                                                            100g x 6pc</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 34.50</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div><a className="styles_myitems_nav__PVypE styles_right__HStKy"><i
                                         className="mdi mdi-chevron-right" style={{lineHeight:0}}></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div>
                                <div className="styles_myitems_head__WGXb2">
                                    <h2 className="styles_myitems_heading__hZrvZ">Ready Meals</h2>
                                </div>
                                <div className="styles_myitems_list__UK74U"><a
                                     className="styles_myitems_nav__PVypE styles_left__yNTs7"><i
                                         className="mdi mdi-chevron-left" style={{lineHeight:0}}></i></a>
                                    <div id="ready_meals" className="owl-carousel">
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/daood-basha-with-vermicelli-rice-450-gms.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/e/z/ezgif.com-webp-to-jpg_3_.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Daood Basha with
                                                            Vermicelli Rice 450 Gms</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 18.50</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"><span
                                                             className="styles_badges_item__I757N">KETO &amp; GLUTEN
                                                                FREE</span></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/thrriv-keto-cauliflower-mash---double-cheese-250g.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/d/o/double_cheese.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Thrriv Keto
                                                            Cauliflower Mash - Double Cheese 250g</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 16.15</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/chicken-tikka-masala-with-pulao-rice-abela-450g.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/c/h/chicken_tikka_masala_with_pulao_rice.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Chicken Tikka
                                                            Masala with Pulao Rice 450g</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 16.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/butter-chicken-with-rice-450-gms.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/e/z/ezgif.com-webp-to-jpg_1_.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Butter Chicken
                                                            with Rice 450 Gms</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 19.95</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/chicken-kastsu-with-rice-450-gms.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/e/z/ezgif.com-crop_6_.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Chicken Kastsu
                                                            with Rice 450 Gms</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 18.25</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a href="https://barakatfresh.ae/pancit-canton-450-gms.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/p/a/pancitcantonpackaging.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Pancit Canton 450
                                                            Gms</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 18.25</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/bistek-tagalog-with-jasmine-rice-450-gms.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/e/z/ezgif.com-webp-to-jpg_6_.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Bistek Tagalog
                                                            with Jasmine Rice 450 Gms</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 20.95</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/sweet-and-sour-chicken-with-rice-400-gms.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/e/z/ezgif.com-webp-to-jpg_5_.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Sweet and Sour
                                                            Chicken with Rice 400 Gms</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 14.95</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/green-gram-with-paratha-470-gms.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/e/z/ezgif.com-crop_7_.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Green Gram with
                                                            Paratha 470 Gms</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 13.25</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"><span
                                                             className="styles_badges_item__I757N">KETO &amp; GLUTEN
                                                                FREE</span></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/thrriv-keto-cauliflower-mash---roasted-garlic-250g.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/r/o/roasted_garlic_2.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Thrriv Keto
                                                            Cauliflower Mash - Roasted Garlic 250g</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 16.15</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div><a className="styles_myitems_nav__PVypE styles_right__HStKy"><i
                                         className="mdi mdi-chevron-right" style={{lineHeight:0}}></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div className="styles_banner___0eKA"><a href="https://barakatfresh.ae/value-packs.html"><span
                                     className="styles_banner_link__41bCY"><img className="styles_banner_image__Hl4R4"
                                            src="https://media.barakatfresh.ae/media/wysiwyg/Family_Size_-_Banner_v2-01.jpg" /></span></a>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div>
                                <div className="styles_myitems_head__WGXb2">
                                    <h2 className="styles_myitems_heading__hZrvZ">Family Packs</h2>
                                </div>
                                <div className="styles_myitems_list__UK74U"><a
                                     className="styles_myitems_nav__PVypE styles_left__yNTs7"><i
                                         className="mdi mdi-chevron-left" style={{lineHeight:0}}></i></a>
                                    <div id="family_packs" className="owl-carousel">
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"><span
                                                             className="styles_badges_item__I757N">BESTSELLER</span>
                                                        </div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">10%</span><a
                                                        href="https://barakatfresh.ae/orange-juice-value-pack-5ltr.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/o/r/orange_5l_with_product.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Orange Juice Value
                                                            Pack</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    65.70</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    59.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"><span
                                                             className="styles_badges_item__I757N">TRENDING</span></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">9%</span><a
                                                        href="https://barakatfresh.ae/pineapple-juice-5l.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/p/i/pineapple_5l_with_product.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Pineapple Juice
                                                            5L</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    115.00</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    105.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">18%</span><a
                                                        href="https://barakatfresh.ae/dates-smoothie-value-pack-1pkt.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/d/a/date_smoothie02.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Dates Smoothie
                                                            Value Pack</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    109.00</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    89.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">12%</span><a
                                                        href="https://barakatfresh.ae/pomegranate-juice-value-pack-1pkt.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/p/o/pomegranate_5l02.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Pomegranate Juice
                                                            Value Pack</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    169.00</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    149.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">5%</span><a
                                                        href="https://barakatfresh.ae/watermelon-juice-5l.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/w/a/watermelon_5l_with_product.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Watermelon Juice
                                                            5L</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    72.50</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    69.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">11%</span><a
                                                        href="https://barakatfresh.ae/carrot-juice-value-pack-1pkt.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/c/a/carrot_5l_with_product.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Carrot Juice Value
                                                            Pack</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    89.00</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    79.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">11%</span><a
                                                        href="https://barakatfresh.ae/grapefruit-juice-5l.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/g/r/grapefruit_5l_with_product_2_2_.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Grapefruit Juice
                                                            5L</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    89.00</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    79.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">20%</span><a
                                                        href="https://barakatfresh.ae/mint-lemon-juice-5l.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/m/i/mint_lemon_5l_with_product_1_.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Mint Lemon Juice
                                                            5L</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    49.00</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    39.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">14%</span><a
                                                        href="https://barakatfresh.ae/dates-smoothie-200ml-pack-of-100.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/p/a/pack_of_100_smoothie.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Dates Smoothie
                                                            200ml-pack of 100</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    550.00</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    473.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">11%</span><a
                                                        href="https://barakatfresh.ae/dates-smoothie-200ml-pack-of-50.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/p/a/pack_of_50_smoothie.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Dates Smoothie
                                                            200ml-pack of 50</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    275.00</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    244.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div><a className="styles_myitems_nav__PVypE styles_right__HStKy"><i
                                         className="mdi mdi-chevron-right" style={{lineHeight:0}}></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div className="styles_banner___0eKA"><a href="https://barakatfresh.ae/gift-baskets.html"><span
                                     className="styles_banner_link__41bCY"><img className="styles_banner_image__Hl4R4"
                                            src="https://media.barakatfresh.ae/media/app/ExpressDelivery-90-mins-web.jpg" /></span></a>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div>
                                <div className="styles_myitems_head__WGXb2">
                                    <h2 className="styles_myitems_heading__hZrvZ">Gift Baskets</h2>
                                </div>
                                <div className="styles_myitems_list__UK74U"><a
                                     className="styles_myitems_nav__PVypE styles_left__yNTs7"><i
                                         className="mdi mdi-chevron-left" style={{lineHeight:0}}></i></a>
                                    <div id="gift_baskets" className="owl-carousel">
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">13%</span><a
                                                        href="https://barakatfresh.ae/ramadan-wishes-basket.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/r/a/ramadan_wishes_basket_1_.png"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Fruit &amp; Nut
                                                            Wishes Basket</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    149.00</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    129.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"><span
                                                             className="styles_badges_item__I757N">Best for
                                                                Gifting</span></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/smoothie-sensation-basket.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/s/m/smoothie_sensation_basket_styled_11x11_11zon.png"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Smoothie Sensation
                                                            Gift Basket</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 129.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">8%</span><a
                                                        href="https://barakatfresh.ae/fruit-basket-large-5-kg.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/f/r/fruit_basket_large_styled_11x11_11zon_11zon.png"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Fruit Basket Large
                                                            5 Kg</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    119.00</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    109.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">16%</span><a
                                                        href="https://barakatfresh.ae/fruit-box-3kg.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/f/r/fruit_wooden_box_11x11_11zon.png"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Fruit Wooden Box
                                                            (Premium Range)</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    129.00</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    109.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">13%</span><a
                                                        href="https://barakatfresh.ae/healthy-treat-basket-3kg.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/h/e/healthy_treat_basket_styled_11x11_11zon.png"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Healthy Treat Gift
                                                            Basket</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    149.00</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    129.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">14%</span><a
                                                        href="https://barakatfresh.ae/fruity-treat-basket-3kg.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/f/r/fruity_treat_wooden_gift_box_styled_11x11_11zon.png"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Fruity Treat
                                                            Wooden Gift Box (Premium Range)</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    139.00</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    119.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">22%</span><a
                                                        href="https://barakatfresh.ae/strawberry-wooden-box-750g.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/3/8/388a6238.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Strawberry Wooden
                                                            Box 750g</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    89.00</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    69.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a href="https://barakatfresh.ae/berries-&amp;-more-box.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/b/e/berries_more_box_styled_11zon.png"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Berries &amp; More
                                                            Box</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 69.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a href="https://barakatfresh.ae/fruits-juices-box.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/f/r/fruits_juices_box_11x11_11zon.png"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Fruits &amp;
                                                            Juices Box</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 59.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/fruit-basket-medium-3-kg.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/f/r/fruit_basket_medium_11zon.png"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Fruit Basket
                                                            Medium 3 Kg</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 75.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div><a className="styles_myitems_nav__PVypE styles_right__HStKy"><i
                                         className="mdi mdi-chevron-right" style={{lineHeight:0}}></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div>
                                <div className="styles_myitems_head__WGXb2">
                                    <h2 className="styles_myitems_heading__hZrvZ">Exotic Range</h2><span
                                     className="styles_myitems_headlink__MiemD"><a
                                            href="https://barakatfresh.ae/exotic-fruits.html">Show all</a></span>
                                </div>
                                <div className="styles_myitems_list__UK74U"><a
                                     className="styles_myitems_nav__PVypE styles_left__yNTs7"><i
                                         className="mdi mdi-chevron-left" style={{lineHeight:0}}></i></a>
                                    <div id="exotic_range" className="owl-carousel">
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"><span
                                                             className="styles_badges_item__I757N">By Air! Ripen at
                                                                Home</span></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">27%</span><a
                                                        href="https://barakatfresh.ae/chikoo-sapodilla-premium.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/c/h/chikoo-sapodilla-premium-200-250g.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">India</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Chikoo Sapodilla
                                                            Premium</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku styles_hasvip__U7aat">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    8.95</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    6.50</span></div>
                                                            <div className="styles_pricing_vip__arjoq"><span><i
                                                                     className="mdi mdi-crown styles_pricing_vip_icon__AlQea"
                                                                        style={{lineHeight:0}}></i>34%</span><span>AED
                                                                    5.95</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                    <div>
                                                        <div className="styles_vipstrip__O9aIH">
                                                            <div><i className="mdi mdi-crown-outline"
                                                                    style={{lineHeight:0}}></i><span>AED 5.95</span>
                                                            </div><span>34%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">39%</span><a
                                                        href="https://barakatfresh.ae/dragon-fruit-1piece.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/d/r/dragon-fruit-300-350g.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">Vietnam</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Dragon Fruits
                                                            350-500g</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    6.95</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    4.25</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a href="https://barakatfresh.ae/passion-fruit-200gms.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/p/a/passion-fruit-200gms.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">Kenya</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Passion Fruits
                                                            200-250g</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 5.50</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a href="https://barakatfresh.ae/potato-agria-500g.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/p/o/potato-agria-500gms.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">Holland</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Potato
                                                            Agria</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 6.25</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">53%</span><a
                                                        href="https://barakatfresh.ae/mangosteen-1pkt.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/m/a/mangosteen-500g-pack.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">Indonesia</span>
                                                </div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Mangosteens</span>
                                                    </div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    38.50</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    18.25</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"><span
                                                             className="styles_badges_item__I757N">By Air</span></div>
                                                    </div><a href="https://barakatfresh.ae/nectarine-500g.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/n/e/nectarine_500g.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">South Africa</span>
                                                </div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Nectarine
                                                            400-500g</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 10.50</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">36%</span><a
                                                        href="https://barakatfresh.ae/kiwi-500gms.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/k/i/kiwi-500gms.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">Iran</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Kiwi Green
                                                            500g</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    5.50</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    3.50</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a href="https://barakatfresh.ae/longan-1pkt.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/l/o/longan-500g-pack.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">Thailand</span>
                                                </div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Longan</span>
                                                    </div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 17.50</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">32%</span><a
                                                        href="https://barakatfresh.ae/cherry-fresh.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/c/h/cherry-fresh_2.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">Argentina</span>
                                                </div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Cherry Fresh
                                                            200g</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    25.00</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    16.90</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">14%</span><a
                                                        href="https://barakatfresh.ae/pink-guava-250g.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/g/u/guava_pink_-_250g.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">Colombia</span>
                                                </div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Guava Pink</span>
                                                    </div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    14.50</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    12.50</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div><a className="styles_myitems_nav__PVypE styles_right__HStKy"><i
                                         className="mdi mdi-chevron-right" style={{lineHeight:0}}></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div className="styles_banner___0eKA"><a href="https://barakatfresh.ae/organics.html"><span
                                     className="styles_banner_link__41bCY"><img className="styles_banner_image__Hl4R4"
                                            src="https://media.barakatfresh.ae/media/wysiwyg/home/mid-section/Eweborganic1.jpg" /></span></a>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div>
                                <div className="styles_myitems_head__WGXb2">
                                    <h2 className="styles_myitems_heading__hZrvZ">Organics</h2><span
                                     className="styles_myitems_headlink__MiemD"><a
                                            href="https://barakatfresh.ae/organics.html">Show all</a></span>
                                </div>
                                <div className="styles_myitems_list__UK74U"><a
                                     className="styles_myitems_nav__PVypE styles_left__yNTs7"><i
                                         className="mdi mdi-chevron-left" style={{lineHeight:0}}></i></a>
                                    <div id="organics" className="owl-carousel">
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"><span
                                                             className="styles_badges_item__I757N">Best Price</span>
                                                        </div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">32%</span><a
                                                        href="https://barakatfresh.ae/cherry-tomato-organic-250g.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/c/h/cherry_tomato.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Tomato Cherry Red
                                                            Organic 250g</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    12.50</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    8.50</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">47%</span><a
                                                        href="https://barakatfresh.ae/organic-sweet-corn-500g.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/s/w/sweet_corn-organic.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Sweet Corn
                                                            Organic</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    15.00</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    8.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">37%</span><a
                                                        href="https://barakatfresh.ae/cucumber-pp-organic-1-pkt.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/c/u/cucumber-organic-1pkt.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Cucumber Organic
                                                            500g</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    7.50</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    4.75</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a href="https://barakatfresh.ae/beetroot-organic-500g.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/b/e/beetroot-organic.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Beetroot
                                                            Organic</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 15.25</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a href="https://barakatfresh.ae/ginger-organic.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/g/i/ginger-organic_1.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">India</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Ginger Organic
                                                            250g</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 13.75</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">17%</span><a
                                                        href="https://barakatfresh.ae/broccoli-organic-1pc.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/b/r/broccoli_organic_1.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Broccoli
                                                            Organic</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    29.25</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    24.25</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/bottlegourd-lauki-organic.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/b/o/bottle_gourd_organic.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Bottle Gourd
                                                            (Lauki/Dudhi) Organic</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku styles_hasvip__U7aat">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 11.95</span></div>
                                                            <div className="styles_pricing_vip__arjoq"><span><i
                                                                     className="mdi mdi-crown styles_pricing_vip_icon__AlQea"
                                                                        style={{lineHeight:0}}></i>17%</span><span>AED
                                                                    9.95</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                    <div>
                                                        <div className="styles_vipstrip__O9aIH">
                                                            <div><i className="mdi mdi-crown-outline"
                                                                    style={{lineHeight:0}}></i><span>AED 9.95</span>
                                                            </div><span>17%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/coriander-leaves-organic.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/c/o/coriander-leaves_1.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Coriander Leaves
                                                            Organic</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 5.95</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">16%</span><a
                                                        href="https://barakatfresh.ae/daarzood-organic-brown-eggs-10pc.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/e/g/eggs_product_1.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Daarzood Organic
                                                            Brown Eggs 10pcs</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    31.00</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    25.95</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/celery-stick-organic-400-500g-1.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/c/e/celery-stick-organic_1_1.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Celery Stick
                                                            Organic 500g</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 24.75</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div><a className="styles_myitems_nav__PVypE styles_right__HStKy"><i
                                         className="mdi mdi-chevron-right" style={{lineHeight:0}}></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div className="styles_banner___0eKA"><a href="https://barakatfresh.ae/bulk-buy.html"><span
                                     className="styles_banner_link__41bCY"><img className="styles_banner_image__Hl4R4"
                                            src="https://media.barakatfresh.ae/media/wysiwyg/home/mid-section/EWBulkBuy.png" /></span></a>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div>
                                <div className="styles_myitems_head__WGXb2">
                                    <h2 className="styles_myitems_heading__hZrvZ">Bulk Buy</h2><span
                                     className="styles_myitems_headlink__MiemD"><a
                                            href="https://barakatfresh.ae/bulk-buy.html">Show all</a></span>
                                </div>
                                <div className="styles_myitems_list__UK74U"><a
                                     className="styles_myitems_nav__PVypE styles_left__yNTs7"><i
                                         className="mdi mdi-chevron-left" style={{lineHeight:0}}></i></a>
                                    <div id="bulk_buy" className="owl-carousel">
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">32%</span><a
                                                        href="https://barakatfresh.ae/pomegranate-4-kg.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/p/o/pomegranate_egypt.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">Egypt</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Pomegranate
                                                        </span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku styles_hasvip__U7aat">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    35.00</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    23.95</span></div>
                                                            <div className="styles_pricing_vip__arjoq"><span><i
                                                                     className="mdi mdi-crown styles_pricing_vip_icon__AlQea"
                                                                        style={{lineHeight:0}}></i>43%</span><span>AED
                                                                    19.95</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                    <div>
                                                        <div className="styles_vipstrip__O9aIH">
                                                            <div><i className="mdi mdi-crown-outline"
                                                                    style={{lineHeight:0}}></i><span>AED 19.95</span>
                                                            </div><span>43%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">17%</span><a
                                                        href="https://barakatfresh.ae/strawberry-box-1-kg.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/s/t/strawberry1.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">Egypt</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Strawberry Egypt
                                                            Box 2.5kg</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    78.00</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    65.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/orange-valencia-3-kg-bag.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/o/r/orange-valencia-3-kg-box.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">South Africa</span>
                                                </div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Orange Valencia
                                                            2.8-3Kg Bag</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 18.50</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">22%</span><a
                                                        href="https://barakatfresh.ae/lettuce-iceberg-local-box.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/l/e/lettuce-iceberg-local-_5-kg-box_.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">GCC</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Lettuce
                                                            Iceberg</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    42.50</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    33.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a href="https://barakatfresh.ae/tomato-5-kg.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/t/o/tomato-5kg.jpeg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">GCC</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Tomato 5kg</span>
                                                    </div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 22.25</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">18%</span><a
                                                        href="https://barakatfresh.ae/lemon-3-kg-bag.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/l/e/lemon-3-kg-bag.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">South Africa</span>
                                                </div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Lemon</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    19.50</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    15.95</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">22%</span><a
                                                        href="https://barakatfresh.ae/party-lovers-juices-2.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/p/a/party_lovers_juices_2.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Party Lovers
                                                            Orange and Watermelon Juices 1L Pack of 2</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    38.00</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    29.50</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">19%</span><a
                                                        href="https://barakatfresh.ae/potatoes-3-kg.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/p/o/potato_bag.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">Egypt</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Potatoes
                                                            2.9-3Kg</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    11.75</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    9.50</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">19%</span><a
                                                        href="https://barakatfresh.ae/coconut-yellow-box-6-pieces.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/i/m/img_1171-01_1.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">Sri Lanka</span>
                                                </div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Coconut
                                                            King/Yellow Box</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    48.00</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    39.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a href="https://barakatfresh.ae/onion-red-5-kg-bag.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/o/n/onion-red-_5-kg-bag_.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">Turkey</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Onion Red 5kg
                                                            Bag</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 29.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div><a className="styles_myitems_nav__PVypE styles_right__HStKy"><i
                                         className="mdi mdi-chevron-right" style={{lineHeight:0}}></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div className="styles_banner___0eKA"><a href="https://barakatfresh.ae/vegetables.html"><span
                                     className="styles_banner_link__41bCY"><img className="styles_banner_image__Hl4R4"
                                            src="https://media.barakatfresh.ae/media/wysiwyg/home/mid-section/WebBannerAED-25E1.gif" /></span></a>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div>
                                <div className="styles_myitems_head__WGXb2">
                                    <h2 className="styles_myitems_heading__hZrvZ">Juice Pops</h2><span
                                     className="styles_myitems_headlink__MiemD"><a
                                            href="https://barakatfresh.ae/ice-cream/ice-pops.html">Show all</a></span>
                                </div>
                                <div className="styles_myitems_list__UK74U"><a
                                     className="styles_myitems_nav__PVypE styles_left__yNTs7"><i
                                         className="mdi mdi-chevron-left" style={{lineHeight:0}}></i></a>
                                    <div id="juice_pops" className="owl-carousel">
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"><span
                                                             className="styles_badges_item__I757N">Just Launched</span>
                                                        </div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/acai-with-strawberry-juice-pop-100ml-1pc.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/a/c/acai_juice_pops.png"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Acai With
                                                            Strawberry Juice Pop 80ml</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 10.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/mango-passionfruit-ice-pops-50ml-12pcs-pkt.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/m/a/mango_passionfruit_ice_pops-50ml_12pcs_pkt.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Mango Passionfruit
                                                            Ice Pops-50Ml 12Pcs/Pkt</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 60.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/christmas-stollen-ice-cream-500ml.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/c/h/christmas-stollen-ice-cream-500ml.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Christmas Stollen
                                                            Ice Cream 500ml</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 25.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/strawberry-banana-ice-pops.html?config=500">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/s/t/strawberry_banana_juice_pops_4_pieces.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                         className="styles_miniature_name_text__9uWQ2">Strawberry Banana
                                                            Juice Pops 4 Pieces</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 18.50</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/orange-ice-pops.html?config=466">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/o/r/orange_juice_pops_4_pieces_1.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                         className="styles_miniature_name_text__9uWQ2">Orange Juice Pops
                                                            4 Pieces</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 18.50</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/assorted-juice-pops-4pc.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/a/s/assorted_juice_pops_4pc.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Assorted Juice
                                                            Pops 4Pc</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 35.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/strawberry-banana-juice-pop-1pc.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/s/t/strawberry_banana_80ml.png"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Strawberry Banana
                                                            Juice Pop with Real Fruit Bits 80ml</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 10.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/mango-passionfruit-juice-pop-1pc.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/m/a/mango_passion_80ml.png"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Mango Passionfruit
                                                            Juice Pop with Real Fruit Bits 1Pc</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 10.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/lemon-mint-juice-pop-1pc.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/l/e/lemon_mint_80ml_1.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Lemon Mint Juice
                                                            Pop 1Pc</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 10.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/choco-coconut-juice-pop-1pc.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/m/i/microsoftteams-image_34_.png"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Choco Coconut
                                                            Juice Pop 1Pc</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 10.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div><a className="styles_myitems_nav__PVypE styles_right__HStKy"><i
                                         className="mdi mdi-chevron-right" style={{lineHeight:0}}></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div className="styles_banner___0eKA"><a
                                    href="https://barakatfresh.ae/https:/barakatfresh.ae/en/influencer-exclusive"><span
                                     className="styles_banner_link__41bCY"><img className="styles_banner_image__Hl4R4"
                                            src="https://media.barakatfresh.ae/media/wysiwyg/Vip_revised.jpg" /></span></a>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div>
                                <div className="styles_myitems_head__WGXb2">
                                    <h2 className="styles_myitems_heading__hZrvZ">Eggs</h2><span
                                     className="styles_myitems_headlink__MiemD"><a
                                            href="https://barakatfresh.ae/dairy-eggs/eggs.html">Show all</a></span>
                                </div>
                                <div className="styles_myitems_list__UK74U"><a
                                     className="styles_myitems_nav__PVypE styles_left__yNTs7"><i
                                         className="mdi mdi-chevron-left" style={{lineHeight:0}}></i></a>
                                    <div id="eggs" className="owl-carousel">
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">20%</span><a
                                                        href="https://barakatfresh.ae/ova-plus-eggs-small-pack-of-30.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/o/v/ova_plus_small_eggs_30pcs.jpeg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Ova Plus Eggs
                                                            Small 30Pcs</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    28.00</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    22.50</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/al-jazira-dha-omega-3-eggs-6-pc.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/a/l/al-jazira-eggs-d-h-a-omega-3-6_1_1.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Al Jazira DHA
                                                            Omega 3 White Eggs - 6 Pcs</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 15.20</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/ova-plus-brown-eggs-large-pack-of-30.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/b/r/brown_large_tray_1x30.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Ova Plus Brown
                                                            Eggs Large Pack of 30</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 25.95</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/al-jazira-super-eggs-15-pc.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/s/u/super_eggs_brown_15pc.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Al Jazira Super
                                                            Eggs (Brown Eggs) 15 Pcs</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 43.80</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/al-jazira-omega-3-eggs-30pc.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/a/l/al_jazira_omega_3_eggs_30pc_1.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Al Jazira Omega 3
                                                            White Eggs 30 Pc</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 48.15</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/ova-plus-brown-eggs-medium-pack-of-30.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/b/r/brown_medium_tray_12x30.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Ova Plus Brown
                                                            Eggs Medium 30Pc</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 24.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">14%</span><a
                                                        href="https://barakatfresh.ae/al-jazira-medium-eggs-30pc.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/a/l/al_jazira_medium_eggs_30pc_1.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Al Jazira Medium
                                                            White Eggs 30 Pc</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    28.75</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    24.75</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/al-jazira-large-eggs-30pc.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/a/l/al_jazira_large_eggs_30_pc.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Al Jazira Large
                                                            White Eggs 30 Pcs</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 32.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><span className="styles_miniature_percent__Y0sR7">16%</span><a
                                                        href="https://barakatfresh.ae/daarzood-organic-brown-eggs-10pc.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/e/g/eggs_product_1.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Daarzood Organic
                                                            Brown Eggs 10pcs</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="styles_pricing_strike__m89Q_">AED
                                                                    31.00</span><span
                                                                 className="styles_pricing_special__qHGqh">AED
                                                                    25.95</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/al-jazira-lutein-eggs-15-pc.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/l/u/lutein_eggs_white_15pc.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Al Jazira Lutein
                                                            Eggs White 15 Pc</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 19.95</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div><a className="styles_myitems_nav__PVypE styles_right__HStKy"><i
                                         className="mdi mdi-chevron-right" style={{lineHeight:0}}></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div className="styles_banner___0eKA"><a href="https://barakatfresh.ae/fresh-dips.html"><span
                                     className="styles_banner_link__41bCY"><img className="styles_banner_image__Hl4R4"
                                            src="https://media.barakatfresh.ae/media/wysiwyg/home/mid-section/EWfreshdip2.jpg" /></span></a>
                            </div>
                        </div>
                        <div className="br_mb50">
                            <div>
                                <div className="styles_myitems_head__WGXb2">
                                    <h2 className="styles_myitems_heading__hZrvZ">Ready to cook</h2><span
                                     className="styles_myitems_headlink__MiemD"><a
                                            href="https://barakatfresh.ae/chef-s-corner.html">Show all</a></span>
                                </div>
                                <div className="styles_myitems_list__UK74U"><a
                                     className="styles_myitems_nav__PVypE styles_left__yNTs7"><i
                                         className="mdi mdi-chevron-left" style={{lineHeight:0}}></i></a>
                                    <div id="ready_to_cook" className="owl-carousel">
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"><span
                                                             className="styles_badges_item__I757N">KETO &amp; GLUTEN
                                                                FREE</span></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/thrriv-keto-margarita-pizza-450g.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/t/h/thrriv_-_keto_margarita_pizza_-_1.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Thrriv Keto
                                                            Margarita Pizza 450g</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 37.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"><span
                                                             className="styles_badges_item__I757N">KETO &amp; GLUTEN
                                                                FREE</span></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/thrriv-keto-chicken-tikka-pizza-470g.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/c/h/chicken_tikka_.png"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Thrriv Keto
                                                            Chicken Tikka Pizza 470g</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 39.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"><span
                                                             className="styles_badges_item__I757N">KETO &amp; GLUTEN
                                                                FREE</span></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/thrriv-keto-creamy-garlic-chicken-pizza-453g.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/c/r/creamy_garlic_chicken_.png"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Thrriv Keto Creamy
                                                            Garlic Chicken Pizza 453g</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 39.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"><span
                                                             className="styles_badges_item__I757N">KETO &amp; GLUTEN
                                                                FREE</span></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/thrriv-keto-smokey-bbq-chicken-pizza-470g.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/s/m/smokey_bbq_chicken_.png"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Thrriv Keto Smokey
                                                            BBQ Chicken Pizza 470g</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 39.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"><span
                                                             className="styles_badges_item__I757N">KETO &amp; GLUTEN
                                                                FREE</span></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/thrriv-keto-four-cheese-pizza-437g.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/t/h/thrriv_-_keto_four_cheese_pizza.png"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Thrriv Keto Four
                                                            Cheese Pizza 437g</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 37.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"><span
                                                             className="styles_badges_item__I757N">KETO &amp; GLUTEN
                                                                FREE</span></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/thrriv-keto-garden-pizza-429g.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/t/h/thrriv_-_keto_garden_pizza_1.png"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Thrriv Keto Garden
                                                            Pizza 429g</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 37.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"><span
                                                             className="styles_badges_item__I757N">KETO &amp; GLUTEN
                                                                FREE</span></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/thrriv-keto-truffle-wild-pizza-464g.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/t/h/thrriv_-_keto_wild_truffle_pizza_-_1-removebg-preview_1.png"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Thrriv Keto
                                                            Truffle Wild Pizza 464g</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 39.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"><span
                                                             className="styles_badges_item__I757N">PREMIUM QUALITY</span>
                                                        </div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/beef-homemade-meatball-500g.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/m/e/meat_balls.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Beef Homemade
                                                            Meatball (20x25g)</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 48.95</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/chicken-breast-stuffed-with-ricotta-&amp;-spinach-360g.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/f/6/f649445_-_chicken_breast_stuffed_with_ricotta_spinach.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Chicken Breast
                                                            Stuffed with Ricotta &amp; Spinach 360g</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 34.50</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_myitems_item__XSuD6">
                                            <div className="styles_miniature__bauyi">
                                                <div className="styles_miniature_thumb__pC4As">
                                                    <div className="styles_miniature_badges__0wu3u">
                                                        <div className="styles_badges__FtItY"></div>
                                                    </div><a
                                                        href="https://barakatfresh.ae/salmon-teriyaki-with-mixed-vegetables-410g.html">
                                                        <div className="styles_miniature_image__XbgdR"><img alt="product"
                                                                src="https://media.barakatfresh.ae/media/catalog/product/cache/7882635054f2a739adc70897c8dcd5ad/a/n/anyconv.com__f649448_-_salmon_teriyaki_with_mixed_vegetables_cooked.jpg"
                                                                width="420" height="420" decoding="async" data-nimg="1"
                                                                loading="lazy" style={{color:"black"}} /></div>
                                                    </a>
                                                </div>
                                                <div className="styles_miniature_addcart__nrwcj">
                                                    <div className="styles_addtocart__vPSiL">
                                                        <div className="styles_addtocart_container__R8iNc">
                                                            <div className="styles_addtocart_box__4cn_x">
                                                                <div
                                                                 className="styles_addtocart_toggle__KC7th styles_increment__OgBkV">
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
                                                <div className="styles_miniature_origin__0XxsK"><span
                                                     className="styles_miniature_origin_text__afL5o">UAE</span></div>
                                                <div>
                                                    <div className="styles_miniature_name__NNCqq"><span
                                                         className="styles_miniature_name_text__9uWQ2">Salmon Teriyaki
                                                            with Mixed Vegetables 410g</span></div>
                                                    <div className="styles_miniature_price__5I4vS">
                                                        <div className="styles_pricing__k23Ku">
                                                            <div className="styles_pricing_regular__sizHW"><span
                                                                 className="">AED 52.50</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_miniature_configs__T57kw"><template
                                                            data-dgst="DYNAMIC_SERVER_USAGE"></template></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div><a className="styles_myitems_nav__PVypE styles_right__HStKy"><i
                                         className="mdi mdi-chevron-right" style={{lineHeight:0}}></i></a>
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
    )
}
export default MainPage