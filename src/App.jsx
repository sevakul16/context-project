import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import CardContextProvider from "./store/shopping-cart.jsx";

function App() {
  return (
    <CardContextProvider>
      <Header />
      <Shop />
    </CardContextProvider>
  );
}

export default App;
