import './style/products.scss'
import './style/productsMedia.scss'
import { useSelector, useDispatch } from 'react-redux'
import { addBasket,minusQuantity,deleteItemBasket } from '../../store/basketSlice/basketSlice';

import Icon from '@mdi/react';
import { mdiPlus,mdiMinus  } from '@mdi/js';

import { useEffect, useState } from 'react'
const Products = ({title,products,filterBySubcats,filterByPrice,selectPrice,setSelectPrice}) =>{

    const [active,setActive] = useState(null)

    const [activeBtn,setActiveBtn] = useState([])

    const dispatch = useDispatch()

    // const {basket} = useSelector(state => state.basket)

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
                    <li className={`subcats__item ${active === 1 ? "active" : ""}`} onClick={() => {
                        setActive(1)
                        filterBySubcats('All')
                    }}>
                        <span className='subcats__item__img'><img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Fruits_091922_2.png'} alt="" /></span>
                        <span className='subcats__item__text'>ALL</span>
                    </li>
                    <li className={`subcats__item ${active === 2 ? "active" : ""}`}  onClick={() => {
                        setActive(2)
                        filterBySubcats('Regular Fruits')}
                    }>
                        <span className='subcats__item__img'><img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Organic.png'} alt="" /></span>
                        <span className='subcats__item__text'>Regular Fruits</span>
                    </li>
                    <li className={`subcats__item ${active === 3 ? "active" : ""}`}  onClick={() => {
                        setActive(3)
                        filterBySubcats('Fruit Platters')
                    }}>
                        <span className='subcats__item__img'><img src={'https://media.barakatfresh.ae/media/catalog/category/platters_1_3.png'} alt="" /></span>
                        <span className='subcats__item__text'>Fruit Platters</span>
                    </li>
                    <li className={`subcats__item ${active === 4 ? "active" : ""}`}  onClick={() => {
                        setActive(4)
                        filterBySubcats('Mangoes')
                    }}>
                        <span className='subcats__item__img'><img src={'https://media.barakatfresh.ae/media/catalog/category/Mango.png'} alt="" /></span>
                        <span className='subcats__item__text'>Mangoes</span>
                    </li>
                    <li className={`subcats__item ${active === 5 ? "active" : ""}`}  onClick={() => {
                        setActive(5)
                        filterBySubcats('Cut & Sanitized')
                    }}>
                        <span className='subcats__item__img'><img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Cut_Sanitised_091922_1_1.png'} alt="" /></span>
                        <span className='subcats__item__text'>Cut & Sanitized</span>
                    </li>
                    <li className={`subcats__item ${active === 6 ? "active" : ""}`}  onClick={() => {
                        setActive(6)
                        filterBySubcats('Puree')
                    }}>
                        <span className='subcats__item__img'><img src={'https://media.barakatfresh.ae/media/catalog/category/puree_1.png'} alt="" /></span>
                        <span className='subcats__item__text'>Puree</span>
                    </li>
                    <li className={`subcats__item ${active === 7 ? "active" : ""}`}  onClick={() => {
                        setActive(7)
                        filterBySubcats('Berries')
                    }}>
                        <span className='subcats__item__img'><img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Berries_091922_1.png'} alt="" /></span>
                        <span className='subcats__item__text'>Berries</span>
                    </li>
                    <li className={`subcats__item ${active === 8 ? "active" : ""}`}  onClick={() => {
                        setActive(8)
                        filterBySubcats('Melons')}
                    }>
                        <span className='subcats__item__img'><img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Melons_091922_1.png'} alt="" /></span>
                        <span className='subcats__item__text'>Melons</span>
                    </li>
                    <li className={`subcats__item ${active === 9 ? "active" : ""}`}  onClick={() => {
                        setActive(9)
                        filterBySubcats('Citrus')
                    }}>
                        <span className='subcats__item__img'><img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Citrus_091922_1.png'} alt="" /></span>
                        <span className='subcats__item__text'>Citrus</span>
                    </li>
                    <li className={`subcats__item ${active === 10 ? "active" : ""}`}  onClick={() => {
                        setActive(10)
                        filterBySubcats('Organic')
                    }}>
                        <span className='subcats__item__img'><img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_OrganicFruits_092022_3.png'} alt="" /></span>
                        <span className='subcats__item__text'>Organic</span>
                    </li>
                    <li className={`subcats__item ${active === 11 ? "active" : ""}`}  onClick={() => {
                        setActive(11)
                        filterBySubcats('Bulk')
                    }}>
                        <span className='subcats__item__img'><img src={'https://media.barakatfresh.ae/media/catalog/category/1457586_Organics_091922_3_3.png'} alt="" /></span>
                        <span className='subcats__item__text'>Bulk</span>
                    </li>
                </ul>
            </div>
            <div className="sidebar__mobile">
                <ul className="sidebar__list">
                    <li className={`sidebar__item ${active === 1 ? "active" : ""}`}
                     onClick={() => {
                        setActive(1)
                        filterBySubcats('All')
                    }}>
                        <div className="sidebar__item__link">
                        <div className="sidebar__item__img">
                            <img src={"https://media.barakatfresh.ae/media/catalog/category/1457586_Fruits_091922_2.png"} alt="" />
                        </div>
                        <span className="sidebar__item__text">
                            All
                        </span>
                        </div>
                        
                    </li>
                    <li className={`sidebar__item ${active === 2 ? "active" : ""}`} onClick={() => {
                        setActive(2)
                        filterBySubcats('Regular Fruits')
                    }}>
                        <div className="sidebar__item__link">
                        <div className="sidebar__item__img">
                            <img src={"https://media.barakatfresh.ae/media/catalog/category/1457586_Organic.png"} alt="" />
                        </div>
                        <span className="sidebar__item__text">
                        Regular Fruits
                        </span>
                        </div>
                        
                    </li>
                    <li className={`sidebar__item ${active === 3 ? "active" : ""}`} onClick={() => {
                        setActive(3)
                        filterBySubcats('Fruit Platters')
                    }}>
                        <div className="sidebar__item__link">
                        <div className="sidebar__item__img">
                            <img src={"https://media.barakatfresh.ae/media/catalog/category/platters_1_3.png"} alt="" />
                        </div>
                        <span className="sidebar__item__text">
                        Fruit Platters
                        </span>
                        </div>
                        
                    </li>
                    <li className={`sidebar__item ${active === 4 ? "active" : ""}`} onClick={() => {
                        setActive(4)
                        filterBySubcats('Mangoes')
                    }}>
                        <div className="sidebar__item__link">
                        <div className="sidebar__item__img">
                            <img src={"https://media.barakatfresh.ae/media/catalog/category/Mango.png"} alt="" />
                        </div>
                        <span className="sidebar__item__text">
                        Mangoes
                        </span>
                        </div>
                        
                    </li>
                    <li className={`sidebar__item ${active === 5 ? "active" : ""}`} onClick={() => {
                        setActive(5)
                        filterBySubcats('Cut & Sanitized')
                    }}>
                        <div className="sidebar__item__link">
                        <div className="sidebar__item__img">
                            <img src={"https://media.barakatfresh.ae/media/catalog/category/1457586_Cut_Sanitised_091922_1_1.png"} alt="" />
                        </div>
                        <span className="sidebar__item__text">
                        Cut & Sanitized
                        </span>
                        </div>
                        
                    </li>
                    <li className={`sidebar__item ${active === 6 ? "active" : ""}`} onClick={() => {
                        setActive(6)
                        filterBySubcats('Puree')
                    }}>
                        <div className="sidebar__item__link">
                        <div className="sidebar__item__img">
                            <img src={"https://media.barakatfresh.ae/media/catalog/category/puree_1.png"} alt="" />
                        </div>
                        <span className="sidebar__item__text">
                        Puree
                        </span>
                        </div>
                        
                    </li>
                    <li className={`sidebar__item ${active === 7 ? "active" : ""}`} onClick={() => {
                        setActive(7)
                        filterBySubcats('Berries')
                    }}>
                        <div className="sidebar__item__link">
                        <div className="sidebar__item__img">
                            <img src={"https://media.barakatfresh.ae/media/catalog/category/1457586_Berries_091922_1.png"} alt="" />
                        </div>
                        <span className="sidebar__item__text">
                        Berries
                        </span>
                        </div>
                        
                    </li>
                    <li className={`sidebar__item ${active === 8 ? "active" : ""}`} onClick={() => {
                        setActive(8)
                        filterBySubcats('Melons')
                    }}>
                        <div className="sidebar__item__link">
                        <div className="sidebar__item__img">
                            <img src={"https://media.barakatfresh.ae/media/catalog/category/1457586_Melons_091922_1.png"} alt="" />
                        </div>
                        <span className="sidebar__item__text">
                        Melons
                        </span>
                        </div>
                        
                    </li>
                    <li className={`sidebar__item ${active === 9 ? "active" : ""}`} onClick={() => {
                        setActive(9)
                        filterBySubcats('Citrus')
                    }}>
                        <div className="sidebar__item__link">
                        <div className="sidebar__item__img">
                            <img src={"https://media.barakatfresh.ae/media/catalog/category/1457586_Citrus_091922_1.png"} alt="" />
                        </div>
                        <span className="sidebar__item__text">
                        Citrus
                        </span>
                        </div>
                        
                    </li>
                    <li className={`sidebar__item ${active === 10 ? "active" : ""}`} onClick={() => {
                        setActive(10)
                        filterBySubcats('Organic')
                    }}>
                        <div className="sidebar__item__link">
                        <div className="sidebar__item__img">
                            <img src={"https://media.barakatfresh.ae/media/catalog/category/1457586_OrganicFruits_092022_3.png"} alt="" />
                        </div>
                        <span className="sidebar__item__text">
                        Organic
                        </span>
                        </div>
                        
                    </li>
                    <li className={`sidebar__item ${active === 11 ? "active" : ""}`} onClick={() => {
                        setActive(11)
                        filterBySubcats('Bulk')
                    }}>
                        <div className="sidebar__item__link">
                        <div className="sidebar__item__img">
                            <img src={"https://media.barakatfresh.ae/media/catalog/category/1457586_Organics_091922_3_3.png"} alt="" />
                        </div>
                        <span className="sidebar__item__text">
                        Bulk
                        </span>
                        </div>
                        
                    </li>
                </ul>
            </div>
            <ul className="products__list">
                {products.map((product,i) => (
                <li className="products__item" key={i}>
                    <div className="products__item__img">
                        <img src={product.image} alt="" />
                    </div>
                    <div className="products__item__miniature">
                        <span>{product.origin}</span>
                        <div className={`products__item__add__btn ${activeBtn.some(item => item === i) ? "active" : ""}`} onClick={() => {
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
                  
                    <div className="products__item__title">{product.name}</div>
                    <div className="products__item__price">
                        <span>{product.valut} {product.price}</span>
                        {product.new_price && <span>AED {product.price_raw}</span>}          
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