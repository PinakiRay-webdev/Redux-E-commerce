import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../Slice/cartSlice"; // Importing actions

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items); // Accessing cart items from the Redux store
  const dispatch = useDispatch();

  return (
    <div className="w-full h-fit">
      <h2 className="text-2xl">Cart Items</h2>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item, idx) => (
            <div key={idx} className="border p-4 flex justify-between">
              <p>{item.productName}</p>
              <p>Qty: {item.quantity}</p>
              <p>${item.price}</p>
              <button
                onClick={() => dispatch(removeFromCart(item))}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={() => dispatch(clearCart())}
            className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
          >
            Clear Cart
          </button>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
