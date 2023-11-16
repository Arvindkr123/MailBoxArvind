import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  IconButton,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
const Footer = () => {
  const [value, setValue] = React.useState(0);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            margin: "auto",
            flexDirection: "column",
            marginTop: "25px",
          }}
        >
          <Typography variant="h6" component="div" color="Secondary">
            Contact me :+91 9315207665
          </Typography>
          thakurarvindkr10@gmail.com
          <Box>
            <IconButton
              size="large"
              color="inherit"
              href="https://github.com/Arvindkr123"
              target="blank"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.linkedin.com/in/arvind-kumar-015759213"
              target="blank"
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
          <Typography component="div" variant="h7">
            @ All Right Reserved
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
    // {/* </AppBar> */}
  );
};

export default Footer;
