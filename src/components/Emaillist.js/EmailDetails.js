import React from "react";
import { Avatar, IconButton, Tooltip } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import classes from "./EmaillistSettings.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import Zoom from "@mui/material/Zoom";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import StarIcon from "@mui/icons-material/Star";
import ReplyIcon from "@mui/icons-material/Reply";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const EmailDetails = () => {
  const navigate = useNavigate();
  const selectedEmail = useSelector((state) => state.email.inboxEmail);
  console.log(selectedEmail);
  return (
    <div>
      {selectedEmail && (
        <div className={classes.emaildetails}>
          <div className={classes.emaillist__settings}>
            <div className={classes.emaillist__settingsLeft}>
              <Tooltip title="Back" placement="top" TransitionComponent={Zoom}>
                <IconButton onClick={() => navigate("/emailBox")}>
                  <ArrowBackIcon />
                </IconButton>
              </Tooltip>
              <IconButton>
                <ArrowDropDownIcon />
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
          <div className={classes.emaildetails_message}>
            <div className={classes.emaildetails_header}>
              <div className={classes.emaildetails_headerleft}>
                <h4>{selectedEmail.emailSubject}</h4>
                <Tooltip
                  title="Expand"
                  placement="top"
                  TransitionComponent={Zoom}
                >
                  <IconButton>
                    <LabelImportantIcon />
                  </IconButton>
                </Tooltip>
              </div>
              <div className={classes.emaildetails_headerright}>
                <Tooltip
                  title="Print"
                  placement="top"
                  TransitionComponent={Zoom}
                >
                  <IconButton>
                    <LocalPrintshopIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip
                  title="In new Window"
                  placement="top"
                  TransitionComponent={Zoom}
                >
                  <IconButton>
                    <OpenInNewIcon />
                  </IconButton>
                </Tooltip>
              </div>
            </div>
            <div className={classes.emaildetails_middle}>
              <div className={classes.emaildetails_middleleft}>
                <IconButton>
                  <Avatar />
                </IconButton>
                <h4>{selectedEmail.senderEmail}</h4>
                {/* <p>{selectedEmail.emailContent}</p> */}
              </div>
              <div className={classes.emaildetails_middleright}>
                <p>{`Date: ${selectedEmail.dateOfMail.month}/${selectedEmail.dateOfMail.day}/${selectedEmail.dateOfMail.year}
            at  
            ${selectedEmail.dateOfMail.hours}hr:${selectedEmail.dateOfMail.minute}Min:${selectedEmail.dateOfMail.second}Sec`}</p>
                <Tooltip
                  title="Star"
                  placement="top"
                  TransitionComponent={Zoom}
                >
                  <IconButton>
                    <StarIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip
                  title="Reply"
                  placement="top"
                  TransitionComponent={Zoom}
                >
                  <IconButton>
                    <ReplyIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip
                  title="More"
                  placement="top"
                  TransitionComponent={Zoom}
                >
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                </Tooltip>
              </div>
            </div>
            <div className={classes.emaildetails_body}>
              <p>{selectedEmail.emailContent}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailDetails;
