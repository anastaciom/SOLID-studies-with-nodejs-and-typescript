import { Request, Response } from "express";
import ImportCategoryUseCase from "../../useCases/categories/ImportCategoryUseCase";

class ImportCategoryController {
  constructor(private ImportCategoryUseCase: ImportCategoryUseCase) {}

  handle(req: Request, res: Response): Response {
    const { file } = req;

    this.ImportCategoryUseCase.execute(file);

    return res.send();
  }
}

export default ImportCategoryController;
