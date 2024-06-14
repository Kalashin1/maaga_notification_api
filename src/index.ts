import express from "express";
require("dotenv").config();
import { AppDataSource } from "./data-source";
import NotificationRouter from "./router/notification";
import TodoRouter from "./router/todos";

import cors from "cors";
import http from "http";

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use(NotificationRouter);
app.use(TodoRouter);

app.get("/", (req: express.Request, res: express.Response) => {
  res.end("Hello World");
});

const server = http.createServer(app);

AppDataSource.initialize()
  .then(async () => {
    console.log("connected to the database");
    server.listen(PORT, () => {
      console.log(`app running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
