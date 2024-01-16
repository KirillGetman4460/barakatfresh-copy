import './style/filterMultiSelect.scss'
const FilterMultiSelect = ({title,origin,sortProductsByCountry,handleCountrySelectChange,resetSelectedCountries}) =>{
    return(
        <div className="filter__multi__select">
            <div className="multi__select__content">
                <div className="multi__select__title">{title}</div>
                <ul className="multi__select__list">
                    {origin.map(item => (
                        <li className="multi__select__list__item" onClick={() => handleCountrySelectChange(item)}>
                            <i className="multi__select__icon"></i>
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