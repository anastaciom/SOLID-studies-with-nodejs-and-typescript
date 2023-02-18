import Specification from "../../model/Specification";

interface ICreateSpeficationDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  create({ name, description }: ICreateSpeficationDTO): void;
  findByName(name: string): Specification;
}

export { ISpecificationRepository, ICreateSpeficationDTO };
