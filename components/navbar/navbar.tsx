"use client";
import React, { useState, useEffect, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ecellicon from "../../utils/ecellicon.jpg";
import {
  getAuth,
  signInWithPopup,
  signOut,
  Auth,
  GoogleAuthProvider,
} from "firebase/auth";
import { app } from "../firebase/firebase";
import {
  getFirestore,
  collection,
  addDoc,
  where,
  query,
  getDocs,
} from "firebase/firestore";
const routes = ["Home", "Speakers", "Partners", "Events", "Agenda"];
const userProfile = ["Profile", "Account", "Logout"];

export default function NavbarComponent() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [burger, setBurger] = useState<any>(false);
  const auth: Auth = getAuth(app);
  const router = useRouter();

  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleBurger = () => {
    setBurger(!burger);
  };
  const database = getFirestore(app);
  const handleLoginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const response = await signInWithPopup(auth, provider);
      console.log(auth.currentUser?.email);
      const queryData: any = query(
        collection(database, "users"),
        where("name", "==", auth.currentUser?.email)
      );
      getDocs(queryData)
        .then((data: any) => {
          if (data.empty) {
            addDoc(collection(database, "users"), {"email":auth.currentUser?.email})
              .then((docRef) => {
                console.log(`Document added with id : ${docRef}`);
              })
              .catch((err) => {
                console.log(err);
              });
          } else {
            console.log("User already exists");
          }
        })
        .catch((err: any) => {
          console.log(err);
        });
      router.push("/");
      setUserLoggedIn(true);
      // console.log(response.user.email);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignOut = async () => {
    await signOut(auth);
    setUserLoggedIn(false);
    router.replace("/");
  };

  return (
    <AppBar
      position="sticky"
      className="flex flex-row"
      style={{ backgroundColor: "black" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Tooltip title="Open Routes">
              <IconButton onClick={handleBurger} sx={{ p: 0 }}>
                <MenuIcon htmlColor="grey" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={burger}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(burger)}
              onClose={handleBurger}
            >
              {routes.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={() => {
                    router.push(`/${setting}`);
                  }}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Image src={ecellicon} width={75} height={75} alt="ecell" />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Startup Summit
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {routes.map((page) => (
              <Button
                key={page}
                onClick={() => {
                  router.push(`/${page.toLowerCase()}`);
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {!userLoggedIn ? (
            <Button variant="contained" onClick={handleLoginWithGoogle}>
              Sign in
            </Button>
          ) : (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open Profile">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Ecell IIT-BHU"
                    src="/static/images/avatar/2.jpg"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
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
                {userProfile.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    {setting === "Logout" ? (
                      <Typography textAlign="center" onClick={handleSignOut}>
                        {setting}
                      </Typography>
                    ) : (
                      <Typography textAlign="center">{setting}</Typography>
                    )}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
