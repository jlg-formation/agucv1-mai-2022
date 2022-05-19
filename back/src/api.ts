import { Router } from "express";
import { Articles } from "./interfaces/article";

const articles: Articles = [
  { name: "Pinceaux", price: 4.5, qty: 100 },
  { name: "Marteau", price: 2.5, qty: 40 },
];

const app = Router();

app.get("/date", (req, res) => {
  res.json({
    date: new Date(),
  });
});

app.get("/articles", (req, res) => {
  res.json(articles);
});

export const api = app;
