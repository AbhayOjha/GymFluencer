import React from "react";

const Cards = ({ image, heading, para }) => {
    return (
        <div className="relative transition-transform transform hover:scale-110">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-800 rounded-lg blur-md lg:blur-lg"></div>
            <div className="relative text-white rounded-lg w-80 h-[26rem] flex flex-col justify-center items-center px-5 gap-4 ">
                <img className="object-contain mt-5 rounded-lg" src={image} />
                <h1 className="text-xl text-wrap text-center">{heading}</h1>
                <p className="text-center text-neutral-400 mb-5 text-wrap">
                    {para}
                </p>
            </div>
        </div>
    );
};

export default Cards;
