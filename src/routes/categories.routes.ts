import { Router } from "express";
import CategoryRepository from "../repositories/CategoryRepository";
import CreateCategoryUseCase from "../useCases/CreateCategoryUseCase";

const router = Router();
const categoryRepository = new CategoryRepository();
const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);

router.post("/", (req, res) => {
  const { name, description } = req.body;

  createCategoryUseCase.execute({ name, description });

  return res.status(201).send();
});

router.get("/", (_, res) => {
  const listAll = categoryRepository.list();

  return res.json(listAll);
});

export default router;
