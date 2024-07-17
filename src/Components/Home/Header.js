import React, { useState } from 'react';
import OrderFormModal from '../OrderNowModal/OrderNowModal';
import "./Header.css";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleClick = () => {
    window.location.href = 'mailto:yousefkhalil010@gmail.com';
  };

  return (
    <header>
      <div className='container' id="home">
        <div className="row">
          <div className='col-md-6'>
            <h2>Good food choices are good investments</h2>
            <p>Discover the taste of excellence at Askadenya, where culinary artistry meets exceptional service. Located in the heart of Zababdeh, our restaurant offers a menu that celebrates the freshest ingredients and authentic flavors.</p>
            <button onClick={handleShowModal}>Order Now</button>
            <button onClick={handleClick}>Learn More</button>
          </div>
          <div className='col-md-6'>
          </div>
        </div>
      </div>
      <OrderFormModal show={showModal} handleClose={handleCloseModal} />
    </header>
  );
};

export default Header;

