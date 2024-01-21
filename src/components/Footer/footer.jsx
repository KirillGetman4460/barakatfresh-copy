import './style/footer.scss'
import { NavLink } from "react-router-dom";
const Footer = () =>{
    return(
        <footer className="footer">
            <div className="footer_body">
                <div className="sitelinks">
                    <div className="sitelinks_box">
                        <ul className="sitelinks_list">
                          
                            <li className="sitelinks_item">
                                <NavLink  to={'/'}>
                                <span className="sitelinks_link">About Us</span>
                                </NavLink>
                          
                            </li>
                            <li className="sitelinks_item">
                                <NavLink  to={'/'}>
                                <span className="sitelinks_link">Contact Us</span>
                                </NavLink>
                          
                            </li>
                           
                            <li className="sitelinks_item">
                                <NavLink  to={'/'}>
                                <span className="sitelinks_link">Privacy Policy</span>
                                </NavLink>
                          
                            </li>
                            <li className="sitelinks_item">
                                <NavLink  to={'/'}>
                                <span className="sitelinks_link">Delivery Policy</span>
                                </NavLink>
                          
                            </li>
                            <li className="sitelinks_item">
                                <NavLink  to={'/'}>
                                <span className="sitelinks_link">Payment Methods</span>
                                </NavLink>
                          
                            </li>
                            <li className="sitelinks_item">
                                <NavLink  to={'/'}>
                                <span className="sitelinks_link">Refund/Return & Cancellation</span>
                                </NavLink>
                          
                            </li>
                            <li className="sitelinks_item">
                                <NavLink  to={'/'}>
                                <span className="sitelinks_link">Term & Conditions</span>
                                </NavLink>
                          
                            </li>
                            <li className="sitelinks_item">
                                <NavLink  to={'/'}>
                                <span className="sitelinks_link">Disclaimer</span>
                                </NavLink>
                          
                            </li>
                            <li className="sitelinks_item">
                                <NavLink  to={'/'}>
                                <span className="sitelinks_link">Barakat Rewards</span>
                                </NavLink>
                          
                            </li>
                            <li className="sitelinks_item">
                                <NavLink  to={'/'}>
                                <span className="sitelinks_link">Barakat Rewards Faq</span>
                                </NavLink>
                          
                            </li>
                            
                           
                    
                        </ul>
                    </div>
                    <div className="sitelinks_box">
                        <ul className="sitelinks_list">
                        <li className="sitelinks_item">
                                <NavLink  to={'/'}>
                                <span className="sitelinks_link">Bbq Range</span>
                                </NavLink>
                          
                            </li>
                            <li className="sitelinks_item">
                                <NavLink  to={'/'}>
                                <span className="sitelinks_link">Fruits</span>
                                </NavLink>
                          
                            </li>
                       
                            <li className="sitelinks_item">
                                <NavLink  to={'/'}>
                                <span className="sitelinks_link">Vegetables</span>
                                </NavLink>
                          
                            </li>
                            <li className="sitelinks_item">
                                <NavLink  to={'/'}>
                                <span className="sitelinks_link">Fresh Juices</span>
                                </NavLink>
                          
                            </li>
                            <li className="sitelinks_item">
                                <NavLink  to={'/'}>
                                <span className="sitelinks_link">Meats</span>
                                </NavLink>
                          
                            </li>
                            <li className="sitelinks_item">
                                <NavLink  to={'/'}>
                                <span className="sitelinks_link">Grab N Go</span>
                                </NavLink>
                          
                            </li>
                            <li className="sitelinks_item">
                                <NavLink  to={'/'}>
                                <span className="sitelinks_link">Gifting & Party Needs</span>
                                </NavLink>
                          
                            </li>
                            <li className="sitelinks_item">
                                <NavLink  to={'/'}>
                                <span className="sitelinks_link">Organics</span>
                                </NavLink>
                          
                            </li>
                            <li className="sitelinks_item">
                                <NavLink  to={'/'}>
                                <span className="sitelinks_link">Dairy & Eggs</span>
                                </NavLink>
                          
                            </li>
                            <li className="sitelinks_item">
                                <NavLink  to={'/'}>
                                <span className="sitelinks_link">Ice Cream</span>
                                </NavLink>
                          
                            </li>
                          
                     
                           
                        </ul>
                    </div>
                </div>
                <span className="footer_hr"></span>
            </div>
        </footer>
    )
}
export default Footer