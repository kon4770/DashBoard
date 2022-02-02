import { Typography, Divider, Button, Box, Grid } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@mui/material/IconButton";
import React from "react";
import {
  setOrdersDataToNotPaid,
  setOrdersDataToNotSent,
  setOrdersDataToReturns
} from "./../userInfo";
import { useNavigate } from "react-router-dom";

export default function OrdersWidget(props) {
  let navigate = useNavigate();

  const handleNotPaid = () => {
    setOrdersDataToNotPaid();
    navigate("/dashboard/orders");
  };

  const handleNotSent = () => {
    setOrdersDataToNotSent();
    navigate("/dashboard/orders");
  };

  const handleReturns = () => {
    setOrdersDataToReturns();
    navigate("/dashboard/orders");
  };

  return (
    <Box className="WidgetWrapper">
      <div className="OrdersWidget Widget">
        <div className="WidgetName">{props.t("Zamówienia")}</div>
        <Divider />
        <Box sx={{ m: 4 }} />
        <Box
          className="WidgetContentWrapper"
          sx={{
            backgroundColor: "background.paper",
            height: 230,
            borderRadius: 3
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="space-around"
            spacing={2}
          >
            <Grid item md={6} justifyContent="center">
              <Typography variant="h6" component="h6" align="center">
                {props.t("Ilość nowych zamowień:")}
              </Typography>
              <Box textAlign="center">
                <Button
                  className="no-click"
                  variant="outlined"
                  size="large"
                  color="score"
                  sx={{ mt: 5, px: 4, fontSize: 40 }}
                >
                  {props.orders.Nowe}
                </Button>
              </Box>
            </Grid>
            <Grid item md={6}>
              <Typography variant="h6" align="center">
                {props.t("Ostatni Rok")}
              </Typography>
              <Divider variant="middle" />
              <Box sx={{ p: 1 }}>
                <Grid container spacing={1}>
                  <Grid item md={10}>
                    <Button
                      color="score"
                      fullWidth
                      onClick={handleNotPaid}
                      variant="outlined"
                    >
                      {props.t("Nieopłacone")}
                      {": "}
                      {props.orders["Nieopłacone"]}
                    </Button>
                  </Grid>
                  <Grid item xs>
                    <IconButton
                      onClick={handleNotSent}
                      size="medium"
                      edge="start"
                      color="score"
                    >
                      <ChevronRightIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Box>

              <Box sx={{ p: 1 }}>
                <Grid container spacing={1}>
                  <Grid item md={10}>
                    <Button
                      color="score"
                      fullWidth
                      onClick={handleNotSent}
                      variant="outlined"
                    >
                      {props.t("Niewysłane")}
                      {": "}
                      {props.orders["Niewysłane"]}
                    </Button>
                  </Grid>
                  <Grid item xs>
                    <IconButton
                      onClick={handleNotSent}
                      size="medium"
                      edge="start"
                      color="score"
                    >
                      <ChevronRightIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Box>

              <Box sx={{ p: 1 }}>
                <Grid container spacing={1}>
                  <Grid item md={10}>
                    <Button
                      color="score"
                      fullWidth
                      onClick={handleReturns}
                      variant="outlined"
                    >
                      {props.t("Zwroty")}
                      {": "}
                      {props.orders["Zwroty"]}
                    </Button>
                  </Grid>
                  <Grid item xs>
                    <IconButton
                      onClick={handleReturns}
                      size="medium"
                      edge="start"
                      color="score"
                    >
                      <ChevronRightIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Box>
  );
}
