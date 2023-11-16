import React, { useState } from "react";
import {
  Avatar,
  Button,
  FormControl,
  IconButton,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { signUpAction } from "../Slices/asyncUserReducer";
import { toast } from "react-toastify";
import { signUpAction } from "../Reducer/asyncUserReducer";
import classes from "./SignUp.module.css";
// import "./SignUp.module.css";
const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const paperStyle = {
    padding: 20,
    margin: "20px auto",
    width: "350px",
    marginBottom: "6rem",
  };
  const avatarStyle = { backgroundColor: "#06cd83" };
  const passStyle = { margin: "10px auto " };
  const btnStyle = { margin: "8px 0 " };
  const textfield = { width: "100%", marginTop: "20px" };
  const [showPassword, setShowPassword] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const userEmailChangeHandler = (e) => {
    e.preventDefault();
    setUserEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const signUpButtonClickHandler = () => {
    if (!userEmail || !password) {
      toast.warn("All Fields are mandatory");
      return;
    } else {
      dispatch(
        signUpAction({
          userEmail: userEmail,
          password: password,
        })
      );
      navigate("/signIn");
    }

    setUserEmail("");
    setPassword("");
  };

  const toSignIn = () => {
    navigate("/signIn");
  };
  return (
    <div className={classes.bg}>
      <div className={classes.signUp}>
        <div className={classes.grid}>
          <Grid>
            <Paper elevation={20} style={paperStyle}>
              <Grid align="center">
                <Avatar style={avatarStyle}>
                  <LockOutlinedIcon />
                </Avatar>
                <h2>Sign Up</h2>
              </Grid>
              <TextField
                style={textfield}
                id="outlined-textarea-email"
                required
                label="Email"
                // placeholder="e.g. elon@gmail.com"
                onChange={userEmailChangeHandler}
                value={userEmail}
              />
              <FormControl fullWidth variant="outlined" style={passStyle}>
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  onChange={passwordChangeHandler}
                  value={password}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  required
                />
              </FormControl>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                fullWidth
                style={btnStyle}
                onClick={signUpButtonClickHandler}
              >
                SignUp
              </Button>
              <Typography fullWidth>
                Already have an account ?
                <Button onClick={toSignIn}>Sign In</Button>
              </Typography>
            </Paper>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
