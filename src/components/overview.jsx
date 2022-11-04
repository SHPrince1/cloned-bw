import React from "react";
import style from "../styles/overview.module.css";
import sss from "../images/sss.png";

const Overview = () => {
  return (
    <>
      <div className={style.pBox}>
        <div className={style.row}>
          <div className={style.col}>
            <div className={style.textBox}>
              <h1>Company Overview</h1>
              <p>
                Bankers Warehouse Limited (BW) was incorporated in April 2002
                and commenced operations in October 2007 in response to a demand
                for Modernized and Streamlined Cash-in-Transit and Cash
                Processing services in Nigeria. Our service offerings include
                Cash/Asset In Transit (C-I-T), Currency Sorting and Processing,
                ATM Management, Safe Deposit Boxes (SDB), Aviation Security and
                related services.
              </p>

              <p>
                Our Head Office is in Lagos State, and have a presence in 29
                states in Nigeria, deploying a fleet of over 200 Armored
                Vehicles. BW was licensed by the Central Bank of Nigeria (CBN)
                on May 4, 2011 for Cash-In-Transit (CIT). A Currency Sorting
                license was also issued by the CBN on May 9, 2012. We obtained
                our Security Guarding license in 2009.
              </p>
            </div>
          </div>
          <div className={style.col}>
            <div className={style.imgBox}>
              <div>
                <h2>Vision Statement</h2>
                <p className={style.tobe}>
                  “To be the dominant cash movement/processing company in
                  Nigeria”.
                </p>
              </div>

              <div className={style.imgPart}>
                <div className={style.imgmain}>
                  <img src={sss} alt=""  className={style.imgmain} />
                </div>

                <div className={style.contentBoxs}>
                  <div className={style.boxText}>
                    <div className={style.focus}></div>
                    <p>Client Focus</p>
                  </div>

                  <div className={style.boxText}>
                    <div className={style.integrity}></div>
                    <p>Integrity</p>
                  </div>

                  <div className={style.boxText}>
                    <div className={style.excel}></div>
                    <p>Excelence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
