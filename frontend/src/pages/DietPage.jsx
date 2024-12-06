import React from "react";
import Navbar from "../components/Navbar";
import DietCard from "../components/DietCard";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const DietPage = () => {
    return (
        <div className="flex flex-col w-full">
            <Navbar />
            <div className="max-w-[95rem] pt-10 flex flex-col mx-auto lg:pt-20 justify-center items-center">
                <h1 className="bg-gradient-to-r from-orange-400 to-red-800 text-transparent bg-clip-text text-4xl font-semibold text-center">
                    Diet Plan
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-20 gap-16">
                    <DietCard
                        image="/diet/diet.png"
                        heading="Personalized Diet Plan"
                        para="A description of personalized diet plan"
                    />
                    <DietCard
                        image="/diet/fat_loss.jpg"
                        heading="Fat Loss Diet Plan"
                        para="A description of weight/fat loss diet plan"
                    />
                    <DietCard
                        image="/diet/muscle.jpg"
                        heading="Muscle Building Diet Plan"
                        para="A description of Muscle Building diet plan"
                    />
                    <DietCard
                        image="/diet/cutting.jpg"
                        heading="Cutting Diet Plan"
                        para="A description of cutting diet plan"
                    />
                    <DietCard
                        image="/diet/endurance.jpg"
                        heading="Endurance Diet Plan"
                        para="A description of Endurance/Performance diet plan"
                    />
                    <DietCard
                        image="/diet/keto.png"
                        heading="Keto Diet Plan (Ketogenic)"
                        para="A description of ketogenic diet plan"
                    />
                    <DietCard
                        image="/diet/veg.jpg"
                        heading="Vegetarian/Vegan Diet Plan"
                        para="A description of Vegetarian/Vegan diet plan"
                    />
                    <DietCard
                        image="/diet/int.jpeg"
                        heading="Intermittent Fasting Diet Plan"
                        para="A description of Intermittent Fasting diet plan"
                    />
                </div>
                <div className="flex flex-col w-full my-20 items-center gap-10 bg-white/10 backdrop-blur-md shadow-lg border border-white/20 py-10 rounded-lg transition-transform hover:scale-110">
                    <h1 className="text-white text-4xl bg-transparent">
                        Need More Help?
                    </h1>
                    <p className="text-white bg-transparent text-center text-wrap px-5">
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

export default DietPage;
