import './style/breadCrumbs.scss'
const BreadCrumbs = () =>{
    return(
        <div className="bread__crumbs">
            <span>Home</span>
            <span className="crumbs_sep">/</span>
            <span>Fruits</span>
        </div>
    ) 
}
export default BreadCrumbs