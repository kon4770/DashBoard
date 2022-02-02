import "./styles.css";
import NavBar from "./NavBar";
import ChartWidget from "./Widgets/ChartWidget";
import FeedbackWidget from "./Widgets/FeedbackWidget";
import OrdersWidget from "./Widgets/OrdersWidget";
import SalesQualityWidget from "./Widgets/SalesQualityWidget";
import { React, useState } from "react";
import { Box, Grid, ThemeProvider, StyledEngineProvider } from "@mui/material";
import getTheme, { themeMode } from "./theme";
import { useTranslation } from "react-i18next";
import { userData } from "./userInfo";
import { Scrollbars } from "react-custom-scrollbars";

export default function DashBoard(props) {
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
        <Scrollbars style={{ height: window.innerHeight }}>
          <Box
            className="App"
            sx={{
              backgroundColor: "background.default",
              color: "text.primary"
            }}
          >
            <NavBar
              toggleNightMode={toggleNightMode}
              changeLanguage={changeLanguage}
            />
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Grid item xs={12} sm={6} md={6}>
                <OrdersWidget t={t} orders={userData.OrdersDB}></OrdersWidget>
                <SalesQualityWidget
                  t={t}
                  score={userData.SalesQualityFeedbackDB.score}
                  rating={userData.SalesQualityFeedbackDB.rating}
                  field={userData.SalesQualityFeedbackDB.fieldToImprove}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <FeedbackWidget
                  t={t}
                  FeedbackWszystkieDB={userData.FeedbackWszystkieDB}
                  FeedbackPozytywneDB={userData.FeedbackPozytywneDB}
                  FeedbackNegatywneDB={userData.FeedbackNegatywneDB}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <ChartWidget
                t={t}
                isDark={isDark}
                salesDay={userData.salesDay}
                salesWeek={userData.salesWeek}
                salesMonth={userData.salesMonth}
              />
              <Box sx={{ p: 5 }} />
            </Grid>
          </Box>
        </Scrollbars>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
