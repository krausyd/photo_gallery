import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from '../../assets/small/commercial/0.jpg';

function Gallery({currentCategory}) {
    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>
            <div>
                <img src={photo} alt="Commercial example" className="img-thumbnail mx-1" />
            </div>
        </section>
    );
};

export default Gallery;