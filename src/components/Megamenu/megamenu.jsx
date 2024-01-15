import { useState } from 'react'
import './style/megamenu.scss'
const Megamenu = () =>{

    return (
        <div className="megamenu">
            <ul className="megamenu__list">
                <li className="megamenu__item">
                    <span>Bbq Range</span>
                </li>
                <li className="megamenu__item">
                    <span>Fruits</span>
                </li>
                <li className="megamenu__item">
                    <span>Vegetables</span>
                </li>
                <li className="megamenu__item">
                    <span>Fresh Juices</span>
                </li>
                <li className="megamenu__item">
                    <span>Meats</span>
                </li>
                <li className="megamenu__item">
                    <span>Grab N Go</span>
                </li>
                <li className="megamenu__item">
                    <span>Gifting & Party Needs</span>
                </li>
                <li className="megamenu__item">
                    <span>Organics</span>
                </li>
                <li className="megamenu__item">
                    <span>Bakery</span>
                </li>
                <li className="megamenu__item">
                    <span>Dairy & Eggs</span>
                </li>
                <li className="megamenu__item">
                    <span>Ice Cream</span>
                </li>
                <li className="megamenu__item">
                    <span>Pantry</span>
                </li>
            </ul>
        </div>
    )
}
export default Megamenu