import React from "react";
import SignUp from "./components/SignUp";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ErrorPopup from "./components/ErrorPopup";
import Appbar from "./components/Appbar";
import { Container } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#84028E",
    },
    secondary: {
      main: "#069BBD",
    },
    terciary: {
      main: "#4B5498",
    },
    background: {
      default: "#16153C",
    },
  },
});

// const colors = [
//   "#84028E",
//   "#16153C",
//   "#851EA2",
//   "#8F76AF",
//   "#4B5498",
//   "#069BBD",
// ];

function App() {
  const [state, setState] = React.useState({
    errorPopup: false,
    errorMessage: null,
    succesFlag: false,
  });

  const handleErrorPopupOpen = (errMsg) => {
    setState({ ...state, errorPopup: true, errorMessage: errMsg });
  };

  const handleErrorPopupClose = () => {
    setState({ ...state, errorPopup: false });
  };

  //TODO: sesion + enviar mail de verificacion
  const handleSuccessSignUp = () => {
    setState({ ...state, succesFlag: true });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container class="MainPage">
        <Appbar></Appbar>
        {/*TODO: Signup Handler*/}
        {state.signUp == null ? (
          <SignUp
            onError={handleErrorPopupOpen}
            onSuccess={handleSuccessSignUp}
          />
        ) : null}
      </Container>

      {/* <Button variant="outlined" color="primary" onClick={handleErrorPopupOpen}>State</Button> */}
      {state.errorPopup ? (
        <ErrorPopup
          onClose={handleErrorPopupClose}
          errMsg={state.errorMessage}
        />
      ) : null}
    </ThemeProvider>
  );
}
export default App;
