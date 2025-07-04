import { IProduct } from "../types/IProducts";

export function searchInput(data: IProduct[], category: string, query: string) {
  const value =
    data?.length >= 1 && !query
      ? data.filter(({ attributes }) => attributes.category.includes(category))
      : data
          .filter(({ attributes }) => attributes.category.includes(category))
          .filter((currentData) =>
            currentData.attributes.title.toLowerCase().includes(query)
          );
  return value || [];
}
