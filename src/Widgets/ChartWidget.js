import React, { useState, useEffect } from "react";
import { Divider } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid, Alert } from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import { useNavigate } from "react-router-dom";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export default function ChartWidget(props) {
  const { width } = useWindowDimensions();
  const [type, setType] = useState("bar");
  const [XAx, setXAx] = useState("day");
  const [YAx, setYAx] = useState("profit");
  const [RawData, setRawData] = useState(props.salesDay);
  let navigate = useNavigate();

  const ChangeChartModeToBar = () => {
    setType("bar");
  };

  const ChangeChartModeToLine = () => {
    setType("line");
  };

  const ChangeChartXAxToDay = () => {
    setXAx("day");
    setRawData(props.salesDay);
  };
  const ChangeChartXAxToWeek = () => {
    setXAx("week");
    setRawData(props.salesWeek);
  };
  const ChangeChartXAxToMonth = () => {
    setXAx("month");
    setRawData(props.salesMonth);
  };
  const ChangeChartYAxToUnit = () => {
    setYAx("unit");
  };
  const ChangeChartYAxToProfit = () => {
    setYAx("profit");
  };

  return (
    <Box className="WidgetWrapper">
      <div className="ChartWidget Widget">
        <div className="WidgetName">{props.t("Wykres sprzedaży")}</div>
        <Divider />
        <Box sx={{ paddingTop: 2 }} />
        <Box
          sx={{
            backgroundColor: "background.paper",
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            paddingTop: 2
          }}
        >
          <Grid className="buttoms" container columnSpacing={3}>
            <Grid item xs={12} sm={4} md={4}>
              <Typography align="center">
                <Button
                  onClick={ChangeChartModeToBar}
                  color="primary"
                  variant="contained"
                  disabled={type === "bar" ? true : false}
                >
                  {props.t("Słupkowy")}
                </Button>
                <Button
                  onClick={ChangeChartModeToLine}
                  color="primary"
                  variant="contained"
                  disabled={type === "line" ? true : false}
                >
                  {props.t("Liniowy")}
                </Button>
              </Typography>
              <Box sx={{ m: 0.3 }} />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Typography align="center">
                <Button
                  onClick={ChangeChartXAxToDay}
                  color="primary"
                  variant="contained"
                  disabled={XAx === "day" ? true : false}
                >
                  {props.t("Dzień")}
                </Button>
                <Button
                  onClick={ChangeChartXAxToWeek}
                  color="primary"
                  variant="contained"
                  disabled={XAx === "week" ? true : false}
                >
                  {props.t("Tydzień")}
                </Button>
                <Button
                  onClick={ChangeChartXAxToMonth}
                  color="primary"
                  variant="contained"
                  disabled={XAx === "month" ? true : false}
                >
                  {props.t("Miesiąc")}
                </Button>
              </Typography>
              <Box sx={{ m: 0.3 }} />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Typography align="center">
                <Button
                  onClick={ChangeChartYAxToProfit}
                  color="primary"
                  variant="contained"
                  disabled={YAx === "profit" ? true : false}
                >
                  {props.t("Zarobek")}
                </Button>
                <Button
                  onClick={ChangeChartYAxToUnit}
                  color="primary"
                  variant="contained"
                  disabled={YAx === "unit" ? true : false}
                >
                  {props.t("Ilość")}
                </Button>
              </Typography>
              <Box sx={{ m: 0.3 }} />
            </Grid>
          </Grid>
          <Typography color="secondary">
            {RawData.length === 0 ? (
              <Box sx={{ p: 1 }}>
                <Alert variant="filled" severity="warning" sx={{ m: 2 }}>
                  {props.t("Nie ma danych")}
                </Alert>
              </Box>
            ) : type === "line" ? (
              <LineChart
                axisLabels={{ x: "Duration", y: "Profit" }}
                width={width - 40}
                height={400}
                data={RawData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={XAx} />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey={YAx}
                  stroke={props.isDark ? "#7160E8" : "#1d6b87"}
                  strokeWidth={2}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            ) : (
              <BarChart
                axisLabels={{ x: "Duration", y: "Profit" }}
                width={width - 40}
                height={400}
                data={RawData}
                margin={{
                  top: 10,
                  right: 30,
                  left: 20,
                  bottom: 5
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={XAx} />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey={YAx}
                  fill={props.isDark ? "#7160e8" : "#8bacae"}
                />
              </BarChart>
            )}
          </Typography>
        </Box>
        {RawData.length === 0 ? (
          <Button
            color="primary"
            colorpe="submit"
            variant="contained"
            fullWidth
            disabled
            sx={{
              borderBottomLeftRadius: 12,
              borderBottomRightRadius: 12
            }}
          >
            {props.t("Wiecej")}
          </Button>
        ) : (
          <Button
            color="primary"
            colorpe="submit"
            variant="contained"
            fullWidth
            sx={{
              borderBottomLeftRadius: 12,
              borderBottomRightRadius: 12
            }}
            onClick={() => {
              navigate("/dashboard/chart");
            }}
          >
            {props.t("Wiecej")}
          </Button>
        )}
      </div>
    </Box>
  );
}
