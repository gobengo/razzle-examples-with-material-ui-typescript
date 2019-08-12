import { indigo, orange } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// Configure Material UI theme
const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: orange,
    type: "light",
  },
});

export default theme;
