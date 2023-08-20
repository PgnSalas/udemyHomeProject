import './menu.scss';




const Menu = (url) => {
    return (
        <div className="menu">
            <div className="menu__img _ibg">
                <img src={url} alt="" />
            </div>

            <div className="menu__block">
                <ul className="menu__menu">
                    <li>Coffee house</li>
                    <li>Our coffee</li>
                    <li>For your pleasure</li>
                </ul>
            </div>
        </div>
    )
}

export default Menu;