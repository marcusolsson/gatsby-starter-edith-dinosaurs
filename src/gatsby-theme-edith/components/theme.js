import { createMuiTheme } from "@material-ui/core/styles"

export default theme =>
  createMuiTheme({
    ...theme,
    appBar: {
      transparent: false,
    },
    palette: {
      primary: {
        main: "rgb(104, 79, 248)",
      },
    },
    props: {
      ...theme.props,
      MuiButtonBase: {
        disableRipple: true,
      },
      MuiChip: {
        color: "primary",
      },
    },
    shape: {
      ...theme.shape,
      borderRadius: 18,
    },
    typography: {
      ...theme.typography,
      fontFamily: [
        "Avenir",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  })
