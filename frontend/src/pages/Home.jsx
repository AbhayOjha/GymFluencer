import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Review from "../components/Review";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="flex flex-col w-full">
            <Navbar />
            <div className="max-w-[95rem] pt-10 flex flex-col mx-auto lg:pt-20 ">
                <HeroSection />
                <Review />
                <FAQ />
                <Footer />
            </div>
        </div>
    );
};

export default Home;
