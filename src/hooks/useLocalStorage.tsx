import { IShoppingCartItems } from "@/utils/types/IShoppingCartItems";

export function useLocalStorage(name: string) {
  function getItemsOnLocalStorage(){
    try {
      const itemsSearch = localStorage.getItem(name);
      if (itemsSearch) {
        return JSON.parse(itemsSearch);
      }
    } catch (err) {
      console.log("Error on search localStorage item", err);
    }
  }
  let itemsStorage: IShoppingCartItems[] = getItemsOnLocalStorage();
  
  function setItemsOnStorage(value: []| IShoppingCartItems[]) {
    localStorage.setItem(name, JSON.stringify(value));
  }
  return { itemsStorage, getItemsOnLocalStorage, setItemsOnStorage };
}
