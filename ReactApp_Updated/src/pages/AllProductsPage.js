
import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../api/productsApi';
import ProductCard from '../components/ProductCard';
import Filter from '../components/Filter';
import Sort from '../components/Sort';
import Pagination from '../components/Pagination';

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const productData = await fetchProducts();
      setProducts(productData);
      setFilteredProducts(productData);
    };
    loadProducts();
  }, []);

  const handleFilterChange = (filters) => {
    // Filtering logic
  };

  const handleSortChange = (sortCriteria) => {
    // Sorting logic
  };

  const handlePageChange = (pageNumber) => {
    // Pagination logic
  };

  return (
    <div>
      <Filter onChange={handleFilterChange} />
      <Sort onChange={handleSortChange} />
      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination onPageChange={handlePageChange} />
    </div>
  );
};

export default AllProductsPage;
