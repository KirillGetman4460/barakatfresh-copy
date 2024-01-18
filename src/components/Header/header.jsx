import {useEffect,useState} from 'react'
import Icon from '@mdi/react';
import { useSelector } from 'react-redux'
import { mdiCartOutline,mdiMagnify } from '@mdi/js';
import { NavLink } from "react-router-dom";

import Logo from '../../img/barakat-logo-en-white.81664276.png'

import "./style/header.scss"
const Header = () =>{

    const {basket} = useSelector(state => state.basket)

    const totalItem = basket.reduce((acc, product) => acc + product.quantity, 0)


    return (
        <header className={`header`}>
            <div className="header__wrapper bg-black">
                <div className="header__logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="header__search">
                    <input type="text" className='header__search__input' placeholder="What are you looking for?"/>
                    <button className='header__search__btn'><Icon path={mdiMagnify} color={"#cfcfcf"} size={1} /></button>
                </div>
                <div className="header__cart">
                    <NavLink to={'/basket'}>
                        <span>Cart</span>
                        <Icon path={mdiCartOutline} size={1} />
                        <span className="cartcount_value">
                            {totalItem}
                        </span>
                    </NavLink>          
                </div>
            </div>
        </header>
    )
}
export default Header