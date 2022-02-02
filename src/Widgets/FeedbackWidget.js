import {
  Typography,
  Divider,
  Box,
  Grid,
  Rating,
  Tab,
  ListItem,
  Button,
  Alert
} from "@mui/material";
import React from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Scrollbars } from "react-custom-scrollbars";
import { useNavigate } from "react-router-dom";

export default function OrdersWidget(props) {
  let navigate = useNavigate();
  const [value, setValue] = React.useState("all");
  const FbWszList = props.FeedbackWszystkieDB;
  const FbPozList = props.FeedbackPozytywneDB;
  const FbNegList = props.FeedbackNegatywneDB;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="WidgetWrapper">
      <div className="OrdersWidget Widget">
        <div className="WidgetName">{props.t("Najnowsze opinie")}</div>
        <Divider />
        <Box
          className="WidgetContentWrapper"
          sx={{
            backgroundColor: "background.paper",
            height: 543,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12
          }}
        >
          {FbWszList.length > 0 ? (
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                >
                  <Tab label={props.t("Wszystkie")} value="all" />
                  <Tab label={props.t("Pozytywne")} value="positive" />
                  <Tab label={props.t("Negatywne")} value="negative" />
                </TabList>
              </Box>

              <TabPanel value="all">
                <Grid
                  container
                  direction="row"
                  justifyContent="space-around"
                  alignItems="stretch"
                >
                  <Scrollbars style={{ height: 460 }}>
                    {FbWszList.map((FbWsz) => (
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
              </TabPanel>
              <TabPanel value="positive">
                <Grid
                  container
                  direction="row"
                  justifyContent="space-around"
                  alignItems="stretch"
                >
                  <Scrollbars style={{ height: 460 }}>
                    {FbPozList.map((FbPoz) => (
                      <ListItem key={FbPoz.id}>
                        <Grid item xs={12} sm={4} md={4}>
                          <Typography>{FbPoz.nazwa}</Typography>
                          <Rating value={FbPoz.ocena} readOnly />
                        </Grid>
                        <Grid item xs={12} sm={8} md={8}>
                          <p>{FbPoz.tekst}</p>
                        </Grid>
                      </ListItem>
                    ))}
                  </Scrollbars>
                </Grid>
              </TabPanel>
              <TabPanel value="negative">
                <Grid
                  container
                  direction="row"
                  justifyContent="space-around"
                  alignItems="stretch"
                >
                  <Scrollbars style={{ height: 460 }}>
                    {FbNegList.map((FbNeg) => (
                      <ListItem key={FbNeg.id}>
                        <Grid item xs={12} sm={4} md={4}>
                          <Typography>{FbNeg.nazwa}</Typography>
                          <Rating value={FbNeg.ocena} readOnly />
                        </Grid>
                        <Grid item xs={12} sm={8} md={8}>
                          <p>{FbNeg.tekst}</p>
                        </Grid>
                      </ListItem>
                    ))}
                  </Scrollbars>
                </Grid>
              </TabPanel>
            </TabContext>
          ) : (
            <Box sx={{ pt: 2 }}>
              <Alert variant="filled" severity="warning" sx={{ mx: 2 }}>
                {props.t("Brak oceny sprzedaży!")}
              </Alert>
            </Box>
          )}
        </Box>
        {FbWszList.length > 0 ? (
          <Button
            color="primary"
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              borderBottomLeftRadius: 14,
              borderBottomRightRadius: 14
            }}
            onClick={() => {
              navigate("/dashboard/feedback");
            }}
          >
            {props.t("Wiecej")}
          </Button>
        ) : (
          <Button
            color="primary"
            type="submit"
            variant="contained"
            disabled
            fullWidth
            sx={{
              borderBottomLeftRadius: 14,
              borderBottomRightRadius: 14
            }}
            onClick={() => {
              navigate("/dashboard/feedback");
            }}
          >
            {props.t("Wiecej")}
          </Button>
        )}
      </div>
    </Box>
  );
}
