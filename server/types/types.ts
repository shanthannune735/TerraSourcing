type Importer = {
  companyInformation?: {
    companyName: string;
    email: string;
    dateOfIncorporation: Date | null;
    website: string;
    phone: string;
    country: string;
  };
  basicInformation?: {
    firstName: string;
    lastName: string;
    address: string;
    password: string; // Ensure passwords are hashed before storing
    timeZone: string;
    language: string;
  };
  productDetails?: {
    productNames: string;
    tradeVolume: string;
    tradeValue: string;
    tradeCountries: string;
  };
  licenseDetails?: {
    taxNumber: string;
    licenseNumber: string;
    iecCode: string;
    ecgc: string;
    blNumber: string;
  };
  additionalInformation?: {
    annualTurnover: string;
    directors: string;
    b2bListing: string;
    tradeCompany: string;
    tradeWebsite: string;
    tradeEmail: string;
    tradePhone: string;
    socialMediaLinks?: {
      linkedin?: string;
      facebook?: string;
      twitter?: string;
      instagram?: string;
    };
  };
};

export interface ExporterBasicInformation {
  firstName: string;
  lastName: string;
  email: string,
  password: string;
  country: string;
  phoneNumber: string;
}

export interface ExporterCompanyDetails {
  company: string;
  dateOfIncorporation: Date | null;
  address: string;
  website: string;
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

export interface ExporterLicenseDetails {
  iecCode: string;
  erNumber: string;
  ftLicense: string;
  vatOrGst: string;
}

export interface Exporter {
  basicInformation: ExporterBasicInformation;
  companyDetails: ExporterCompanyDetails;
  licenseDetails: ExporterLicenseDetails;
  productDetails: ExporterProductDetails;
  additionalDetails: ExporterAdditionalDetails;
}

export { Importer };
