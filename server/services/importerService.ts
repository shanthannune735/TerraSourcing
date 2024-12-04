import { PrismaClient } from '@prisma/client';
const bcrypt = require("bcrypt")
import { Importer } from '../types/types';
import * as jwt from 'jsonwebtoken';
import { mg } from '../config/mailgun';

const JWT_SECRET = process.env.JWT_SECRET || "lnuGYtfQn35Jkf7d"

const prisma = new PrismaClient()

const createImporter = async (importerData: Importer) => {
  try {
    let hashedPassword = ""
    if (importerData.basicInformation?.password) {
      const saltRounds = 10
      const salt = await bcrypt.genSalt(saltRounds)
      hashedPassword = await bcrypt.hash(importerData.basicInformation.password, salt)
    }

    // Create the user record in the database
    const newImporter = await prisma.importer.create({
      data: {
        companyInformation: importerData.companyInformation
          ? {
              create: {
                companyName: importerData.companyInformation.companyName,
                email: importerData.companyInformation.email,
                dateOfIncorporation: importerData.companyInformation.dateOfIncorporation || "",
                website: importerData.companyInformation.website,
                phone: importerData.companyInformation.phone,
                country: importerData.companyInformation.country,
              }
            }
          : undefined,
        basicInformation: importerData.basicInformation
          ? {
              create: {
                firstName: importerData.basicInformation.firstName,
                lastName: importerData.basicInformation.lastName,
                address: importerData.basicInformation.address,
                password: hashedPassword,
                timeZone: importerData.basicInformation.timeZone,
                language: importerData.basicInformation.language,
              }
            }
          : undefined,
        productDetails: importerData.productDetails
          ? {
              create: {
                productNames: importerData.productDetails.productNames,
                tradeVolume: importerData.productDetails.tradeVolume,
                tradeValue: importerData.productDetails.tradeValue,
                tradeCountries: importerData.productDetails.tradeCountries,
              }
            }
          : undefined,
        licenseDetails: importerData.licenseDetails
          ? {
              create: {
                taxNumber: importerData.licenseDetails.taxNumber,
                licenseNumber: importerData.licenseDetails.licenseNumber,
                iecCode: importerData.licenseDetails.iecCode,
                ecgc: importerData.licenseDetails.ecgc,
                blNumber: importerData.licenseDetails.blNumber,
              }
            }
          : undefined,
        additionalInformation: importerData.additionalInformation
          ? {
              create: {
                annualTurnover: importerData.additionalInformation.annualTurnover,
                directors: importerData.additionalInformation.directors,
                b2bListing: importerData.additionalInformation.b2bListing,
                tradeCompany: importerData.additionalInformation.tradeCompany,
                tradeWebsite: importerData.additionalInformation.tradeWebsite,
                tradeEmail: importerData.additionalInformation.tradeEmail,
                tradePhone: importerData.additionalInformation.tradePhone,
                ImporterSocialMediaLinks: importerData.additionalInformation.socialMediaLinks
                  ? {
                      create: {
                        linkedin: importerData.additionalInformation.socialMediaLinks.linkedin,
                        facebook: importerData.additionalInformation.socialMediaLinks.facebook,
                        twitter: importerData.additionalInformation.socialMediaLinks.twitter,
                        instagram: importerData.additionalInformation.socialMediaLinks.instagram,
                      }
                    }
                  : undefined,
              }
            }
          : undefined
      }
    });

    return newImporter;

  } catch (err) {
    console.error('Error creating importer:', err);
    throw err; // Re-throw the error to be handled by the caller or middleware
  } finally {
    await prisma.$disconnect(); // Ensure Prisma client disconnects properly
  }
};

const loginImporter = async (email: string, password: string) => {
  const exporter = await prisma.importer.findFirst({
    where: {
      companyInformation: {
        email
      },
    },
    include: {
      companyInformation: true,
      basicInformation: true // To include the related data
    },
  })
  if(!exporter) {
    throw new Error('Invalid email or password')
  }
  const isPasswordValid = await bcrypt.compare(password, exporter.basicInformation?.password || '')

  if (!isPasswordValid) {
    throw new Error('Invalid email or password')
  }
  const token = jwt.sign({ id: exporter.id }, JWT_SECRET, { expiresIn: "7d" })
  return token
}

const sendImporterWelcomeEmail = async (to: string, subject: string, htmlContent:string) => {
  // const welcomeEmailTemplate = require('./utils/templates/exporterRegistrationTemplate');
  try {
    const response = await mg.messages.create('terrasourcing.com', {
      from: 'TerraSourcing <contact@terrasourcing.com>', // Replace with your domain email
      to: [to], // Email recipient
      subject: subject, // Subject of the email
      html: htmlContent, // HTML content (optional)
    });
    console.log('Email sent:', response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}


export { createImporter, loginImporter, sendImporterWelcomeEmail };
