import { IconButton } from "@mui/material";
import React from "react";
import classes from "./EmaillistSettings.module.css";
// import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import Checkbox from "@mui/material/Checkbox";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const EmaillistSetting = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div className={classes.emaillist__settings}>
      <div className={classes.emaillist__settingsLeft}>
        <IconButton>
          <Checkbox {...label} />
        </IconButton>
        <IconButton>
          <ArrowDownwardIcon />
        </IconButton>
        <IconButton>
          <RefreshIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
      <div className={classes.emailist__settingsRight}>
        <p>1-50 of 10, 222</p>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton>
          <ChevronRightIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default EmaillistSetting;
