import React, { useState } from 'react';
import logo from "../assest/logo.jpeg";
import { Link, useNavigate } from 'react-router-dom';    // ✅ Import useNavigate
import { FaRegUser } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { logoutRedux } from "../redux/userSlice";
import { toast } from "react-hot-toast";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const userData = useSelector((state) => state.user);
    const cartItemNumber = useSelector((state) => state.product.cartItem);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();   // ✅ Add navigate function

    // Toggle menu
    const handleShowMenu = () => {
        setShowMenu((prev) => !prev);
    };

    // Handle Logout
    const handleLogout = () => {
        dispatch(logoutRedux());
        toast.success("Logout successful");
        navigate("/login");   // ✅ Redirect to login after logout
    };

    return (
        <header className="fixed shadow-md w-full h-26 px-3 md:px-4 z-50 bg-white">
            {/* Desktop */}
            <div className="flex items-center h-full justify-between">
                <Link to={"/"}>
                    <div className="h-15">
                        <img src={logo} alt="Logo" width="50" height="50" />
                    </div>
                </Link>

                <div className="flex items-center gap-2 md:gap-7">
                    <nav className="flex gap-4 md:gap-6 text-base md:text-lg">
                        <Link to={"/"}>Home</Link>
                        <Link to={"menu/67dd3566876f3930d8a0c508"}>Menu</Link>
                        <Link to={"about"}>About</Link>
                        <Link to={"contact"}>Contact</Link>
                    </nav>

                    {/* Cart Icon */}
                    <div className="text-2xl text-slate-600 relative">
                        <Link to={"/cart"}>
                            <BsCart4 />
                            <div className="absolute -top-1 -right-1 text-white bg-red-600 h-4 w-4 p-0 text-sm rounded-full m-0 text-center">
                                {cartItemNumber.length}
                            </div>
                        </Link>
                    </div>

                    {/* User Icon */}
                    <div className="relative cursor-pointer" onClick={handleShowMenu}>
                        <div className="text-2xl border-2 border-solid border-slate-700 p-1 rounded-full">
                            <FaRegUser />
                        </div>

                        {showMenu && (
                            <div className="absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md flex flex-col min-w-[150px] text-center">
                                {userData.email ? (
                                    <>
                                        {userData.email === process.env.REACT_APP_ADMIN_EMAIL && (
                                            <Link 
                                                to={"/NewProduct"} 
                                                className="whitespace-nowrap cursor-pointer px-2"
                                            >
                                                New Product
                                            </Link>
                                        )}
                                        
                                        <p className="text-white bg-red-500 px-2 cursor-pointer"
                                            onClick={handleLogout}>
                                            Logout ({userData.firstName})
                                        </p>
                                    </>
                                ) : (
                                    <Link to={"/login"} className="whitespace-nowrap cursor-pointer px-2">
                                        Login
                                    </Link>
                                )}

                                <nav className="text-base md:text-lg flex flex-col md:hidden">
                                    <Link to={"/"} className="px-2 py-1">Home</Link>
                                    <Link to={"menu/67dd3566876f3930d8a0c508"} className="px-2 py-1">Menu</Link>
                                    <Link to={"about"} className="px-2 py-1">About</Link>
                                    <Link to={"contact"} className="px-2 py-1">Contact</Link>
                                </nav>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

