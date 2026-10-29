import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();

  // Access cart items from Redux store
  const cartItems = useSelector(state => state.cart.items);

  // Calculate total number of items dynamically
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Check if an item is already added to cart
  const isItemInCart = (plantName) => {
    return cartItems.some(item => item.name === plantName);
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bf6?q=80&w=800&auto=format&fit=crop",
          description: "Produces oxygen at night, significantly improving indoor air quality.",
          cost: "$15"
        },
        {
          name: "Spider Plant",
          image: "https://images.unsplash.com/photo-1572688484437-25826eb81e0e?q=80&w=800&auto=format&fit=crop",
          description: "Filters toxins like formaldehyde and xylene from indoor environments.",
          cost: "$12"
        },
        {
          name: "Peace Lily",
          image: "https://images.unsplash.com/photo-1593691509543-c55fb32e7355?q=80&w=800&auto=format&fit=crop",
          description: "Removes mold spores and toxins while producing elegant white blooms.",
          cost: "$18"
        },
        {
          name: "Boston Fern",
          image: "https://images.unsplash.com/photo-1596724817752-b1fa7a78363d?q=80&w=800&auto=format&fit=crop",
          description: "Adds gentle natural humidity and removes common household pollutants.",
          cost: "$14"
        },
        {
          name: "Rubber Plant",
          image: "https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b90?q=80&w=800&auto=format&fit=crop",
          description: "Features broad glossy leaves that actively filter airborne impurities.",
          cost: "$20"
        },
        {
          name: "Aloe Vera",
          image: "https://images.unsplash.com/photo-1567689265664-1c48de61db0b?q=80&w=800&auto=format&fit=crop",
          description: "Cleanses air and yields healing soothing gel for burns and skin care.",
          cost: "$10"
        }
      ]
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        {
          name: "Lavender",
          image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=800&auto=format&fit=crop",
          description: "Beloved soothing herbal scent widely celebrated for inducing relaxation.",
          cost: "$16"
        },
        {
          name: "Jasmine",
          image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=800&auto=format&fit=crop",
          description: "Intensely sweet floral perfume that naturally refreshes any room.",
          cost: "$18"
        },
        {
          name: "Rosemary",
          image: "https://images.unsplash.com/photo-1515586000433-a5ba74c8ab62?q=80&w=800&auto=format&fit=crop",
          description: "Invigorating woody herbal aroma that also serves as a gourmet culinary herb.",
          cost: "$14"
        },
        {
          name: "Mint",
          image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?q=80&w=800&auto=format&fit=crop",
          description: "Crisp and energizing fragrance ideal for kitchens, teas, and fresh rooms.",
          cost: "$11"
        },
        {
          name: "Lemon Balm",
          image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=800&auto=format&fit=crop",
          description: "Uplifting citrus notes that boost focus and reduce everyday stress.",
          cost: "$13"
        },
        {
          name: "Sweet Basil",
          image: "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?q=80&w=800&auto=format&fit=crop",
          description: "Warm, sweet peppery aroma popular for culinary and aromatic pleasures.",
          cost: "$12"
        }
      ]
    },
    {
      category: "Low Maintenance Plants",
      plants: [
        {
          name: "ZZ Plant",
          image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=800&auto=format&fit=crop",
          description: "Extremely resilient foliage that tolerates drought and low-light corners.",
          cost: "$22"
        },
        {
          name: "Golden Pothos",
          image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?q=80&w=800&auto=format&fit=crop",
          description: "Vibrant trailing vine with heart-shaped leaves that prospers anywhere.",
          cost: "$13"
        },
        {
          name: "Cast Iron Plant",
          image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=800&auto=format&fit=crop",
          description: "Nearly indestructible perennial plant perfect for darker interior spaces.",
          cost: "$25"
        },
        {
          name: "Jade Plant",
          image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?q=80&w=800&auto=format&fit=crop",
          description: "Classic hardy succulent representing good fortune with minimal water needs.",
          cost: "$15"
        },
        {
          name: "Chinese Evergreen",
          image: "https://images.unsplash.com/photo-1602928321679-560bb453f190?q=80&w=800&auto=format&fit=crop",
          description: "Stunning patterned silver-green foliage that asks for very little maintenance.",
          cost: "$19"
        },
        {
          name: "Succulent Trio",
          image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=800&auto=format&fit=crop",
          description: "Charming trio of resilient desert succulents requiring watering only once a month.",
          cost: "$17"
        }
      ]
    }
  ];

  return (
    <div className="product-list-page">
      {/* Navigation bar appearing on both Product Listing and Cart pages */}
      <nav className="navbar">
        <div className="navbar-brand" onClick={onHomeClick}>
          <span className="brand-logo">🌿</span>
          <div className="brand-details">
            <h3 className="brand-name">Paradise Nursery</h3>
            <p className="brand-tagline">Where Green Meets Serenity</p>
          </div>
        </div>

        <div className="navbar-links">
          <button className="nav-btn" onClick={onHomeClick}>
            Home
          </button>
          <button 
            className={`nav-btn ${!showCart ? 'active' : ''}`} 
            onClick={() => setShowCart(false)}
          >
            Plants
          </button>
          <button 
            className={`cart-btn ${showCart ? 'active' : ''}`} 
            onClick={() => setShowCart(true)}
            aria-label="Shopping Cart"
          >
            <svg 
              className="cart-svg-icon" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span className="cart-badge">{totalQuantity}</span>
          </button>
        </div>
      </nav>

      {/* Main Content: Either Product Catalog or Cart View */}
      {!showCart ? (
        <main className="catalog-container">
          <header className="catalog-header">
            <h2 className="catalog-title">Our Plant Collection</h2>
            <p className="catalog-subtitle">
              Explore our hand-picked selections of healthy, vibrant houseplants.
            </p>
          </header>

          {plantsArray.map((categorySection, catIdx) => (
            <section key={catIdx} className="category-section">
              <div className="category-header">
                <h3 className="category-title">{categorySection.category}</h3>
                <span className="category-count">{categorySection.plants.length} Plants</span>
              </div>
              <div className="plant-grid">
                {categorySection.plants.map((plant, pIdx) => {
                  const added = isItemInCart(plant.name);
                  return (
                    <div key={pIdx} className="plant-card">
                      <div className="plant-image-container">
                        <img 
                          src={plant.image} 
                          alt={plant.name} 
                          className="plant-thumbnail" 
                          loading="lazy"
                        />
                        <span className="plant-price-badge">{plant.cost}</span>
                      </div>
                      <div className="plant-info">
                        <h4 className="plant-name">{plant.name}</h4>
                        <p className="plant-description">{plant.description}</p>
                        <button
                          className={`add-to-cart-btn ${added ? 'disabled' : ''}`}
                          onClick={() => handleAddToCart(plant)}
                          disabled={added}
                        >
                          {added ? '✓ Added to Cart' : 'Add to Cart'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </main>
      ) : (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      )}
    </div>
  );
}

export default ProductList;
