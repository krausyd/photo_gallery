import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

const Nav = ({categories, currentCategory, setCurrentCategory}) => {
    useEffect(() => {
        document.title = `Photo Gallery: ${capitalizeFirstLetter(currentCategory.name)}`;
    }, [currentCategory]);

    return (
        <header>
            <h2><a href='/' data-testid="link"><span role='img' aria-label='camera'>📸</span> Oh Snap!</a></h2>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2' data-testid="about"><a href='#about'>About me</a></li>
                    <li><span>Contact</span></li>
                    {categories.map((category) => (
                        <li className={`mx-1 ${currentCategory.name === category.name && 'navActive'}`} key={category.name}>
                            <span onClick={() => setCurrentCategory(category)}>{capitalizeFirstLetter(category.name)}</span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Nav;