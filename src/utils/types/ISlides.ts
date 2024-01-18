import { IFormatsImage } from "./IFormatsImage";

export interface ISlides {
  data: [
    {
      id: number;
      attributes: {
        image: {
          data: {
            id: number;
            attributes: {
              url: string;
              formats: IFormatsImage;
            };
          };
        };
      };
    }
  ];
}
