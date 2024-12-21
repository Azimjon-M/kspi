import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"
import { Outlet } from "react-router";
import Snow from "../../components/Snow";

const Home = () => {
    return (
        <div>
            <Snow />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Home;
