import { Category } from "../model/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoryRepository {
  private categories: Array<Category>;

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

  list(): Array<Category> {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name);

    return category;
  }
}

export default CategoryRepository;
