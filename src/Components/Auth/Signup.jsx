import { useState } from "react";
import { useDispatch } from 'react-redux';
import { signup } from '../../Features/Userslice';
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import axios from "axios";
// import img2 from '../images/img2.png';
// import './Login.css';





export default function Signup() {

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSignupClick = async (e) => {
        e.preventDefault();
        if(userData.password.length<8){
            toast.warn('Password must be off Atleast 8 Characters')
        }
        if (userData.name && userData.email && userData.password) {
          try {
            const response = await axios.post("http://localhost:5000/api/v1/user/register", {
              name: userData.name,
              email: userData.email,
              password: userData.password
            });
            if (response.status === 200) {
              toast.success("Signup successful!");
              // Navigate to the login page after successful signup
              window.location.href = "/login";
        toast.success("Registration Successful!,Now please Login");

            } else {
              setError("Unknown error occurred.");
            }
          } catch (error) {
            console.error(error);
            setError("Signup failed. Please try again later.");
          }
        } else {
          toast.error("Fill all the details!");
        }
      };

    return (
        <div className="container" id="home">
            <div className="login-left">
                <div className="login-header">
                    <h1>Welcome</h1>
                    <p>Signup Here................</p>
                </div>
                <form action="" className="login-form" autoComplete="off" onSubmit={handleSignupClick}>
                    <div className="login-content">
                        <div className="form-item">
                            <label for="name">Enter Username</label>
                            <input type="text" name="name" value={userData.name} onChange={handleInputChange} placeholder="Enter your username" />
                        </div>
                        <div className="form-item">
                            <label for="email">Enter Email</label>
                            <input type="email" name="email" value={userData.email} onChange={handleInputChange} placeholder="example@email.com" />
                        </div>
                        <div className="form-item">
                            <label for="password">Enter Password</label>
                            <input type="password" name="password" value={userData.password} onChange={handleInputChange} placeholder="Enter your Password" required className="pass-key" />
                        </div>
                        {error && <p className="error-message">{error}</p>}
                        <button type="submit">Signup</button>
                    </div>
                    <p>already registered</p>
                    <div className="login-footer">
                        <Link to="/" className="button" id="button2">Login</Link>
                    </div>
                </form>
            </div>
            <div className="login-right">
                {/* <img src={img2} alt="" /> */}
            </div>
        </div>
    );
}
        