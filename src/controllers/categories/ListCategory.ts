import { Request, Response } from "express";
import ListCategoryUseCase from "../../useCases/categories/ListCategoryUseCase";

class ListCategoryController {
  constructor(private listCategoryUseCase: ListCategoryUseCase) {}

  handle(req: Request, res: Response): Response {
    const listAll = this.listCategoryUseCase.execute();

    return res.json(listAll);
  }
}

export default ListCategoryController;
