import { mdiChevronDown,mdiChevronRight  } from '@mdi/js';
import Icon from '@mdi/react';
import { NavLink } from "react-router-dom";
import './style/filter.scss'
const Filter = () =>{
    return (
        <div className="filter">
            <div className="filter__content">
                <div className="filter__title">
                    <span>
                        Categories
                    </span>
                    <Icon path={mdiChevronDown} size={1} />
                </div>
                <ul className="filter__list">
                    <NavLink to={'/bbq'}
                        className={({ isActive, isPending }) =>
                         isPending ? "pending" : isActive ? "active" : ""
                       }
                    >
                    <div className="filter__item">
                        <span>BBQ Range</span>
                        <div className="filter__item__icon">
                            <Icon path={mdiChevronRight} size={1} color={'#2cc84d'} />
                        </div>
                    </div>
                    </NavLink>
                    <NavLink to={'/'}>
                    <div className="filter__item">
                        <span>Fruits</span>
                        <div className="filter__item__icon">
                            <Icon path={mdiChevronRight} size={1} color={'#2cc84d'} />
                        </div>
                    </div>
                    </NavLink>
                    <NavLink to={'/vegetables'}>
                    <div className="filter__item">
                        <span>Vegetables</span>
                        <div className="filter__item__icon">
                            <Icon path={mdiChevronRight} size={1} color={'#2cc84d'} />
                        </div>
                    </div>
                    </NavLink>
                    <NavLink to={'/fresh_juices'}>
                    <div className="filter__item">
                        <span>Fresh Juices</span>
                        <div className="filter__item__icon">
                            <Icon path={mdiChevronRight} size={1} color={'#2cc84d'} />
                        </div>
                    </div>
                    </NavLink>
                    <NavLink to={'/meats'}>
                    <div className="filter__item">
                        <span>Meats</span>
                        <div className="filter__item__icon">
                            <Icon path={mdiChevronRight} size={1}  color={'#2cc84d'}/>
                        </div>
                    </div>
                    </NavLink>
                    <NavLink to={'/grab_to_go'}>
                    <div className="filter__item">
                        <span>Grab N Go</span>
                        <div className="filter__item__icon">
                            <Icon path={mdiChevronRight} size={1} color={'#2cc84d'} />
                        </div>
                    </div>
                    </NavLink>
                    <NavLink to={'/gifting_needs'}>
                    <div className="filter__item">
                        <span>Gifting & Party Needs</span>
                        <div className="filter__item__icon">
                            <Icon path={mdiChevronRight} size={1} color={'#2cc84d'} />
                        </div>
                    </div>
                    </NavLink>
                   <NavLink to={'/organics'}>
                   <div className="filter__item">
                        <span>Organics</span>
                        <div className="filter__item__icon">
                            <Icon path={mdiChevronRight} size={1} color={'#2cc84d'} />
                        </div>
                    </div>
                   </NavLink>
                    <NavLink to={'/bakery'}>
                    <div className="filter__item">
                        <span>Bakery</span>
                        <div className="filter__item__icon">
                            <Icon path={mdiChevronRight} size={1} color={'#2cc84d'} />
                        </div>
                    </div>
                    </NavLink>
                    <NavLink to={'/dairy_eggs'}>
                    <div className="filter__item">
                        <span>Dairy & Eggs</span>
                        <div className="filter__item__icon">
                            <Icon path={mdiChevronRight} size={1} color={'#2cc84d'} />
                        </div>
                    </div>
                    </NavLink>
                    <NavLink to={'/ice_cream'}>
                    <div className="filter__item">
                        <span>Ice Cream</span>
                        <div className="filter__item__icon">
                            <Icon path={mdiChevronRight} size={1} color={'#2cc84d'} />
                        </div>
                    </div>
                    </NavLink>
                   <NavLink to={'/pantry'}>
                   <div className="filter__item">
                        <span>Pantry</span>
                        <div className="filter__item__icon">
                            <Icon path={mdiChevronRight} size={1} color={'#2cc84d'} />
                        </div>
                    </div>
                   </NavLink>
                    
                </ul>
            </div>
        </div>
    )
}
export default Filter