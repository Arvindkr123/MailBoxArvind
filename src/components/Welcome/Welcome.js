import React from "react";
import classes from "./Welcome.module.css";

const Welcome = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    // <div className={classes.welcome}>
    //   <div>
    //     <h1>Welcome to React Mail Box</h1>
    //   </div>
    //   {!isLoggedIn && <div>Please Login First to take ride!</div>}
    // </div>
    <div className={classes.body}>
      <div className={classes.context}>
        <h1>Welcome to React Mail Box</h1>
        {!isLoggedIn && <h4>Please Login First to take ride!</h4>}
      </div>
      <div className={classes.area}>
        <ul className={classes.circles}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Welcome;
