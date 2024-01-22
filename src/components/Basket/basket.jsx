import { useState,useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import EmptyLogo from '../../img/Basket/empty_cart.61afa099.png'
import axios from 'axios';

import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

import {deleteItem,addBasket,deleteItemBasket,minusQuantity} from '../../store/basketSlice/basketSlice'

import Icon from '@mdi/react';

import { NavLink } from "react-router-dom";

import {mdiSort,mdiFilterOutline,mdiRadioboxBlank,mdiClose,mdiCheckboxMarked,mdiCheckboxBlankOutline,mdiChevronLeft,mdiChevronRight,mdiHomeOutline,mdiCartOutline ,mdiPlus,mdiMinus,mdiDeleteOutline    } from '@mdi/js';

import './style/basket.scss'
import './style/basketMedia.scss'

const Basket = () =>{

    const {basket} = useSelector(state => state.basket)

    const dispatch = useDispatch()

    const totalPrice = basket.reduce((acc, product) => acc + Math.round(product.price_raw), 0)
  
    const [active,setActive] = useState(false)

    const [activeAdress, setActiveAdress] = useState();

    const [address,setAddress] = useState('')

  const handleChange = (newAddress) => {
    setAddress(newAddress);
  };

  const handleSelect = async (selectedAddress) => {
    const results = await geocodeByAddress(selectedAddress);
    setAddress(selectedAddress)
  };
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
                                <span>AED {totalPrice}</span>
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
                    <div className="cart_button" onClick={() => setActive(true)}>
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
                        
                    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
            <div class="AddAddress_formInput__1MrR5 title">
            <input maxlength="200" {...getInputProps({ placeholder: 'Type address' })} name="how" placeholder="Adress" class="AddAddress_howToField__3kqTP" />
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class={`AddAddress_closeIcon__3Ba6h ${address ? "active" :''}`} onClick={() => setAddress('')} height="2rem" width="2rem" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"></path></g></svg>
            {suggestions.length ?
                <div className='AddAddress_comboPop__3F7_D'>
             
                <ul className="AddAddress_searchSugg__1lCZE">
                    
                {suggestions.map((suggestion) => (
                  <li className='AddAddress_optionBox__2AWu-' {...getSuggestionItemProps(suggestion)}>
                    <div className="AddAddress_optionItem__3nA0C">
                        <div className="AddAddress_iicon__3y_h2">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 12 16" height="18px" width="18px" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
                        </div>
                        <div className='AddAddress_locTitle__cc78r'> {suggestion.description}</div>
                    </div>
                   
                  </li>
                ))}
                </ul>
               
              </div>
              : null
            }
            
            </div>
                        
         
        </div>
      )}
    </PlacesAutocomplete>
                    
                    


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
                                <button class={`MuiButtonBase-root MuiButton-root MuiButton-text AddAddress_active__Wk-RW ${activeAdress === 1 ? "active" : ''}`} tabindex="0" type="button"
                                    onClick={() => setActiveAdress(1)}
                                >
                                    <span class="MuiButton-label">Home</span>
                                    <span class="MuiTouchRipple-root"></span>
                                </button>
                                <button 
                                onClick={() => setActiveAdress(2)}
                                class={`MuiButtonBase-root MuiButton-root MuiButton-text AddAddress_active__Wk-RW ${activeAdress === 2 ? "active" : ''}`}  tabindex="0" type="button">
                                    <span class="MuiButton-label">Office</span>
                                    <span class="MuiTouchRipple-root"></span>
                                </button>
                                <button 
                                onClick={() => setActiveAdress(3)}
                                class={`MuiButtonBase-root MuiButton-root MuiButton-text AddAddress_active__Wk-RW ${activeAdress === 3 ? "active" : ''}`}  tabindex="0" type="button">
                                    <span class="MuiButton-label">Hotel</span>
                                    <span class="MuiTouchRipple-root"></span>
                                </button>
                                <button 
                                onClick={() => setActiveAdress(4)}
                                class={`MuiButtonBase-root MuiButton-root MuiButton-text AddAddress_active__Wk-RW ${activeAdress === 4 ? "active" : ''}`}  tabindex="0" type="button">
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