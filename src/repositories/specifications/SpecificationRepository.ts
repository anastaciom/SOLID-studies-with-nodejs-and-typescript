import Specification from "../../model/Specification";
import {
  ICreateSpeficationDTO,
  ISpecificationRepository,
} from "./ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
  private specifications: Array<Specification>;

  constructor() {
    this.specifications = [];
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );

    return specification;
  }

  create({ name, description }: ICreateSpeficationDTO): void {
    const newSpecification = new Specification({
      name,
      description,
      createdAt: new Date(),
    });

    this.specifications.push(newSpecification);
  }
}

export default SpecificationRepository;
