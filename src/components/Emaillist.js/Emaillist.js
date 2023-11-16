import React from "react";
import Emailbody from "./Emailbody";
import classes from "./Emaillist.module.css";
import EmaillistSetting from "./EmaillistSetting";
import EmailType from "./EmailType";
const Emaillist = () => {
  return (
    <div className={classes.emaillist}>
      <EmaillistSetting />
      <EmailType />
      <Emailbody />
    </div>
  );
};

export default Emaillist;
