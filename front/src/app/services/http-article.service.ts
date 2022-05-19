import { Injectable } from '@angular/core';
import { ArticleService } from './article.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpArticleService extends ArticleService {
  constructor(private http: HttpClient) {
    super();
    console.log('instantiated http article');
  }

  override async refresh(): Promise<void> {
    await super.refresh();
    this.http.get('http://localhost:3000/api/articles').subscribe();
  }
}
