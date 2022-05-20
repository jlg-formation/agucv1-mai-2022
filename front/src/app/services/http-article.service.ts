import { Injectable } from '@angular/core';
import { ArticleService } from './article.service';
import { HttpClient } from '@angular/common/http';
import { Article, Articles } from '../interfaces/article';
import { delay, lastValueFrom } from 'rxjs';

export const url = 'http://localhost:3000/api/articles';

@Injectable({
  providedIn: 'root',
})
export class HttpArticleService extends ArticleService {
  constructor(private http: HttpClient) {
    super();
    console.log('instantiated http article');
  }

  override async refresh(): Promise<void> {
    try {
      await super.refresh();
      const articles = await lastValueFrom(
        this.http.get<Articles>(url).pipe(delay(5))
      );
      console.log('articles: ', articles);
      this.articles = articles;
      this.save();
    } catch (err) {
      console.error('err: ', err);
      throw err;
    }
  }

  override async add(article: Article): Promise<void> {
    try {
      await super.add(article);
      await lastValueFrom(this.http.post<void>(url, article).pipe(delay(10)));
      console.log('added on back with success');
    } catch (err) {
      console.log('err: ', err);
      throw err;
    }
  }

  override async remove(selectedArticles: Set<Article>): Promise<void> {
    await super.remove(selectedArticles);
    const ids = [...selectedArticles].map((a) => a.id);
    this.http
      .delete<void>(url, {
        body: ids,
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .subscribe({
        next: () => {
          console.log('deleted on back with success');
        },
        complete: () => {
          console.log('complete');
        },
        error: (err) => {
          console.log('err: ', err);
        },
      });
  }
}
