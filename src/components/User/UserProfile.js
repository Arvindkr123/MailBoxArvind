import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
// import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
// import Typography from "@mui/joy/Typography";
// import Link from "@mui/joy/Link";
import classes from "./UserProfile.module.css";
import { Avatar, Button, Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { useSelector } from "react-redux";
const UserProfile = () => {
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state.user.userDetails);

  const btnStyle = { margin: "8px 0" };
  return (
    <div className={classes.userprofile}>
      {userDetails && (
        <div className={classes.grid}>
          <Card sx={{ width: 350 }}>
              <CardMedia
                component="img"
                height="350"
                src={userDetails.photoUrl}
                alt="Rk"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="center"
                >
                  {userDetails.displayName}
                </Typography>
                <Typography variant="h6"  align="center">
                  {userDetails.email}
                </Typography>
              </CardContent>
          </Card>

          {/* <Grid>
            <Card variant="outlined" sx={{ width: 320 }}>
              <CardOverflow>
                {userDetails && (
                  <AspectRatio ratio="1">
                    <img
                      src={userDetails.photoUrl}
                      loading="lazy"
                      alt="Rahul Rajak"
                      height="150px"
                      width="100%"
                    />
                  </AspectRatio>
                )}
              </CardOverflow>
              {userDetails.email && (
                <>
                  <Typography
                    level="body2"
                    sx={{ mt: 0.5, mb: 2, margin: "auto" }}
                  >
                    <Link style={{ textDecoration: "none" }}>
                      {userDetails.displayName}
                    </Link>
                  </Typography>
                  <Typography
                    level="h2"
                    sx={{ fontSize: "md", mt: 2, marginLeft: "3.5rem" }}
                  >
                    <Link style={{ textDecoration: "none" }}>
                      {userDetails.email}
                    </Link>
                  </Typography>
                </>
              )}
              <Button
                color="primary"
                variant="contained"
                fullWidth
                style={btnStyle}
                onClick={() => navigate("/profileUpdate")}
              >
                Update Profile
              </Button>
            </Card>
          </Grid> */}
        </div>
      )}
    </div>
  );
};

export default UserProfile;
