import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [formData, setFormData] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
            name: name,
            email: email,
            message: message,
        });
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div className="flex flex-col w-full h-screen text-white">
            <Navbar />
            <div className="w-full max-w-[1940px] h-screen flex justify-center items-center">
                <div className="flex flex-col lg:flex-row lg:gap-48 px-10 lg:px-20 justify-center items-center lg:w-[70%] rounded-lg bg-white/10 backdrop-blur-md shadow-lg border border-white/20">
                    <div className="flex flex-col gap-5 bg-transparent">
                        <h1 className="text-5xl pt-5 text-transparent text-wrap bg-gradient-to-r from-orange-400 to-red-800 bg-clip-text">
                            Need more help?
                        </h1>
                        <p className="text-wrap text-start bg-transparent">
                            Contact us for any additional questions or support
                            regarding the app.
                        </p>
                    </div>
                    <form
                        className="flex flex-col my-20 w-full lg:w-1/2 bg-transparent"
                        onSubmit={(e) => {
                            handleSubmit(e);
                        }}
                    >
                        <label className="text-lg mb-2 bg-transparent">
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
                        <label className="text-lg mb-2 bg-transparent">
                            Email
                        </label>
                        <input
                            className="px-4 py-2 mb-5 bg-transparent text-gray-300 rounded-lg border border-gray-600 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                            type="text"
                            required
                            value={email}
                            placeholder="john@gmail.com"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        <label className="text-lg mb-2 bg-transparent">
                            Message
                        </label>
                        <textarea
                            className="p-3 bg-transparent text-gray-300 rounded-lg border border-gray-600 focus:ring-2 focus:ring-orange-500 focus:outline-none resize-none"
                            rows="6"
                            required
                            value={message}
                            placeholder="Write your message here"
                            onChange={(e) => {
                                setMessage(e.target.value);
                            }}
                        />
                        <button
                            className="mt-10 py-2 px-4 rounded-lg bg-gradient-to-r from-orange-400 to-red-800 transition-transform hover:scale-110 cursor-pointer"
                            type="submit"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactPage;
