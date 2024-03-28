import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 8003;
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server Shopping");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
