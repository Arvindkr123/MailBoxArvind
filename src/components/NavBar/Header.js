import React from "react";
import classes from "./Header.module.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import TuneIcon from "@mui/icons-material/Tune";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const userDetails = useSelector((state) => state.user.userDetails);

  return (
    <div className={classes.header}>
      <div className={classes.header_left}>
        <IconButton>
          <ReorderIcon />
        </IconButton>
        <img
          src="https://cdn.osxdaily.com/wp-content/uploads/2022/02/gmail-logo.jpg"
          alt="logo"
          width="30px"
          height="20px"
        />
      </div>
      <div className={classes.header_middle}>
        <div className={classes.search_mail}>
          <IconButton>
            <SearchIcon />
          </IconButton>

          <input type="text" placeholder="Search mail" />

          <IconButton>
            <TuneIcon />
          </IconButton>
        </div>
      </div>
      <div className={classes.header_right}>
        <IconButton>
          <HelpOutlineIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <AppsIcon>
          <HelpOutlineIcon />
        </AppsIcon>
        {userDetails && (
          <Avatar alt="Arvind Kumar" src={userDetails.photoUrl} />
        )}

        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default Header;
