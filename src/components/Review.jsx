import React from "react";
import ReviewCard from "./ReviewCard";

const Review = () => {
    return (
        <div
            id="faq"
            className="text-white flex flex-col px-5 gap-10 lg:mt-16 justify-center items-center my-10"
        >
            <h1 className="text-5xl">
                What Users{" "}
                <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                    Say
                </span>
            </h1>
            <div className="flex flex-col gap-10 lg:flex-row lg:gap-16 lg:mt-5">
                <ReviewCard
                    name="John Doe"
                    title="Fitness Enthusiast"
                    review="GymFluencer has completely transformed my fitness journey!
                    The workout tracking features are incredibly accurate, and
                    the interface is so user-friendly. Highly recommended!"
                />
                <ReviewCard
                    name="Sarah Mitchell"
                    title="Fitness Enthusiast"
                    review="GymFluencer has been a game-changer for me! The personalized workout plans and diet recommendations are spot on. I've seen incredible progress in just a few weeks."
                />
                <ReviewCard
                    name="James Carter"
                    title="Fitness Enthusiast"
                    review="I love how GymFluencer keeps me motivated! Logging my workouts and tracking my reps has never been easier. The app's interface is clean and intuitive, and it has AI-powered features."
                />
            </div>
        </div>
    );
};

export default Review;
