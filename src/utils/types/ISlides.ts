import { IFormatsImage } from "./IFormatsImage";

export interface ISlides {
  data: [
    {
      id: number;
      attributes: {
        title: string;
        centralTitle: string;
        downTitle: string;
        link: string;
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
