import { IWishItems } from "@/utils/types/IWishItems";

export function useWishStorage() {
  function getWishItemsOnStorage() {
    try {
      if (typeof window !== "undefined") {
        const itemsSearch = localStorage.getItem("wishItems");
        if (itemsSearch) {
          return JSON.parse(itemsSearch);
        }
      }
    } catch (err) {
      console.log("Error on search localStorage item", err);
    }
  }
  let wishItemsOnStorage: IWishItems[] = getWishItemsOnStorage();

  function setWishItemsOnStorage(value: [] | IWishItems[]) {
    localStorage.setItem("wishItems", JSON.stringify(value));
  }
  return { wishItemsOnStorage, getWishItemsOnStorage, setWishItemsOnStorage };
}
