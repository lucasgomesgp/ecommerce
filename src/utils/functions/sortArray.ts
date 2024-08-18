import { IProduct } from "../types/IProducts";

export function sortArray(data: IProduct[]) {
  const arr = data.sort(function (objA, objB) {
    // Order BY DESC (objB- objA), BY ASC (objA-objB)
    return objB.attributes.price - objA.attributes.price;
  });
  return arr;
}
