import { Cart } from "../interfaces";

export const saveCartInStorage = (cart: Cart[]) => {
  localStorage.setItem("@coffee-delivery:cart", JSON.stringify(cart));
}