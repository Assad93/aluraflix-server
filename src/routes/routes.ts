import { Express } from "express";
import videoRouter from "./VideoRouter";

const routes = (app: Express) => {
  app.route("/").get((req, res) => {
    res.json({ message: "Seja bem vindo ao aluraflix!" });
  });

  app.use(videoRouter);
};

export default routes;
