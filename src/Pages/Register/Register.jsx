import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        //extract values from fields
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        const photoUrl = form.get('photoUrl');
        console.log(email, password);

        //register/create user
        createUser(email, password)
        .then(res => {
            console.log("User registered successfully:", res);
            alert("Registration successful, you can now log in.");
        })
        .catch(err => {
            console.error("Error registering user:", err);
            alert("Registration failed, please try again.");
        })
        //clear input fields
        e.currentTarget.reset();
    }


    return (
        <div>
            <div className="bg-gray-100">
                <div className="pt-14 px-10 pb-10">
                    <Navbar></Navbar>
                </div>
                <div className="flex items-center justify-center min-h-screen -mt-32"> {/* important to notice the div's classes */}
                    <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md md:max-w-2xl">
                        <h2 className="text-4xl font-bold mb-16 text-center text-gray-800">Register Here</h2>
                        
                        <hr className="mb-8"/>
                        
                        <form onSubmit={handleRegister}>
                            {/* Name Input */}
                            <div className="mb-8">
                                <label htmlFor="email" className="block text-xl font-semibold text-gray-700 mb-3">Username</label>
                                <input
                                type="text"
                                name="name"
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Set a username"
                                required
                                />
                            </div>

                            {/* Photo Input */}
                            <div className="mb-8">
                                <label htmlFor="email" className="block text-xl font-semibold text-gray-700 mb-3">Photo URL</label>
                                <input
                                type="text"
                                name="photoUrl"
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Provide a photo URL"
                                required
                                />
                            </div>

                            {/* Email Input */}
                            <div className="mb-8">
                                <label htmlFor="email" className="block text-xl font-semibold text-gray-700 mb-3">Email</label>
                                <input
                                type="email"
                                name="email"
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Provide your email address"
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
                                placeholder="Set a password"
                                required
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-gray-800 text-white font-semibold text-xl py-3 px-4 rounded-md hover:bg-gray-700 focus:outline-none active:scale-95 transition duration-100"
                            >
                                Register
                            </button>
                        </form>

                        <p className="mt-6 text-center text-lg">
                            Already a member? <Link to="/login" className="text-red-500 hover:underline">Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;