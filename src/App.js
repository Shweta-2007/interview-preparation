import React from "react";
import Header from "./Header";

const App = () => {
  const country = "India";

  return (
    <div>
      <Header country={country} />
    </div>
  );
};

export default App;
