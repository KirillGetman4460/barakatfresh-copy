import {useState,useEffect} from 'react'
import Icon from '@mdi/react';
import { mdiCheckboxMarked,mdiCheckboxBlankOutline,mdiChevronDown } from '@mdi/js';

import './style/filterMultiSelect.scss'

const FilterMultiSelect = ({title,origin,sortProductsByCountry,handleCountrySelectChange,resetSelectedCountries,selected,handleSelectChange}) =>{
    
    return(
        <div className="filter__multi__select">
            <div className="multi__select__content">
                <div className="multi__select__title">{title} <Icon path={mdiChevronDown} size={1} /></div>
                <ul className="multi__select__list">
                    {origin.map((item,i) => (
                        <li className="multi__select__list__item" onClick={() => {
                            handleCountrySelectChange(item)
                            handleSelectChange(i)
                        }}>
                            {selected && selected.some(item => item === i) ? <Icon path={mdiCheckboxMarked} color={'#2cc84d'} value={false} size={1} /> :   <Icon path={mdiCheckboxBlankOutline } size={1} color={'#2cc84d'} />}   
                            <span className="multi__select__text">{item}</span>
                        </li>
                    ))}
                    
                </ul>
                <div className="multiselect_footer">
                    <div className="multiselect_footer__btn" onClick={() => sortProductsByCountry()}>
                        <span>Apply</span>
                    </div>
                    <div className="multiselect_footer__btn" onClick={() => resetSelectedCountries()}>
                        <span>Reset</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FilterMultiSelect