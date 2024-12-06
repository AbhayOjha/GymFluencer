import React from "react";

const WorkoutCard = ({ image, title, para }) => {
    return (
        <div>
            <div className="relative lg:w-full transition-transform hover:scale-110">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-800 rounded-lg blur-md lg:blur-lg"></div>
                <div className="relative text-white rounded-lg w-full py-5 flex flex-col justify-center items-center px-5 gap-4 bg-cover bg-center overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center blur-sm"
                        style={{
                            backgroundImage: `url(${image})`,
                        }}
                    ></div>
                    <div className="relative z-10 bg-transparent">
                        <h1 className="text-2xl text-center bg-transparent">
                            {title}
                        </h1>
                        <p className="text-center text-neutral-400 mb-5 bg-transparent">
                            {para}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkoutCard;
