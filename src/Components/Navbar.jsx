import { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShopContext } from "../Context/ShopContext";
import Cart from "./users/Cart";

export const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  const [open, setopen] = useState(false);
  const handler=()=>{
    setopen(!open);
  }
  return (
    <>
      <div className="z-50">
        <div className="flex justify-between items-center mx-20 my-6 font-poppins ">
          <div className="flex gap-3">
            <img src={logo} alt="" className="h-[35px]" />
            <Link to="/" className="text-2xl flex items-end">
              HamaStore
            </Link>
          </div>

          <div className="text-center">
            <ul className="flex gap-3">
              <li>
                <Link
                  to="/products/Mens"
                  className="hover:border-b-2 hover:border-orange-400 hover:mb-4"
                >
                  Men
                </Link>
              </li>
              <li>
                <Link
                  to="/products/women"
                  className="hover:border-b-2 hover:border-orange-400 hover:mb-4"
                >
                  Women
                </Link>
              </li>
              <li>
                <Link
                  to="/products/shoes"
                  className="hover:border-b-2 hover:border-orange-400 hover:mb-4"
                >
                  Shoes
                </Link>
              </li>
              <li>
                <Link
                  to="/products/electronics"
                  className="hover:border-b-2 hover:border-orange-400 hover:mb-4"
                >
                  Electronics
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex gap-4">
            <Link to="/Login">
              <button className="text-center px-7  border-2 rounded-full hover:bg-orange-400 hover:text-white">
                Login
              </button>
            </Link>
            <div className="relative">
              <Link onClick={handler}>
                <FontAwesomeIcon icon={faCartShopping} />
              </Link>
              <p className="absolute bottom-4 left-3 text-white bg-red-600 rounded-full px-1 text-sm">
                {getTotalCartItems()}
              </p>
            </div>
          </div>
        </div>
        <hr></hr>
      </div>

      {open && <div className="w-[600px] right-1 bg-white fixed h-[100vh] z-50"><Cart/></div>}
    </>
  );
};
