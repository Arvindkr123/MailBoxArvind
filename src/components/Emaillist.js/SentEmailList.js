import React from "react";
import SentEmailBody from "./SentEmailBody";
import EmaillistSetting from "./EmaillistSetting";
import EmailType from "./EmailType";
import classes from "./Emaillist.module.css";

const SentEmailList = () => {
  return (
    <div className={classes.emaillist}>
      <EmaillistSetting />
      {/* <EmailType /> */}
      <SentEmailBody />
    </div>
  );
};

export default SentEmailList;
