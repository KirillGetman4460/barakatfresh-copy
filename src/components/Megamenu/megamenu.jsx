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
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Organic_091922_2.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Regular Vegetables
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_IndianRange.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                From India
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Thai_viet.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Thai/vietnam
                                </div>
                              </div>
                            </li>
                            
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Flat_Beans.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Levant
                                </div>
                              </div>
                            </li>

                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/locally_grown.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Locally Grown
                                </div>
                              </div>
                            </li>

                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Leafies.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Leafies
                                </div>
                              </div>
                            </li>
                            
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Cut_Sanitised_091922_2_2.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Cut & Sanitized
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Capsicum_Mix.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Organic
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Bulk_091922_2.png'} alt="" />
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
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/GI4A6319-1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Mocktails
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_FamilyPacks_092022_2.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Family Packs
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Shots_091922_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Shots
                                </div>
                              </div>
                            </li>
                            
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Burn_Stubborn_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Cold Pressed
                                </div>
                              </div>
                            </li>

                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Iced_Tea_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Iced Tea
                                </div>
                              </div>
                            </li>

                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Juices_091922_2_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Juices
                                </div>
                              </div>
                            </li>
                            
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/green_chia.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Healthy Juice Range
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Smoothies_091922_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Smoothies
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_JuiceCombos_091922_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Juice Combos
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/myD_CoQ-10.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Myd Range
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/gi4a6307__1_.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Ghaf Range
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Keto_092022_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Keto
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
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Chicken_092022_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Chicken
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_LambMutton_092022_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Lamb/mutton
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Beef_092022_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Beef
                                </div>
                              </div>
                            </li>
                            
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Turkey_092022_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Turkey
                                </div>
                              </div>
                            </li>

                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Seafood.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Seafood
                                </div>
                              </div>
                            </li>

                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_MarinatedMeats_092022_3.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Marinated Meats
                                </div>
                              </div>
                            </li>
                            
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Sausages_Burgers_092222_4.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Sausages & Burgers
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
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/chicken.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Premium Meats
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
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Chicken_Tikka.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Keto
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_VegetarianTreats_092222_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Salads
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_ReadyMeals_092222_2.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Ready Meals
                                </div>
                              </div>
                            </li>
                            
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Sandwiches-removebg-preview.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Sandwiches
                                </div>
                              </div>
                            </li>

                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/FRUIT_CUBES.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Cut Fruits
                                </div>
                              </div>
                            </li>

                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/F649442_-_Chicken_Breast.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Cook In The Bag
                                </div>
                              </div>
                            </li>
                            
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_ReadyToCook_091922_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Ready To Cook
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Dips.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Fresh Dips
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_BreakfastPots_092222_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Breakfast Pots
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Skewres_2__1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Skewers
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Croissants_Danish_092222_2.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Croissants & Danish
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Cakes_092322_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Cakes
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_SoupsSauces_Gravies_092222_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Soups, Sauces & Gravies
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
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/healthy_treat_basket.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Gift Baskets
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/berry_bouquet.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Party Platters
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/party_lovers.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Party Packs
                                </div>
                              </div>
                            </li>
                            
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/berries_more.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Fruit Boxes
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
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Cakes_092322_2.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Cakes
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
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_OrganicVegetables_092022_2.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Organic Vegetables
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_OrganicFruits_092022_4.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Organic Fruits
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_OrganicMilk_092022_2.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Organic Milk
                                </div>
                              </div>
                            </li>
                            
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_OrganicEggs_092022_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Organic Eggs
                                </div>
                              </div>
                            </li>

                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Grocery_092022_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Grocery
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
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Croissants_Danish_092222_1_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Croissants & Danish
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Bread_Loafs_092222_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Bread & Loafs
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Keto_Pecan.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Keto
                                </div>
                              </div>
                            </li>
                            
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Donuts_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Donuts
                                </div>
                              </div>
                            </li>

                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Buns_Rolls_092222_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Buns & Rolls
                                </div>
                              </div>
                            </li>

                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Cakes_092222_1_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Cookies & Muffins
                                </div>
                              </div>
                            </li>
                            
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Cookies_Muffins_092222_2.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Cakes
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
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_FreshMilk_092322_2.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Fresh Milk
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_LongShelfLife-Milk_092322_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Long Shelf Life Milk
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_MilkAlternatives_092322_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Milk Alternatives
                                </div>
                              </div>
                            </li>
                            
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Eggs_092322_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Eggs
                                </div>
                              </div>
                            </li>

                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Paneer_Tofu_092322_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Paneer & Tofu
                                </div>
                              </div>
                            </li>

                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Butter_Ghee_092322_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Butter & Ghee
                                </div>
                              </div>
                            </li>
                            
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Yogurt_Lassi_092322_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Yogurt & Lassi
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Cream_Laban_092322_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Cream & Laban
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Cheese_092322_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Cheese
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
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Icecreams_091922_4.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Ice Creams
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_JuicePops_092322_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Juice Pops
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Sorbet_092322_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Sorbet
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
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/rice_pulses.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Rice & Pulses
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Dates_Nuts_092322_2.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Dates & Nuts
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Tea_Coffee_2_.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Tea & Coffee
                                </div>
                              </div>
                            </li>
                            
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/chocolates.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Chocolates & Sweets
                                </div>
                              </div>
                            </li>

                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Spices_condiments.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Herbs & Spices
                                </div>
                              </div>
                            </li>

                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/Ghee_Oil.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Oil, Ghee & Butter Range
                                </div>
                              </div>
                            </li>
                            
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Water_092322_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Water
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'src="https://media.barakatfresh.ae/media/catalog/category/1457586_OrganicGrocery_092322_2.png"'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Organic Grocery
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_IndianBreakfast_092322_1.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Indian Breakfast
                                </div>
                              </div>
                            </li>
                            <li className="submenu_item">
                              <div className="submenu_link">
                                <div className="submenu_image">
                                  <img src={'https://media.barakatfresh.ae/media/catalog/category/shutterstock_2117856260.png'} alt="" />
                                </div>
                                <div className="submenu_title">
                                Pasta
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