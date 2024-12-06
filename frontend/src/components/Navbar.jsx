import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg bg-black/30 border-b border-neutral-700/80 text-white">
            <div className="container px-4 mx-auto relative lg:text-sm bg-transparent">
                <div className="flex justify-between items-center bg-transparent">
                    <div className="flex items-center flex-shrink-0 bg-transparent">
                        <span className="text-2xl tracking-tight bg-transparent">
                            GymFluencer
                        </span>
                    </div>
                    <ul className="hidden lg:flex mx-8 space-x-12 bg-transparent">
                        <li className="cursor-pointer hover:text-orange-500 transition-transform transform hover:scale-110 bg-transparent">
                            <Link
                                className="bg-transparent cursor-pointer"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="cursor-pointer hover:text-orange-500 transition-transform transform hover:scale-110 bg-transparent">
                            <Link
                                className="bg-transparent cursor-pointer"
                                to="/diet"
                            >
                                Diet Plan
                            </Link>
                        </li>
                        <li className="cursor-pointer hover:text-orange-500 transition-transform transform hover:scale-110 bg-transparent">
                            <Link
                                className="bg-transparent cursor-pointer"
                                to="/workout"
                            >
                                Workout Plans
                            </Link>
                        </li>
                        <li className="cursor-pointer hover:text-orange-500 transition-transform transform hover:scale-110 bg-transparent">
                            <Link
                                className="bg-transparent cursor-pointer"
                                to="/contact"
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-12 items-center bg-transparent">
                        <Link
                            to="/signup"
                            className="py-2 px-3 border rounded-md transition-transform transform hover:scale-110 cursor-pointer"
                        >
                            Get Started
                        </Link>
                        <Link
                            to="/login"
                            className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-5 rounded-md transition-transform transform hover:scale-110 cursor-pointer"
                        >
                            Login
                        </Link>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-black/90 backdrop-blur-md rounded-xl text-white w-full p-12 flex flex-col gap-10 justify-center items-center lg:hidden">
                        <ul className="text-white flex flex-col gap-2 bg-transparent">
                            <li className="bg-transparent hover:text-orange-500">
                                <Link className="bg-transparent" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="bg-transparent hover:text-orange-500">
                                <Link className="bg-transparent" to="/diet">
                                    Diet Plan
                                </Link>
                            </li>
                            <li className="bg-transparent hover:text-orange-500">
                                <Link className="bg-transparent" to="/workout">
                                    Workout Plans
                                </Link>
                            </li>
                            <li className="bg-transparent hover:text-orange-500">
                                <Link className="bg-transparent" to="/contact">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                        <div className="flex flex-col text-white gap-5 bg-transparent">
                            <Link
                                to="/login"
                                className="py-2 px-3 border rounded-md flex justify-center"
                            >
                                Login
                            </Link>
                            <Link
                                to="/signup"
                                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
