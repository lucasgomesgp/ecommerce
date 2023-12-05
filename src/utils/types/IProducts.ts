interface IProduct {
    id: number;
    attributes: {
      title: string;
      description: string;
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
  