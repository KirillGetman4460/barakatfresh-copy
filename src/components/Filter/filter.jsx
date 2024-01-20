import { mdiChevronDown,mdiChevronRight  } from '@mdi/js';
import { useSelector,useDispatch } from 'react-redux'
import {selectTitle} from '../../store/basketSlice/basketSlice'
import Icon from '@mdi/react';
import { NavLink } from "react-router-dom";
import './style/filter.scss'
const Filter = () =>{

    const dispatch = useDispatch()

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
                    <div className="filter__item" onClick={() => dispatch(selectTitle(''))}>
                        <span>BBQ Range</span>
                        <div className="filter__item__icon">
                            <Icon path={mdiChevronRight} size={1} color={'#2cc84d'} />
                        </div>
                    </div>
                    </NavLink>
                    <NavLink to={'/'}>
                    <div className="filter__item" onClick={() => dispatch(selectTitle(''))}>
                        <span>Fruits</span>
                        <div className="filter__item__icon">
                            <Icon path={mdiChevronRight} size={1} color={'#2cc84d'} />
                        </div>
                    </div>
                    </NavLink>
                    <NavLink to={'/vegetables'}>
                    <div className="filter__item" onClick={() => dispatch(selectTitle(''))}>
                        <span>Vegetables</span>
                        <div className="filter__item__icon">
                            <Icon path={mdiChevronRight} size={1} color={'#2cc84d'} />
                        </div>
                    </div>
                    </NavLink>
                    <NavLink to={'/fresh_juices'}>
                    <div className="filter__item" onClick={() => dispatch(selectTitle(''))}>
                        <span>Fresh Juices</span>
                        <div className="filter__item__icon">
                            <Icon path={mdiChevronRight} size={1} color={'#2cc84d'} />
                        </div>
                    </div>
                    </NavLink>
                    <NavLink to={'/meats'}>
                    <div className="filter__item" onClick={() => dispatch(selectTitle(''))}>
                        <span>Meats</span>
                        <div className="filter__item__icon">
                            <Icon path={mdiChevronRight} size={1}  color={'#2cc84d'}/>
                        </div>
                    </div>
                    </NavLink>
                    <NavLink to={'/grab_to_go'}>
                    <div className="filter__item" onClick={() => dispatch(selectTitle(''))}>
                        <span>Grab N Go</span>
                        <div className="filter__item__icon">
                            <Icon path={mdiChevronRight} size={1} color={'#2cc84d'} />
                        </div>
                    </div>
                    </NavLink>
                    <NavLink to={'/gifting_needs'}>
                    <div className="filter__item" onClick={() => dispatch(selectTitle(''))}>
                        <span>Gifting & Party Needs</span>
                        <div className="filter__item__icon">
                            <Icon path={mdiChevronRight} size={1} color={'#2cc84d'} />
                        </div>
                    </div>
                    </NavLink>
                   <NavLink to={'/organics'}>
                   <div className="filter__item" onClick={() => dispatch(selectTitle(''))}>
                        <span>Organics</span>
                        <div className="filter__item__icon">
                            <Icon path={mdiChevronRight} size={1} color={'#2cc84d'} />
                        </div>
                    </div>
                   </NavLink>
                    <NavLink to={'/bakery'}>
                    <div className="filter__item" onClick={() => dispatch(selectTitle(''))}>
                        <span>Bakery</span>
                        <div className="filter__item__icon">
                            <Icon path={mdiChevronRight} size={1} color={'#2cc84d'} />
                        </div>
                    </div>
                    </NavLink>
                    <NavLink to={'/dairy_eggs'}>
                    <div className="filter__item" onClick={() => dispatch(selectTitle(''))}>
                        <span>Dairy & Eggs</span>
                        <div className="filter__item__icon">
                            <Icon path={mdiChevronRight} size={1} color={'#2cc84d'} />
                        </div>
                    </div>
                    </NavLink>
                    <NavLink to={'/ice_cream'}>
                    <div className="filter__item" onClick={() => dispatch(selectTitle(''))}>
                        <span>Ice Cream</span>
                        <div className="filter__item__icon">
                            <Icon path={mdiChevronRight} size={1} color={'#2cc84d'} />
                        </div>
                    </div>
                    </NavLink>
                   <NavLink to={'/pantry'}>
                   <div className="filter__item" onClick={() => dispatch(selectTitle(''))}>
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