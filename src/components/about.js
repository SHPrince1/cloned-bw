import React from "react";
import style from "../styles/about.module.css";
import bwabt from "../images/aboutbw.jpg";

const About = () => {
  return (
    <>
      <div className={style.abtBox}>
        <div className={style.title}>
          <h1>ABOUT US</h1>
        </div>
        <div className={style.row}>
          <div className={style.col}>
            <div className={style.contentText}>
              <p >
                Intergrity, Excellence, and Client Focus are the key performance
                cultures fundamental to the success of our business.
              </p>
            </div>
            <div className={style.secContent}>
              <p>
                Our service offerings include Cash/Asset In Transit (C.I.T),
                Currency Sorting and Processing, ATM Management, Safe Deposit
                Boxes (SDB), Aviation Security and related services.
              </p>
              <p>
                Our Head Office is in Lagos State, and have a presence in 29
                states in Nigeria, deploying a fleet of over 200 Armored
                Vehicles.
              </p>
              <p>
                BW was licensed by the Central Bank of Nigeria (CBN) on May 4,
                2011 for Cash-In-Transit (CIT). A Currency Sorting license was
                also issued by the CBN on May 9, 2012. We obtained our Security
                Guarding license in 2009.
              </p>
            </div>
          </div>
          <div className={style.col}>
            <div >

            <img   className={style.imgs}src={bwabt} alt="fireSpot" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
