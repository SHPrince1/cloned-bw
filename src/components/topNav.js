import React from "react";
import Style from "../styles/topnav.module.css";
import mainLogo from "../images/bwlogo.png";

import {AiOutlineMail } from "react-icons/ai";
import {MdCall} from "react-icons/md";

const TopNav = () => {
  return (
    <>
      <div className={Style.topNavBox}>
        <div className={Style.imgBox}>
          <img src={mainLogo} alt="fireSpot" />
        </div>
        <div className={Style.emailBox}>
         <AiOutlineMail  size={35}/>
          <p>info@bankerswarehouse.com</p>
          <MdCall size={35} />
        </div>
      </div>
    </>
  );
};

export default TopNav;
