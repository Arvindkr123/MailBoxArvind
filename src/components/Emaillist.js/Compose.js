import React, { useState } from "react";
import classes from "./Compose.module.css";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import SendIcon from "@mui/icons-material/Send";

import TextFormatIcon from "@mui/icons-material/TextFormat";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import LockClockOutlinedIcon from "@mui/icons-material/LockClockOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Zoom from "@mui/material/Zoom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { Button, IconButton, Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../Slices/userSlice";
import {
  getEmailDataAction,
  sendEmailAction,
} from "../Reducer/asyncEmailReducer";
import { toast } from "react-toastify";
const Compose = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.user.userDetails);
  // console.log(userDetails)

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  // const [name, setName] = useState("");
  // const nameChangeHandler = (e) => {
  //   e.preventDefault();
  //   setName(e.target.value);
  // };
  const recipientsChangeHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const subjectChangekHandler = (e) => {
    e.preventDefault();
    setSubject(e.target.value);
  };
  const textChangeHandler = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };
  const sendButtonClickHandler = (email, subject, message) => {
    if (!email || !subject || !message) {
      toast.warn("All fields are mandatory");
    } else {
      console.log("data sent");
      dispatch(
        sendEmailAction({
          receiverEmail: email,
          emailSubject: subject,
          emailContent: message,
          senderEmail: userDetails.email,
        })
      );
      setTimeout(() => {
        let senderEmail = userDetails.email;
        dispatch(getEmailDataAction(senderEmail));
      }, 1000);
      dispatch(userAction.MessageBoxClose());
    }
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className={classes.compose}>
      <div className={classes.compose__header}>
        <div className={classes.compose__header__left}>
          <span>New Message</span>
        </div>
        <div className={classes.compose__header__right}>
          <Tooltip title="Minimize" placement="top" TransitionComponent={Zoom}>
            <IconButton>
              <RemoveIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Expand" placement="top" TransitionComponent={Zoom}>
            <IconButton>
              <OpenInFullIcon />
            </IconButton>
          </Tooltip>
          <Tooltip
            title="Save and Close"
            placement="top"
            TransitionComponent={Zoom}
          >
            <IconButton onClick={() => dispatch(userAction.MessageBoxClose())}>
              <CloseIcon />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <div className={classes.compose__body}>
        <div className={classes.compose__bodyform}>
          {/* <input
            value={name}
            type="text"
            placeholder="Name"
            onChange={nameChangeHandler}
          /> */}
          <input
            value={email}
            type="email"
            placeholder="Reciepents"
            onChange={recipientsChangeHandler}
          />
          <input
            value={subject}
            type="text"
            placeholder="Subject"
            onChange={subjectChangekHandler}
          />
          <textarea value={message} rows="20" onChange={textChangeHandler} />
        </div>
      </div>
      <div className={classes.compose__footer}>
        <div className={classes.compose__footerleft}>
          <Button
            variant="contained"
            onClick={() => {
              sendButtonClickHandler(email, subject, message);
            }}
            endIcon={<SendIcon fontSize="small" />}
          >
            Send
          </Button>
        </div>
        <div className={classes.compose__footerright}>
          <Tooltip
            title="Formatting Options"
            placement="top"
            TransitionComponent={Zoom}
          >
            <IconButton>
              <TextFormatIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip
            title="Attach files"
            placement="top"
            TransitionComponent={Zoom}
          >
            <IconButton>
              <AttachFileIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip
            title="Insert Links"
            placement="top"
            TransitionComponent={Zoom}
          >
            <IconButton>
              <InsertLinkIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip
            title="Insert Emoji"
            placement="top"
            TransitionComponent={Zoom}
          >
            <IconButton>
              <InsertEmoticonIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip
            title="Insert file using drive"
            placement="top"
            TransitionComponent={Zoom}
          >
            <IconButton>
              <AddToDriveIcon />
            </IconButton>
          </Tooltip>
          <Tooltip
            title="Insert photo"
            placement="top"
            TransitionComponent={Zoom}
          >
            <IconButton>
              <InsertPhotoOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip
            title="Toggle confidential mode"
            placement="top"
            TransitionComponent={Zoom}
          >
            <IconButton>
              <LockClockOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip
            title="More options"
            placement="top"
            TransitionComponent={Zoom}
          >
            <IconButton>
              <MoreVertOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip
            title="Discard drafts"
            placement="top"
            TransitionComponent={Zoom}
          >
            <IconButton>
              <DeleteOutlineOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Compose;
