import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Hero = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [ratingFilter, setRatingFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const getAllProducts = async () => {
    try {
      const { data } = await axios("https://api.npoint.io/1f002e83ca5d3e484eb8");
      console.log(data);
      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [ratingFilter, categoryFilter, searchQuery]);

  const filterProducts = () => {
    let filtered = [...products];
    if (ratingFilter) {
      filtered = filtered.filter(
        (product) => product.rating.rate >= ratingFilter
      );
    }
    if (categoryFilter) {
      filtered = filtered.filter(
        (product) => product.category === categoryFilter
      );
    }
    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setFilteredProducts(filtered);
  };

  // Get unique categories from products
  const getCategoryOptions = () => {
    const categories = products.map((product) => product.category);
    return [...new Set(categories)];
  };

  return (
    <Layout>
      <section className="w-full px-4 py-6 bg-gray-100 shadow-md rounded-lg">
        <div className="flex flex-col md:flex-row gap-4 mb-6 items-center justify-center">
          <div className="flex flex-col gap-2 w-full md:w-1/3">
            <label className="text-lg font-semibold text-gray-700">Search Products:</label>
            <input
              type="text"
              className="p-3 rounded-md text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title or description"
            />
          </div>
          <div className="flex flex-col gap-2 w-full md:w-1/3">
            <label className="text-lg font-semibold text-gray-700">Filter by Rating:</label>
            <select
              className="p-3 rounded-md text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={ratingFilter}
              onChange={(e) => setRatingFilter(e.target.value)}
            >
              <option value="">All Ratings</option>
              <option value="1">1 & Up</option>
              <option value="2">2 & Up</option>
              <option value="3">3 & Up</option>
              <option value="4">4 & Up</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 w-full md:w-1/3">
            <label className="text-lg font-semibold text-gray-700">Filter by Category:</label>
            <select
              className="p-3 rounded-md text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="">All Categories</option>
              {getCategoryOptions().map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>
      <section className="grid py-10 grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {filteredProducts?.map((item, id) => (
          <ProductCard item={item} key={id} />
        ))}
      </section>
    </Layout>
  );
};

export default Hero;
