import { ExporterDetails } from "../../types/types"
import { RESET_EXPORTER_DETAILS, UPDATE_EXPORTER_ADDITIONAL_INFO, UPDATE_EXPORTER_BASIC_INFO, UPDATE_EXPORTER_COMPANY_DETAILS, UPDATE_EXPORTER_LICENSE_DETAILS, UPDATE_EXPORTER_PRODUCT_DETAILS } from "../contants"

const initialState: ExporterDetails = {
  basicInformation: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    timeZone: "",
    country: ""
  },
  companyDetails: {
    company: "",
    dateOfIncorporation: null,
    address: "",
    website: "",
  },
  licenseDetails: {
    iecCode: "",
    erNumber: "",
    ftLicense: "",
    vatOrGst: ""
  },
  productDetails: {
    productNames: "",
    tradeValue: "",
    tradeVolume: ""
  },
  additionalDetails: {
    reportProduct: "",
    reportCountry: "",
    socialMediaLinks: {
      linkedin: "",
      facebook: "",
      twitter: "",
      instagram: ""
    }
  }
}

const ExporterReducer = (state = initialState, action: { type: string, payload: ExporterDetails }) => {

  switch(action.type){
    case UPDATE_EXPORTER_BASIC_INFO:
      return {
        ...state,
        basicInformation: action.payload.basicInformation
      }
    case UPDATE_EXPORTER_COMPANY_DETAILS:
      return {
        ...state,
        companyDetails: action.payload.companyDetails
      }
    case UPDATE_EXPORTER_ADDITIONAL_INFO:
      return {
        ...state,
        additionalDetails: action.payload.additionalDetails
      }
    case UPDATE_EXPORTER_LICENSE_DETAILS:
      return {
        ...state,
        licenseDetails: action.payload.licenseDetails
      }
    case UPDATE_EXPORTER_PRODUCT_DETAILS:
      return {
        ...state,
        productDetails: action.payload.productDetails
      }
    case RESET_EXPORTER_DETAILS:
      return {
        ...initialState
      }
    default:
      return state
  }

}

export default ExporterReducer
