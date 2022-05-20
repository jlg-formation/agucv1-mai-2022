import { Injectable } from '@angular/core';
import { Article, Articles } from '../interfaces/article';

export const ARTICLES_KEY = 'articles';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Articles = this.getArticles();

  constructor() {}

  async add(article: Article) {
    this.articles.push(article);
    this.save();
  }

  getArticles(): Articles {
    const str = localStorage.getItem(ARTICLES_KEY);
    if (str === null) {
      return [
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
    }
    return JSON.parse(str);
  }

  async refresh() {
    this.articles = this.getArticles();
  }

  async remove(selectedArticles: Set<Article>) {
    this.articles = this.articles.filter((a) => !selectedArticles.has(a));
    this.save();
  }

  save() {
    localStorage.setItem(ARTICLES_KEY, JSON.stringify(this.articles));
  }
}
