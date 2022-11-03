import React from "react";
import style from "../styles/contact.module.css";

const Contact = () => {
  return (
    <>
      <div className={style.contactBox}>
        <div className={style.contactDiv}>
          <a href="/" className={style.ContactLink}>Contact Us</a>
        </div>
      </div>
    </>
  );
};

export default Contact;
