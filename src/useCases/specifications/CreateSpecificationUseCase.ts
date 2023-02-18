import { ISpecificationRepository } from "../../repositories/specifications/ISpecificationRepository";

interface ICreateSpecificationRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute({ name, description }: ICreateSpecificationRequest) {
    const isAlreadyExists = this.specificationRepository.findByName(name);

    if (isAlreadyExists) {
      throw new Error("Nome da especificação já existe.");
    }

    this.specificationRepository.create({ name, description });
  }
}

export default CreateSpecificationUseCase;
