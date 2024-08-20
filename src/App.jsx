import { useState } from "react";

import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import CardContextProvider from "./store/shopping-cart.jsx";

function App() {
  return (
    <CardContextProvider v>
      <Header />
      <Shop />
    </CardContextProvider>
  );
}

export default App;
