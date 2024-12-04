import { Request, Response } from "express"
import { Exporter } from "../../types/types"
import { createExporter, loginExporter, sendWelcomeEmail } from "../../services/exporterService"
import exporterTemplate from "../../utils/templates/exporterRegistrationTemplate"

const createExporterController = async (req: Request, res: Response) => {
  const exporterData: Exporter = req.body
  if (!exporterData) {
    return res.status(400).json({ error: 'Invalid request body' });
  }
  try {
    const newImporter = await createExporter(exporterData)
    const { email, firstName } = exporterData.basicInformation
    sendWelcomeEmail(email, "Welcome to Terra Sourcing – Connect with Genuine Importers Today!", exporterTemplate(firstName))
    return res.status(201).json(newImporter)
  } catch(err) {
    console.log(err)
    res.status(500).json({ message: "Unable to process the request." })
  }
}

const loginExporterController = async (req: Request, res: Response) => {
  const { email, password } : { email: string, password: string } = req.body
  if(!email || !password){
    return res.status(400).json({ error: 'Invalid request body' });
  }
  try {
    const token = await loginExporter(email, password)
    if(token){
      res.json({ token })
    }
  } catch(error) {
    if (error instanceof Error) {
      res.status(401).json({ error: error.message })
    } else {
      res.status(401).json({ error: 'An unknown error occurred' });
    }
  }
}

export { createExporterController, loginExporterController }
