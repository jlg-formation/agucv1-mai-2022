import { Article } from 'src/app/interfaces/article';

export const newArticle: Article = {
  name: 'Truc',
  price: 2.34,
  qty: 123,
};

export const selectedArticles = new Set<Article>([
  { id: '123', name: 'Truc', price: 1.23, qty: 123 },
]);

export const articles = [
  {
    name: 'Tournevis',
    price: 2.34,
    qty: 103,
  },
  {
    name: 'Pelle',
    price: 6,
    qty: 15,
  },
];
