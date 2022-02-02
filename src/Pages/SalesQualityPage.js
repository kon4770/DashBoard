import NavBar from "./../NavBar";
import { React, useState } from "react";
import { ThemeProvider, StyledEngineProvider } from "@mui/material";
import getTheme, { themeMode } from "./../theme";
import { useTranslation } from "react-i18next";
import { Typography, Divider, Box, Grid, Rating, Button } from "@mui/material";
import { userData } from "./../userInfo";
import { Scrollbars } from "react-custom-scrollbars";

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
              <div className="WidgetName">{t("Jakość sprzedaży")}</div>
              <Divider />

              <Box
                className="WidgetContentWrapper"
                sx={{
                  backgroundColor: "background.paper",
                  borderRadius: 3
                }}
              >
                <Scrollbars style={{ height: 600 }}>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="space-around"
                    spacing={0}
                  >
                    <Grid item md={6}>
                      <Typography variant="h6" component="h6" align="center">
                        {t("Twoje pukty:")}
                      </Typography>
                      <Box textAlign="center" sx={{ m: 2 }}>
                        <Button
                          variant="outlined"
                          size="large"
                          sx={{ px: 4, fontSize: 40 }}
                          color="score"
                        >
                          {userData.SalesQualityFeedbackDB.score}
                          {"/100"}
                        </Button>
                      </Box>
                      <Typography variant="h6" component="h6" align="center">
                        {t(
                          `Jesteś ${userData.SalesQualityFeedbackDB.rating.name} sprzedawcą`
                        )}
                      </Typography>
                      <Box textAlign="center">
                        <Rating
                          value={userData.SalesQualityFeedbackDB.rating.value}
                          size="big"
                          readOnly
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6" component="h6" align="center">
                        {t("Rozwijaj się poprzez:")}
                      </Typography>
                      {userData.SalesQualityFeedbackDB.field.map((field) => (
                        <Box key={field.id} textAlign="center" sx={{ p: 1 }}>
                          {t(field.nazwa)}
                          <span> </span>
                          <Rating value={field.ocena} readOnly />
                        </Box>
                      ))}
                    </Grid>
                  </Grid>
                </Scrollbars>
              </Box>
            </div>
          </Box>
        </Box>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
