
import React, { useState } from 'react';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([
    {id: 1, name: 'PAPER', description: 'Description is any type of communication that aims to make vivid a place, object, person, group, or other physical entity. Description is one of four rhetorical modes, along with exposition, argumenta…'},
    { id: 2, name: 'PAINT', description: 'Description is any type of communication that aims to make vivid a place, object, person, group, or other physical entity. Description is one of four rhetorical modes, along with exposition, argumenta…' },
    { id: 3, name: 'BOOK', description: 'Description is any type of communication that aims to make vivid a place, object, person, group, or other physical entity. Description is one of four rhetorical modes, along with exposition, argumenta…' },
    { id: 4, name: 'BAG', description: 'Description is any type of communication that aims to make vivid a place, object, person, group, or other physical entity. Description is one of four rhetorical modes, along with exposition, argumenta…' },
    { id: 5, name: 'BALL', description: 'Description is any type of communication that aims to make vivid a place, object, person, group, or other physical entity. Description is one of four rhetorical modes, along with exposition, argumenta…' },
    { id: 6, name: 'FOOTBALL', description: 'Description is any type of communication that aims to make vivid a place, object, person, group, or other physical entity. Description is one of four rhetorical modes, along with exposition, argumenta…' },
    { id: 7, name: 'CRICKET BAT', description: 'Description is any type of communication that aims to make vivid a place, object, person, group, or other physical entity. Description is one of four rhetorical modes, along with exposition, argumenta…' },
    { id: 8, name: 'TENNIS BALL', description: 'Description is any type of communication that aims to make vivid a place, object, person, group, or other physical entity. Description is one of four rhetorical modes, along with exposition, argumenta…' },
    { id: 9, name: 'TV', description: 'Description is any type of communication that aims to make vivid a place, object, person, group, or other physical entity. Description is one of four rhetorical modes, along with exposition, argumenta…' },
    { id: 10, name: 'MOBILE', description: 'Description is any type of communication that aims to make vivid a place, object, person, group, or other physical entity. Description is one of four rhetorical modes, along with exposition, argumenta…' },
    { id: 11, name: 'TABLE FAN', description: 'Description is any type of communication that aims to make vivid a place, object, person, group, or other physical entity. Description is one of four rhetorical modes, along with exposition, argumenta…' },
    { id: 12, name: 'TOURCH LIGHT', description: 'Description is any type of communication that aims to make vivid a place, object, person, group, or other physical entity. Description is one of four rhetorical modes, along with exposition, argumenta…' },
    { id: 13, name: 'PAPER', description: 'Description is any type of communication that aims to make vivid a place, object, person, group, or other physical entity. Description is one of four rhetorical modes, along with exposition, argumenta…' },
    { id: 14, name: 'PEN', description: 'Description is any type of communication that aims to make vivid a place, object, person, group, or other physical entity. Description is one of four rhetorical modes, along with exposition, argumenta…' },
    { id: 15, name: 'PENCIL', description: 'Description is any type of communication that aims to make vivid a place, object, person, group, or other physical entity. Description is one of four rhetorical modes, along with exposition, argumenta…' },
  ]);

  const addToCart = (product) => {
    if (!cartItems.find((item) => item.id === product.id)) {
      setCartItems([...cartItems, product]);
    }
  };

  const removeFromCart = (productId) => {
    const newCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(newCartItems);
  };

  const isItemInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  return (
    <div>
      <h1 class="display-4 fw-bolder"><button>Shopping Cart</button></h1>
      <h3><button class="cart">🛒 Cart Quantity:{cartItems.length}</button></h3>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            {isItemInCart(product.id) ? (
              <button onClick={() => removeFromCart(product.id)}>
                Remove from Cart
              </button>
            ) : (
              <h1><button onClick={() => addToCart(product)}>Add to Cart</button></h1>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;