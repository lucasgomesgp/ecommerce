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
            };
          };
        };
      };
    }
  ];
}
