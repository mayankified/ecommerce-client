import React, { useContext, useEffect, useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ShopContext } from "../../Context/ShopContext";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = () => {
  const { getTotalCartAmount, cartItems, removeFromCart } =
    useContext(ShopContext);
  const [All_Product, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/v1/prod/get"
        );

        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className="mx-16 my-12 font-poppins">
      <hr />

      {All_Product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              {/* <div className='mt-2 grid grid-cols-6 gap-4 items-center mb-4'>

                    <img src={e.image} alt="" className='h-24 w-24 object-cover'/>

                    <p>{e.name}</p>

                    <p>Rs. {e.price}</p>

                    <p className='text-left '  id='quantity'>{cartItems[e.id]}</p>
                    
                    <p>Rs. {e.price*cartItems[e.id]}</p>

                    <FontAwesomeIcon icon={faXmark} onClick={()=>{removeFromCart(e.id)}} className='hover:cursor-pointer bg-red-600 px-4 py-2 hover:text-white'/>
                    
                </div> */}
              <div className="flex items-center py-2">
                <img src={e.images} alt="" className="h-24 w-24 object-cover" />
                <div className="flex w-full justify-center items-center flex-col">
                  <p>{e.name}</p>
                  <div className="flex gap-4">
                  <p>Rs. {e.price}</p>
                  <p className='text-left '  id='quantity'>Quantity: {cartItems[e.id]}</p>
                  </div>
                </div>
                <FontAwesomeIcon icon={faXmark} onClick={()=>{removeFromCart(e.id)}} className='hover:cursor-pointer bg-[#818082] rounded-[4px] p-2 text-[#bbbaba] hover:text-white'/>
              </div>

              <hr />
            </div>
          );
        }
        return null;
      })}
        <div>
          <div className="flex justify-around p-2 w-full">
            <div className="flex-col flex">
              <p>Sub-total</p>
              <p>Rs.{getTotalCartAmount()}</p>
            </div>
            <div className="flex-col flex">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <div className="flex-col flex">
              <h1>Total</h1>
              <h1>Rs.{getTotalCartAmount()}</h1>
            </div>
          </div>
          <button className="mt-6  px-8 py-2 bg-red-600 text-white hover:scale-105 duration-300">
            Checkout
          </button>
        </div>
    </div>
  );
};

export default Cart;
