import { Router, json } from "express";
import { Article, Articles } from "./interfaces/article";

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

app.use(json());

app.post("/articles", (req, res) => {
  try {
    const newArticle = req.body as Article;
    console.log("newArticle: ", newArticle);
    articles.push(newArticle);
    res.status(201).end();
  } catch (err) {
    console.log("err: ", err);
    res.status(500).end();
  }
});

export const api = app;
