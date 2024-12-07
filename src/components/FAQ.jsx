import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What is GymFluencer?",
            answer: "GymFluencer is a fitness tracking application designed to help users log workouts, count reps, track calories burned, and achieve their fitness goals.",
        },
        {
            question: "Is GymFluencer free to use?",
            answer: "Yes, GymFluencer offers free features, but there are also premium features available for advanced users.",
        },
        {
            question: "Can I customize my workout and diet plan?",
            answer: "Absolutely! GymFluencer provides AI-powered personalized plans tailored to your fitness goals and preferences.",
        },
        {
            question: "Can I track my calories burned?",
            answer: "Yes, you can track calories burned through the application integrated tracking features."
        },

    ];

    return (
        <div className="w-[80%] lg:w-full max-w-2xl mx-auto my-10">
            <h1 className="text-3xl text-center mb-6 text-white">
                Frequently Asked Questions
            </h1>
            <div className="space-y-4 ">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-neutral-700 rounded-md overflow-hidden bg-black/50 backdrop-blur-md transition-transform transform hover:scale-110"
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full text-left px-6 py-4 text-white flex justify-between items-center"
                        >
                            <span>{faq.question}</span>
                            <IoIosArrowDown
                                className={`w-6 h-6 transform ${
                                    openIndex === index
                                        ? "rotate-180"
                                        : "rotate-0"
                                } transition-transform`}
                            />
                        </button>
                        {openIndex === index && (
                            <div className="px-6 py-4 text-neutral-400">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
