import express from "express";
import categoriesRouters from "./routes/categories.routes";
import specificationsRouters from "./routes/specifications.routes";

const PORT = 3030;
const app = express();

app.use(express.json());
app.use("/categories", categoriesRouters);
app.use("/specifications", specificationsRouters);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
