import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import {
  SentEmailDetails,
  SentEmailList,
  EmailDetails,
  getEmailDataAction,
  getUserDataAction,
  Footer,
  UpdateProfile,
  UserProfile,
  PassReset,
  SideBar,
  SignUp,
  store,
  NavBar,
  Header,
  Emaillist,
  Compose,
  Welcome,
  SignIn,
} from "./components";
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
