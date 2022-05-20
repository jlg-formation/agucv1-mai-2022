import { Article } from 'src/app/interfaces/article';

export const newArticle: Article = {
  name: 'Truc',
  price: 2.34,
  qty: 123,
};

export const selectedArticles = new Set<Article>([
  { id: '123', name: 'Truc', price: 1.23, qty: 123 },
]);
