import { Router } from "express";
import CategoryRepository from "../repositories/CategoryRepository";

const router = Router();
const categoryRepository = new CategoryRepository();

router.post("/", (req, res) => {
  const { name, description } = req.body;

  categoryRepository.create({ name, description });

  return res.status(201).send();
});

export default router;
