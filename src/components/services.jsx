import React from "react";
import Style from "../styles/services.module.css";
import { BsCash } from "react-icons/bs";
import { FaBox } from "react-icons/fa";
import { GiSewingMachine, GiSolarSystem } from "react-icons/gi";
// import { MdBluetoothAudio } from "react-icons/md";
const Services = () => {
  return (
    <>
      <div className={Style.serviceBox}>
        <div className={Style.introtext}>
          Our Vision is to be the dominant cash movement/processing company in
          Nigeria
        </div>

        <div>
          <div className={Style.serviceText}>
            <h1>OUR SERVICES</h1>
          </div>
          <div className={Style.serRow}>
            <div className={Style.serCol}>
              <div className={Style.procesBox}>
                <div className={Style.logTitle}>
                  <BsCash size={29} color={"#46c2ca"} />
                  <p className={Style.header}>CASH PROCESSING</p>
                </div>
                <div className={Style.content}>
                  <p>
                    BW has a Service Agreement with the Central Bank of Nigeria
                    (CBN) to receive, process, sort, vault and pay out cash to
                    Deposit Money Banks (DMB's), on behalf of the CBN
                  </p>
                </div>

                <a href="/" className={Style.seeMore}>
                  SEE MORE
                </a>
              </div>
            </div>
            <div className={Style.serCol}>
              <div className={Style.serCol}>
                <div className={Style.procesBox}>
                  <div className={Style.logTitle}>
                    <GiSolarSystem size={29} color={"#46c2ca"} />
                    <p className={Style.header}>C.I.T OPERATIONS</p>
                  </div>
                  <div className={Style.content}>
                    <p>
                      Cash -In-Transit Operation: With a fleet of over 200 fully
                      armored vehicles, tested for ballistic (level B6)
                      resistance and approved by The Nigeria Police Force and
                      topography,
                    </p>
                  </div>

                  <a href="/" className={Style.seeMore}>
                    SEE MORE
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={Style.serRow}>
            <div className={Style.serCol}>
              <div className={Style.procesBox}>
                <div className={Style.logTitle}>
                  <FaBox size={29} color={"#46c2ca"} />
                  <p className={Style.header}>Safe Deposit Box Services</p>
                </div>
                <div className={Style.content}>
                  <p>
                    The safe keeping of our client’s vital possessions is
                    paramount to us and so we provide secure storage spaces in
                    Safe Deposit Boxes for individual and corporate customers
                  </p>
                </div>

                <a href="/" className={Style.seeMore}>
                  SEE MORE
                </a>
              </div>
            </div>
            <div className={Style.serCol}>
              <div className={Style.serCol}>
                <div className={Style.procesBox}>
                  <div className={Style.logTitle}>
                    <GiSewingMachine size={29} color={"#46c2ca"} />
                    <p className={Style.header}>ATM Management Service</p>
                  </div>
                  <div className={Style.content}>
                    <p>
                      BW has a Service Agreement with the Central Bank of
                      Nigeria (CBN) to receive, process, sort, vault and pay out
                      cash to Deposit Money Banks (DMB's), on behalf of the CBN
                    </p>
                  </div>

                  <a href="#" className={Style.seeMore}>
                    SEE MORE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default Services;
