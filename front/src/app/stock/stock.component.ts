import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Articles } from '../interfaces/article';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
  faCoffee = faCoffee;

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

  ngOnInit(): void {}
}
