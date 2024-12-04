import { ImporterDetails } from "../../types/types";
import { RESET_IMPORTER_DETAILS, UPDATE_ADDITIONALINFO, UPDATE_BASICINFO, UPDATE_COMPANYDETAILS, UPDATE_LICENSEDETAILS, UPDATE_PRODUCTDETAILS } from "../contants";

const initialState: ImporterDetails = {
  companyInformation: {
    companyName: "",
    email: "",
    dateOfIncorporation: null,
    website: "",
    phone: "",
    country: ""
  },
  basicInformation: {
    firstName: "",
    lastName: "",
    address: "",
    password: "",
    timeZone: "",
    language: "",
  },
  productDetails: {
    productNames: "",
    tradeVolume: "",
    tradeValue: "",
    tradeCountries: "",
  },
  licenseDetails: {
    taxNumber: "",
    licenseNumber: "",
    iecCode: "",
    ecgc: "",
    blNumber: "",
  },
  additionalInformation: {
    annualTurnover: "",
    directors: "",
    b2bListing: "",
    tradeCompany: "",
    tradeWebsite: "",
    tradeEmail: "",
    tradePhone: "",
    socialMediaLinks: {
      facebook: "",
      twitter: "",
      instagram: "",
      linkedin: "",
    }
  }
}

const ImporterReducer = (state = initialState, action: { type: string; payload: ImporterDetails }) => {
  switch (action.type) {
    case UPDATE_COMPANYDETAILS:
      return {
        ...state,
        companyInformation: action.payload.companyInformation
      }
    case UPDATE_BASICINFO:
      return {
        ...state,
        basicInformation: action.payload.basicInformation
      }
    case UPDATE_PRODUCTDETAILS:
      return {
        ...state,
        productDetails: action.payload.productDetails
      }
    case UPDATE_LICENSEDETAILS:
      return {
        ...state,
        licenseDetails: action.payload.licenseDetails
      }
    case UPDATE_ADDITIONALINFO:
      return {
        ...state,
        additionalInfo: action.payload.additionalInformation
      }
    case RESET_IMPORTER_DETAILS:
      return {
        ...initialState
      }
    default:
      return state
  }
}

export default ImporterReducer
