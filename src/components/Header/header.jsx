import Logo from '../../img/barakat-logo-en-white.81664276.png'
import "./style/header.scss"
const Header = () =>{
    return (
        <header className="header">
            <div className="header__wrapper bg-black">
                <div className="header__logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="header__search">
                    <input type="text" className='header__search__input' placeholder="What are you looking for?"/>
                    <button className='header__search__btn'><i className='header__search__icon'></i></button>
                </div>
                <div className="header__sing">
                    <a href="/">
                        <span>Sign In</span>
                        <img src="" alt="" />
                    </a>
                </div>
                <div className="header__cart">
                    <a href="/">
                        <span>Cart</span>
                        <img src="" alt="" />
                    </a>
                </div>
            </div>
        </header>
    )
}
export default Header