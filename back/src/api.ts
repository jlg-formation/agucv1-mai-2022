import { Router, json } from "express";
import { Article, Articles } from "./interfaces/article";
import { v4 as uuidv4 } from "uuid";

let articles: Articles = [
  { id: "123", name: "Pinceaux", price: 4.5, qty: 100 },
  { id: "asd", name: "Marteau", price: 2.5, qty: 40 },
];

function generateId(): string {
  return uuidv4();
}

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
    newArticle.id = generateId();
    console.log("newArticle: ", newArticle);
    articles.push(newArticle);
    res.status(201).end();
  } catch (err) {
    console.log("err: ", err);
    res.status(500).end();
  }
});

app.delete("/articles", (req, res) => {
  try {
    const ids = req.body as string[];
    console.log("ids: ", ids);
    articles = articles.filter((a) => !ids.includes(a.id));
    res.status(204).end();
  } catch (err) {
    console.log("err: ", err);
    res.status(500).end();
  }
});

export const api = app;
