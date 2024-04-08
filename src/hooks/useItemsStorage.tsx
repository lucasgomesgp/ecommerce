import { IShoppingCartItems } from "@/utils/types/IShoppingCartItems";

export function useItemsStorage() {
  function getItemsOnLocalStorage() {
    try {
      if (typeof window !== "undefined") {
        const itemsSearch = localStorage.getItem("shopItems");
        if (itemsSearch) {
          return JSON.parse(itemsSearch);
        }
      }
    } catch (err) {
      console.log("Error on search localStorage item");
    }
  }
  let itemsStorage: IShoppingCartItems[] = getItemsOnLocalStorage();

  function setItemsOnStorage(value: [] | IShoppingCartItems[]) {
    localStorage.setItem("shopItems", JSON.stringify(value));
  }
  return { itemsStorage, getItemsOnLocalStorage, setItemsOnStorage };
}
