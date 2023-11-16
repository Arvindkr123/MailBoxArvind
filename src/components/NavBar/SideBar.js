import React from "react";
import classes from "./SideBar.module.css";
import AddIcon from "@mui/icons-material/Add";
import SideBarOptions from "./SideBarOptions";
import InboxIcon from "@mui/icons-material/Inbox";
import StarRateIcon from "@mui/icons-material/StarRate";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import SendIcon from "@mui/icons-material/Send";
import DraftsIcon from "@mui/icons-material/Drafts";
import LabelIcon from "@mui/icons-material/Label";
import DeleteIcon from "@mui/icons-material/Delete";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VideoChatIcon from "@mui/icons-material/VideoChat";
import KeyboardIcon from "@mui/icons-material/Keyboard";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import {
  IconButton,
  TextField,
  Tooltip,
  Typography,
  Zoom,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import TextFormatIcon from "@mui/icons-material/TextFormat";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import LockClockOutlinedIcon from "@mui/icons-material/LockClockOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../Slices/userSlice";
import { useNavigate } from "react-router-dom";
import { emailAction } from "../Slices/emailSlice";

const SideBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inBoxMails = useSelector((state) => state.email.Inbox);
  const inOutboxEmails = useSelector((state) => state.email.Outbox);
  const inbox = useSelector((state) => state.email.isInboxActive);
  const outbox = useSelector((state) => state.email.isOutboxActive);
  var count = 0;
  for (let i = 0; i < inBoxMails.length; i++) {
    if (inBoxMails[i].mailReadStatus === false) {
      count++;
    }
  }
  var sentEmail = 0;
  for (let i = 0; i < inOutboxEmails.length; i++) {
    if (inOutboxEmails[i].mailReadStatus === false) {
      sentEmail++;
    }
  }

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const style = {
    position: "absolute",
    top: "15rem",
    left: "50rem",
    width: "450px",
  };
  const goToSentEmailBody = () => {
    navigate("/sentEmail");
    dispatch(emailAction.outboxActive());
  };
  const goToInbox = () => {
    navigate("/emailBox");
    dispatch(emailAction.inboxActive());
  };

  return (
    <div className={classes.sidebar}>
      <Button
        startIcon={<AddIcon />}
        className={classes.compose_btn}
        onClick={() => {
          dispatch(userAction.MessageBoxOpen());
        }}
      >
        Compose
      </Button>
        <div onClick={goToInbox} className={`${inbox && classes.inboxEmail}`}>
          <SideBarOptions
            Icon={InboxIcon}
            title="Inbox"
            number={count}
            isActive={true}
          />
        </div>
      <SideBarOptions Icon={StarRateIcon} title={"Starred"} number={0} />
      <SideBarOptions Icon={WatchLaterIcon} title={"Snoozed"} number={0} />
      <SideBarOptions
        Icon={LabelImportantIcon}
        title={"Important"}
        number={0}
      />
      <div
        onClick={goToSentEmailBody}
        className={`${outbox && classes.outboxEmail}`}
      >
        <SideBarOptions Icon={SendIcon} title={"Sent"} number={sentEmail} />
      </div>
      <SideBarOptions Icon={DraftsIcon} title={"Drafts"} number={0} />
      <SideBarOptions Icon={LabelIcon} title={"Category"} number={0} />
      <SideBarOptions Icon={DeleteIcon} title={"[Map]/Trash"} number={0} />
      <SideBarOptions Icon={FindInPageIcon} title={"Documents"} />
      <SideBarOptions Icon={ExpandMoreIcon} title={"More"} />
      <hr />
      <h3 className={classes.sidebarOptions__heading}>Meet</h3>
      <SideBarOptions Icon={VideoChatIcon} title={"New Meeting"} />
      <SideBarOptions Icon={KeyboardIcon} title={"Join a meeting"} />
    </div>
  );
};

export default SideBar;
