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
