export const adder = (productValue: number, productQuantity: number) => {
  const total = productValue * productQuantity;
  return total.toString().slice(0, 6);
}