export type Routes = {
  title: string;
  href: string;
};

export type Category = {
  categoryId: string;
  categoryLabel: string;
  billboard: Billboard;
};

export type Billboard = {
  billboardId: string;
  billboardLabel: string;
  imageUrl: string;
};

export type Product = {
  productId: string;
  category: Category;
  productName: string;
  price: string;
  size: Size;
  color: Color;
  images: string[];
};

export type Size = {
  id: string;
  name: string;
  value: string;
};

export type Color = {
  id: string;
  name: string;
  value: string;
};
