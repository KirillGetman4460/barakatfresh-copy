import './style/filter.scss'
const Filter = () =>{
    return (
        <div className="filter">
            <div className="filter__content">
                <div className="filter__title">
                    <span>
                        Categories
                    </span>
                </div>
                <ul className="filter__list">
                    <div className="filter__item">
                        <span>BBQ Range</span>
                    </div>
                    <div className="filter__item">
                        <span>Fruits</span>
                    </div>
                    <div className="filter__item">
                        <span>Vegetables</span>
                    </div>
                    <div className="filter__item">
                        <span>Fresh Juices</span>
                    </div>
                    <div className="filter__item">
                        <span>Meats</span>
                    </div>
                    <div className="filter__item">
                        <span>Grab N Go</span>
                    </div>
                    <div className="filter__item">
                        <span>Gifting & Party Needs</span>
                    </div>
                    <div className="filter__item">
                        <span>Organics</span>
                    </div>
                    <div className="filter__item">
                        <span>Bakery</span>
                    </div>
                    <div className="filter__item">
                        <span>Dairy & Eggs</span>
                    </div>
                    <div className="filter__item">
                        <span>Ice Cream</span>
                    </div>
                    <div className="filter__item">
                        <span>Pantry</span>
                    </div>
                </ul>
            </div>
        </div>
    )
}
export default Filter