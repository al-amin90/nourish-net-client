import React, { useEffect } from "react";
import Banner from "../components/Banner";
import Featured from "../components/Featured";
import Solulation from "../components/Solulation";
import Services from "../components/Services";
import DonateNow from "../components/DonateNow";

const Home = () => {
  useEffect(() => {
    document.title = "NourishNet | Home";
  }, []);

  return (
    <div className="mb-24">
      <Banner></Banner>
      <DonateNow></DonateNow>
      <Featured></Featured>
      <Solulation></Solulation>
      <Services></Services>
    </div>
  );
};

export default Home;
