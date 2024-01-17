import BreadCrumbs from '../../components/BreadCrumbs/breadCrumbs'
import Basket from '../../components/Basket/basket'
const PageBasket = () =>{
    return(
        <div className="wrapper">
            <BreadCrumbs title={'Cart'}></BreadCrumbs>
            <div className="content">
                <Basket></Basket>
            </div>
        </div>
    )
}

export default PageBasket