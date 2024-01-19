import { useState,useEffect } from 'react'
import './style/megamenu.scss'
const Megamenu = () =>{

    const[active,setActive] = useState()

    return (
        <div className="megamenu">
            <ul className="megamenu__list">
                <li className="megamenu__item">
                    <span onMouseEnter={() => setActive(1)} >Bbq Range</span>
                    <div className={`megamenu_child ${active === 1 ? "active" : ""}`} onMouseLeave={() => setActive(0)}>
                      <div className="submenu">
                        <div className="br_wrapper">
                          <ul className="submenu_list">
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Skewres_2_.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Fruit & Veg Skewers
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_MarinatedMeats_092022_2.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Meats & Marinates
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Sausages_Burgers_092222_3.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Burgers Sausages & Buns
                                </div>
                              </div>
                            </li>
                            
                          </ul>
                        </div>
                      </div>
                    </div>
                </li>
                <li className="megamenu__item">
                    <span onMouseEnter={() => setActive(2)} onMouseLeave={() => setActive(0)}>Fruits</span>
                    <div className={`megamenu_child ${active === 2 ? "active" : ""}`} onMouseLeave={() => setActive(0)}>
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
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/platters_1_3.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Fruit Platters
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Mango.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Mangoes
                                </div>
                              </div>
                            </li>
                            
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Cut_Sanitised_091922_1_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Cut & Sanitized
                                </div>
                              </div>
                            </li>

                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Mango.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Mangoes
                                </div>
                              </div>
                            </li>

                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/puree_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Puree
                                </div>
                              </div>
                            </li>
                            
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Berries_091922_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Berries
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Melons_091922_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Melons
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Citrus_091922_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Citrus
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_OrganicFruits_092022_3.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Organic
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Organics_091922_3_3.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Bulk
                                </div>
                              </div>
                            </li>


                          </ul>
                        </div>
                      </div>
                    </div>
                   
                </li>
                <li className="megamenu__item">
                    <span onMouseEnter={() => setActive(3)}>Vegetables</span>
                    <div className={`megamenu_child ${active === 3 ? "active" : ""}`} onMouseLeave={() => setActive(0)}>
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
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/platters_1_3.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Fruit Platters
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Mango.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Mangoes
                                </div>
                              </div>
                            </li>
                            
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Cut_Sanitised_091922_1_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Cut & Sanitized
                                </div>
                              </div>
                            </li>

                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Mango.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Mangoes
                                </div>
                              </div>
                            </li>

                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/puree_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Puree
                                </div>
                              </div>
                            </li>
                            
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Berries_091922_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Berries
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Melons_091922_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Melons
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Citrus_091922_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Citrus
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_OrganicFruits_092022_3.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Organic
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Organics_091922_3_3.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Bulk
                                </div>
                              </div>
                            </li>


                          </ul>
                        </div>
                      </div>
                    </div>
                </li>
                <li className="megamenu__item">
                    <span onMouseEnter={() => setActive(4)}>Fresh Juices</span>
                    <div className={`megamenu_child ${active === 4 ? "active" : ""}`} onMouseLeave={() => setActive(0)}>
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
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/platters_1_3.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Fruit Platters
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Mango.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Mangoes
                                </div>
                              </div>
                            </li>
                            
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Cut_Sanitised_091922_1_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Cut & Sanitized
                                </div>
                              </div>
                            </li>

                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Mango.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Mangoes
                                </div>
                              </div>
                            </li>

                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/puree_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Puree
                                </div>
                              </div>
                            </li>
                            
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Berries_091922_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Berries
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Melons_091922_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Melons
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Citrus_091922_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Citrus
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_OrganicFruits_092022_3.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Organic
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Organics_091922_3_3.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Bulk
                                </div>
                              </div>
                            </li>


                          </ul>
                        </div>
                      </div>
                    </div>
                </li>
                <li className="megamenu__item">
                    <span onMouseEnter={() => setActive(5)} >Meats</span>
                    <div className={`megamenu_child ${active === 5 ? "active" : ""}`} onMouseLeave={() => setActive(0)}>
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
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/platters_1_3.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Fruit Platters
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Mango.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Mangoes
                                </div>
                              </div>
                            </li>
                            
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Cut_Sanitised_091922_1_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Cut & Sanitized
                                </div>
                              </div>
                            </li>

                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Mango.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Mangoes
                                </div>
                              </div>
                            </li>

                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/puree_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Puree
                                </div>
                              </div>
                            </li>
                            
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Berries_091922_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Berries
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Melons_091922_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Melons
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Citrus_091922_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Citrus
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_OrganicFruits_092022_3.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Organic
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Organics_091922_3_3.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Bulk
                                </div>
                              </div>
                            </li>


                          </ul>
                        </div>
                      </div>
                    </div>
                </li>
                <li className="megamenu__item">
                    <span onMouseEnter={() => setActive(6)} >Grab N Go</span>
                    <div className={`megamenu_child ${active === 6 ? "active" : ""}`} onMouseLeave={() => setActive(0)}>
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
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/platters_1_3.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Fruit Platters
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Mango.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Mangoes
                                </div>
                              </div>
                            </li>
                            
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Cut_Sanitised_091922_1_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Cut & Sanitized
                                </div>
                              </div>
                            </li>

                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Mango.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Mangoes
                                </div>
                              </div>
                            </li>

                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/puree_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Puree
                                </div>
                              </div>
                            </li>
                            
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Berries_091922_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Berries
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Melons_091922_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Melons
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Citrus_091922_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Citrus
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_OrganicFruits_092022_3.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Organic
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Organics_091922_3_3.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Bulk
                                </div>
                              </div>
                            </li>


                          </ul>
                        </div>
                      </div>
                    </div>
                </li>
                <li className="megamenu__item">
                    <span onMouseEnter={() => setActive(7)} >Gifting & Party Needs</span>
                    <div className={`megamenu_child ${active === 7 ? "active" : ""}`} onMouseLeave={() => setActive(0)}>
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
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/platters_1_3.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Fruit Platters
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Mango.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Mangoes
                                </div>
                              </div>
                            </li>
                            
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Cut_Sanitised_091922_1_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Cut & Sanitized
                                </div>
                              </div>
                            </li>

                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Mango.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Mangoes
                                </div>
                              </div>
                            </li>

                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/puree_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Puree
                                </div>
                              </div>
                            </li>
                            
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Berries_091922_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Berries
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Melons_091922_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Melons
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Citrus_091922_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Citrus
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_OrganicFruits_092022_3.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Organic
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Organics_091922_3_3.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Bulk
                                </div>
                              </div>
                            </li>


                          </ul>
                        </div>
                      </div>
                    </div>
                </li>
                <li className="megamenu__item">
                    <span onMouseEnter={() => setActive(8)} >Organics</span>
                    <div className={`megamenu_child ${active === 8 ? "active" : ""}`} onMouseLeave={() => setActive(0)}>
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
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/platters_1_3.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Fruit Platters
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Mango.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Mangoes
                                </div>
                              </div>
                            </li>
                            
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Cut_Sanitised_091922_1_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Cut & Sanitized
                                </div>
                              </div>
                            </li>

                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Mango.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Mangoes
                                </div>
                              </div>
                            </li>

                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/puree_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Puree
                                </div>
                              </div>
                            </li>
                            
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Berries_091922_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Berries
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Melons_091922_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Melons
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Citrus_091922_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Citrus
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_OrganicFruits_092022_3.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Organic
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Organics_091922_3_3.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Bulk
                                </div>
                              </div>
                            </li>


                          </ul>
                        </div>
                      </div>
                    </div>
                </li>
                <li className="megamenu__item">
                    <span onMouseEnter={() => setActive(9)}>Bakery</span>
                    <div className={`megamenu_child ${active === 9 ? "active" : ""}`} onMouseLeave={() => setActive(0)}>
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
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/platters_1_3.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Fruit Platters
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Mango.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Mangoes
                                </div>
                              </div>
                            </li>
                            
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Cut_Sanitised_091922_1_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Cut & Sanitized
                                </div>
                              </div>
                            </li>

                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Mango.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Mangoes
                                </div>
                              </div>
                            </li>

                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/puree_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Puree
                                </div>
                              </div>
                            </li>
                            
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Berries_091922_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Berries
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Melons_091922_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Melons
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Citrus_091922_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Citrus
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_OrganicFruits_092022_3.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Organic
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Organics_091922_3_3.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Bulk
                                </div>
                              </div>
                            </li>


                          </ul>
                        </div>
                      </div>
                    </div>
                </li>
                <li className="megamenu__item">
                    <span onMouseEnter={() => setActive(10)}>Dairy & Eggs</span>
                    <div className={`megamenu_child ${active === 10 ? "active" : ""}`} onMouseLeave={() => setActive(0)}>
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
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/platters_1_3.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Fruit Platters
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Mango.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Mangoes
                                </div>
                              </div>
                            </li>
                            
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Cut_Sanitised_091922_1_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Cut & Sanitized
                                </div>
                              </div>
                            </li>

                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Mango.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Mangoes
                                </div>
                              </div>
                            </li>

                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/puree_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Puree
                                </div>
                              </div>
                            </li>
                            
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Berries_091922_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Berries
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Melons_091922_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Melons
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Citrus_091922_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Citrus
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_OrganicFruits_092022_3.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Organic
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Organics_091922_3_3.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Bulk
                                </div>
                              </div>
                            </li>


                          </ul>
                        </div>
                      </div>
                    </div>
                </li>
                <li className="megamenu__item">
                    <span onMouseEnter={() => setActive(11)}>Ice Cream</span>
                    <div className={`megamenu_child ${active === 11 ? "active" : ""}`} onMouseLeave={() => setActive(0)}>
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
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/platters_1_3.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Fruit Platters
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Mango.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Mangoes
                                </div>
                              </div>
                            </li>
                            
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Cut_Sanitised_091922_1_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Cut & Sanitized
                                </div>
                              </div>
                            </li>

                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Mango.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Mangoes
                                </div>
                              </div>
                            </li>

                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/puree_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Puree
                                </div>
                              </div>
                            </li>
                            
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Berries_091922_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Berries
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Melons_091922_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Melons
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Citrus_091922_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Citrus
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_OrganicFruits_092022_3.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Organic
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Organics_091922_3_3.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Bulk
                                </div>
                              </div>
                            </li>


                          </ul>
                        </div>
                      </div>
                    </div>
                </li>
                <li className="megamenu__item">
                    <span onMouseEnter={() => setActive(12)}>Pantry</span>
                    <div className={`megamenu_child ${active === 12 ? "active" : ""}`} onMouseLeave={() => setActive(0)}>
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
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/platters_1_3.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Fruit Platters
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Mango.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Mangoes
                                </div>
                              </div>
                            </li>
                            
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Cut_Sanitised_091922_1_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Cut & Sanitized
                                </div>
                              </div>
                            </li>

                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Mango.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Mangoes
                                </div>
                              </div>
                            </li>

                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/puree_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Puree
                                </div>
                              </div>
                            </li>
                            
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Berries_091922_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Berries
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Melons_091922_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Melons
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Citrus_091922_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Citrus
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_OrganicFruits_092022_3.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Organic
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Organics_091922_3_3.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Bulk
                                </div>
                              </div>
                            </li>


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