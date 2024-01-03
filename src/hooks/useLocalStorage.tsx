import { IShoppingCartItems } from "@/utils/types/IShoppingCartItems";

export function useLocalStorage() {
  let itemsStorage: IShoppingCartItems[] = [];
  try {
    const itemsSearch = localStorage.getItem("shopItems");
    if (itemsSearch) {
      itemsStorage = JSON.parse(itemsSearch);
    }
  } catch (err) {
    console.log("Error on search localStorage item");
  }
  function setItemsOnStorage(value: []| IShoppingCartItems[]) {
    localStorage.setItem("shopItems", JSON.stringify(value));
  }
  return { itemsStorage, setItemsOnStorage };
}
