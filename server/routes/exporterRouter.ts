import * as express from "express"
import { createExporterController, loginExporterController } from "../controllers/Exporter/exporterCtrl"

const exporterRouter = express.Router()

exporterRouter.post("/users", createExporterController)
exporterRouter.post("/login", loginExporterController)

export default exporterRouter
