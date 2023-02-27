import { Router } from "express";
import multer from "multer";
import CreateCategoryController from "../controllers/categories/CreateCategory";
import ImportCategoryController from "../controllers/categories/ImportCategory";
import ListCategoryController from "../controllers/categories/ListCategory";
import CategoryRepository from "../repositories/categories/CategoryRepository";
import CreateCategoryUseCase from "../useCases/categories/CreateCategoryUseCase";
import ImportCategoryUseCase from "../useCases/categories/ImportCategoryUseCase";
import ListCategoryUseCase from "../useCases/categories/ListCategoryUseCase";

var upload = multer({ dest: "./tmp" });

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
const importCategoryUseCase = new ImportCategoryUseCase(categoryRepository);
const importCategoryController = new ImportCategoryController(
  importCategoryUseCase
);

router.post("/", (req, res) => createCategoryController.handle(req, res));

router.get("/", (_, res) => listCategoryController.handle(_, res));

router.post("/import", upload.single("file"), (req, res) =>
  importCategoryController.handle(req, res)
);

export default router;
