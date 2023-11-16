import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../Slices/userSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state.user.userDetails);
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const [anchorElUser, setAnchorElUser] = useState(null);
  const linkStyle = {
    textDecoration: "none",
    color: "white",
    marginRight: "15px",
    float: "right",
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logOutClickHandler = () => {
    dispatch(userAction.logOut());
  };

  return (
    <div>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Avatar
              alt="Remy Sharp"
              src="gmail.jpg"
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                width: 70,
                height: 50,
              }}
              variant="rounded"
            />
            <Link style={linkStyle} to="/">
              <Typography
                variant="h5"
                noWrap
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 1000,
                  letterSpacing: "0.3rem",
                  fontSize: "1.7rem",
                  marginLeft: 4,
                }}
              >
                Rmail
              </Typography>
            </Link>
            <Box
              sx={{
                flexGrow: 1,
                display: { md: "flex" },
                justifyContent: "right",
              }}
            >
              {isLoggedIn && (
                <Link style={linkStyle} to="/emailBox">
                  Email Box
                </Link>
              )}

              {!isLoggedIn && (
                <Link to="/signIn" style={linkStyle}>
                  Sign In
                </Link>
              )}
            </Box>
            {isLoggedIn && (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    {userDetails && (
                      <Avatar alt="rahul rajak" src={userDetails.photoUrl} />
                    )}
                  </IconButton>
                </Tooltip>

                <Menu
                  sx={{ mt: "45px", color: "ActiveBorder" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem>
                    <Link
                      style={{
                        textDecoration: "none",
                        fontWeight: "bolder",
                      }}
                      to="/profileUpdate"
                    >
                      Profile Update
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      style={{
                        textDecoration: "none",

                        fontWeight: "bolder",
                      }}
                      to="/userProfile"
                    >
                      my account
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      style={{
                        textDecoration: "none",

                        fontWeight: "bolder",
                      }}
                      to="/passReset"
                    >
                      Password Reset
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      style={{
                        textDecoration: "none",

                        fontWeight: "bolder",
                      }}
                      onClick={logOutClickHandler}
                      to="/"
                    >
                      LogOut
                    </Link>
                  </MenuItem>
                </Menu>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default NavBar;
