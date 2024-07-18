import React, { useEffect } from "react";
import Layout from "./../layout/Layout";
import CartCard from "../components/CartCard";
import { useAppStore } from "../../store/appStore";
import { useNavigate } from "react-router-dom";
import { PiSmileySadFill } from "react-icons/pi";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, getUserCart, user } = useAppStore();
  const displaycart = cart?.map((itemes, id) => {
    return <CartCard item={itemes} key={id} />;
  });

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    getUserCart();
  }, []);

  let initialValue = 0;
  let total = Math.ceil(
    cart?.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      initialValue
    ) * 81
  );

  return (
    <Layout>
      <div className="flex min-h-screen w-full flex-col py-5 gap-5 md:flex-row lg:p-[60px] text-white">
        <div className="w-full md:w-[70%] shadow-lg border border-accenturePurple bg-gray-900 p-4 rounded-lg">
          <div className="my-10 flex flex-col rounded-lg bg-gray-800 p-6">
            <h2 className="text-xl font-bold text-accenturePurple">Your Cart</h2>
            <h3>Total Items: {cart?.length}</h3>
          </div>
          <div className="flex flex-col gap-3 lg:ml-[120px]">{displaycart}</div>
          {!cart?.length && (
            <div className="flex flex-col justify-center items-center">
              <p className="text-2xl font-bold">Cart is empty</p>
              <PiSmileySadFill size={35} color="grey" />
            </div>
          )}
        </div>
        {cart?.length ? (
          <div className="my-10 flex w-full flex-col md:w-[30%] p-4">
            <div className="rounded-lg shadow-lg">
              <div className="flex flex-col rounded-t-lg bg-gray-800 p-6">
                <h2 className="text-xl font-bold">You Pay</h2>
                <h3>Check Our Order Policy</h3>
              </div>
              <div className="rounded-lg bg-gray-700 p-6 text-white">
                You Can Pay .... on This Order
              </div>
              <div className="flex flex-col gap-2 rounded-b-lg bg-gray-900 p-6">
                <h2 className="border-b pb-2 text-xl font-bold">
                  Total Price {"₹"} {total}
                </h2>
                <h3 className="border-b pb-2">Distributor Price -20</h3>
                <h3 className="border-b pb-2">Discount 40</h3>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </Layout>
  );
};

export default Cart;
