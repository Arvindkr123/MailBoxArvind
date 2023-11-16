import React from "react";
import Checkbox from "@mui/material/Checkbox";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import classes from "./Emailbody.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { emailAction } from "../Slices/emailSlice";
import { IconButton, Tooltip } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { red } from "@mui/material/colors";
import { deleteMailFromOutboxAction } from "../Reducer/asyncEmailReducer";

const SentEmailBody = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sentEmail = useSelector((state) => state.email.Outbox);
  const openSentEmailDetail = (row) => {
    dispatch(emailAction.openOutboxEmailDetail(row));
    navigate("/sentEmailDetails");
  };

  const deleteButtonClickHandler = (row) => {
    console.log(row);
    if (window.confirm("It will deleted permanantely.")) {
      dispatch(deleteMailFromOutboxAction(row));
    } else {
      return;
    }
  };
  return (
    <div>
      {sentEmail &&
        sentEmail.map((row) => (
          <div className={classes.emailbody} key={row.uniqueId}>
            <>
              <div className={classes.emailbody__left}>
                <Checkbox />
                <StarBorderIcon />
                <LabelOutlinedIcon /> To
              </div>
              <div
                className={classes.emailbody__middle}
                onClick={() => openSentEmailDetail(row)}
              >
                <div className={classes.emailbody__middle__message}>
                  <h4>{row.receiverEmail}</h4>
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
              >{`${row.dateOfMail.hours}:${row.dateOfMail.minute}:${row.dateOfMail.second}`}</div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SentEmailBody;
