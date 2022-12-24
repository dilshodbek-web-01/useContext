import React, { useState } from 'react';
import Home from "./pages/Home";
import { context } from "./context";

const App = () => {

  const [data, setData] = useState({ message: "useContext" });

  return (
    <>
      <context.Provider value={ data } >

        <Home />

      </context.Provider>
    </>
  );
};

export default App;