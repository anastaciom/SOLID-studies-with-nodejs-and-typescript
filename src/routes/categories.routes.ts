import { Router } from "express";
import { v4 as uuidV4 } from "uuid";
const router = Router();

type TCategory = {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
};

const categories: Array<TCategory> = [];

router.post("/", (req, res) => {
  const { name, description } = req.body;
  const newCategory: TCategory = {
    id: uuidV4(),
    name,
    description,
    createdAt: new Date(),
  };

  categories.push(newCategory);

  return res.status(201).send();
});

export default router;
