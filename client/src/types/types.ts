// src/types/types.ts

export interface CompanyInformation {
  companyName: string;
  email: string;
  dateOfIncorporation: Date | null;
  website: string;
  phone: string;
  country: string;
}

export interface BasicInformation {
  firstName: string;
  lastName: string;
  address: string;
  password: string;
  timeZone: string;
  language: string;
}

export interface ProductDetails {
  productNames: string;
  tradeVolume: string;
  tradeValue: string;
  tradeCountries: string;
}

export interface LicenseDetails {
  taxNumber: string;
  licenseNumber: string;
  iecCode: string;
  ecgc: string;
  blNumber: string;
}

export interface AdditionalInformation {
  annualTurnover: string;
  directors: string;
  b2bListing: string;
  tradeCompany: string;
  tradeWebsite: string;
  tradeEmail: string;
  tradePhone: string;
  socialMediaLinks: {
    linkedin: string;
    facebook: string;
    twitter: string;
    instagram: string;
  }
}

export interface ImporterDetails {
  companyInformation: CompanyInformation;
  basicInformation: BasicInformation;
  productDetails: ProductDetails;
  licenseDetails: LicenseDetails;
  additionalInformation: AdditionalInformation;
}

export interface ExporterBasicInformation {
  firstName: string;
  lastName: string;
  email: string,
  password: string;
  country: string;
  timeZone: string;
  phoneNumber: string;
}

export interface ExporterCompanyDetails {
  company: string;
  dateOfIncorporation: Date | null;
  address: string;
  website: string;
}

export interface ExporterLicenseDetails {
  iecCode: string;
  erNumber: string;
  ftLicense: string;
  vatOrGst: string;
}

export interface ExporterProductDetails {
  productNames: string;
  tradeValue: string;
  tradeVolume: string;
}

export interface ExporterAdditionalDetails {
  reportProduct: string;
  reportCountry: string;
  socialMediaLinks: {
    linkedin: string;
    facebook: string;
    twitter: string;
    instagram: string;
  }
}

export interface ExporterDetails {
  basicInformation: ExporterBasicInformation;
  companyDetails: ExporterCompanyDetails;
  licenseDetails: ExporterLicenseDetails;
  productDetails: ExporterProductDetails;
  additionalDetails: ExporterAdditionalDetails;
}
