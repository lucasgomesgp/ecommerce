import { IFormatsImage } from "./IFormatsImage";

export interface IImagesProductFormatted {
    id: number;
    idSlide: number;
    attributes: {
      width: number;
      height: number;
      url: string;
      formats: IFormatsImage;
    };
  }
  