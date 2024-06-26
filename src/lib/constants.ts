import { Billboard, Category, Size, Product, Color } from "./types";

export const BILLBOARDS: Billboard[] = [
  {
    billboardId: "billboard-001",
    billboardLabel: "Summer Sale",
    imageUrl:
      "https://utfs.io/f/bda6cc49-e3a7-4496-b34a-917a02c83aa9-mi9bnt.png",
  },
  {
    billboardId: "billboard-002",
    billboardLabel: "Winter Collection",
    imageUrl: "http://example.com/winter-collection.jpg",
  },
];

export const CATEGORIES: Category[] = [
  {
    categoryId: "category-001",
    categoryLabel: "Clothing",
    billboard: BILLBOARDS[0],
  },
  {
    categoryId: "category-002",
    categoryLabel: "Footwear",
    billboard: BILLBOARDS[1],
  },
];

export const SIZES: Size[] = [
  {
    sizeId: "size-001",
    name: "Small",
    value: "S",
  },
  {
    sizeId: "size-002",
    name: "Medium",
    value: "M",
  },
  {
    sizeId: "size-003",
    name: "Large",
    value: "L",
  },
];

const COLORS: Color[] = [
  {
    colorId: "color-001",
    name: "Red",
    value: "#FF0000",
  },
  {
    colorId: "color-002",
    name: "Blue",
    value: "#0000FF",
  },
  {
    colorId: "color-003",
    name: "Green",
    value: "#00FF00",
  },
];

export const PRODUCTS: Product[] = [
  {
    productId: "product-001",
    category: CATEGORIES[0],
    productName: "Summer T-Shirt",
    price: "19.99",
    size: SIZES[1],
    color: COLORS[0],
    Images: [
      "http://example.com/products/tshirt-red-1.jpg",
      "http://example.com/products/tshirt-red-2.jpg",
    ],
  },
  {
    productId: "product-002",
    category: CATEGORIES[1],
    productName: "Winter Boots",
    price: "49.99",
    size: SIZES[2],
    color: COLORS[1],
    Images: [
      "http://example.com/products/boots-blue-1.jpg",
      "http://example.com/products/boots-blue-2.jpg",
    ],
  },
  {
    productId: "product-003",
    category: CATEGORIES[0],
    productName: "Green Hoodie",
    price: "39.99",
    size: SIZES[0],
    color: COLORS[2],
    Images: [
      "http://example.com/products/hoodie-green-1.jpg",
      "http://example.com/products/hoodie-green-2.jpg",
    ],
  },
  {
    productId: "product-004",
    category: CATEGORIES[1],
    productName: "Casual Sneakers",
    price: "59.99",
    size: SIZES[1],
    color: COLORS[0],
    Images: [
      "http://example.com/products/sneakers-red-1.jpg",
      "http://example.com/products/sneakers-red-2.jpg",
    ],
  },
];
