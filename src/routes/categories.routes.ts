import { Router } from "express";
import CreateCategoryController from "../controllers/categories/CreateCategory";
import ListCategoryController from "../controllers/categories/ListCategory";
import CategoryRepository from "../repositories/categories/CategoryRepository";
import CreateCategoryUseCase from "../useCases/categories/CreateCategoryUseCase";
import ListCategoryUseCase from "../useCases/categories/ListCategoryUseCase";

const router = Router();
//Nesse caso para evitar ter muitas consts de classes, geralmente utilizamos um arquivo index para instanciar todas elas,
// Mas nesse caso como é apenas para estudo eu mantive dessa forma

const categoryRepository = new CategoryRepository();
const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);
const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);
const listCategoryUseCase = new ListCategoryUseCase(categoryRepository);

const listCategoryController = new ListCategoryController(listCategoryUseCase);

router.post("/", (req, res) => createCategoryController.handle(req, res));

router.get("/", (_, res) => listCategoryController.handle(_, res));

export default router;
