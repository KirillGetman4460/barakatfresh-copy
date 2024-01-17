import { NavLink } from "react-router-dom";
import './style/breadCrumbs.scss'
const BreadCrumbs = ({title}) =>{
    return(
        <div className="bread__crumbs">
            <NavLink to={'/'}><span>Home</span></NavLink>     
            <span className="crumbs_sep">/</span>
            <span>{title}</span>
        </div>
    ) 
}
export default BreadCrumbs