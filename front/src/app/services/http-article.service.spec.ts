import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { newArticle, selectedArticles } from '../test/data/articles.fixture';

import { HttpArticleService, url } from './http-article.service';

const delay = async (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

describe('HttpArticleService', () => {
  let service: HttpArticleService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
  });

  it('should be created', () => {
    service = TestBed.inject(HttpArticleService);
    expect(service).toBeTruthy();
  });

  it('should refresh', async () => {
    service = TestBed.inject(HttpArticleService);
    const call = service.refresh();
    await delay(10);
    const req = http.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush([]);
    await call;

    expect(service).toBeTruthy();
  });

  it('should refresh in error', async () => {
    service = TestBed.inject(HttpArticleService);
    const call = service.refresh();
    await delay(10);
    const req = http.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush('', { status: 500, statusText: 'Internal Error' });

    let error;
    try {
      await call;
    } catch (e) {
      error = e;
    }
    expect(error).not.toBeUndefined();
    expect(service).toBeTruthy();
  });

  it('should add', async () => {
    service = TestBed.inject(HttpArticleService);
    const call = service.add(newArticle);
    await delay(10);
    const req = http.expectOne(url);
    expect(req.request.method).toEqual('POST');
    req.flush('', { status: 201, statusText: 'Created' });
    await call;

    expect(service).toBeTruthy();
  });

  it('should add in error', async () => {
    service = TestBed.inject(HttpArticleService);
    const call = service.add(newArticle);
    await delay(10);
    const req = http.expectOne(url);
    expect(req.request.method).toEqual('POST');
    req.flush('', { status: 500, statusText: 'Internal Error' });

    let error;
    try {
      await call;
    } catch (e) {
      error = e;
    }
    expect(error).not.toBeUndefined();
    expect(service).toBeTruthy();
  });

  it('should remove', async () => {
    service = TestBed.inject(HttpArticleService);
    const call = service.remove(selectedArticles);
    await delay(10);
    const req = http.expectOne(url);
    expect(req.request.method).toEqual('DELETE');
    req.flush('', { status: 204, statusText: 'No Content' });
    await call;

    expect(service).toBeTruthy();
  });

  it('should remove in error', async () => {
    service = TestBed.inject(HttpArticleService);
    const call = service.remove(selectedArticles);
    await delay(10);
    const req = http.expectOne(url);
    expect(req.request.method).toEqual('DELETE');
    req.flush('', { status: 500, statusText: 'Internal Error' });

    let error;
    try {
      await call;
    } catch (e) {
      error = e;
    }
    expect(error).not.toBeUndefined();
    expect(service).toBeTruthy();
  });
});
