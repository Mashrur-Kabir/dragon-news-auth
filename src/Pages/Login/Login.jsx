import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {

    const {logIn} = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        //login
        logIn(email, password)
        .then((res) => {
            console.log('Logged in successfully', res.user);
            alert('Login successful');
            //navigate after successful login
            navigate(location?.state ? location.state : '/')
        })
        .catch(() => {
            //clear input fields
            e.currentTarget.reset();
            alert('Failed to log in. Please check your credentials.');
        })
    }
    
    return (
        <div className="bg-gray-100">
            <div className="pt-14 px-10 pb-10">
                <Navbar></Navbar>
            </div>
            <div className="flex items-center justify-center min-h-screen -mt-32"> {/* important to notice the div's classes */}
                <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md md:max-w-2xl">
                    <h2 className="text-4xl font-bold mb-16 text-center text-gray-800">Login your account</h2>
                    
                    <hr className="mb-8"/>
                    
                    <form onSubmit={handleLogin}>
                        {/* Email Input */}
                        <div className="mb-8">
                            <label htmlFor="email" className="block text-xl font-semibold text-gray-700 mb-3">Email</label>
                            <input
                            type="email"
                            name="email"
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Enter your email address"
                            required
                            />
                        </div>

                        {/* Password Input */}
                        <div className="mb-12">
                            <label htmlFor="password" className="block text-xl font-semibold text-gray-700 mb-3">Password</label>
                            <input
                            type="password"
                            name="password"
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Enter your password"
                            required
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-gray-800 text-white font-semibold text-xl py-3 px-4 rounded-md hover:bg-gray-700 focus:outline-none active:scale-95 transition duration-100"
                        >
                            Login
                        </button>
                    </form>

                    <p className="mt-6 text-center text-lg">
                        Don’t have an account? <Link to="/register" className="text-red-500 hover:underline">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;