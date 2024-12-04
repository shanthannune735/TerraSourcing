import * as express from "express";
import * as dotenv from "dotenv";
import * as morgan from "morgan";
const cors = require('cors');
import importerRouter from "./routes/importerRouter";
import exporterRouter from "./routes/exporterRouter";

// Configure
const app = express();

// Use CORS with specific origin
app.use(cors({
  origin: 'https://terrasourcing.com',
  credentials: true
}));

app.use(express.json());

dotenv.config();
app.use(morgan("dev"));

// Constants
const PORT = process.env.PORT || 5005;


app.use("/api/importer", importerRouter);
app.use("/api/exporter", exporterRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
