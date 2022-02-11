import React from "react";
import Header from "./Header";
import TapControl from "./TapControl";

function App() {
  const styles = {
    backgroundColor: "#6570bc",
    height: "100vh",
  };
  return (
    <div style={styles}>
      <Header />
      <TapControl />
    </div>
  );
}

export default App;
