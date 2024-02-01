import { useEffect, useState } from "react";
import Icon from "@mdi/react";
import { useSelector,useDispatch } from "react-redux";
import {searchProductsItem} from '../../store/basketSlice/basketSlice'
import { mdiCartOutline, mdiMagnify } from "@mdi/js";
import { Link, NavLink,useNavigate } from "react-router-dom";

import data from '../../db/products.json'

import Logo from "../../img/barakat-logo-en-white.81664276.png";

import "./style/header.scss";
import "./style/headerMedia.scss";
const Header = () => {

  const [products,setProducts] = useState([
    ...data.products.all,
    ...data.products_bbq.all,
    ...data.products_vegetables.all,
    ...data.products_fresh_juices.all,
    ...data.products_meats.all,
    ...data.products_grab_go.all,
    ...data.products_gifting_needs.all,
    ...data.products_organics.all,
    ...data.products_bakery.all,
    ...data.products_dairy_eggs.all,
    ...data.products_ice_cream.all,
    ...data.products_pantry.all,
  ])

  const dispatch = useDispatch()

  const { basket } = useSelector((state) => state.basket);

  const totalItem = basket.reduce((acc, product) => acc + product.quantity, 0);

  const [searchTerm, setSearchTerm] = useState();

  const navigate = useNavigate();
  
  const handleSearchClick = (event) => {

    let newArray = [...products]
    if (event.key === 'Enter') {
     
      const filteredList = newArray.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      dispatch(searchProductsItem(filteredList))
  
      navigate("/search");

    }
  };

  
  return (
    <>
    <header className={`header`}>
      <div className="header__wrapper bg-black">
        <Link to="/" className="header__logo">
          <img src={Logo} alt="" />
        </Link>
        <div className="header__search">
          <div class="checkout_input" id="checkout_input_name_input">
                <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} 
                onKeyDown={handleSearchClick}
                name="name" autocapitalize="words" class="user_input" id="checkout_user_name_input" placeholder="What are you looking for?"/>
            </div>
          
          <button className="header__search__btn">
            <Icon path={mdiMagnify} color={"#cfcfcf"} size={1} />
          </button>
        </div>
     
       
        <div className="header__cart">
          <NavLink to={"/basket"}>
            <span>Cart</span>
            <Icon path={mdiCartOutline} size={1} />
            <span className="cartcount_value">{totalItem}</span>
          </NavLink>
        </div>
      </div>
    </header>
    <div className="header__main">
                <span className="styles_logolink__LUb_Q">
                    <img src="https://barakatfresh.ae/_next/static/media/barakat-logo-en-primary.2c1fe12c.png" alt="" />
                </span>
                <div className="header__search">
          <div class="checkout_input" id="checkout_input_name_input">
                <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} 
                onKeyDown={handleSearchClick}
                name="name" 
                autocapitalize="words" class="user_input" id="checkout_user_name_input" placeholder="What are you looking for?"/>
            </div>
          
          <button className="header__search__btn">
            <Icon path={mdiMagnify} color={"#cfcfcf"} size={1} />
          </button>
        </div>
            </div>
    </>
    
  );
};
export default Header;
