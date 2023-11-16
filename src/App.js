import React, { useEffect, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import SignUp from "./components/User/SignUp";
import store from "./components/Store/store";
// import { ThemeProvider } from "@emotion/react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/NavBar/Header";
import SideBar from "./components/NavBar/SideBar";
import Emaillist from "./components/Emaillist.js/Emaillist";
import Compose from "./components/Emaillist.js/Compose";
import Welcome from "./components/Welcome/Welcome";
import SignIn from "./components/User/SignIn";
import PassReset from "./components/User/PassReset";
import Footer from "./components/NavBar/Footer";
import UpdateProfile from "./components/User/UpdateProfile";
import UserProfile from "./components/User/UserProfile";
import { getUserDataAction } from "./components/Reducer/asyncUserReducer";
import { getEmailDataAction } from "./components/Reducer/asyncEmailReducer";
import EmailDetails from "./components/Emaillist.js/EmailDetails";
import SentEmails from "./components/Emaillist.js/SentEmails";
import SentEmailBody from "./components/Emaillist.js/SentEmailBody";
import SentEmailList from "./components/Emaillist.js/SentEmailList";
import SentEmailDetails from "./components/Emaillist.js/SentEmailDetails";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const isComposed = useSelector((state) => state.user.isComposed);
  const changed = useSelector((state) => state.email.changed);
  useEffect(() => {
    if (isLoggedIn === "true") {
      dispatch(getUserDataAction());
    } else {
      return;
    }
  }, [isLoggedIn, dispatch]);

  useEffect(() => {
    if (changed || isLoggedIn) {
      let senderEmail = localStorage.getItem("email");
      dispatch(getEmailDataAction(senderEmail));
    } else {
      return;
    }
  }, [changed, isLoggedIn, dispatch]);

  const [darkMode, setDarkMode] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <NavBar
                  check={darkMode}
                  change={() => setDarkMode(!darkMode)}
                />
                <Welcome />
                <Footer />
              </div>
            }
          ></Route>
        </Routes>
        <Routes>
          <Route
            path="signUp"
            element={
              <div>
                <NavBar
                  check={darkMode}
                  change={() => setDarkMode(!darkMode)}
                />
                <SignUp />
                <Footer />
              </div>
            }
          ></Route>
        </Routes>
        <Routes>
          <Route
            path="signIn"
            element={
              <div>
                <NavBar
                  check={darkMode}
                  change={() => setDarkMode(!darkMode)}
                />
                <SignIn />
                <Footer />
              </div>
            }
          ></Route>
        </Routes>
        <Routes>
          <Route
            path="profileUpdate"
            element={
              <div>
                <NavBar
                  check={darkMode}
                  change={() => setDarkMode(!darkMode)}
                />
                <UpdateProfile />
                <Footer />
              </div>
            }
          ></Route>
        </Routes>
        <Routes>
          <Route
            path="userProfile"
            element={
              <div>
                <NavBar
                  check={darkMode}
                  change={() => setDarkMode(!darkMode)}
                />
                <UserProfile />
                <Footer />
              </div>
            }
          ></Route>
        </Routes>
        <Routes>
          <Route
            path="passReset"
            element={
              <div>
                <NavBar
                  check={darkMode}
                  change={() => setDarkMode(!darkMode)}
                />
                <PassReset />
                <Footer />
              </div>
            }
          ></Route>
        </Routes>
        <Routes>
          <Route
            path="emailBox"
            element={
              <div>
                <Header
                  check={darkMode}
                  change={() => setDarkMode(!darkMode)}
                />
                <div className="app__body">
                  <SideBar />
                  <Emaillist />
                </div>
                {isComposed && <Compose />}
              </div>
            }
          ></Route>
        </Routes>
        <Routes>
          <Route
            path="emailDetails"
            element={
              <div>
                <Header
                  check={darkMode}
                  change={() => setDarkMode(!darkMode)}
                />
                <div className="app__body">
                  <SideBar />
                  <EmailDetails />
                </div>
                {isComposed && <Compose />}
              </div>
            }
          ></Route>
        </Routes>
        <Routes>
          <Route
            path="sentEmailDetails"
            element={
              <div>
                <Header
                  check={darkMode}
                  change={() => setDarkMode(!darkMode)}
                />
                <div className="app__body">
                  <SideBar />
                  <SentEmailDetails />
                </div>
                {isComposed && <Compose />}
              </div>
            }
          ></Route>
        </Routes>
        <Routes>
          <Route
            path="sentEmail"
            element={
              <div>
                <Header
                  check={darkMode}
                  change={() => setDarkMode(!darkMode)}
                />
                <div className="app__body">
                  <SideBar />
                  <SentEmailList />
                </div>
                {isComposed && <Compose />}
              </div>
            }
          ></Route>
        </Routes>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
