import React from "react";
import Navbar from "../components/Navbar";
import WorkoutCard from "../components/WorkoutCard";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const WorkoutPage = () => {
    return (
        <div className="flex flex-col w-full">
            <Navbar />
            <div className="max-w-[95rem] pt-10 flex flex-col mx-auto lg:pt-20 justify-center items-center">
                <h1 className="text-4xl text-center text-white">
                    Select Your{" "}
                    <span className="bg-gradient-to-r from-orange-400 to-red-800 text-transparent bg-clip-text">
                        Workout Plan
                    </span>
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-10 w-full">
                    <WorkoutCard
                        image="/workout/bnr.jpg"
                        title="Beginner"
                        para="Start your fitness journey from Simple and Effective exercises."
                    />
                    <WorkoutCard
                        image="/diet/muscle.jpg"
                        title="Intermediate"
                        para="Level up your fitness with more challenging exercises."
                    />
                    <WorkoutCard
                        image="rep_count.jpg"
                        title="Advanced"
                        para="Push your limits with high limits and more complex movements."
                    />
                    <WorkoutCard
                        image="/diet/cutting.jpg"
                        title="Personalised Workout Plan"
                        para="Create your own personalised workout plan."
                    />
                </div>
                <div className="flex flex-col w-full my-20 items-center gap-10 bg-white/10 backdrop-blur-md shadow-lg border border-white/20 py-10 rounded-lg transition-transform hover:scale-110">
                    <h1 className="text-white text-4xl bg-transparent">
                        Need More Help?
                    </h1>
                    <p className="text-white bg-transparent px-5">
                        Contact us for any additional questions or support
                        regarding the GymFluencer.
                    </p>
                    <Link
                        className="text-white px-4 py-2 rounded-lg bg-gradient-to-r from-orange-400 to-red-800 transition-transform hover:scale-110 cursor-pointer"
                        to="/contact"
                    >
                        Contact Support
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default WorkoutPage;
