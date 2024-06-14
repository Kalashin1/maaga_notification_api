import "reflect-metadata";
import { DataSource } from "typeorm";
import { Notification } from "./entity/notification";
import { Todo } from "./entity/todo";
import dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "mongodb",
  url: process.env.DB_URL,
  synchronize: true,
  logging: false,
  entities: [Notification, Todo],
  migrations: [],
  subscribers: [],
});
