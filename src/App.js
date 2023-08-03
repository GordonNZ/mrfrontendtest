import { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/navbar/Nav';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [size, setSize] = useState(null);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          'https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product'
        );
        setProducts(result.data);
        // console.log(result.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  // console.log(products);

  const addToCart = () => {
    if (!size) {
      alert('Please select a size');
    } else if (size) {
      const newProduct = {
        ...products,
        size,
      };
      setProduct(newProduct);
      setSize(null);
    }
  };

  return (
    <div className='App'>
      <Nav item={product} />
      <main>
        <article className='product-imgContainer'>
          <img
            src={products.imageURL}
            alt={products.title}
            className='product-img'
          />
        </article>
        <article className='product-info'>
          <h1 className='product-title'>{products.title}</h1>
          <h2 className='product-price'>${products.price?.toFixed(2)}</h2>
          <p className='product-desc'>{products.description}</p>
          <div className='size-container'>
            <p className='product-size'>
              SIZE <span className='required'>*</span>
            </p>
            <p className='size'>{size}</p>
          </div>
          <p className='product-sizeOpt'>
            {products?.sizeOptions?.map((option) => (
              <span
                key={option.id}
                className='product-option'
                onClick={() => setSize(`${option.label}`)}
              >
                {option.label}
              </span>
            ))}
          </p>
          <button className='cart-btn' onClick={() => addToCart()}>
            Add to Cart
          </button>
        </article>
      </main>
    </div>
  );
}

export default App;
