import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraBaseProvider } from "@chakra-ui/react";
import Theme from "./theme.js";
import GlobalState from "./context/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalState>
    <ChakraBaseProvider theme={Theme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChakraBaseProvider>
  </GlobalState>
);
