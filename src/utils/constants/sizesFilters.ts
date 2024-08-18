import { v4 as uuidv4 } from 'uuid';

interface SizesType {
  id: string;
  value: string;
}

export const sizesFilters: SizesType[] = [
  { id: uuidv4(), value: "XXS" },
  { id: uuidv4(), value: "XL" },
  { id: uuidv4(), value: "XS" },
  { id: uuidv4(), value: "S" },
  { id: uuidv4(), value: "M" },
  { id: uuidv4(), value: "L" },
  { id: uuidv4(), value: "XXL" },
  { id: uuidv4(), value: "3XL" },
  { id: uuidv4(), value: "4XL" },
];
