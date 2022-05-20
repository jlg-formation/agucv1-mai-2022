import { TestBed } from '@angular/core/testing';
import { articles } from '../test/data/articles.fixture';

import { ArticleService, ARTICLES_KEY } from './article.service';

describe('ArticleService', () => {
  let service: ArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created with localstorage', () => {
    localStorage.clear();
    localStorage.setItem(ARTICLES_KEY, JSON.stringify(articles));
    service = TestBed.inject(ArticleService);
    expect(service).toBeTruthy();
  });

  it('should be created without localstorage', () => {
    localStorage.clear();
    service = TestBed.inject(ArticleService);
    expect(service).toBeTruthy();
  });
});
