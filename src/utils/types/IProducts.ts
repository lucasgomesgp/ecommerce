import { IFormatsImage } from "./IFormatsImage";
import { ISlidesProduct } from "./ISlidesProduct";

export interface IProduct {
  id: number;
  attributes: {
    title: string;
    subTitle: string;
    description: string;
    category: Array<string>;
    image?: {
      data: {
        attributes: {
          width: number;
          height: number;
          url: string;
          formats: IFormatsImage;
        };
      };
    };
    video?: {
      data: {
        attributes: {
          url: string;
          mime: string;
        };
      };
    };
    slides?: {
      data: Array<ISlidesProduct>;
    };
    price: number;
    sizes: Array<string>;
    colors: Array<{name: string, value: string}>;
    fabric: string;
    pattern: string;
    fit: string;
    neck: string;
    sleeve: string;
    style: string;
  };
}
