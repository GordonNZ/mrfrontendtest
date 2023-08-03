import React, { useEffect, useState } from 'react';
import './Cart.css';

const Cart = ({ item }) => {
  console.log(item);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const existingArray = JSON.parse(localStorage.getItem('cart')) || [];
    // Add the new object to the array
    const updatedArray = [...existingArray, item];
    localStorage.setItem('cart', JSON.stringify(updatedArray));
    setItems(updatedArray);
  }, [item]);

  return (
    <div className='cart'>
      {items?.map((item) => (
        <div className='cart-item'>
          <img src={item.imageURL} alt='shirt' className='cart-img' />
          <div className='cart-info'>
            <p>{item.title}</p>
            <p>1 x ${item.price}</p>
            <p>Size: {item.size}</p>
          </div>
        </div>
      ))}
      {/* <div className='cart-item'>
        <img src={item.imageURL} alt='shirt' className='cart-img' />
        <div className='cart-info'>
          <p>{item.title}</p>
          <p>1 x ${item.price}</p>
          <p>Size: {item.size}</p>
        </div>
      </div>
      <div className='cart-item'>
        <img src='img/classic-tee.jpg' alt='shirt' className='cart-img' />
        <div className='cart-info'>
          <p>Classic Tee</p>
          <p>1 x $75.00</p>
          <p>Size: L</p>
        </div>
      </div> */}
    </div>
  );
};

export default Cart;
