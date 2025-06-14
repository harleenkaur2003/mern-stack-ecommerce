import React, { useContext } from "react";
import { MdOutlineMenu, MdClose, MdOutlineAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import GlobalState from "../../GlobalState";
import axios from 'axios';

const Header = () => {
  const {state} = useContext(GlobalState);

  if (!state) {
    console.error("GlobalState is undefined");
    return null; // Handle gracefully
  }

  const [isLogged, setIsLogged] = state.userAPI.isLogged;
  const [isAdmin, setIsAdmin] = state.userAPI.isAdmin;
  const [cart] = state.userAPI.cart;

  const logoutUser = async () => {
    try {
      await axios.get("/user/logout");
      localStorage.clear();
      setIsAdmin(false);
      setIsLogged(false);
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const adminRouter = () => (
    <>
      <li>
        <Link to="/create_product">Create Product</Link>
      </li>
      <li>
        <Link to="/category">Categories</Link>
      </li>
    </>
  );

  const loggedRouter = () => (
    <>
      <li>
        <Link to="/history">History</Link>
      </li>
      <li>
        <Link to="/" onClick={logoutUser}>
          Logout
        </Link>
      </li>
    </>
  );

  return (
    <header>
      <div className="menu">
        <MdOutlineMenu size={30} />
      </div>

      <div className="logo">
        <h1>
          <Link to="/">{isAdmin ? 'Admin' : '30DC Shop'}</Link>
        </h1>
      </div>

      <ul>
        <li>
          <Link to="/">{isAdmin ? "Products" : 'Shop  '}</Link></li>

        {isAdmin && adminRouter()}
        {
        isLogged ? loggedRouter() : <li><Link to="/login"> Login or Register</Link></li>
        }

        <li>
          <MdClose size={30} className="menu" />
        </li>
      </ul>

      {!isAdmin && (
        <div className="cart-icon">
          <span>{cart.length}</span>
          <Link to="/cart">
            <MdOutlineAddShoppingCart size={50} />
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
