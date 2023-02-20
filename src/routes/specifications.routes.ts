import { Router } from "express";
import CreateSpecificationController from "../controllers/specifications/CreateSpecification";
import SpecificationRepository from "../repositories/specifications/SpecificationRepository";
import CreateSpecificationUseCase from "../useCases/specifications/CreateSpecificationUseCase";

const router = Router();

//Nesse caso para evitar ter muitas consts de classes, geralmente utilizamos um arquivo index para instanciar todas elas,
// Mas nesse caso como é apenas para estudo eu mantive dessa forma
const specificationRepository = new SpecificationRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationRepository
);

const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
);

router.post("/", (req, res) => createSpecificationController.handle(req, res));

export default router;
