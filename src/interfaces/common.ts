export type TypographyTag = "h3" | "p" | "span";

export interface CardData {
    author: string;
    createdAt: string;
    id: string;
    liked: boolean;
    likesCount: number;
    picture: string;
    price: number;
    title: string;
    updatedAt: string;
}

export interface ImageConnection {
    images: {
      edges: {
        node: CardData;
      }[];
    };
  }
  