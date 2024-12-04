import { mg } from "../config/mailgun";
import prisma from "../prisma/client"
import { Exporter } from "../types/types"
const bcrypt = require("bcrypt")
import * as jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || "lnuGYtfQn35Jkf7d"

const createExporter = async (exporterData: Exporter) => {
  try {

    let hashedPassword = "";
    if (exporterData.basicInformation?.password) {
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      hashedPassword = await bcrypt.hash(exporterData.basicInformation.password, salt);
    }

    const newExporter = await prisma.exporter.create({
      data: {
        basicInformation: {
          create: {
            firstName: exporterData.basicInformation.firstName,
            lastName: exporterData.basicInformation.lastName,
            email: exporterData.basicInformation.email,
            password: hashedPassword,
            country: exporterData.basicInformation.country,
            phoneNumber: exporterData.basicInformation.phoneNumber
          }
        },
        companyDetails: {
          create: {
            company: exporterData.companyDetails.company,
            address: exporterData.companyDetails.address,
            website: exporterData.companyDetails.website,
            dateOfIncorporation: exporterData.companyDetails.dateOfIncorporation
          }
        },
        licenseDetails: {
          create: {
            iecCode: exporterData.licenseDetails.iecCode,
            erNumber: exporterData.licenseDetails.erNumber,
            ftLicense: exporterData.licenseDetails.ftLicense,
            vatOrGst: exporterData.licenseDetails.vatOrGst,
          }
        },
        productDetails: {
          create: {
            productNames: exporterData.productDetails.productNames,
            tradeValue: exporterData.productDetails.tradeValue,
            tradeVolume: exporterData.productDetails.tradeVolume,
          }
        },
        additionalDetails: {
          create: {
            reportCountry: exporterData.additionalDetails.reportCountry,
            reportProduct: exporterData.additionalDetails.reportProduct,
            ExporterSocialMediaLinks: {
              create: {
                linkedin: exporterData.additionalDetails.socialMediaLinks.linkedin,
                facebook: exporterData.additionalDetails.socialMediaLinks.facebook
              }
            }
          }
        }
      }
    })

    return newExporter
  } catch (err) {
    console.error('Error creating importer:', err);
    throw err;
  } finally {
    await prisma.$disconnect();
  }

}

const loginExporter = async (email: string, password: string) => {
  const exporter = await prisma.exporter.findFirst({
    where: {
      basicInformation: {
        email
      },
    },
    include: {
      basicInformation: true, // To include the related data
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

const sendWelcomeEmail = async (to: string, subject: string, htmlContent:string) => {
  // const welcomeEmailTemplate = require('./utils/templates/exporterRegistrationTemplate');
  try {
    const response = await mg.messages.create('email.terrasourcing.com', {
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


export { createExporter, loginExporter, sendWelcomeEmail };
