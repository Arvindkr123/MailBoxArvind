import React from "react";
import classes from "./EmailType.module.css";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const EmailType = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.emailtype}>
      {/* <div className={classes.emailtype__options}>
        <InboxIcon />
        <p>Primary</p>
      </div>
      <div className={classes.emailtype__options}>
        <PeopleIcon />
        <p>Social</p>
      </div>
      <div className={classes.emailtype__options}>
        <LocalOfferIcon />
        <p>Promotions</p>
      </div> */}
      <Box sx={{ width: "80%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            variant="fullWidth"
            textColor="secondary"
            indicatorColor="secondary"
          >
            <Tab
              label="Primary"
              icon={<InboxIcon />}
              iconPosition="start"
              {...a11yProps(0)}
            />
            <Tab
              label="Social"
              icon={<PeopleIcon />}
              iconPosition="start"
              {...a11yProps(0)}
            />
            <Tab
              label="Promotions"
              icon={<LocalOfferIcon />}
              iconPosition="start"
              {...a11yProps(0)}
            />
          </Tabs>
        </Box>
      </Box>
    </div>
  );
};

export default EmailType;
