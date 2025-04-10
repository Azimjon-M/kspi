import React from "react";
import Carousel from "../../components/Carousel";
import Interactive from "../../components/Interactive";
import NewsHome from "../../components/NewsHomeCom";
// import StudentOpinion from "../../components/StudentOpinion";
import Curriculum from "../../components/Curriculum";
import ContactUs from "../../components/Contact";
import Partners from "../../components/Partners";
import WarmThoughts from "../../components/WarmThoughts";
import ChatIcon from "../../components/Chat";
import Gallery from "../../components/Gallery";
// import Statistics from "../../components/Statistics";
import AboutUs from "../../components/AboutUs";
import ExploreProgram from "../../components/ExploreProgram";
import Announcements from "../../components/Announcements";

const Main = () => {
    return (
        <div>
            <Carousel />
            <Interactive />
            <AboutUs />
            {/* <Statistics /> */}
            <NewsHome />
            <Announcements />
            {/* <StudentOpinion /> */}
            <WarmThoughts />
            <Curriculum />
            <ExploreProgram />
            <Gallery />
            <Partners />
            <ContactUs />
            <ChatIcon />
        </div>
    );
};

export default Main;
