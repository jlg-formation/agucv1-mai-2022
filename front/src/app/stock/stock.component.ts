import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  faPlus,
  faRotateRight,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { Article } from '../interfaces/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
  faPlus = faPlus;
  faRotateRight = faRotateRight;
  faTrashCan = faTrashCan;
  selectedArticles = new Set<Article>();
  isRefreshing = false;
  errorMsg = '';

  constructor(public articleService: ArticleService) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    (async () => {
      try {
        this.errorMsg = '';
        this.isRefreshing = true;
        await this.articleService.refresh();
      } catch (err) {
        console.log('err: ', err);
        if (err instanceof HttpErrorResponse) {
          this.errorMsg = err.message;
        }
      } finally {
        this.isRefreshing = false;
      }
    })();
  }

  remove() {
    (async () => {
      try {
        console.log('remove');
        await this.articleService.remove(this.selectedArticles);
        this.selectedArticles.clear();
      } catch (err) {
        console.log('err: ', err);
      }
    })();
  }

  toggle(a: Article) {
    console.log('a: ', a);
    if (this.selectedArticles.has(a)) {
      this.selectedArticles.delete(a);
      return;
    }
    this.selectedArticles.add(a);
  }
}
