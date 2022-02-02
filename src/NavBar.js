import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LogoutIcon from "@mui/icons-material/Logout";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import useAuth from "./useAuth";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { themeMode } from "./theme";

export default function NavBar(props) {
  const [theme, setTheme] = useState(themeMode);
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  const { authed, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };
  const handleLangChange = (event, language) => {
    if (language !== null) {
      setLang(language);
      props.changeLanguage();
    }
  };
  const handleThemeChange = (event, mode) => {
    if (mode !== null) {
      setTheme(mode);
      props.toggleNightMode();
    }
  };

  return (
    <AppBar color="navBar" position="sticky">
      <Toolbar>
        {props.needsReturn && (
          <Link to="/dashboard">
            <IconButton
              size="large"
              edge="start"
              color="secondary"
              sx={{ mr: 2 }}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
          </Link>
        )}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        ></Typography>

        <div>
          <LightbulbIcon fontSize="medium" color="iconCol" />
          <ToggleButtonGroup
            color="navBar2"
            value={theme}
            exclusive
            onChange={handleThemeChange}
          >
            <ToggleButton value="dark">OFF</ToggleButton>
            <ToggleButton value="light">ON</ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div>
          <ToggleButtonGroup
            color="navBar2"
            value={lang}
            exclusive
            onChange={handleLangChange}
          >
            <ToggleButton value="pl">PL</ToggleButton>
            <ToggleButton value="en">EN</ToggleButton>
          </ToggleButtonGroup>
        </div>
        {authed && (
          <IconButton onClick={handleLogout}>
            <LogoutIcon color="secondary" fontSize="medium" />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
}
