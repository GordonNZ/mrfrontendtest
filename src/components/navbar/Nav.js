import React, { useState } from 'react';
import './Nav.css';
import Cart from '../cart/Cart';

const Nav = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav>
        <div className='nav-cart'>
          <p className='nav-p' onClick={() => setOpen(!open)}>
            My Cart (4)
          </p>
        </div>
      </nav>
      <div className='cart-comp'>{open && <Cart item={item} />}</div>
    </div>
  );
};

export default Nav;
