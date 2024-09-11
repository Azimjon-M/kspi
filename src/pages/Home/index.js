import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"
import { Outlet } from "react-router";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Home;
