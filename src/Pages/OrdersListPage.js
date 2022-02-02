import NavBar from "./../NavBar";
import { React, useState } from "react";
import { ThemeProvider, StyledEngineProvider } from "@mui/material";
import getTheme, { themeMode } from "./../theme";
import { useTranslation } from "react-i18next";
import { Typography, Divider, Box, Button, Alert } from "@mui/material";
import { ordersData } from "./../userInfo";
import { Scrollbars } from "react-custom-scrollbars";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Image from "react-random-image";

export default function OrdersListPage() {
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
              <div className="WidgetName">{t(ordersData.name)}</div>
              <Divider />

              <Box
                className="WidgetContentWrapper"
                sx={{
                  backgroundColor: "background.paper",
                  borderRadius: 3
                }}
              >
                {ordersData.data.length === 0 ? (
                  <Box sx={{ p: 1 }}>
                    <Alert variant="filled" severity="warning" sx={{ m: 2 }}>
                      {t("Nie ma danych")}
                    </Alert>
                  </Box>
                ) : (
                  <Scrollbars style={{ height: 600 }}>
                    <List sx={{ width: "100%" }}>
                      {ordersData.data.map((order) => (
                        <div key={order.id}>
                          <ListItem>
                            <>
                              <ListItemAvatar>
                                <Box sx={{ pr: 2 }}>
                                  <Image width={70} height={70} />
                                </Box>
                              </ListItemAvatar>
                              <ListItemText
                                primary={order.Name}
                                secondary={
                                  <p>
                                    <Typography
                                      sx={{ display: "inline" }}
                                      variant="body2"
                                      color="text.primary"
                                    >
                                      {t("Numer Zamówienia: ")}
                                    </Typography>
                                    {order.id}
                                    <Typography
                                      variant="body2"
                                      color="text.primary"
                                    >
                                      {`${order.BuyersName} ${order.BuyersSurname}`}
                                    </Typography>
                                  </p>
                                }
                              />
                            </>
                            <div>
                              <Typography
                                variant="h6"
                                component="h6"
                                align="center"
                              >
                                {t("Cena: ")}
                                {order.Price}
                                {" zł"}
                              </Typography>
                              <Button
                                style={{ width: "100%" }}
                                color="primary"
                                variant="contained"
                              >
                                {t("Śledź")}
                              </Button>
                            </div>
                          </ListItem>
                          <Divider style={{ width: "100%" }} />
                        </div>
                      ))}
                    </List>
                  </Scrollbars>
                )}
              </Box>
            </div>
          </Box>
        </Box>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
