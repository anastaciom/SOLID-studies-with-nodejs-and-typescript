import fs from "fs";
import { parse as csvParse } from "csv-parse";

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

class ImportCategoryUseCase {
  execute({ path }: IFile) {
    const stream = fs.createReadStream(path);
    const parseFile = csvParse({ delimiter: "," });

    stream.pipe(parseFile);

    parseFile.on("data", async (line) => {
      console.log(line);
    });
  }
}

export default ImportCategoryUseCase;
