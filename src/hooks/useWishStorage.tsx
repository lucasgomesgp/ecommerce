import { IWishItems } from "@/utils/types/IWishItems";

export function useWishStorage() {
  function getItemsOnLocalStorage(){
    try {
      const itemsSearch = localStorage.getItem("wishItems");
      if (itemsSearch) {
        return JSON.parse(itemsSearch);
      }
    } catch (err) {
      console.log("Error on search localStorage item", err);
    }
  }
  let itemsStorage: IWishItems[] = getItemsOnLocalStorage();
  
  function setItemsOnStorage(value: [] | IWishItems[]) {
    localStorage.setItem("wishItems", JSON.stringify(value));
  }
  return { itemsStorage, getItemsOnLocalStorage, setItemsOnStorage };
}
