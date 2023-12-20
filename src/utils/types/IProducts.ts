export interface IProduct {
  id: number;
  attributes: {
    title: string;
    subTitle: string;
    description: string;
    category: Array<string>;
    image: {
      data: {
        attributes: {
          width: number;
          height: number;
          url: string;
        };
      };
    };
    slides?: {
      data: [
        {
          id: number;
          attributes: {
            width: number;
            height: number;
            url: string;
          };
        }
      ];
    };
    price: number;
    sizes: Array<string>;
    colors: Array<string>;
    fabric: string;
    pattern: string;
    fit: string;
    neck: string;
    sleeve: string;
    style: string;
  };
}
