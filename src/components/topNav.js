import React from "react";
import toStyle from "../styles/topnav.module.css";
import mainLogo from "../images/bwlogo.png";

import {AiOutlineMail } from "react-icons/ai";
import {MdCall} from "react-icons/md";

const TopNav = () => {
  return (
    <>
      <div className={toStyle.topNavBox}>
        <div className={toStyle.imgBox}>
          <img src={mainLogo} alt="fireSpot" />
        </div>
        <div className={toStyle.emailBox}>
         <AiOutlineMail  size={35}/>
          <p>info@bankerswarehouse.com</p>
          <MdCall size={35} />
        </div>
      </div>
    </>
  );
};

export default TopNav;
