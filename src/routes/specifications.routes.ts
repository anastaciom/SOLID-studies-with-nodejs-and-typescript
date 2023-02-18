import { Router } from "express";
import SpecificationRepository from "../repositories/specifications/SpecificationRepository";
import CreateSpecificationUseCase from "../useCases/specifications/CreateSpecificationUseCase";

const router = Router();

const specificationRepository = new SpecificationRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationRepository
);

router.post("/", (req, res) => {
  const { name, description } = req.body;

  createSpecificationUseCase.execute({ name, description });

  res.status(201).send();
});

export default router;
