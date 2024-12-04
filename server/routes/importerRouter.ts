import * as express from "express";
import { createImporterController, loginImporterController } from "../controllers/Importer/importerCtrl";

const importerRouter = express.Router();

importerRouter.post("/users", createImporterController);
importerRouter.post("/login", loginImporterController);

export default importerRouter
