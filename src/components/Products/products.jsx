
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from "react-router-dom";
import { addBasket,minusQuantity,deleteItemBasket } from '../../store/basketSlice/basketSlice';

import Icon from '@mdi/react';
import { mdiPlus,mdiMinus  } from '@mdi/js';

import { useEffect, useState } from 'react'
import './style/products.scss'
import './style/productsMedia.scss'
const Products = ({title,products,filterBySubcats,filterByPrice,selectPrice,setSelectPrice,setSelectSubCats,subCatsItem}) =>{

    const [active,setActive] = useState(null)

    const [activeBtn,setActiveBtn] = useState([])

    const dispatch = useDispatch()

    useEffect(() =>{
        filterByPrice()
    },[selectPrice])

     
    return(
        <div className="products">
            <div className="prodlist_actionbar">
                <div className="prodlist_heading">
                    <h4>{title}</h4>
                    <span>({products.length} results found)</span>
                </div>
                <div className="sorting">
                    <span className='sorting_title'>Sort by</span>
                    <select name="" className='sorting_select' value={selectPrice} onChange={e => setSelectPrice(e.target.value)} id="">
                        <option value="bestseller">Best Sellers</option>
                        <option value="bestsaving">Biggest Saving</option>
                        <option value="high">Price: Low to High</option>
                        <option value="low">Price: High to Low</option>
                    </select>
                </div>
            </div>
            <div className="subcats">
                <ul className="subcats__list">
                    {subCatsItem.map((item,i) => (
                        <li className={`subcats__item ${active === i ? "active" : ""}`} onClick={() => {
                            setActive(i)
                            setSelectSubCats(item.title)
                        }}>
                            <span className='subcats__item__img'><img src={item.img} alt="" /></span>
                            <span className='subcats__item__text'>{item.title}</span>
                        </li>
                    ))}
                    
                </ul>
            </div>
            <div className="sidebar__mobile">
                <ul className="sidebar__list">
                {subCatsItem.map((item,i) => (
                        <li className={`subcats__item ${active === i ? "active" : ""}`} onClick={() => {
                            setActive(i)
                            setSelectSubCats(item.title)
                        }}>
                             
                             <div className="sidebar__item__link">
                        <div className="sidebar__item__img">
                            <img src={item.img} alt="" />
                        </div>
                        <span className="sidebar__item__text">
                           {item.title}
                        </span>
                        </div>
                      
                        </li>
                    ))}

                                       
            
                </ul>
            </div>
            <ul className="products__list">
                {products.map((product,i) => (
                <li className="products__item" key={i}>
                    {product.percent_off &&  <span className="styles_miniature_percent__Y0sR7">{product.percent_off}</span>}
                    <div className="products__item__img">
                    <NavLink to={`/${product.id}`} state={{ product }}

>
<img src={product.image} alt="" />
                       
</NavLink>
                    
                       
                        
                    </div>
                    <div className="products__item__miniature">
                        <span>{product.origin}</span>
                        <div className={`products__item__add__btn item ${activeBtn.some(item => item === product.id) ? "active" : ""}`} onClick={() => {                 
                                setActiveBtn([...activeBtn, product.id]) 
                        }}>
                            {activeBtn.some(item => item === product.id) && <span className='icon__btn__add' onClick={(e) =>{
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
                  
                    <div className="products__item__title">{product.name}</div>

                    {/* <div className="products__item__price ">
                        <span> {product.price}</span>
                        {product.new_price && <span>AED {product.price}</span>}          
                    </div> */}
                    <div className="styles_pricing__k23Ku">
                                                    {product.special_price_raw ? 
                                                        <div className="styles_pricing_regular__sizHW"><span
                                                        className="styles_pricing_strike__m89Q_">{product.price}</span><span
                                                        className="styles_pricing_special__qHGqh">AED {product.special_price_raw}</span></div>
                                                        :  <div className="styles_pricing_regular__sizHW"><span
                                                        className="styles_pricing_regular__sizHW">{product.price}</span></div>
                                                    }
                                                    </div>
                    <div className="products__item__configs">
                        <span>{product.product_option}</span>
                        <span>10 Kg </span>
                    </div>
                </li>
                ))}               
            </ul>
        </div>
    )
}

export default Products