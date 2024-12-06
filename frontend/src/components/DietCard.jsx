import React from "react";

const DietCard = ({ image, heading, para }) => {
    return (
        <div className="relative w-64 h-80 transition-transform transform hover:scale-110">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-800 rounded-lg blur-lg"></div>
            <div className="relative flex flex-col items-center gap-2 rounded-lg h-80">
                <img className="rounded-t-lg object-contain" src={image} alt="image" />
                <h2 className="text-white text-xl px-2 text-center">{heading}</h2>
                <p className="text-center rounded-b-lg pb-3 text-neutral-400 px-2">
                    {para}
                </p>
            </div>
        </div>
    );
};

export default DietCard;
