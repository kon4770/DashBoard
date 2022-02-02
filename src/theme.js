import { createTheme } from "@mui/material/styles";

export var themeMode = "light";

function getTheme(theme) {
  if (themeMode !== theme) {
    themeMode = theme;
    if (themeMode === "dark") {
      return createTheme(createThemeDark(themeMode));
    } else {
      return createTheme(createThemeLight(themeMode));
    }
  }
  if (theme === "dark") {
    return createTheme(createThemeDark(theme));
  } else {
    return createTheme(createThemeLight(theme));
  }
}

const createThemeDark = (mode) => ({
  palette: {
    ...mode,
    primary: {
      main: "#7160e8"
    },
    secondary: {
      main: "#4b2c8e"
    },
    navBar: {
      main: "#7160E8"
    },
    navBar2: {
      main: "#111111"
    },
    iconCol: {
      main: "#1F1F1F"
    },
    background: {
      default: "#1F1F1F",
      paper: "#3D3D3D"
    },
    info: {
      main: "#F1F2F6"
    },
    text: {
      primary: "#F1F2F6",
      secondary: "#cfcdc8", //color tekstu w recent feedback i login
      disabled: "#F1F2F6",
      icon: "#F1F2F6"
    },
    divider: "#7160e8",
    action: {
      disabled: "#7160e8"
    },
    score: {
      main: "#7160e8"
    },
    warning: {
      main: "#7160e8",
      light: "#7160e8",
      dark: "#7160e8"
    }
  }
});

const createThemeLight = (mode) => ({
  palette: {
    ...mode,
    primary: {
      main: "#8bacae"
    },
    secondary: {
      main: "#1d6b87",
      light: "#FFFFFF"
    },
    navBar: {
      main: "#8BACAE"
    },
    navBar2: {
      main: "#111111"
    },
    iconCol: {
      main: "#f1f2f6"
    },
    info: {
      main: "#1f1f1f"
    },
    error: {
      main: "#df0768"
    },
    success: {
      main: "#238636"
    },
    background: {
      default: "#f1f2f6",
      paper: "#C8D9D6"
    },
    text: {
      primary: "#1f1f1f"
    },
    divider: "#8bacae",
    score: {
      main: "#1d6b87"
    },
    warning: {
      main: "#1d6b87",
      light: "#1d6b87",
      dark: "#1d6b87"
    }
  }
});

export default getTheme;
