import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { HttpArticleService } from './http-article.service';

describe('HttpArticleService', () => {
  let service: HttpArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
  });

  it('should be created', () => {
    service = TestBed.inject(HttpArticleService);
    expect(service).toBeTruthy();
  });
  // it('should refresh', () => {
  //   service = TestBed.inject(HttpArticleService);
  //   await service.refresh();
  //   expect(service).toBeTruthy();
  // });
});
