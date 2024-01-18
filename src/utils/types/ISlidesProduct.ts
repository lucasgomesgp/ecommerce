import { IFormatsImage } from "./IFormatsImage";

export interface ISlidesProduct {
  id: number;
  attributes: {
    width: number;
    height: number;
    url: string;
    formats: IFormatsImage;
  };
}
