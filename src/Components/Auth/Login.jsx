// import "./Login.css"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import img2 from "../images/img2.png";
import { useAuth } from "../../Context/Auth";
import axios from "axios";
// import { Toast } from 'react-toastify/dist/components';
// import {img1} from './images/img1'

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [auth, setAuth] = useAuth();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:5000/api/v1/user/login`, {
        email: userData.email,
        password: userData.password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        toast.success("Login Successful");
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("error");
    }
  };

  // const handleForgotPassword = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await dispatch(forgotPassword(userData.email)).unwrap(); // Dispatch forgotPassword with user's email
  //     toast.success(response.message);
  //     setError("email send for reset email")
  //   } catch (error) {
  //     console.error(error);
  //     setError("Forgot password failed. Please try again later.");

  //   }
  // };

  // const handleForgotPassword = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await dispatch(forgotPassword(userData.email)).unwrap();
  //     // setInfoMessage(response.message); // Set info message to show success
  //     setError("Mail send Successfully");
  //   } catch (error) {
  //     console.error(error);
  //     setError("Forgot password failed. Please try again later.");
  //   }
  // };

  return (
    <div className="container" id="home">
      <div className="login-left">
        <div className="login-header">
          <h1>Welcome</h1>
          <p>Please login to continue......</p>
        </div>
        <form
          action=""
          className="login-form"
          autoComplete="off"
          onSubmit={handleLogin}
        >
          <div className="login-content">
            <div className="form-item">
              <label htmlFor="email">Enter Email</label>
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                placeholder="example@email.com"
              />
            </div>
            <div className="form-item">
              <label htmlFor="password">Enter Password</label>
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleInputChange}
                placeholder="Enter your Password"
                required
                className="pass-key"
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit">LogIn</button>
          </div>
          <div className="login-footer">
            <Link
              to="/forgotpassword"
              className="button"
              id="buttonforgotpassword"
              // onClick={handleForgotPassword}
            >
              Forgot password
            </Link>
            <Link to="/signup" className="button" id="button2">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
      <div className="login-right">{/* <img src={img2} alt="" /> */}</div>
    </div>
  );
};

export default Login;
