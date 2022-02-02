import NavBar from "./../NavBar";
import { React, useState } from "react";
import { ThemeProvider, StyledEngineProvider } from "@mui/material";
import getTheme, { themeMode } from "./../theme";
import { useTranslation } from "react-i18next";
import { Typography, Divider, Box, Grid, Rating } from "@mui/material";
import { userData } from "./../userInfo";
import { Scrollbars } from "react-custom-scrollbars";
import ListItem from "@mui/material/ListItem";

export default function OrdersListPage(props) {
  const [isDark, setIsDark] = useState(themeMode === "dark" ? true : false);
  const [theme, setTheme] = useState(getTheme(themeMode));
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

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
        <Box
          className="App"
          sx={{
            backgroundColor: "background.default",
            height: window.innerHeight,
            color: "text.primary"
          }}
        >
          <NavBar
            toggleNightMode={toggleNightMode}
            changeLanguage={changeLanguage}
            needsReturn={true}
          />
          <Box className="WidgetWrapper">
            <div className="OrdersWidget Widget">
              <div className="WidgetName">{t("Najnowsze opinie")}</div>
              <Divider />

              <Box
                className="WidgetContentWrapper"
                sx={{
                  backgroundColor: "background.paper",
                  borderRadius: 3,
                  height: 800
                }}
              >
                <Grid
                  container
                  direction="row"
                  justifyContent="space-around"
                  alignItems="stretch"
                >
                  <Scrollbars style={{ height: 785 }}>
                    {userData.FeedbackWszystkieDB.map((FbWsz) => (
                      <ListItem key={FbWsz.id}>
                        <Grid item xs={12} sm={4} md={4}>
                          <Typography>{FbWsz.nazwa}</Typography>
                          <Rating value={FbWsz.ocena} readOnly />
                        </Grid>
                        <Grid item xs={12} sm={8} md={8}>
                          <p>{FbWsz.tekst}</p>
                        </Grid>
                      </ListItem>
                    ))}
                    {userData.FeedbackPozytywneDB.map((FbWsz) => (
                      <ListItem key={FbWsz.id}>
                        <Grid item xs={12} sm={4} md={4}>
                          <Typography>{FbWsz.nazwa}</Typography>
                          <Rating value={FbWsz.ocena} readOnly />
                        </Grid>
                        <Grid item xs={12} sm={8} md={8}>
                          <p>{FbWsz.tekst}</p>
                        </Grid>
                      </ListItem>
                    ))}
                    {userData.FeedbackNegatywneDB.map((FbWsz) => (
                      <ListItem key={FbWsz.id}>
                        <Grid item xs={12} sm={4} md={4}>
                          <Typography>{FbWsz.nazwa}</Typography>
                          <Rating value={FbWsz.ocena} readOnly />
                        </Grid>
                        <Grid item xs={12} sm={8} md={8}>
                          <p>{FbWsz.tekst}</p>
                        </Grid>
                      </ListItem>
                    ))}
                  </Scrollbars>
                </Grid>
              </Box>
            </div>
          </Box>
        </Box>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
