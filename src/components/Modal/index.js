import React from 'react';

const Modal = ({ currentPhoto, onClose }) => {
    const {name, description, category, index} = currentPhoto;
    console.log(currentPhoto);
    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img src={require(`../../assets/large/${category}/${index}.jpg`)} alt={category} />
                <p>
                    {description}
                </p>
                <button onClick={onClose} type="button">
                    Close this modal
                </button>
            </div>
        </div>
    );
};

export default Modal;