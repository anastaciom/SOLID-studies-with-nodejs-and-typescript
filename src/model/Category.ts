import { v4 as uuidV4 } from "uuid";

type TCategory = {
  id?: string;
  name: string;
  description: string;
  createdAt: Date;
};

class Category {
  id?: string;
  name: string;
  description: string;
  createdAt: Date;

  constructor({ createdAt, description, name, id }: TCategory) {
    if (!id) {
      this.id = uuidV4();
    }
    this.createdAt = createdAt;
    this.description = description;
    this.name = name;
  }
}

export { Category, TCategory };
