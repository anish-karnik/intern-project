import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../store/appStore";
import { FaStar, FaRegStar } from "react-icons/fa";

const ProductCard = ({ item }) => {
  const { addCart } = useAppStore();
  const navigate = useNavigate();

  const productName = (name) => {
    if (name.length > 20) {
      return name.substring(0, 20) + "...";
    }
    return name;
  };

  const renderStars = (rating) => {
    const filledStars = Math.floor(rating);
    const halfStars = rating - filledStars >= 0.5 ? 1 : 0;
    const emptyStars = 5 - filledStars - halfStars;

    return (
      <div className="flex items-center">
        {[...Array(filledStars)].map((_, index) => (
          <FaStar key={`filled-${index}`} className="text-yellow-400" />
        ))}
        {[...Array(halfStars)].map((_, index) => (
          <FaStar key={`half-${index}`} className="text-yellow-400" />
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={`empty-${index}`} className="text-yellow-400" />
        ))}
      </div>
    );
  };

  return (
    <div className="relative flex flex-col items-center justify-between p-6 bg-gray-900 shadow-lg rounded-xl transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gray-800">
      <div className="relative h-[200px] w-full overflow-hidden rounded-lg">
        <img
          src={item.image}
          onClick={() => navigate(`/product/${item.id}`)}
          className="w-full h-full object-cover cursor-pointer transition-transform transform hover:scale-110"
          alt={item.title}
        />
        <div className="absolute top-2 left-2 bg-pink-500 text-white text-xs font-semibold rounded-full px-2 py-1 shadow-md">
          {item.rating.count}
        </div>
      </div>
      <div className="mt-4 flex flex-col items-center gap-2 text-center text-white">
        <h2
          className="cursor-pointer text-lg font-bold hover:underline"
          onClick={() => navigate(`/product/${item.id}`)}
        >
          {productName(item.title)}
        </h2>
        <h2 className="text-xl">
          {"₹  "}
          <span className="text-accenturePurple">{Math.ceil(item.price * 81)}</span>
        </h2>
        {renderStars(item.rating.rate)}
      </div>
      <div className="mt-4 flex w-full justify-center">
        <button
          onClick={() => addCart(item, navigate)}
          className="w-full rounded-lg bg-accenturePurple text-white py-2 font-semibold transition-colors hover:bg-accenturePurpleDark hover:shadow-md"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
