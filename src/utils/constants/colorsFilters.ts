import { v4 as uuidv4 } from 'uuid';

interface ColorsType {
  id: string;
  name: string;
  color: string;
}

export const colorsFilters: ColorsType[] = [
  { id: uuidv4(), color: "#8434E1", name: "Purple" },
  { id: uuidv4(), color: "#252525", name: "Black" },
  { id: uuidv4(), color: "#F35528", name: "Red" },
  { id: uuidv4(), color: "#F16F2B", name: "Orange" },
  { id: uuidv4(), color: "#345EFF", name: "Navy" },
  { id: uuidv4(), color: "#F4F1F1", name: "White" },
  { id: uuidv4(), color: "#D67E3B", name: "Broom" },
  { id: uuidv4(), color: "#48BC4E", name: "Green" },
  { id: uuidv4(), color: "#FDC761", name: "Yellow" },
  { id: uuidv4(), color: "#E4E5E8", name: "Grey" },
  { id: uuidv4(), color: "#E08D9D", name: "Pink" },
  { id: uuidv4(), color: "#3FDEFF", name: "Blue" },
];
