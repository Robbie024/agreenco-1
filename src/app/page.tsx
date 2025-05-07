"use client";

import CategoryList from "../../components/CategoryList";
import ProductList from "../../components/ProductList"; // Verify the file exists or adjust the path
import Skeleton from "../../components/Skeleton";
import Slider from "../../components/Slider";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Example client-side fetching logic
        console.log("Fetching products...");
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <ProductList
          categoryId={process.env.FEATURED_PRODUCTS_FEATURED_CATEGORY_ID!}
          limit={4}
        />
      </div>
      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">
          Categories
        </h1>
        <CategoryList />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
        <ProductList
          categoryId={process.env.FEATURED_PRODUCTS_NEW_CATEGORY_ID!}
          limit={4}
        />
      </div>
    </div>
  );
};

export default HomePage;