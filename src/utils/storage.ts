import { Coffee } from "../interfaces";

export const saveCartInStorage = (cart: Coffee[]) => {
  localStorage.setItem("cart", JSON.stringify(cart));
}