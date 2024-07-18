import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useAppStore } from "../../store/appStore";

const DetailPage = () => {
  const navigate = useNavigate();
  const { addCart } = useAppStore();
  const [singleProduct, setSingleProduct] = useState(null);
  const { id } = useParams();

  const getSingleProduct = async () => {
    try {
      const { data, status } = await axios(
        `https://api.npoint.io/1f002e83ca5d3e484eb8/${id-1}`
      );
      setSingleProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      getSingleProduct();
    }
  }, [id]);

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center w-full min-h-screen text-white">
        <div className="py-10 w-full md:w-3/4 mx-auto rounded-xl bg-gray-900 px-4 flex h-fit flex-col gap-12 md:flex-row shadow-lg">
          {singleProduct ? (
            <>
              <div className="flex h-80 w-full items-center justify-center md:h-[550px] md:w-[450px]">
                <img
                  src={singleProduct?.image}
                  className="h-full w-full object-contain rounded-md"
                  alt=""
                />
              </div>
              <div className="flex w-full flex-col gap-6 lg:w-1/2">
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg text-accenturePurple">
                    {singleProduct?.category}
                  </h2>
                  <h2 className="text-2xl font-bold sm:text-3xl">
                    {singleProduct?.title}
                  </h2>
                </div>
                <div>
                  <h2 className="text-lg font-semibold">
                    {"₹ "}
                    <span className="text-red-500">
                      {Math.ceil(singleProduct?.price * 81)}
                    </span>
                  </h2>
                  <h2 className="text-lg font-medium">
                    Rating:{" "}
                    <span className="font-bold">
                      {singleProduct?.rating?.rate}
                    </span>
                  </h2>
                </div>
                <h2 className="text-lg font-normal text-gray-400">
                  {singleProduct?.description}
                </h2>
                <h2 className="text-lg font-normal">
                  Quantity:{" "}
                  <span className="font-bold">
                    {singleProduct?.rating?.count} nos
                  </span>
                </h2>
                <div className="flex items-center justify-start gap-4 md:gap-6">
                  <button className="cursor-pointer rounded-md bg-accenturePurple px-8 py-3 font-semibold text-black hover:bg-purple-700 transition-colors duration-200">
                    Buy Now
                  </button>
                  <button
                    onClick={() => addCart(singleProduct, navigate)}
                    className="cursor-pointer rounded-md bg-teal-600 px-8 py-3 font-semibold text-black hover:bg-teal-700 transition-colors duration-200"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center text-2xl">
              No Items Found
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default DetailPage;
