import {
  Typography,
  Divider,
  Box,
  Grid,
  Rating,
  Button,
  Alert
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function OrdersWidget(props) {
  const navigate = useNavigate();

  return (
    <Box className="WidgetWrapper">
      <div className="OrdersWidget Widget">
        <div className="WidgetName">{props.t("Jakość sprzedaży")}</div>
        <Divider />

        <Box
          className="WidgetContentWrapper"
          sx={{
            backgroundColor: "background.paper",
            height: 230,
            pt: 1,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12
          }}
        >
          {props.score > 0 ? (
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="space-around"
              spacing={0}
            >
              <Grid item md={6}>
                <Typography variant="h6" component="h6" align="center">
                  {props.t("Twoje pukty:")}
                </Typography>
                <Box textAlign="center" sx={{ m: 2 }}>
                  <Button
                    className="no-click"
                    variant="outlined"
                    size="large"
                    sx={{ px: 2, fontSize: 40 }}
                    color="score"
                  >
                    {props.score}
                    {"/100"}
                  </Button>
                </Box>
                <Typography variant="h6" component="h6" align="center">
                  {props.t("Jesteś")} {props.t(`${props.rating.name}`)}{" "}
                  {props.t("sprzedawcą")}
                </Typography>
                <Box textAlign="center">
                  <Rating value={props.rating.value} size="big" readOnly />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" component="h6" align="center">
                  {props.t("Rozwijaj się poprzez:")}
                </Typography>
                {props.field.map((field) => (
                  <Box key={field.id} textAlign="center" sx={{ p: 1 }}>
                    {props.t(field.nazwa)}
                    <span> </span>
                    <Rating value={field.ocena} readOnly />
                  </Box>
                ))}
              </Grid>
            </Grid>
          ) : (
            <Alert variant="filled" severity="warning" sx={{ m: 2 }}>
              {props.t("Brak oceny sprzedaży!")}
            </Alert>
          )}
        </Box>
        {props.score > 0 ? (
          <Button
            color="primary"
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              borderBottomLeftRadius: 12,
              borderBottomRightRadius: 12
            }}
            onClick={() => {
              navigate("/dashboard/salesQ");
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
              borderBottomLeftRadius: 12,
              borderBottomRightRadius: 12
            }}
            onClick={() => {
              navigate("/dashboard/salesQ");
            }}
          >
            {props.t("Wiecej")}
          </Button>
        )}
      </div>
    </Box>
  );
}
