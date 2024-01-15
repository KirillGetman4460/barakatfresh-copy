import './style/products.scss'
import Test from '../../img/mandarin-pakistan-1100.jpg'
const Products = () =>{
    return(
        <div className="products">
            <ul className="products__list">
                <li className="products__item">
                    <div className="products__item__img">
                        <img src={Test} alt="" />
                    </div>
                    <div className="products__item__miniature">
                        <span>Pakistan</span>
                        
                    </div>
                    <div className="products__item__add__btn">
                        <i className='icon__btn__add'></i>
                    </div>
                    <div className="products__item__title">Mandarin Kinnow Box</div>
                    <div className="products__item__price">
                        <span>AED 48.50</span>
                        <span>AED 29.95</span>
                    </div>
                    <div className="products__item__configs">
                        <span>1 Box</span>
                        <span>10 Kg Box</span>
                    </div>
                </li>
                <li className="products__item">
                    <div className="products__item__img">
                        <img src={Test} alt="" />
                    </div>
                    <div className="products__item__miniature">
                        <span>Pakistan</span>
                        
                    </div>
                    <div className="products__item__add__btn">
                        <i className='icon__btn__add'></i>
                    </div>
                    <div className="products__item__title">Mandarin Kinnow Box</div>
                    <div className="products__item__price">
                        <span>AED 48.50</span>
                        <span>AED 29.95</span>
                    </div>
                    <div className="products__item__configs">
                        <span>1 Box</span>
                        <span>10 Kg Box</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Products