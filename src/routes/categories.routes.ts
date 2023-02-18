import { Router } from "express";
import CategoryRepository from "../repositories/CategoryRepository";

const router = Router();
const categoryRepository = new CategoryRepository();

router.post("/", (req, res) => {
  const { name, description } = req.body;

  const categoryAlreadyExists = categoryRepository.findByName(name);

  if (categoryAlreadyExists) {
    return res.status(400).json({ error: "Nome da categoria já existe" });
  }

  categoryRepository.create({ name, description });

  return res.status(201).send();
});

router.get("/", (_, res) => {
  const listAll = categoryRepository.list();

  return res.json(listAll);
});

export default router;
