import { useState,useEffect } from 'react'
import {selectTitle} from '../../store/basketSlice/basketSlice'
import { useDispatch } from 'react-redux'
import { NavLink } from "react-router-dom";
import './style/megamenu.scss'
const Megamenu = () =>{

    const[active,setActive] = useState()

    const dispatch = useDispatch()

    return (
        <div className="megamenu">
            <ul className="megamenu__list">
                <li className="megamenu__item">
                  <NavLink to={'/bbq'}>
                    <span onMouseEnter={() => setActive(1)} >Bbq Range</span>
                  </NavLink>
                    
                    <div className={`megamenu_child ${active === 1 ? "active" : ""}`} onMouseLeave={() => setActive(0)}>
                      <div className="submenu">
                        <div className="br_wrapper">
                          <ul className="submenu_list">
                            <NavLink to={'/bbq'}>
                            <li className="submenu_item" onClick={() => dispatch(selectTitle('Fruit & Veg Skewers'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Skewres_2_.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Fruit & Veg Skewers
                                </div>
                              </div>
                            </li>
                            </NavLink>
                            <NavLink to={'/bbq'}>
                            <li className="submenu_item" onClick={() => dispatch(selectTitle('Meats & Marinates'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_MarinatedMeats_092022_2.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Meats & Marinates
                                </div>
                              </div>
                            </li>
                            </NavLink>
                            <NavLink to={'/bbq'}>
                            <li className="submenu_item" onClick={() => dispatch(selectTitle('Burgers Sausages & Buns'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Sausages_Burgers_092222_3.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Burgers Sausages & Buns
                                </div>
                              </div>
                            </li>
                            </NavLink>
                           
                            
                          </ul>
                        </div>
                      </div>
                    </div>
                </li>
                <li className="megamenu__item">
                  <NavLink to={'/fruits'}>
                    <span onMouseEnter={() => setActive(2)}>Fruits</span>
                  </NavLink>
                   
                    <div className={`megamenu_child ${active === 2 ? "active" : ""}`} onMouseLeave={() => setActive(0)}>
                    <div className="submenu">
                        <div className="br_wrapper">
                          <ul className="submenu_list">
                            <NavLink to={'/fruits'}>
                            <li className="submenu_item" onClick={() => dispatch(selectTitle('Regular Fruits'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Organic.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Regular Fruits
                                </div>
                              </div>
                            </li>
                            </NavLink>
                           <NavLink to={'/fruits'}>
                           <li className="submenu_item" onClick={() => dispatch(selectTitle('Fruit Platters'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/platters_1_3.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Fruit Platters
                                </div>
                              </div>
                            </li>
                           </NavLink>
                           <NavLink to={'/fruits'}>
                           <li className="submenu_item" onClick={() => dispatch(selectTitle('Mangoes'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Mango.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Mangoes
                                </div>
                              </div>
                            </li>
                           </NavLink>
                           
                            <NavLink to={'/fruits'}>
                            <li className="submenu_item" onClick={() => dispatch(selectTitle('Cut & Sanitized'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Cut_Sanitised_091922_1_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Cut & Sanitized
                                </div>
                              </div>
                            </li>
                            </NavLink>
                            
                            <NavLink to={'/fruits'}>
                            <li className="submenu_item" onClick={() => dispatch(selectTitle('Mangoes'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Mango.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Mangoes
                                </div>
                              </div>
                            </li>
                            </NavLink>
                          
                          <NavLink to={'/fruits'}>
                          <li className="submenu_item" onClick={() => dispatch(selectTitle('Puree'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/puree_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Puree
                                </div>
                              </div>
                            </li>
                          </NavLink>
                            
                            <NavLink to={'/fruits'}>
                            <li className="submenu_item" onClick={() => dispatch(selectTitle('Berries'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Berries_091922_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Berries
                                </div>
                              </div>
                            </li>
                            </NavLink>
                            <NavLink to={'/fruits'}>
                            <li className="submenu_item" onClick={() => dispatch(selectTitle('Melons'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Melons_091922_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Melons
                                </div>
                              </div>
                            </li>
                            </NavLink>
                          <NavLink to={'/fruits'}>
                          <li className="submenu_item" onClick={() => dispatch(selectTitle('Citrus'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Citrus_091922_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Citrus
                                </div>
                              </div>
                            </li>
                          </NavLink>
                            <NavLink to={'/fruits'}>
                            <li className="submenu_item" onClick={() => dispatch(selectTitle('Organic'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_OrganicFruits_092022_3.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Organic
                                </div>
                              </div>
                            </li>
                            </NavLink>
                         <NavLink to={'/fruits'}>
                         <li className="submenu_item" onClick={() => dispatch(selectTitle('Bulk'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Organics_091922_3_3.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Bulk
                                </div>
                              </div>
                            </li>
                         </NavLink>
                           


                          </ul>
                        </div>
                      </div>
                    </div>
                   
                </li>
                <li className="megamenu__item">
                  <NavLink to={'/vegetables'}>
                  <span onMouseEnter={() => setActive(3)}>Vegetables</span>
                  </NavLink>
                    
                    <div className={`megamenu_child ${active === 3 ? "active" : ""}`} onMouseLeave={() => setActive(0)}>
                    <div className="submenu">
                        <div className="br_wrapper">
                          <ul className="submenu_list">
                            <NavLink to={'/vegetables'}>
                            <li className="submenu_item" onClick={() => dispatch(selectTitle('Regular Vegetables'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Organic_091922_2.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Regular Vegetables
                                </div>
                              </div>
                            </li>
                            </NavLink>
                           <NavLink to={'/vegetables'}>
                           <li className="submenu_item" onClick={() => dispatch(selectTitle('From India'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_IndianRange.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                From India
                                </div>
                              </div>
                            </li>
                           </NavLink>
                           <NavLink to={'/vegetables'}>
                           <li className="submenu_item" onClick={() => dispatch(selectTitle('Thai/vietnam'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Thai_viet.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Thai/vietnam
                                </div>
                              </div>
                            </li>
                           </NavLink>
                            
                           <NavLink to={'/vegetables'}>
                           <li className="submenu_item" onClick={() => dispatch(selectTitle('Levant'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Flat_Beans.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Levant
                                </div>
                              </div>
                            </li>
                            </NavLink> 
                           
                          <NavLink to={'/vegetables'}>
                          <li className="submenu_item" onClick={() => dispatch(selectTitle('Locally Grown'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/locally_grown.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Locally Grown
                                </div>
                              </div>
                            </li>
                          </NavLink>
                           
                            <NavLink to={'/vegetables'}>
                            <li className="submenu_item" onClick={() => dispatch(selectTitle('Leafies'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Leafies.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Leafies
                                </div>
                              </div>
                            </li>
                            </NavLink>
                            
                            <NavLink to={'/vegetables'}>
                            <li className="submenu_item" onClick={() => dispatch(selectTitle('Cut & Sanitized'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Cut_Sanitised_091922_2_2.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Cut & Sanitized
                                </div>
                              </div>
                            </li>
                            </NavLink>
                           <NavLink to={'/vegetables'}>
                           <li className="submenu_item" onClick={() => dispatch(selectTitle('Organic'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Capsicum_Mix.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Organic
                                </div>
                              </div>
                            </li>
                           </NavLink>
                          <NavLink to={'/vegetables'}>
                          <li className="submenu_item" onClick={() => dispatch(selectTitle('Bulk'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Bulk_091922_2.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Bulk
                                </div>
                              </div>
                            </li>
                          </NavLink>
                            
          


                          </ul>
                        </div>
                      </div>
                    </div>
                </li>
                <li className="megamenu__item">
                  <NavLink to={'/fresh_juices'}>
                  <span onMouseEnter={() => setActive(4)}>Fresh Juices</span>
                  </NavLink>
                    
                    <div className={`megamenu_child ${active === 4 ? "active" : ""}`} onMouseLeave={() => setActive(0)}>
                    <div className="submenu">
                        <div className="br_wrapper">
                         
                          <ul className="submenu_list">
                          <NavLink to={'/fresh_juices'}>
                          <li className="submenu_item"  onClick={() => dispatch(selectTitle('Mocktails'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/GI4A6319-1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Mocktails
                                </div>
                              </div>
                            </li>
                            </NavLink>
                            <NavLink to={'/fresh_juices'}>
                            <li className="submenu_item" onClick={() => dispatch(selectTitle('Family Packs'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_FamilyPacks_092022_2.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Family Packs
                                </div>
                              </div>
                            </li>
                            </NavLink>
                           <NavLink to={'/fresh_juices'}>
                           <li className="submenu_item" onClick={() => dispatch(selectTitle('Shots'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Shots_091922_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Shots
                                </div>
                              </div>
                            </li>
                           </NavLink>
                            
                            <NavLink to={'/fresh_juices'}>
                            <li className="submenu_item" onClick={() => dispatch(selectTitle('Cold Pressed'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Burn_Stubborn_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Cold Pressed
                                </div>
                              </div>
                            </li>
                            </NavLink>
                          
                            <NavLink to={'/fresh_juices'}>
                            <li className="submenu_item" onClick={() => dispatch(selectTitle('Iced Tea'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Iced_Tea_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Iced Tea
                                </div>
                              </div>
                            </li>
                            </NavLink>
                            
                                <NavLink to={'/fresh_juices'}>
                                <li className="submenu_item" onClick={() => dispatch(selectTitle('Juices'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Juices_091922_2_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Juices
                                </div>
                              </div>
                            </li>
                                </NavLink>
                            
                            <NavLink to={'/fresh_juices'}>
                            <li className="submenu_item" onClick={() => dispatch(selectTitle('Healthy Juice Range'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/green_chia.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Healthy Juice Range
                                </div>
                              </div>
                            </li>
                            </NavLink>
                            <NavLink to={'/fresh_juices'}>
                            <li className="submenu_item" onClick={() => dispatch(selectTitle('Smoothies'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Smoothies_091922_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Smoothies
                                </div>
                              </div>
                            </li>
                            </NavLink>
                            <NavLink to={'/fresh_juices'}>
                            <li className="submenu_item" onClick={() => dispatch(selectTitle('Juice Combos'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_JuiceCombos_091922_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Juice Combos
                                </div>
                              </div>
                            </li>
                            </NavLink>
                           <NavLink to={'/fresh_juices'}>
                           <li className="submenu_item" onClick={() => dispatch(selectTitle('Myd Range'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/myD_CoQ-10.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Myd Range
                                </div>
                              </div>
                            </li>
                           </NavLink>
                            <NavLink to={'/fresh_juices'}>
                            <li className="submenu_item" onClick={() => dispatch(selectTitle('Ghaf Range'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/gi4a6307__1_.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Ghaf Range
                                </div>
                              </div>
                            </li>
                            </NavLink>
                            <NavLink to={'/fresh_juices'}>
                            <li className="submenu_item" onClick={() => dispatch(selectTitle('Keto'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Keto_092022_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Keto
                                </div>
                              </div>
                            </li>
                            </NavLink>
                           

                          </ul>
                        </div>
                      </div>
                    </div>
                </li>
                <li className="megamenu__item">
                  <NavLink to={'/meats'}>
                    <span onMouseEnter={() => setActive(5)} >Meats</span>
                  </NavLink>
                    
                    <div className={`megamenu_child ${active === 5 ? "active" : ""}`} onMouseLeave={() => setActive(0)}>
                    <div className="submenu">
                        <div className="br_wrapper">
                          <ul className="submenu_list">
                            <NavLink to={'/meats'}>
                            <li className="submenu_item" onClick={() => dispatch(selectTitle('Chicken'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Chicken_092022_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Chicken
                                </div>
                              </div>
                            </li>
                            </NavLink>
                           <NavLink to={'/meats'}>
                           <li className="submenu_item" onClick={() => dispatch(selectTitle('Lamb/mutton'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_LambMutton_092022_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Lamb/mutton
                                </div>
                              </div>
                            </li>
                           </NavLink>
                            <NavLink to={'/meats'}>
                            <li className="submenu_item" onClick={() => dispatch(selectTitle('Beef'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Beef_092022_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Beef
                                </div>
                              </div>
                            </li>
                            </NavLink>
                           <NavLink to={'/meats'}>
                           <li className="submenu_item" onClick={() => dispatch(selectTitle('Turkey'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Turkey_092022_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Turkey
                                </div>
                              </div>
                            </li>
                           </NavLink>
                            
                            
                            <NavLink to={'/meats'}>
                            <li className="submenu_item" onClick={() => dispatch(selectTitle('Seafood'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Seafood.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Seafood
                                </div>
                              </div>
                            </li>
                            </NavLink>
                            
                            <NavLink to={'/meats'}>
                            <li className="submenu_item" onClick={() => dispatch(selectTitle('Marinated Meats'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_MarinatedMeats_092022_3.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Marinated Meats
                                </div>
                              </div>
                            </li>
                            </NavLink>
                            
                            <NavLink to={'/meats'}>
                            <li className="submenu_item" onClick={() => dispatch(selectTitle('Sausages & Burgers'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Sausages_Burgers_092222_4.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Sausages & Burgers
                                </div>
                              </div>
                            </li>
                            </NavLink>
                            <NavLink to={'/meats'}>
                            <li className="submenu_item" onClick={() => dispatch(selectTitle('Melons'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Melons_091922_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Melons
                                </div>
                              </div>
                            </li>
                            </NavLink>
                          <NavLink to={'/meats'}>
                          <li className="submenu_item" onClick={() => dispatch(selectTitle('Premium Meats'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/chicken.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Premium Meats
                                </div>
                              </div>
                            </li>
                          </NavLink>
                            
                          </ul>
                        </div>
                      </div>
                    </div>
                </li>
                <li className="megamenu__item">
                  <NavLink to={'/grab_to_go'}>
                    <span onMouseEnter={() => setActive(6)} >Grab N Go</span>
                  </NavLink>
                    
                    <div className={`megamenu_child ${active === 6 ? "active" : ""}`} onMouseLeave={() => setActive(0)}>
                    <div className="submenu">
                        <div className="br_wrapper">
                          <ul className="submenu_list">
                            <NavLink to={'/grab_to_go'}>
                            <li className="submenu_item" onClick={() => dispatch(selectTitle('Keto'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Chicken_Tikka.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Keto
                                </div>
                              </div>
                            </li>
                            </NavLink>
                           <NavLink to={'/grab_to_go'}>
                           <li className="submenu_item" onClick={() => dispatch(selectTitle('Salads'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_VegetarianTreats_092222_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Salads
                                </div>
                              </div>
                            </li>
                           </NavLink>
                            <NavLink to={'/grab_to_go'}>
                            <li className="submenu_item" onClick={() => dispatch(selectTitle('Ready Meals'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_ReadyMeals_092222_2.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Ready Meals
                                </div>
                              </div>
                            </li>
                            </NavLink>
                           
                            <NavLink to={'/grab_to_go'}>
                            <li className="submenu_item" onClick={() => dispatch(selectTitle('Sandwiches'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Sandwiches-removebg-preview.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Sandwiches
                                </div>
                              </div>
                            </li>
                            </NavLink>
                            <NavLink to={'/grab_to_go'}>
                            <li className="submenu_item" onClick={() => dispatch(selectTitle('Cut Fruits'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/FRUIT_CUBES.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Cut Fruits
                                </div>
                              </div>
                            </li>
                            </NavLink>

                           <NavLink to={'/grab_to_go'}>
                           <li className="submenu_item" onClick={() => dispatch(selectTitle('Cook In The Bag'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/F649442_-_Chicken_Breast.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Cook In The Bag
                                </div>
                              </div>
                            </li>
                           </NavLink>

                            <NavLink to={'/grab_to_go'}>
                            <li className="submenu_item" onClick={() => dispatch(selectTitle('Ready To Cook'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_ReadyToCook_091922_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Ready To Cook
                                </div>
                              </div>
                            </li>
                            </NavLink>
                            
                            <NavLink to={'/grab_to_go'}>
                            <li className="submenu_item" onClick={() => dispatch(selectTitle('Fresh Dips'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Dips.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Fresh Dips
                                </div>
                              </div>
                            </li>
                            </NavLink>
                            <NavLink to={'/grab_to_go'}>
                            <li className="submenu_item" onClick={() => dispatch(selectTitle('Breakfast Pots'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_BreakfastPots_092222_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Breakfast Pots
                                </div>
                              </div>
                            </li>
                            </NavLink>
                            <NavLink to={'/grab_to_go'}>
                            <li className="submenu_item" onClick={() => dispatch(selectTitle('Skewers'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Skewres_2__1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Skewers
                                </div>
                              </div>
                            </li>
                            </NavLink>
                            <NavLink to={'/grab_to_go'}>
                            <li className="submenu_item" onClick={() => dispatch(selectTitle('Croissants & Danish'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Croissants_Danish_092222_2.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Croissants & Danish
                                </div>
                              </div>
                            </li>
                            </NavLink>
                            <NavLink to={'/grab_to_go'}>
                            <li className="submenu_item" onClick={() => dispatch(selectTitle('Cakes'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Cakes_092322_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Cakes
                                </div>
                              </div>
                            </li>
                            </NavLink>
                            <NavLink to={'/grab_to_go'}>
                            <li className="submenu_item" onClick={() => dispatch(selectTitle('Soups, Sauces & Gravies'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_SoupsSauces_Gravies_092222_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Soups, Sauces & Gravies
                                </div>
                              </div>
                            </li>
                            </NavLink>
                           


                          </ul>
                        </div>
                      </div>
                    </div>
                </li>
                <li className="megamenu__item">
                    <NavLink to={'/gifting_needs'}>
                    <span onMouseEnter={() => setActive(7)} >Gifting & Party Needs</span>
                    </NavLink>
                    
                    <div className={`megamenu_child ${active === 7 ? "active" : ""}`} onMouseLeave={() => setActive(0)}>
                    <div className="submenu">
                        <div className="br_wrapper">
                          <ul className="submenu_list">
                            <NavLink to={'/gifting_needs'}>
                            <li className="submenu_item" onClick={() => dispatch(selectTitle('Gift Baskets'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/healthy_treat_basket.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Gift Baskets
                                </div>
                              </div>
                            </li>
                            </NavLink>
                            <NavLink to={'/gifting_needs'}>
                            <li className="submenu_item" onClick={() => dispatch(selectTitle('Party Platters'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/berry_bouquet.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Party Platters
                                </div>
                              </div>
                            </li>
                            </NavLink>
                          <NavLink to={'/gifting_needs'}>
                          <li className="submenu_item" onClick={() => dispatch(selectTitle('Party Packs'))}> 
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/party_lovers.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Party Packs
                                </div>
                              </div>
                            </li>
                          </NavLink>
                            
                            <NavLink to={'/gifting_needs'}>
                            <li className="submenu_item" onClick={() => dispatch(selectTitle('Fruit Boxes'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/berries_more.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Fruit Boxes
                                </div>
                              </div>
                            </li>
                            </NavLink>
                            
                            <NavLink to={'/gifting_needs'}>
                            <li className="submenu_item" onClick={() => dispatch(selectTitle('Mangoes'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Mango.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Mangoes
                                </div>
                              </div>
                            </li> 
                          </NavLink>
                            
                            <NavLink to={'/gifting_needs'}>
                            <li className="submenu_item" onClick={() => dispatch(selectTitle('Cakes'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Cakes_092322_2.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Cakes
                                </div>
                              </div>
                            </li>
                            </NavLink>
                            

                          </ul>
                        </div>
                      </div>
                    </div>
                </li>
                <li className="megamenu__item">
                    <NavLink to={'/organics'}>
                    <span onMouseEnter={() => setActive(8)} >Organics</span>
                    </NavLink>
                    
                    <div className={`megamenu_child ${active === 8 ? "active" : ""}`} onMouseLeave={() => setActive(0)}>
                    <div className="submenu">
                        <div className="br_wrapper">
                          <ul className="submenu_list">
                            <NavLink to={'/organics'}>
                            <li className="submenu_item" onClick={() => dispatch(selectTitle('Organic Vegetables'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_OrganicVegetables_092022_2.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Organic Vegetables
                                </div>
                              </div>
                            </li>
                            </NavLink>
                            <NavLink to={'/organics'}>
                            <li className="submenu_item" onClick={() => dispatch(selectTitle('Organic Fruits'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_OrganicFruits_092022_4.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Organic Fruits
                                </div>
                              </div>
                            </li>
                    </NavLink>
                            
                    <NavLink to={'/organics'}>
                    <li className="submenu_item" onClick={() => dispatch(selectTitle('Organic Milk'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_OrganicMilk_092022_2.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Organic Milk
                                </div>
                              </div>
                            </li>
                    </NavLink>
                            
                    <NavLink to={'/organics'}>
                    <li className="submenu_item" onClick={() => dispatch(selectTitle('Organic Eggs'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_OrganicEggs_092022_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Organic Eggs
                                </div>
                              </div>
                            </li>
                    </NavLink>
                            
                           
                    <NavLink to={'/organics'}>
                    <li className="submenu_item" onClick={() => dispatch(selectTitle('Grocery'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Grocery_092022_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Grocery
                                </div>
                              </div>
                            </li>
                    </NavLink>
                          
                          </ul>
                        </div>
                      </div>
                    </div>
                </li>
                <li className="megamenu__item">
                  <NavLink to={'/bakery'}>
                  <span onMouseEnter={() => setActive(9)}>Bakery</span>
                  </NavLink>
                    
                    <div className={`megamenu_child ${active === 9 ? "active" : ""}`} onMouseLeave={() => setActive(0)}>
                    <div className="submenu">
                        <div className="br_wrapper">
                          <ul className="submenu_list">
                          <NavLink to={'/bakery'}>
                          <li className="submenu_item" onClick={() => dispatch(selectTitle('Croissants & Danish'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Croissants_Danish_092222_1_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Croissants & Danish
                                </div>
                              </div>
                            </li>
                  </NavLink>
                            
                  <NavLink to={'/bakery'}>
                  <li className="submenu_item" onClick={() => dispatch(selectTitle('Bread & Loafs'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Bread_Loafs_092222_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Bread & Loafs
                                </div>
                              </div>
                            </li>
                  </NavLink>
                  <NavLink to={'/bakery'}>
                  <li className="submenu_item" onClick={() => dispatch(selectTitle('Keto'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Keto_Pecan.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Keto
                                </div>
                              </div>
                            </li>
                  </NavLink>
                            
                  <NavLink to={'/bakery'}>
                  <li className="submenu_item" onClick={() => dispatch(selectTitle('Donuts'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Donuts_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Donuts
                                </div>
                              </div>
                            </li>
                  </NavLink>
                  <NavLink to={'/bakery'}>
                  <li className="submenu_item"  onClick={() => dispatch(selectTitle('Buns & Rolls'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Buns_Rolls_092222_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Buns & Rolls
                                </div>
                              </div>
                            </li>
                  </NavLink>
                  <NavLink to={'/bakery'}>
                  <li className="submenu_item" onClick={() => dispatch(selectTitle('Cookies & Muffins'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Cakes_092222_1_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Cookies & Muffins
                                </div>
                              </div>
                            </li>
                  </NavLink>
                            

                  <NavLink to={'/bakery'}>
                  <li className="submenu_item" onClick={() => dispatch(selectTitle('Cakes'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Cookies_Muffins_092222_2.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Cakes
                                </div>
                              </div>
                            </li>
                  </NavLink>
                            
                            
                          </ul>
                        </div>
                      </div>
                    </div>
                </li>
                <li className="megamenu__item">
                <NavLink to={'/dairy_eggs'}>
                <span onMouseEnter={() => setActive(10)}>Dairy & Eggs</span>
                  </NavLink>
                   
                    <div className={`megamenu_child ${active === 10 ? "active" : ""}`} onMouseLeave={() => setActive(0)}>
                    <div className="submenu">
                        <div className="br_wrapper">
                          <ul className="submenu_list">
                          <NavLink to={'/dairy_eggs'}>
                          <li className="submenu_item" onClick={() => dispatch(selectTitle('Fresh Milk'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_FreshMilk_092322_2.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Fresh Milk
                                </div>
                              </div>
                            </li>
                  </NavLink>
                  <NavLink to={'/dairy_eggs'}>
                  <li className="submenu_item"  onClick={() => dispatch(selectTitle('Long Shelf Life Milk'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_LongShelfLife-Milk_092322_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Long Shelf Life Milk
                                </div>
                              </div>
                            </li>
                  </NavLink>
                  <NavLink to={'/dairy_eggs'}>
                  <li className="submenu_item" onClick={() => dispatch(selectTitle('Milk Alternatives'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_MilkAlternatives_092322_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Milk Alternatives
                                </div>
                              </div>
                            </li>
                  </NavLink>
                  <NavLink to={'/dairy_eggs'}>
                  <li className="submenu_item" onClick={() => dispatch(selectTitle('Eggs'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Eggs_092322_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Eggs
                                </div>
                              </div>
                            </li>
                  </NavLink>
                            
                  <NavLink to={'/dairy_eggs'}>
                  <li className="submenu_item" onClick={() => dispatch(selectTitle('Paneer & Tofu'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Paneer_Tofu_092322_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Paneer & Tofu
                                </div>
                              </div>
                            </li>
                  </NavLink>

                  <NavLink to={'/dairy_eggs'}>
                  <li className="submenu_item" onClick={() => dispatch(selectTitle('Butter & Ghee'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Butter_Ghee_092322_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Butter & Ghee
                                </div>
                              </div>
                            </li>
                  </NavLink>

                            
                  <NavLink to={'/dairy_eggs'}>
                  <li className="submenu_item" onClick={() => dispatch(selectTitle('Yogurt & Lassi'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Yogurt_Lassi_092322_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Yogurt & Lassi
                                </div>
                              </div>
                            </li>
                  </NavLink>
                  <NavLink to={'/dairy_eggs'}>
                  <li className="submenu_item" onClick={() => dispatch(selectTitle('Cream & Laban'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Cream_Laban_092322_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Cream & Laban
                                </div>
                              </div>
                            </li>
                  </NavLink>
                  <NavLink to={'/dairy_eggs'}>
                  <li className="submenu_item" onClick={() => dispatch(selectTitle('Cheese'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Cheese_092322_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Cheese
                                </div>
                              </div>
                            </li>
                  </NavLink>
                            
                          
                          </ul>
                        </div>
                      </div>
                    </div>
                </li>
                <li className="megamenu__item">
                  <NavLink to={'/ice_cream'}>
                  <span onMouseEnter={() => setActive(11)}>Ice Cream</span>
                  </NavLink>
                    
                    <div className={`megamenu_child ${active === 11 ? "active" : ""}`} onMouseLeave={() => setActive(0)}>
                    <div className="submenu">
                        <div className="br_wrapper">
                          <ul className="submenu_list">
                          <NavLink to={'/ice_cream'}>
                          <li className="submenu_item" onClick={() => dispatch(selectTitle('Ice Creams'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Icecreams_091922_4.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Ice Creams
                                </div>
                              </div>
                            </li>
                  </NavLink>
                  <NavLink to={'/ice_cream'}>
                  <li className="submenu_item" onClick={() => dispatch(selectTitle('Juice Pops'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_JuicePops_092322_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Juice Pops
                                </div>
                              </div>
                            </li>
                  </NavLink>
                  <NavLink to={'/ice_cream'}>
                  <li className="submenu_item" onClick={() => dispatch(selectTitle('Sorbet'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Sorbet_092322_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Sorbet
                                </div>
                              </div>
                            </li>
                  </NavLink>
                            
                           

                          </ul>
                        </div>
                      </div>
                    </div>
                </li>
                <li className="megamenu__item">
                <NavLink to={'/pantry'}>
                <span onMouseEnter={() => setActive(12)}>Pantry</span>
                  </NavLink>
                    
                    <div className={`megamenu_child ${active === 12 ? "active" : ""}`} onMouseLeave={() => setActive(0)}>
                    <div className="submenu">
                        <div className="br_wrapper">
                          <ul className="submenu_list">
                          <NavLink to={'/pantry'}>
                          <li className="submenu_item" onClick={() => dispatch(selectTitle('Rice & Pulses'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/rice_pulses.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Rice & Pulses
                                </div>
                              </div>
                            </li>
                  </NavLink>
                           
                  <NavLink to={'/pantry'}>
                  <li className="submenu_item" onClick={() => dispatch(selectTitle('Dates & Nuts'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Dates_Nuts_092322_2.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Dates & Nuts
                                </div>
                              </div>
                            </li>
                  </NavLink>
                            
                  <NavLink to={'/pantry'}>
                  <li className="submenu_item" onClick={() => dispatch(selectTitle('Tea & Coffee'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Tea_Coffee_2_.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Tea & Coffee
                                </div>
                              </div>
                            </li>
                  </NavLink>
                  <NavLink to={'/pantry'}>
                  <li className="submenu_item" onClick={() => dispatch(selectTitle('Chocolates & Sweets'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/chocolates.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Chocolates & Sweets
                                </div>
                              </div>
                            </li>
                  </NavLink>
                            
                  <NavLink to={'/pantry'}>
                  <li className="submenu_item" onClick={() => dispatch(selectTitle('Herbs & Spices'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Spices_condiments.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Herbs & Spices
                                </div>
                              </div>
                            </li>
                  </NavLink>

                            
                  <NavLink to={'/pantry'}>
                  <li className="submenu_item" onClick={() => dispatch(selectTitle('Oil, Ghee & Butter Range'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Ghee_Oil.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Oil, Ghee & Butter Range
                                </div>
                              </div>
                            </li>
                  </NavLink>
                  <NavLink to={'/pantry'}>
                  <li className="submenu_item" onClick={() => dispatch(selectTitle('Water'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Water_092322_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Water
                                </div>
                              </div>
                            </li>
                  </NavLink>
                  <NavLink to={'/pantry'}>
                  <li className="submenu_item" onClick={() => dispatch(selectTitle('Organic Grocery'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'src="https://media.barakatfresh.ae/media/catalog/category/1457586_OrganicGrocery_092322_2.png"'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Organic Grocery
                                </div>
                              </div>
                            </li>
                  </NavLink>
                  <NavLink to={'/pantry'}>
                  <li className="submenu_item" onClick={() => dispatch(selectTitle('Indian Breakfast'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_IndianBreakfast_092322_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Indian Breakfast
                                </div>
                              </div>
                            </li>
                  </NavLink>
                          
                  <NavLink to={'/pantry'}>
                  <li className="submenu_item" onClick={() => dispatch(selectTitle('Pasta'))}>
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/shutterstock_2117856260.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Pasta
                                </div>
                              </div>
                            </li>
                  </NavLink>
                            
                          </ul>
                        </div>
                      </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Megamenu