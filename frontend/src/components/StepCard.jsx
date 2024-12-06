import React from "react";

const StepCard = ({ image, step, heading, para, reversed }) => {
    return (
        <div className="relative text-white w-[85%] transition-transform transform hover:scale-110">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-800 rounded-lg blur-md lg:blur-lg"></div>
            <div
                className={`relative flex ${reversed} justify-center items-center px-10 rounded-lg`}
            >
                <img className="w-[0%] lg:w-[25%] mt-5" src={image} alt="image" />
                <div className="lg:w-[75%] flex flex-col mt-5">
                    <h1 className="text-2xl lg:text-4xl mb-5">
                        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                            Step {step}:
                        </span>{" "}
                        {heading}
                    </h1>
                    <p className="text-md text-wrap text-neutral-400 lg:text-lg mb-5">{para}</p>
                </div>
            </div>
        </div>
    );
};

export default StepCard;
