import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Helper to parse numeric cost from string (e.g., "$15" -> 15)
  const parseCost = (cost) => {
    if (typeof cost === 'number') return cost;
    return parseFloat(cost.toString().replace(/[^0-9.]/g, '')) || 0;
  };

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    const total = cart.reduce((acc, item) => {
      return acc + parseCost(item.cost) * item.quantity;
    }, 0);
    return total.toFixed(2);
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    const cost = parseCost(item.cost) * item.quantity;
    return cost.toFixed(2);
  };

  const handleContinueShopping = (e) => {
    if (onContinueShopping) {
      onContinueShopping(e);
    }
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckoutShopping = (e) => {
    alert('Coming Soon! Checkout functionality will be added in a future release.');
  };

  return (
    <div className="cart-container">
      <div className="cart-card">
        <h2 className="cart-title">Your Shopping Cart</h2>
        
        {cart.length === 0 ? (
          <div className="empty-cart-state">
            <p className="empty-cart-message">Your shopping cart is currently empty.</p>
            <button className="continue-shopping-btn" onClick={handleContinueShopping}>
              Start Shopping &rarr;
            </button>
          </div>
        ) : (
          <>
            <div className="cart-header-summary">
              <span className="total-items-badge">
                Total Plants: {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
              <h3 className="cart-grand-total">
                Total Cart Amount: <span className="total-price">${calculateTotalAmount()}</span>
              </h3>
            </div>

            <div className="cart-items-list">
              {cart.map((item, index) => (
                <div key={index} className="cart-item-row">
                  <div className="cart-item-image-wrapper">
                    <img src={item.image} alt={item.name} className="cart-item-thumbnail" />
                  </div>

                  <div className="cart-item-details">
                    <h4 className="cart-item-name">{item.name}</h4>
                    <p className="cart-item-unit-price">
                      Unit Price: <strong>{typeof item.cost === 'string' && item.cost.startsWith('$') ? item.cost : `$${item.cost}`}</strong>
                    </p>
                  </div>

                  <div className="cart-item-quantity-controls">
                    <button 
                      className="quantity-btn decrease-btn" 
                      onClick={() => handleDecrement(item)}
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="quantity-display">{item.quantity}</span>
                    <button 
                      className="quantity-btn increase-btn" 
                      onClick={() => handleIncrement(item)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  <div className="cart-item-subtotal">
                    <span className="subtotal-label">Subtotal:</span>
                    <span className="subtotal-amount">${calculateTotalCost(item)}</span>
                  </div>

                  <div className="cart-item-actions">
                    <button 
                      className="delete-item-btn" 
                      onClick={() => handleRemove(item)}
                      aria-label="Delete item from cart"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <button className="continue-shopping-btn" onClick={handleContinueShopping}>
                &larr; Continue Shopping
              </button>
              <button className="checkout-btn" onClick={handleCheckoutShopping}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartItem;
