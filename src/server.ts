import express from "express";
import { routes } from "./routes";
import SwaggerUi from "swagger-ui-express";
import swaggerConfig from "./swagger.json";

const PORT = 3030;
const app = express();

app.use(express.json());
app.use(routes);
app.use("/api-docs", SwaggerUi.serve, SwaggerUi.setup(swaggerConfig));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
