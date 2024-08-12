import Navbar from "../../components/Navbar";
import React from "react";
import { Outlet } from "react-router";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Home;
