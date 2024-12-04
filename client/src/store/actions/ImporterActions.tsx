import { ImporterDetails } from "../../types/types"

const updateImporterName = (data: ImporterDetails) => {
  return {
    type: 'UPDATE_COMPANYDETAILS',
    payload: data
  }
}

export { updateImporterName }
