import { useState,useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import EmptyLogo from '../../img/Basket/empty_cart.61afa099.png'
import {deleteItem,addBasket,deleteItemBasket,minusQuantity} from '../../store/basketSlice/basketSlice'

import Icon from '@mdi/react';

import { NavLink } from "react-router-dom";

import {mdiSort,mdiFilterOutline,mdiRadioboxBlank,mdiClose,mdiCheckboxMarked,mdiCheckboxBlankOutline,mdiChevronLeft,mdiChevronRight,mdiHomeOutline,mdiCartOutline ,mdiPlus,mdiMinus,mdiDeleteOutline    } from '@mdi/js';

import './style/basket.scss'
import './style/basketMedia.scss'

const Basket = () =>{

    const {basket} = useSelector(state => state.basket)

    const dispatch = useDispatch()

    const totalPrice = basket.reduce((acc, product) => acc + product.price, 0)

    const [active,setActive] = useState(false)

    return (
        <div className="basket">
            <div className="layout_head">
                <div className="rootheader">
                    <NavLink to={'/'}>
                    <div className="rootheader_back">
                        <div className="rootheader_back__icon">
                            <Icon path={mdiChevronLeft} size={1} color={'rgb(96, 96, 96)'} />
                        </div>
                        
                    </div>
                    </NavLink>
                    
                    <div className="rootheader_title">Cart</div>
                </div>
            </div>
            <div className="basket__conteiner">
            {!basket.length ?
                <div className='basket__empty'>
                    <div className="basket__empty__img">
                        <img src={EmptyLogo} alt="" />
                    </div>
                    <div className="basket__empty__title">
                        Your cart is empty
                    </div>
                    <div className="basket__empty__text">
                        Looks like you haven't added anything to your cart yet
                    </div>
                </div> : 
                    <>
                         <div className="basket__content">
                    <h4 className="basket__title">Your items ({basket.length})</h4>
                    <div className="cartitems">
                        <div className="cartitems_titles">
                            <div className="cartitems_column">
                                <span className='cartitems_title'>Shipment 1</span>
                                <span className='cartitems_subtitle'>Subtotal: AED {totalPrice}</span>
                            </div>

                        </div>
                        <ul className="cartitems_list">
                            {basket.map(product => (
                                 <li className="cartitems_item" key={basket.id}>
                                 <div className="cartitem_thumb">
                                     <img src={product.image} alt="" />
                                 </div>
                                 <div className="cartitem_row">
                                     <span className="cartitem_title">{product.name}</span>
                                     <div className="cartitem_price">
                                         <div className="itemprice">
                                             <div className="special">{product.valut} {product.price_rew}</div>
                                             <div className="strike">{product.valut} {product.price}</div>
                                         </div>
                                     </div>
                                     <div className="cartitem_tags">
                                         <div className="cartitem_tag">{product.origin}</div>
                                         <div className="cartitem_tag">1 {product.product_option}</div>
                                     </div>
                                 </div>
                                 <div className="cartitem_actions">
                                     <div className="itemqty">
                                         <div className="counter">
                                            <span className='decrease' onClick={() => dispatch(addBasket(product))}>
                                                <Icon path={mdiPlus} size={1} color={'#2cc84d'} />
                                            </span>
                                             
                                             <span className='counter_value'>{product.quantity}</span>
                                             <span className='increase' onClick={() =>{
                                                 
                                                 dispatch(minusQuantity(product))
                                                 dispatch(deleteItemBasket(product))
                                             }}>
                                             <Icon path={mdiMinus} size={1} color={'#2cc84d'} />
                                            </span>
                                            
                                         </div>
                                     </div>
                                     <div className="cartitem_rows">
                                     <span className='itemremove' onClick={() => dispatch(deleteItem(product))}>
                                     <Icon path={mdiDeleteOutline} size={1} color={'rgb(96, 96, 96)'} />
                                     </span>
                                 </div>
                                 </div>
                                 
                             </li>
                            ))}
                           
                        </ul>
                    </div>
                </div>
                <div className="br_columns">
                    <div className="br_mb20">
                        <div className="summary_head">
                            <div className="summary_heading__panso">Summary</div>
                        </div>
                        <div className="summary_body">
                            <div className="summary_item">
                                <span>Subtotal</span>
                                <span>AED {totalPrice}</span>
                            </div>
                            <div className="summary_sep"></div>
                            <div className="summary_item total">
                                <span>Grand Total <i>(Incl. Tax)</i></span>
                                <span>AED 52.00</span>
                            </div>
                            <div className="summary_item tax">
                                <span>Tax</span>
                                <span>AED 2.48</span>
                            </div>
                        </div>
                    </div>
                    <div className="br_mb20">
                        <div className="bbutton" onClick={() => setActive(true)}>
                            <span>PROCEED</span>
                        </div>
                    </div>
                </div>
                    </>
                }
               
            </div>
            <div className="cart_footer">
                <div className="cart_footer_content">
                    <div className="cart_summary">
                        <div className="summary">
                            <span>
                                <span>Subtotal</span>
                                <div className="summary_title_vat">(Incl. Tax)</div>
                            </span>
                            <span>
                                <div className="summary_value_subtotal">
                                    AED {totalPrice}
                                </div>
                                <div className="summary_value_vat">
                                    (AED 0.36)
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className="cart_button">
                        <span className='cart_button_title'>PROCEED</span>
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
              <li className="tabs_item">
                <NavLink to={'/basket'}>
                <div className="tabs_link">
                  <div className="tabs_icon"><Icon path={mdiCartOutline } size={1} /></div>
                  <div className="tabs_title">Cart</div>
                </div>
                </NavLink>
               
              </li>
          </ul>
        </div>


<div class={`AddAddress_openDrawerInfo__1RYmr AddAddress_activeDrawer__3ZoVX ${active ? "active" : ""}`}>
    <div className="AddAddress__over" onClick={() => setActive(false)}></div>
           
            <div class="AddAddress_addressDrawer__7UnTN">
                <div class="AddAddress_addForm__Kxv6z">
                    <div class="AddAddress_headingDrawer__3X5jA">
                        <h3>Complete your address</h3>
                        {/* <button class="MuiButtonBase-root MuiButton-root MuiButton-outlined AddAddress_change__28BeF AddAddress_changeButton__1njIK MuiButton-outlinedPrimary" tabindex="0" type="button">
                            <span class="MuiButton-label">Change</span>
                            <span class="MuiTouchRipple-root"></span>
                        </button> */}
                        <div class="AddAddress_closeButton__1vtED" onClick={() => setActive(false)}>
                <Icon path={mdiClose } size={1} color={'rgb(96, 96, 96)'} />
            </div>
                    </div>
                    
                    <div class="AddAddress_addressDetail__3W0VD">Al Wahda Street - Al Majaz - Al Majaz 2 - Sharjah</div>
                    <div class="AddAddress_desktopForm__1d-SB">
                        <div class="AddAddress_formInput__1MrR5">
                            <div class="AddAddress_subInp__307n1">
                                <input  name="buidling" placeholder="Building Name*" class="AddAddress_inputField__2KRq1" />
                                   
                            </div>
                            <div class="AddAddress_subInp__307n1">
                                <input maxlength="12" name="flat" autocomplete="off" placeholder="Flat No*" class="AddAddress_inputField__2KRq1" value="" />
                            </div>
                        </div>
                        <div class="AddAddress_formInput__1MrR5">
                            <input maxlength="200" name="how" autocomplete="off" placeholder="How to Reach (Optional)" class="AddAddress_howToField__3kqTP" value="" />
                        </div>
                        <div class="AddAddress_addressTags__3icXy">
                            <div>
                                <div class="AddAddress_tagHeading__2dcbU">Tag location:</div>
                            <div class="AddAddress_tags__2-OCm">
                                <button class="MuiButtonBase-root MuiButton-root MuiButton-text AddAddress_active__Wk-RW" tabindex="0" type="button">
                                    <span class="MuiButton-label">home</span>
                                    <span class="MuiTouchRipple-root"></span>
                                </button>
                                <button class="MuiButtonBase-root MuiButton-root MuiButton-text" tabindex="0" type="button">
                                    <span class="MuiButton-label">office</span>
                                    <span class="MuiTouchRipple-root"></span>
                                </button>
                                <button class="MuiButtonBase-root MuiButton-root MuiButton-text" tabindex="0" type="button">
                                    <span class="MuiButton-label">hotel</span>
                                    <span class="MuiTouchRipple-root"></span>
                                </button>
                                <button class="MuiButtonBase-root MuiButton-root MuiButton-text" tabindex="0" type="button">
                                    <span class="MuiButton-label">Other</span>
                                    <span class="MuiTouchRipple-root"></span>
                                </button>
                            </div>
                            </div>
                            <button class="MuiButtonBase-root MuiButton-root MuiButton-contained AddAddress_confirm__1odIY MuiButton-containedPrimary Mui-disabled Mui-disabled" tabindex="-1" type="button" disabled="">
                                <span class="MuiButton-label" onClick={() => setActive(false)}><span class="AddAddress_addAddressText__3eKwd">Continue</span></span>
                            </button>
                            </div>
                            </div>
                            </div>
                            </div>
                            </div>
        
        </div>
    )
}
export default Basket