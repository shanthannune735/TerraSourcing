import { Request, Response } from "express";
import { createImporter, loginImporter, sendImporterWelcomeEmail } from "../../services/importerService"
import { Importer } from "../../types/types";
import { sendWelcomeEmail } from "../../services/exporterService";
import importerTemplate from "../../utils/templates/importerRegistrationTemplate";

const createImporterController = async (req: Request, res: Response) => {
    const importerDetails: Importer = req.body
    if (!importerDetails) {
      return res.status(400).json({ error: 'Invalid request body' });
    }
    try {
      const newImporter = await createImporter(importerDetails)
      sendWelcomeEmail(importerDetails.companyInformation?.email || "", "Welcome to Terra Sourcing – Your Gateway to Verified Exporter Connections", importerTemplate(importerDetails.basicInformation?.firstName || ""))
      return res.status(201).json(newImporter)
    } catch(err){
      return res.status(400).json({ error: "Unable to process the request!" })
    }
}

const loginImporterController = async (req: Request, res: Response) => {
  const { email, password } : { email: string, password: string } = req.body
  if(!email || !password){
    return res.status(400).json({ error: 'Invalid request body' });
  }
  try {
    const token = await loginImporter(email, password)
    if(token){
      res.json({ token })
    }
  } catch(error) {
    if (error instanceof Error) {
      res.status(401).json({ error: error.message })
    } else {
      res.status(401).json({ error: 'Unable to process the request!' });
    }
  }
}

export { createImporterController, loginImporterController }
