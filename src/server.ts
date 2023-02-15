import express from "express";
import categoriesRouters from "./routes/categories.routes";

const PORT = 3030;
const app = express();

app.use(express.json());
app.use("/categories", categoriesRouters);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
