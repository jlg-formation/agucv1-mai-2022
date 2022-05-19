import { Injectable } from '@angular/core';
import { Article, Articles } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Articles = [
    {
      name: 'Tournevis cruciforme',
      price: 2.34,
      qty: 103,
    },
    {
      name: 'Pelle',
      price: 6,
      qty: 15,
    },
  ];

  constructor() {}

  async add(article: Article) {
    this.articles.push(article);
  }
}
