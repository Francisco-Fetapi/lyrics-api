import React from "react";
import Theme from "./core/Theme";
import Routes from "./routes";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <Theme>
      <GlobalStyles />
      <Routes />
    </Theme>
  );
}

export default App;
