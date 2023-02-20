import Category from "../../model/Category";
import { ICategoryRepository } from "../../repositories/categories/ICategoryRepository";

class ListCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  execute(): Array<Category> {
    return this.categoryRepository.list();
  }
}

export default ListCategoryUseCase;
