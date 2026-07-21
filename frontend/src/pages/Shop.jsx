import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';

function Shop() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const categoryParam = searchParams.get('category') || 'All';
  
  const [filter, setFilter] = useState(categoryParam);
  const categories = ['All', 'Exhausts', 'Helmets', 'Tires', 'Accessories'];

  useEffect(() => {
    setFilter(categoryParam);
  }, [categoryParam]);

  const handleFilterChange = (cat) => {
    setFilter(cat);
    navigate(`/shop?category=${encodeURIComponent(cat)}`);
  };

  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div style={{ paddingTop: '80px', paddingBottom: '4rem', minHeight: '80vh' }}>
      <section className="bike-items-section">
        <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#BADBF6', fontWeight: '900', fontSize: '3rem', textTransform: 'uppercase', fontStyle: 'italic' }}>
          Our Collection
        </h1>
        <p style={{ textAlign: 'center', color: '#BADBF6', opacity: 0.8, marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
          Browse our complete selection of premium motorcycle parts and accessories. 
        </p>

        {/* Category Filter */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => handleFilterChange(cat)}
              style={{
                background: filter === cat ? 'var(--primary-color)' : 'rgba(255, 255, 255, 0.05)',
                color: filter === cat ? '#fff' : '#BADBF6',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '0.5rem 1.5rem',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontWeight: '600'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="bike-product-grid">
          {filteredProducts.map((product) => (
            <div className="bike-card" key={product.id}>
              <div className="bike-image-wrapper">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="bike-card-body">
                <div className="bike-brand">{product.brand}</div>
                <p className="bike-desc">{product.name}</p>
                <div className="bike-price-rating">
                  <span className="bike-price">{product.price}</span>
                </div>
                <div className="bike-actions">
                  <button className="btn-buy">BUY NOW</button>
                  <button className="btn-details">DETAILS</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div style={{ textAlign: 'center', color: '#BADBF6', opacity: 0.7, padding: '3rem' }}>
            No products found in this category.
          </div>
        )}
      </section>
    </div>
  );
}

export default Shop;
