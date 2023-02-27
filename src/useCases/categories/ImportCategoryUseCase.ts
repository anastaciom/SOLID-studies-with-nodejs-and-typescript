import fs from "fs";
import { parse as csvParse } from "csv-parse";
import { ICategoryRepository } from "../../repositories/categories/ICategoryRepository";

interface IFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
}

interface IImportCategory {
  name: string;
  description: string;
}

class ImportCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute(file: IFile): Promise<void> {
    const categories = await this.loadCategories(file);

    categories.map(({ name, description }) => {
      const existsCategory = this.categoryRepository.findByName(name);

      if (!existsCategory) {
        this.categoryRepository.create({ name, description });
      }
    });
  }

  private loadCategories({ path }: IFile): Promise<Array<IImportCategory>> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(path);
      const parseFile = csvParse({ delimiter: "," });
      const categories: Array<IImportCategory> = [];

      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const [name, description] = line;

          categories.push({ name, description });
        })
        .on("end", () => {
          resolve(categories);
        })
        .on("error", (error) => {
          reject(error);
        });
    });
  }
}

export default ImportCategoryUseCase;
