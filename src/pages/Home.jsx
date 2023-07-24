import React, { lazy } from "react";
import "../style/home.scss";

const Banner = lazy(() => import("../Components/Banner"));
const Stack = lazy(() => import("../Components/Stack"));
const Card = lazy(() => import("../Components/Card"));
const Beta = lazy(() => import("../Components/Beta"));
const Footer = lazy(() => import("../Components/Footer"));
const Navbar = lazy(() => import("../Components/Navbar"));
const CardOne = lazy(() => import("../Components/CardOne"));
const CardTwo = lazy(() => import("../Components/CardTwo"));
const CardThree = lazy(() => import("../Components/CardThree"));
const RightCardOne = lazy(() => import("../Components/RightCardOne"));
const LifeSideCard = lazy(() => import("../Components/LeftSideCard"));

const Home = () => {
  return (
    <>
      <div className="home">
        <Navbar />
        <Banner
          heading={
            "We are the world’s 2nd best web personalization SaaS for B2B businesses"
          }
          para={"Get private beta access"}
          close={false}
        />
        <Card />
        <div className="home-card">
          <RightCardOne />
          <CardOne />
          <CardTwo />
          <CardThree />
          <LifeSideCard />
        </div>
        <Stack />
        <Beta />
        <Footer />
      </div>
    </>
  );
};

export default Home;
