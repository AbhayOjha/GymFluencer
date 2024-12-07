import React from "react";
import Cards from "./Cards";
import StepCard from "./StepCard";

const HeroSection = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="text-white flex flex-col-reverse lg:flex-row border-b border-neutral-700/80 mx-5">
                <div className="flex flex-col lg:w-1/2 justify-center items-center gap-6  bg-black">
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                        Track Your{" "}
                        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text animate-pulse ">
                            Fitness{" "}
                        </span>{" "}
                        Journey
                    </h1>
                    <p className="pb-5 lg:px-20 text-center text-neutral-400">
                        Discover the ultimate fitness companion with
                        GymFluencer. Effortlessly log your workouts, count reps,
                        and track calories burned. Stay motivated and achieve
                        your goals with our user-friendly interface.
                    </p>
                </div>
                <div className="flex justify-center lg:w-1/2 bg-black">
                    <img
                        className="object-contain"
                        src="/hero_image.png"
                        alt="hero_image"
                    />
                </div>
            </div>
            <div className="flex flex-col mt-10 lg:flex-row justify-center gap-10 items-center lg:mt-10 lg:gap-56 lg:px-10">
                <div className="relative w-4/5 lg:w-[32%] transition-transform transform hover:scale-110">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-800 rounded-lg blur-md lg:blur-lg"></div>
                    <video autoPlay loop muted className="relative rounded-lg">
                        <source src="Video1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="relative w-4/5 lg:w-[32%] transition-transform transform hover:scale-110">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-800 rounded-lg blur-md lg:blur-lg"></div>
                    <video autoPlay loop muted className="relative rounded-lg">
                        <source src="Video2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div></div>
            <div className="text-white flex flex-col my-10 justify-center items-center lg:flex-row lg:mt-16">
                <h1 className="w-full text-3xl pl-10 lg:w-1/4">
                    Discover Our App's{" "}
                    <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                        Key Features
                    </span>
                </h1>
                <p className="w-full px-10 mt-3 lg:w-3/4">
                    GymFluencer is your ultimate fitness companion, designed to
                    help you track your workouts with ease. Our application
                    allows you to log exercises, count reps, and calculate
                    calories burned, all through a user-friendly interface.
                    Whether you’re a beginner or a seasoned athlete, our app
                    will keep you motivated and on track.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-10 pb-20 justify-center md:grid-cols-2 lg:grid-cols-3 lg:gap-x-40 lg:gap-y-16 lg:mt-10 lg:mx-auto border-b border-neutral-700/80">
                <Cards
                    image="log.jpg"
                    heading="Effortless Workout Logging"
                    para="Easily log your workouts and monitor your progress over time with our intuitive logging feature. Stay organized and track your fitness journey with precision."
                />
                <Cards
                    image="rep_count.jpg"
                    heading="Accurate Rep Counting"
                    para="Count your reps accurately with our app, ensuring each workout is tracked effectively. Perfect for maintaining consistency and improving your performance."
                />
                <Cards
                    image="calorie.png"
                    heading="Calorie Calculation Made Easy"
                    para="Calculate calories burned during your workouts to help manage your fitness goals. Our app provides precise data to keep you informed and motivated."
                />
                <Cards
                    image="workout_plan.jpg"
                    heading="Personalized Workout Plan"
                    para="An AI-powered personalized workout plan adapts exercises to your fitness level, goals, and progress, helping you stay motivated and achieve results faster."
                />
                <Cards
                    image="diet_plan.jpg"
                    heading="Personalized Diet Plan"
                    para="An AI diet plan customizes meals to your health goals, preferences, and lifestyle, offering tailored, nutritious suggestions to support optimal wellness."
                />
            </div>
            <div className="w-full mt-24 mb-16 flex flex-col justify-center items-center gap-16">
                <StepCard
                    image="get_started.jpg"
                    step="1"
                    heading="Click on Get Started"
                    para="Start by opening the GymFluencer. The intuitive home screen gives you quick access to all features."
                    reversed="lg:flex-row-reverse"
                />
                <StepCard
                    image="log_step.jpg"
                    step="2"
                    heading="Log Your Exercises"
                    para="Easily log your exercises by selecting from a wide range of activities. Track your progress with detailed logs."
                    reversed="lg:flex-row"
                />
                <StepCard
                    image="count_reps.jpg"
                    step="3"
                    heading="Count your Reps"
                    para="Count your reps with precision, ensuring every detail is logged. Stay informed on your progress."
                    reversed="lg:flex-row-reverse"
                />
                <StepCard
                    image="progress.jpg"
                    step="4"
                    heading="Track Your Progress"
                    para="Review your workout stats and progress over time to stay motivated and reach your fitness goals."
                    reversed="lg:flex-row"
                />
                <StepCard
                    image="track.jpg"
                    step="5"
                    heading="Review your Progress"
                    para="Check your workout summaries and progress over time to stay motivated and achieve your fitness goals."
                    reversed="lg:flex-row-reverse"
                />
            </div>
        </div>
    );
};

export default HeroSection;
