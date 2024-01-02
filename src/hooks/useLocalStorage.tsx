import { IShoppingCartItems } from "@/utils/types/IShoppingCartItems";

export function useLocalStorage() {
  let itemsStorage;
  try {
    const itemsSearch = localStorage.getItem("shopItems");
    if (itemsSearch) {
      itemsStorage = JSON.parse(itemsSearch);
    }
  } catch (err) {
    console.log("Error on search localStorage item");
  } 
  function setItemsOnStorage(value: Array<IShoppingCartItems>){
    console.log(value)
    localStorage.setItem("shopItems",JSON.stringify(value));
  }
  return{itemsStorage, setItemsOnStorage}
}
