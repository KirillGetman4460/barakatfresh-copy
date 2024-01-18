import {useState,useEffect} from 'react'
import Header from "../../components/Header/header";
import BreadCrumbs from '../../components/BreadCrumbs/breadCrumbs'
import Basket from '../../components/Basket/basket'
const PageBasket = () =>{
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          
          const scrollTop = window.scrollY;
          setIsFixed(scrollTop > 100);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return(

        <>
        <div className={`${isFixed ? 'fixed' : ''}`}>
            <Header></Header>
        </div>
        <div className="wrapper">
            <BreadCrumbs title={'Cart'}></BreadCrumbs>
            <div className="content basket">
                <Basket></Basket>
            </div>
        </div>
        </>
    )
}

export default PageBasket