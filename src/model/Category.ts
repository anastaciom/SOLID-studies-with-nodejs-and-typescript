import { v4 as uuidV4 } from "uuid";

interface ICategory {
  id?: string;
  name: string;
  description: string;
  createdAt: Date;
}

class Category {
  id?: string;
  name: string;
  description: string;
  createdAt: Date;

  constructor({ createdAt, description, name, id }: ICategory) {
    if (!id) {
      this.id = uuidV4();
    }
    this.createdAt = createdAt;
    this.description = description;
    this.name = name;
  }
}

export default Category;
