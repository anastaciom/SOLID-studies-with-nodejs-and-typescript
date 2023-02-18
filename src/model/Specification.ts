import { v4 as uuidV4 } from "uuid";

interface ISpecification {
  id?: string;
  name: string;
  description: string;
  createdAt: Date;
}

class Specification {
  id?: string;
  name: string;
  description: string;
  createdAt: Date;

  constructor({ createdAt, description, name, id }: ISpecification) {
    if (!id) {
      this.id = uuidV4();
    }
    this.createdAt = createdAt;
    this.description = description;
    this.name = name;
  }
}

export default Specification;
