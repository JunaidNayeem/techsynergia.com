import React, { lazy } from "react";
import "../style/home.scss";

const Banner = lazy(() => import("../Components/Banner"));
const Card = lazy(() => import("../Components/Card"));
const Clients = lazy(() => import("../Components/Clients"));
const Team = lazy(() => import("../Components/Team"));
const Beta = lazy(() => import("../Components/Beta"));
const Footer = lazy(() => import("../Components/Footer"));
const Navbar = lazy(() => import("../Components/Navbar"));
const RightCardOne = lazy(() => import("../Components/RightCardOne"));
const LifeSideCard = lazy(() => import("../Components/LeftSideCard"));
const Testimonials = lazy(() => import("../Components/Testimonials"));

const Home = () => {
  return (
    <>
      <div className="home">
        <Navbar />
        <Banner
          heading={"Reinvent your business digitally in new era of tech"}
          para={"Get your personalised Web Application"}
          close={false}
        />
        <Card />
        {/* <Clients /> */}
        {/* <Team /> */}
        <Testimonials />
        <Beta />
        <Footer />
      </div>
    </>
  );
};

export default Home;
