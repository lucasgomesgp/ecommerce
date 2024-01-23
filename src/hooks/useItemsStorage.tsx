import { IShoppingCartItems } from "@/utils/types/IShoppingCartItems";
import { IWishItems } from "@/utils/types/IWishItems";

export function useItemsStorage() {
  function getItemsOnLocalStorage(){
    try {
      const itemsSearch = localStorage.getItem("shopItems");
      if (itemsSearch) {
        return JSON.parse(itemsSearch);
      }
    } catch (err) {
      console.log("Error on search localStorage item", err);
    }
  }
  let itemsStorage: IShoppingCartItems[]  = getItemsOnLocalStorage();
  
  function setItemsOnStorage(value: [] | IShoppingCartItems[]) {
    localStorage.setItem("shopItems", JSON.stringify(value));
  }
  return { itemsStorage, getItemsOnLocalStorage, setItemsOnStorage };
}
