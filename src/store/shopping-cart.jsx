import { createContext } from "react";

export const CardContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});
