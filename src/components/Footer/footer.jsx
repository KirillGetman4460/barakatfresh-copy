import './style/footer.scss'
import { NavLink } from "react-router-dom";
const Footer = () =>{
    return(
        <footer className="footer">
            <div className="footer_body">
                <div className="sitelinks">
                    <div className="sitelinks_box">
                        <ul className="sitelinks_list">
                            <NavLink to={'/'}>
                            <li className="sitelinks_item"><span className="sitelinks_link">About Us</span></li>
                            </NavLink>
                            <NavLink to={'/'}>
                                <li className="sitelinks_item"><span className="sitelinks_link">Contact Us</span></li>
                            </NavLink>
                            <NavLink to={'/'}>
                            <li className="sitelinks_item"><span className="sitelinks_link">Privacy Policy</span></li>
                            </NavLink>
                            <NavLink to={'/'}>
                            <li className="sitelinks_item"><span className="sitelinks_link">Delivery Policy</span></li>
                            </NavLink>
                            <NavLink to={'/'}>
                            
                            <li className="sitelinks_item"><span className="sitelinks_link">Payment Methods</span></li>
                            </NavLink>
                            <NavLink to={'/'}>
                            
                            <li className="sitelinks_item"><span className="sitelinks_link">Refund/Return & Cancellation</span></li>
                            </NavLink>
                            <NavLink to={'/'}>
                            <li className="sitelinks_item"><span className="sitelinks_link">Term & Conditions</span></li>
                            </NavLink>
                         <NavLink to={'/'}>
                         <li className="sitelinks_item"><span className="sitelinks_link">Disclaimer</span></li>
                         </NavLink>
                            <NavLink to={'/'}>
                            <li className="sitelinks_item"><span className="sitelinks_link">Barakat Rewards</span></li>
                            </NavLink>
                            <NavLink to={'/'}>
                            <li className="sitelinks_item"><span className="sitelinks_link">Barakat Rewards Faq</span></li>
                            </NavLink>
                    
                        </ul>
                    </div>
                    <div className="sitelinks_box">
                        <ul className="sitelinks_list">
                        <NavLink to={'/'}>
                        <li className="sitelinks_item"><span className="sitelinks_link">Bbq Range</span></li>
                            </NavLink>
                            <NavLink to={'/'}>
                            <li className="sitelinks_item"><span className="sitelinks_link">Fruits</span></li>
                            </NavLink>
                            <NavLink to={'/'}>
                            <li className="sitelinks_item"><span className="sitelinks_link">Vegetables</span></li>
                            </NavLink>
                            <NavLink to={'/'}>
                            <li className="sitelinks_item"><span className="sitelinks_link">Fresh Juices</span></li>
                            </NavLink>
                            <NavLink to={'/'}>
                            <li className="sitelinks_item"><span className="sitelinks_link">Meats</span></li>
                            </NavLink>
                            <NavLink to={'/'}>
                            <li className="sitelinks_item"><span className="sitelinks_link">Grab N Go</span></li>
                            </NavLink>
                            <NavLink to={'/'}>
                            <li className="sitelinks_item"><span className="sitelinks_link">Gifting & Party Needs</span></li>
                            </NavLink>
                            <NavLink to={'/'}>
                            <li className="sitelinks_item"><span className="sitelinks_link">Organics</span></li>
                            </NavLink>
                            <NavLink to={'/'}>
                            <li className="sitelinks_item"><span className="sitelinks_link">Dairy & Eggs</span></li>
                            </NavLink>
                            <NavLink to={'/'}>
                            <li className="sitelinks_item"><span className="sitelinks_link">Ice Cream</span></li>
                            </NavLink>
                           
                        </ul>
                    </div>
                </div>
                <span className="footer_hr"></span>
            </div>
        </footer>
    )
}
export default Footer