import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

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
});
