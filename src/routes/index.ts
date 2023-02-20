import { Router } from "express";
import categoriesRouters from "./categories.routes";
import specificationsRouters from "./specifications.routes";

const routes = Router();

routes.use("/categories", categoriesRouters);
routes.use("/specifications", specificationsRouters);

export { routes };
