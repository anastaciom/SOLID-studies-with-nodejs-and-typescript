import { Category, TCategory } from "../model/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoryRepository {
  private categories: Array<TCategory>;

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const newCategory = new Category({
      name,
      description,
      createdAt: new Date(),
    });

    this.categories.push(newCategory);
  }
}

export default CategoryRepository;
