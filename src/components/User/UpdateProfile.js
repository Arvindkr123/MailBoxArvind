import { Button, Grid, InputLabel, Paper, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import LanguageIcon from "@mui/icons-material/Language";
import { useDispatch } from "react-redux";
// import { updateProfileAction } from "../Slices/asyncUserReducer";
import { useNavigate } from "react-router-dom";
import classes from "./UpdateProfile.module.css";
import {
  getUserDataAction,
  updateProfileaction,
} from "../Reducer/asyncUserReducer";
const UpdateProfile = () => {
  const paperStyle = {
    padding: 20,
    margin: "20px auto",
    width: "350px",
  };
  const btnStyle = { margin: "8px" };
  const textfield = { width: "100%", margin: "5px" };

  const [userName, setUserName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userNameChangeHandler = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
  };
  const photoUrlChangeHandler = (e) => {
    e.preventDefault();
    setPhotoUrl(e.target.value);
  };

  const updateButtonClickHandler = (e) => {
    if (userName.length === 0 || photoUrl.length === 0) {
      alert("All fields are mandatory");
      return;
    } else {
      dispatch(
        updateProfileaction({
          displayName: userName,
          photoUrl: photoUrl,
        })
      );
      setTimeout(() => {
        dispatch(getUserDataAction());
        navigate("/userProfile");
      }, 800);
    }
    setUserName("");
    setPhotoUrl("");
  };

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className={classes.update}>
      <div className={classes.grid}>
        <Grid>
          <Paper elevation={20} style={paperStyle}>
            <Grid align="center">
              <h2>Contact Details</h2>
            </Grid>
            <InputLabel>Full Name</InputLabel>
            <TextField
              style={textfield}
              id="outlined-textarea-email"
              onChange={userNameChangeHandler}
              value={userName}
            />
            <InputLabel>
              <LanguageIcon /> <span>Photo Url </span>
            </InputLabel>

            <TextField
              style={textfield}
              id="outlined-textarea-email"
              onChange={photoUrlChangeHandler}
              value={photoUrl}
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              // fullWidth
              style={btnStyle}
              onClick={updateButtonClickHandler}
            >
              Update
            </Button>
            <Button
              color="secondary"
              variant="contained"
              style={btnStyle}
              onClick={goToHome}
            >
              Cancel
            </Button>
          </Paper>
        </Grid>
      </div>
      {/* <div className={classes.image}>
        <img src="update.jpg" width="100%" />
      </div> */}
    </div>
  );
};

export default UpdateProfile;
