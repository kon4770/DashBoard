import "./styles.css";
import { useState } from "react";
import {
  Container,
  CssBaseline,
  Box,
  TextField,
  Button,
  Typography
} from "@mui/material";
import NavBar from "./NavBar";
import getTheme, { themeMode } from "./theme";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { ThemeProvider, StyledEngineProvider } from "@mui/material";
import { LoginDB } from "./../dataBaseMock/users";
import { userDataList } from "./../dataBaseMock/data";
import { setUserData } from "./userInfo";

export default function Login() {
  const [isDark, setIsDark] = useState(themeMode === "dark" ? true : false);
  const [theme, setTheme] = useState(getTheme(themeMode));
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  const [isAuth, setIsAuth] = useState("Unknown");
  const navigate = useNavigate();
  const { login } = useAuth();

  function isAuthenticated() {
    let result = false;
    let hash = 0;
    if (password.length > 0) {
      for (let i = 0; i < password.length; i++) {
        hash = (hash << 5) - hash + password.charCodeAt(i);
        hash = hash & hash;
      }
      LoginDB.forEach((user) => {
        if (
          user.username === username &&
          user.loginHash === hash &&
          result === false
        ) {
          userDataList.forEach((suspect) => {
            if (suspect.id === user.id) setUserData(suspect.data);
          });
          result = true;
        }
      });
    }
    return result;
  }

  const handlePass = (event) => {
    setPassword(event.target.value);
  };

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleLogin = () => {
    if (isAuthenticated()) {
      login();
      navigate("/dashboard");
    } else {
      setIsAuth(false);
    }
  };

  const changeLanguage = () => {
    if (lang === "en") {
      i18n.changeLanguage("pl");
      setLang("pl");
    } else {
      i18n.changeLanguage("en");
      setLang("en");
    }
  };

  const toggleNightMode = () => {
    if (isDark) {
      setIsDark(false);
      setTheme(getTheme("light"));
    } else {
      setIsDark(true);
      setTheme(getTheme("dark"));
    }
  };
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <NavBar
          toggleNightMode={toggleNightMode}
          changeLanguage={changeLanguage}
        />
        <Container component="main" fixed>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Typography component="h1" variant="h4" color="text">
              {t("Zaloguj się do Menadżera Sprzedaży")}
            </Typography>
            {isAuth === false && (
              <Button
                color="error"
                sx={{
                  marginTop: 1,
                  borderRadius: 3,
                  width: 350,
                  padding: 3
                }}
              >
                {t("Niepoprawna nazwa użytkownika i/lub hasło.")}
              </Button>
            )}
            <Box
              textAlign="center"
              bgcolor="background.paper"
              sx={{
                marginTop: 1,
                borderRadius: 3,
                width: 350,
                padding: 3
              }}
            >
              <div>
                <TextField
                  margin="none"
                  fullWidth
                  label={t("Nazwa użytkownika")}
                  variant="outlined"
                  name="username"
                  size="small"
                  value={username}
                  onChange={handleUsername}
                />
              </div>
              <div>
                <TextField
                  margin="dense"
                  fullWidth
                  name="password"
                  label={t("Hasło")}
                  type="password"
                  size="small"
                  value={password}
                  onChange={handlePass}
                  variant="outlined"
                />
              </div>
              <div>
                <Button
                  color="success"
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, width: 200, fontWeight: 500 }}
                  onClick={handleLogin}
                >
                  {t("Zaloguj się")}
                </Button>
              </div>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
