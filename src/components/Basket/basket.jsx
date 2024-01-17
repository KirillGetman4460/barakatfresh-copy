import { useState,useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import EmptyLogo from '../../img/Basket/empty_cart.61afa099.png'
import {deleteItem} from '../../store/basketSlice/basketSlice'

import './style/basket.scss'
const Basket = () =>{

    const {basket} = useSelector(state => state.basket)

    const dispatch = useDispatch()

    const totalPrice = basket.reduce((acc, product) => acc + product.price, 0)

    return (
        <div className="basket">
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
                                     <img src={product.photo} alt="" />
                                 </div>
                                 <div className="cartitem_row">
                                     <span className="cartitem_title">{product.name}</span>
                                     <div className="cartitem_price">
                                         <div className="itemprice">
                                             <div className="special">{product.valut} {product.new_price}</div>
                                             <div className="strike">{product.valut} {product.price}</div>
                                         </div>
                                     </div>
                                     <div className="cartitem_tags">
                                         <div className="cartitem_tag">{product.country}</div>
                                         <div className="cartitem_tag">1 {product.package}</div>
                                     </div>
                                 </div>
                                 <div className="cartitem_actions">
                                     <div className="itemqty">
                                         <div className="counter">
                                            <span className='decrease'>
                                                <i className='mdi mdi-minus'></i>
                                            </span>
                                             
                                             <span className='counter_value'>{product.quantity}</span>
                                             <span className='increase'>
                                                <i className='mdi mdi-plus'></i>
                                            </span>
                                            
                                         </div>
                                     </div>
                                     <div className="cartitem_rows">
                                     <span className='itemremove' onClick={() => dispatch(deleteItem(product))}>
                                        <i className='mdi mdi-delete-outline'></i>
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
                                <span>AED 52.00</span>
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
                        <div className="bbutton">
                            <span>PROCEED</span>
                        </div>
                    </div>
                </div>
                    </>
                }
               
            </div>
        </div>
    )
}
export default Basket