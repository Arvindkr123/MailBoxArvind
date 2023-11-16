import React from "react";
import Checkbox from "@mui/material/Checkbox";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import classes from "./Emailbody.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { emailAction } from "../Slices/emailSlice";
import { toast } from "react-toastify";
import { IconButton, Tooltip } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { red } from "@mui/material/colors";
import {
  deleteMailFromInboxAction,
  getEmailDataAction,
  updateReadMailAction,
} from "../Reducer/asyncEmailReducer";

const Emailbody = () => {
  const Inbox = useSelector((state) => state.email.Inbox);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const openEmailDetail = (row) => {
    dispatch(emailAction.openInboxEmailDetail(row));
    if (row.mailReadStatus === false) {
      dispatch(updateReadMailAction(row));
      setTimeout(() => {
        const senderEmail = localStorage.getItem("email");
        dispatch(getEmailDataAction(senderEmail));
      }, 800);
    }
    navigate("/emailDetails");
  };

  const deleteButtonClickHandler = (row) => {
    if (window.confirm("It will deleted permanantely.")) {
      dispatch(deleteMailFromInboxAction(row));
    } else {
      return;
    }
  };
  return (
    <div>
      {Inbox &&
        Inbox.map((row) => (
          <div className={classes.emailbody} key={row.uniqueId}>
            <>
              <div className={classes.emailbody__left}>
                <Checkbox />
                <StarBorderIcon />
                <LabelOutlinedIcon />
                from
              </div>
              <div
                className={classes.emailbody__middle}
                onClick={() => openEmailDetail(row)}
              >
                <div className={classes.emailbody__middle__message}>
                  <h4>{row.senderEmail}</h4>
                  <p>
                    <b>{row.emailSubject}</b>
                    {row.emailContent}
                  </p>
                </div>
              </div>
            </>
            <div className={classes.emailbody__right}>
              <div className={classes.delete}>
                <Tooltip title="Delete Email" placement="right">
                  <IconButton
                    onClick={() => {
                      deleteButtonClickHandler(row);
                    }}
                  >
                    <DeleteOutlineOutlinedIcon sx={{ color: red }} />
                  </IconButton>
                </Tooltip>
              </div>
              <div
                className={classes.time}
              >{`${row.dateOfMail.hours}:${row.dateOfMail.minute}`}</div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Emailbody;
