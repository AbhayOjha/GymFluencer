import { useState } from "react";
import { Link } from "react-router-dom";

const SignupPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signupData, setSignupData] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setSignupData({
            name: name,
            email: email,
            password: password,
        });
        setName("");
        setEmail("");
        setPassword("");
    };

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-[90%] h-[95%] md:w-[70%] md:h-[80%] lg:w-[30%] lg:h-[70%] px-5 rounded-lg flex flex-col items-center justify-center bg-white/10 backdrop-blur-md shadow-lg border border-white/20">
                <h1 className="text-transparent text-5xl bg-gradient-to-r from-orange-400 to-red-800 bg-clip-text py-4 px-4">
                    Sign Up
                </h1>
                <form
                    className="flex flex-col my-14 w-full lg:w-[70%] bg-transparent"
                    onSubmit={(e) => {
                        handleSubmit(e);
                    }}
                >
                    <label className="text-lg mb-2 bg-transparent text-white">
                        Name
                    </label>
                    <input
                        className="px-4 py-2 mb-5 bg-transparent text-gray-300 rounded-lg border border-gray-600 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        type="text"
                        value={name}
                        required
                        placeholder="John Doe"
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                    <label className="text-lg mb-2 bg-transparent text-white">
                        Email
                    </label>
                    <input
                        className="px-4 py-2 mb-5 bg-transparent text-gray-300 rounded-lg border border-gray-600 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        type="text"
                        value={email}
                        required
                        placeholder="john@gmail.com"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <label className="text-lg mb-2 bg-transparent text-white">
                        Password
                    </label>
                    <input
                        className="px-4 py-2 mb-5 bg-transparent text-gray-300 rounded-lg border border-gray-600 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        type="password"
                        required
                        value={password}
                        placeholder="password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    <button
                        className="mt-5 py-2 px-4 text-white rounded-lg bg-gradient-to-r from-orange-400 to-red-800 transition-transform hover:scale-110 cursor-pointer"
                        type="submit"
                    >
                        Create Account
                    </button>
                </form>
                <p className="text-white bg-transparent">
                    Already have an account?{" "}
                    <Link
                        className="text-orange-500 bg-transparent cursor-pointer"
                        to="/login"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignupPage;
