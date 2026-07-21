import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';

function Shop() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const categoryParam = searchParams.get('category');
  
  // States for filters
  const [selectedCategories, setSelectedCategories] = useState(categoryParam && categoryParam !== 'All' ? [categoryParam] : []);
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [inStockOnly, setInStockOnly] = useState(false);
  const [outOfStockOnly, setOutOfStockOnly] = useState(false);
  const [sortOption, setSortOption] = useState('relevant');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const sortRef = useRef(null);

  const sortOptions = [
    { value: 'relevant', label: 'Most relevant' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' }
  ];

  const categories = ['Exhausts', 'Helmets', 'Tires', 'Accessories'];

  useEffect(() => {
    if (categoryParam && categoryParam !== 'All') {
      setSelectedCategories([categoryParam]);
    } else {
      setSelectedCategories([]);
    }
  }, [categoryParam]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setIsSortOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCategoryToggle = (cat) => {
    setSelectedCategories(prev => {
      const newCats = prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat];
      return newCats;
    });
  };

  const getProductCount = (cat) => products.filter(p => p.category === cat).length;
  const inStockCount = products.filter(p => p.inStock !== false).length;
  const outOfStockCount = products.filter(p => p.inStock === false).length;

  const parsePrice = (priceStr) => parseInt(priceStr.replace(/[^0-9]/g, ''), 10);

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange({ min: '', max: '' });
    setInStockOnly(false);
    setOutOfStockOnly(false);
    setSortOption('relevant');
    navigate('/shop');
  };

  const filteredProducts = products.filter(p => {
    const numPrice = parsePrice(p.price);
    const catMatch = selectedCategories.length === 0 || selectedCategories.includes(p.category);
    const minVal = priceRange.min === '' ? 0 : priceRange.min;
    const maxVal = priceRange.max === '' ? Infinity : priceRange.max;
    const priceMatch = numPrice >= minVal && numPrice <= maxVal;
    
    let stockMatch = true;
    if (inStockOnly && outOfStockOnly) {
      stockMatch = true; // Both checked = show all
    } else if (inStockOnly) {
      stockMatch = p.inStock !== false;
    } else if (outOfStockOnly) {
      stockMatch = p.inStock === false;
    }

    return catMatch && priceMatch && stockMatch;
  }).sort((a, b) => {
    if (sortOption === 'price-low') return parsePrice(a.price) - parsePrice(b.price);
    if (sortOption === 'price-high') return parsePrice(b.price) - parsePrice(a.price);
    return 0; // Default relevant
  });

  return (
    <div className="shop-page-wrapper">
      
      {/* Hero Banner Section */}
      <section className="shop-hero">
        <div className="shop-hero-content centered-hero">
          <div className="hero-subtitle">MOTOMOD <span style={{ color: 'var(--primary-color)' }}>STORE</span></div>
          <h1 className="modern-title">
            <span className="welcome-text">Upgrade your </span>
            <span className="text-highlight">Ride.</span>
          </h1>
          <p className="hero-desc" style={{ visibility: 'hidden', userSelect: 'none' }}>Discover our premium selection of motorcycle gear, parts, and accessories to push the limits of performance.</p>
        </div>
      </section>

      {/* Promo Grid Section */}
      <section className="shop-promo-grid">
        <div className="shop-promo-card" style={{ cursor: 'default' }}>
          <div className="shop-promo-content">
            <div className="shop-promo-label">Motomod</div>
            <div className="shop-promo-title">FAST DELIVERY</div>
            <div className="shop-promo-desc">
              Get your gear fast with our reliable, island-wide delivery service straight to your doorstep.
            </div>
          </div>
        </div>
        
        <div className="shop-promo-card" style={{ cursor: 'default' }}>
          <div className="shop-promo-content">
            <div className="shop-promo-label">Motomod</div>
            <div className="shop-promo-title">PREMIUM QUALITY</div>
            <div className="shop-promo-desc">
              We guarantee 100% authentic, top-tier motorcycle parts and accessories for your ride.
            </div>
          </div>
        </div>

        <div className="shop-promo-card" style={{ cursor: 'default' }}>
          <div className="shop-promo-content">
            <div className="shop-promo-label">Motomod</div>
            <div className="shop-promo-title">EXPERT SUPPORT</div>
            <div className="shop-promo-desc">
              Need help? Our technical team provides expert guidance and 24/7 customer support.
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="shop-container">
        
        {/* Sidebar Filter */}
        <aside className="shop-sidebar">
          
          {/* Categories Filter */}
          <div className="filter-section">
            <h3 className="filter-title">Categories</h3>
            <div className="filter-list">
              {categories.map(cat => (
                <label key={cat} className="filter-label">
                  <input 
                    type="checkbox" 
                    className="custom-checkbox"
                    checked={selectedCategories.includes(cat)}
                    onChange={() => handleCategoryToggle(cat)}
                  />
                  <span className="filter-text">{cat}</span>
                  <span className="filter-count">({getProductCount(cat)})</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div className="filter-section">
            <h3 className="filter-title">Price</h3>
            <div className="price-inputs">
              <div className="price-input-group">
                <span className="price-currency">Rs</span>
                <input 
                  type="number" 
                  value={priceRange.min} 
                  onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value === '' ? '' : parseInt(e.target.value) })}
                  placeholder="Min"
                />
              </div>
              <span className="price-separator">to</span>
              <div className="price-input-group">
                <span className="price-currency">Rs</span>
                <input 
                  type="number" 
                  value={priceRange.max} 
                  onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value === '' ? '' : parseInt(e.target.value) })}
                  placeholder="Max"
                />
              </div>
            </div>
          </div>



          {/* Availability Filter */}
          <div className="filter-section">
            <h3 className="filter-title">Availability</h3>
            <div className="filter-list">
              <label className="filter-label">
                <input 
                  type="checkbox" 
                  className="custom-checkbox"
                  checked={inStockOnly}
                  onChange={() => setInStockOnly(!inStockOnly)}
                />
                <span className="filter-text">In Stock</span>
                <span className="filter-count">({inStockCount})</span>
              </label>
              <label className="filter-label">
                <input 
                  type="checkbox" 
                  className="custom-checkbox"
                  checked={outOfStockOnly}
                  onChange={() => setOutOfStockOnly(!outOfStockOnly)}
                />
                <span className="filter-text">Out Of Stock</span>
                <span className="filter-count">({outOfStockCount})</span>
              </label>
            </div>
          </div>

          <button className="clear-filters-btn" onClick={clearFilters}>
            Clear Filters
          </button>
        </aside>

        {/* Product Grid */}
        <div className="shop-main-content">
          <div className="shop-results-header">
            <span className="results-count">Showing {filteredProducts.length} results</span>
            <div className="shop-sort-dropdown" ref={sortRef}>
              <div 
                className="shop-sort-selected" 
                onClick={() => setIsSortOpen(!isSortOpen)}
              >
                {sortOptions.find(o => o.value === sortOption)?.label}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`chevron ${isSortOpen ? 'open' : ''}`}>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              
              {isSortOpen && (
                <ul className="shop-sort-options">
                  {sortOptions.map((opt) => (
                    <li 
                      key={opt.value} 
                      className={sortOption === opt.value ? 'active' : ''}
                      onClick={() => {
                        setSortOption(opt.value);
                        setIsSortOpen(false);
                      }}
                    >
                      {opt.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          
          <div className="bike-product-grid shop-filtered-grid">
            {filteredProducts.map((product) => (
              <div className="bike-card" key={product.id}>
                <div className="bike-image-wrapper">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="bike-card-body">
                  <div className="bike-brand">
                    <span style={{ 
                      color: product.inStock !== false ? '#28a745' : '#dc3545',
                    }}>
                      {product.inStock !== false ? 'IN STOCK' : 'OUT OF STOCK'}
                    </span>
                  </div>
                  <p className="bike-desc">{product.name}</p>
                  <div className="bike-price-rating">
                    <span className="bike-price">{product.price}</span>
                    {product.originalPrice && (
                      <span style={{ textDecoration: 'line-through', color: '#888', marginLeft: '10px', fontSize: '0.85rem' }}>
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="bike-actions">
                    <button className="btn-buy">ADD TO CART</button>
                    <button className="btn-details">DETAILS</button>
                  </div>
                </div>

              </div>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div style={{ textAlign: 'center', color: '#888', padding: '3rem', fontSize: '1.2rem', fontWeight: 'bold' }}>
              No products match your filters.
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
}

export default Shop;
