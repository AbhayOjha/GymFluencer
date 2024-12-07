import React from "react";

const ReviewCard = ({ name, title, review }) => {
    return (
        <div>
            <div className="relative max-w-sm p-6 rounded-lg bg-white/10 backdrop-blur-md shadow-lg border border-white/20 transition-transform transform hover:scale-110">
                <div className="bg-transparent">
                    <h3 className="text-lg font-semibold bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                        {name}
                    </h3>
                    <p className="text-sm text-gray-400 bg-transparent">
                        {title}
                    </p>
                </div>

                <p className="my-4 text-gray-300 bg-transparent">{review}</p>

                <p className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                    ★ ★ ★ ★ ★
                </p>
            </div>
        </div>
    );
};

export default ReviewCard;
