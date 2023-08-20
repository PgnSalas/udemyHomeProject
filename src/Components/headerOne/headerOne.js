
// BLOCKS
import Title from '../readyBlocks/title/title';
import LinesCoffee from '../readyBlocks/linesCoffee/linesCoffe';
import Menu from '../readyBlocks/menu/menu';

// SCSS
import './headerOne.scss';

// image
import background from '../img/background.jpg';
import whiteCoffee from '../img/white-coffe.png';

import whiteMenuCoffee from '../img/coffee-beans.png';

const HeaderOne = () => {
    return (
        <header className='header'>
            {Menu(whiteMenuCoffee)}
            <div className="header__block">
                <Title text='Everything You Love About Coffee' mgB='20px' />
                {LinesCoffee(whiteCoffee)}
                <div className="header__block_text">
                    <p>We makes every day full of energy and taste</p>
                    <p>Want to try our beans?</p>
                </div>
                <div className="header__block_button">
                    <a href="">More</a>
                </div>
            </div>

            <div className="header_image _ibg">
                <img src={background} alt="background" />
            </div>
        </header>
    )
}

export default HeaderOne;