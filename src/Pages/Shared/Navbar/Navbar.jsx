// top navbar
import { NavLink } from "react-router-dom";
import './Navbar.css';
import users from '../../../assets/images/user.png'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() => {
            console.log("Logged out successfully!");
            alert("Logged out successfully!");
        })
        .catch((err) => {
            console.error("Error logging out:", err);
            alert("Error logging out: " + err.message);
        })
    }

    return (
        <nav>
            <div className="container mx-auto flex items-center mb-20 relative">
                {/* Navigation Links */}
                <div className="flex justify-center space-x-6 text-lg flex-grow"> 
                    <NavLink 
                        to="/" 
                        className="text-gray-500 hover:text-rose-500 transition duration-100 hover:underline">
                        Home
                    </NavLink>
                    <NavLink 
                        to="/about" 
                        className="text-gray-500 hover:text-rose-500 transition duration-100 hover:underline">
                        About
                    </NavLink>
                    <NavLink 
                        to="/career" 
                        className="text-gray-500 hover:text-rose-500 transition duration-100 hover:underline">
                        Career
                    </NavLink>
                </div>

                {/* Login (right aligned) */}
                <div className="absolute right-0 flex items-center gap-2">
                    <div className="rounded-full">
                        <img 
                            src={users} 
                            alt="Profile" 
                            className="w-11 h-11 rounded-full object-cover"
                        />
                    </div>
                    {
                        user ? 
                            <button onClick={handleLogOut} className="bg-gray-800 text-white py-2 px-9 rounded hover:bg-black transition duration-100 text-lg btnLogin">
                                Logout
                            </button> 
                        : 
                        <NavLink to="/login">
                            <button className="bg-gray-800 text-white py-2 px-9 rounded hover:bg-black transition duration-100 text-lg btnLogin">
                                Login
                            </button>
                        </NavLink>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
