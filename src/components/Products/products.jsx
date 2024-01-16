import './style/products.scss'
// import data from '../../db/products.json'
import AllPhoto from '../../img/fruits.png'

import { useEffect, useState } from 'react'
const Products = ({title,products,filterBySubcats,filterByPrice,selectPrice,setSelectPrice}) =>{

    const [active,setActive] = useState(null)


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
                        <span className='subcats__item__img'><img src={AllPhoto} alt="" /></span>
                        <span className='subcats__item__text'>ALL</span>
                    </li>
                    <li className={`subcats__item ${active === 2 ? "active" : ""}`}  onClick={() => {
                        setActive(2)
                        filterBySubcats('Regular Fruits')}
                    }>
                        <span className='subcats__item__img'><img src={AllPhoto} alt="" /></span>
                        <span className='subcats__item__text'>Regular Fruits</span>
                    </li>
                    <li className={`subcats__item ${active === 3 ? "active" : ""}`}  onClick={() => {
                        setActive(3)
                        filterBySubcats('Fruit Platters')
                    }}>
                        <span className='subcats__item__img'><img src={AllPhoto} alt="" /></span>
                        <span className='subcats__item__text'>Fruit Platters</span>
                    </li>
                    <li className={`subcats__item ${active === 4 ? "active" : ""}`}  onClick={() => {
                        setActive(4)
                        filterBySubcats('Mangoes')
                    }}>
                        <span className='subcats__item__img'><img src={AllPhoto} alt="" /></span>
                        <span className='subcats__item__text'>Mangoes</span>
                    </li>
                    <li className={`subcats__item ${active === 5 ? "active" : ""}`}  onClick={() => {
                        setActive(5)
                        filterBySubcats('Cut & Sanitized')
                    }}>
                        <span className='subcats__item__img'><img src={AllPhoto} alt="" /></span>
                        <span className='subcats__item__text'>Cut & Sanitized</span>
                    </li>
                    <li className={`subcats__item ${active === 6 ? "active" : ""}`}  onClick={() => {
                        setActive(6)
                        filterBySubcats('Puree')
                    }}>
                        <span className='subcats__item__img'><img src={AllPhoto} alt="" /></span>
                        <span className='subcats__item__text'>Puree</span>
                    </li>
                    <li className={`subcats__item ${active === 7 ? "active" : ""}`}  onClick={() => {
                        setActive(7)
                        filterBySubcats('Berries')
                    }}>
                        <span className='subcats__item__img'><img src={AllPhoto} alt="" /></span>
                        <span className='subcats__item__text'>Berries</span>
                    </li>
                    <li className={`subcats__item ${active === 8 ? "active" : ""}`}  onClick={() => {
                        setActive(8)
                        filterBySubcats('Melons')}
                    }>
                        <span className='subcats__item__img'><img src={AllPhoto} alt="" /></span>
                        <span className='subcats__item__text'>Melons</span>
                    </li>
                    <li className={`subcats__item ${active === 9 ? "active" : ""}`}  onClick={() => {
                        setActive(9)
                        filterBySubcats('Citrus')
                    }}>
                        <span className='subcats__item__img'><img src={AllPhoto} alt="" /></span>
                        <span className='subcats__item__text'>Citrus</span>
                    </li>
                    <li className={`subcats__item ${active === 10 ? "active" : ""}`}  onClick={() => {
                        setActive(10)
                        filterBySubcats('Organic')
                    }}>
                        <span className='subcats__item__img'><img src={AllPhoto} alt="" /></span>
                        <span className='subcats__item__text'>Organic</span>
                    </li>
                    <li className={`subcats__item ${active === 11 ? "active" : ""}`}  onClick={() => {
                        setActive(11)
                        filterBySubcats('Bulk')
                    }}>
                        <span className='subcats__item__img'><img src={AllPhoto} alt="" /></span>
                        <span className='subcats__item__text'>Bulk</span>
                    </li>
                </ul>
            </div>
            <ul className="products__list">
                {products.map(product => (
                <li className="products__item">
                    <div className="products__item__img">
                        <img src={product.photo} alt="" />
                    </div>
                    <div className="products__item__miniature">
                        <span>{product.country}</span>
                        <div className="products__item__add__btn">
                            <i className='icon__btn__add'></i>
                        </div>
                    </div>
                  
                    <div className="products__item__title">{product.name}</div>
                    <div className="products__item__price">
                        <span>{product.valut} {product.price}</span>
                        {product.new_price && <span>{product.valut} {product.new_price}</span>}          
                    </div>
                    <div className="products__item__configs">
                        <span>1 {product.package}</span>
                        <span>10 Kg {product.package}</span>
                    </div>
                </li>
                ))}               
            </ul>
        </div>
    )
}

export default Products