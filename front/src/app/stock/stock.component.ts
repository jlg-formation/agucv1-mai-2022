import { Component, OnInit } from '@angular/core';
import {
  faPlus,
  faRotateRight,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
  faRotateRight = faRotateRight;
  faPlus = faPlus;
  faTrashCan = faTrashCan;

  constructor(public articleService: ArticleService) {}

  ngOnInit(): void {}

  refresh() {
    (async () => {
      try {
        await this.articleService.refresh();
      } catch (err) {
        console.log('err: ', err);
      }
    })();
  }
}
