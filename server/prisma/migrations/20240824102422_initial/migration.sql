-- CreateTable
CREATE TABLE `Importer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ImporterCompanyInformation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `companyName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `dateOfIncorporation` DATETIME(3) NULL,
    `website` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `importerId` INTEGER NOT NULL,

    UNIQUE INDEX `ImporterCompanyInformation_importerId_key`(`importerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ImporterBasicInformation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `timeZone` VARCHAR(191) NOT NULL,
    `language` VARCHAR(191) NOT NULL,
    `importerId` INTEGER NOT NULL,

    UNIQUE INDEX `ImporterBasicInformation_importerId_key`(`importerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ImporterProductDetails` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `productNames` VARCHAR(191) NOT NULL,
    `tradeVolume` VARCHAR(191) NOT NULL,
    `tradeValue` VARCHAR(191) NOT NULL,
    `tradeCountries` VARCHAR(191) NOT NULL,
    `importerId` INTEGER NOT NULL,

    UNIQUE INDEX `ImporterProductDetails_importerId_key`(`importerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ImporterLicenseDetails` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `taxNumber` VARCHAR(191) NOT NULL,
    `licenseNumber` VARCHAR(191) NOT NULL,
    `iecCode` VARCHAR(191) NOT NULL,
    `ecgc` VARCHAR(191) NOT NULL,
    `blNumber` VARCHAR(191) NOT NULL,
    `importerId` INTEGER NOT NULL,

    UNIQUE INDEX `ImporterLicenseDetails_importerId_key`(`importerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ImporterAdditionalInformation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `annualTurnover` VARCHAR(191) NOT NULL,
    `directors` VARCHAR(191) NOT NULL,
    `b2bListing` VARCHAR(191) NOT NULL,
    `tradeCompany` VARCHAR(191) NOT NULL,
    `tradeWebsite` VARCHAR(191) NOT NULL,
    `tradeEmail` VARCHAR(191) NOT NULL,
    `tradePhone` VARCHAR(191) NOT NULL,
    `importerId` INTEGER NOT NULL,

    UNIQUE INDEX `ImporterAdditionalInformation_importerId_key`(`importerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ImporterSocialMediaLinks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `linkedin` VARCHAR(191) NULL,
    `facebook` VARCHAR(191) NULL,
    `twitter` VARCHAR(191) NULL,
    `instagram` VARCHAR(191) NULL,
    `additionalInfoId` INTEGER NOT NULL,

    UNIQUE INDEX `ImporterSocialMediaLinks_additionalInfoId_key`(`additionalInfoId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Exporter` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ExporterBasicInformation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NOT NULL,
    `exporterId` INTEGER NOT NULL,

    UNIQUE INDEX `ExporterBasicInformation_email_key`(`email`),
    UNIQUE INDEX `ExporterBasicInformation_exporterId_key`(`exporterId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ExporterCompanyDetails` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `company` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `website` VARCHAR(191) NOT NULL,
    `dateOfIncorporation` DATETIME(3) NULL,
    `exporterId` INTEGER NOT NULL,

    UNIQUE INDEX `ExporterCompanyDetails_exporterId_key`(`exporterId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ExporterLicenseDetails` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `iecCode` VARCHAR(191) NOT NULL,
    `erNumber` VARCHAR(191) NOT NULL,
    `ftLicense` VARCHAR(191) NOT NULL,
    `vatOrGst` VARCHAR(191) NOT NULL,
    `exporterId` INTEGER NOT NULL,

    UNIQUE INDEX `ExporterLicenseDetails_exporterId_key`(`exporterId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ExporterProductDetails` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `productNames` VARCHAR(191) NOT NULL,
    `tradeValue` VARCHAR(191) NOT NULL,
    `tradeVolume` VARCHAR(191) NOT NULL,
    `exporterId` INTEGER NOT NULL,

    UNIQUE INDEX `ExporterProductDetails_exporterId_key`(`exporterId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ExporterAdditionalDetails` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `reportProduct` VARCHAR(191) NOT NULL,
    `reportCountry` VARCHAR(191) NOT NULL,
    `exporterId` INTEGER NOT NULL,

    UNIQUE INDEX `ExporterAdditionalDetails_exporterId_key`(`exporterId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ExporterSocialMediaLinks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `linkedin` VARCHAR(191) NULL,
    `facebook` VARCHAR(191) NULL,
    `twitter` VARCHAR(191) NULL,
    `instagram` VARCHAR(191) NULL,
    `additionalInfoId` INTEGER NOT NULL,

    UNIQUE INDEX `ExporterSocialMediaLinks_additionalInfoId_key`(`additionalInfoId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ImporterCompanyInformation` ADD CONSTRAINT `ImporterCompanyInformation_importerId_fkey` FOREIGN KEY (`importerId`) REFERENCES `Importer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ImporterBasicInformation` ADD CONSTRAINT `ImporterBasicInformation_importerId_fkey` FOREIGN KEY (`importerId`) REFERENCES `Importer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ImporterProductDetails` ADD CONSTRAINT `ImporterProductDetails_importerId_fkey` FOREIGN KEY (`importerId`) REFERENCES `Importer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ImporterLicenseDetails` ADD CONSTRAINT `ImporterLicenseDetails_importerId_fkey` FOREIGN KEY (`importerId`) REFERENCES `Importer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ImporterAdditionalInformation` ADD CONSTRAINT `ImporterAdditionalInformation_importerId_fkey` FOREIGN KEY (`importerId`) REFERENCES `Importer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ImporterSocialMediaLinks` ADD CONSTRAINT `ImporterSocialMediaLinks_additionalInfoId_fkey` FOREIGN KEY (`additionalInfoId`) REFERENCES `ImporterAdditionalInformation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ExporterBasicInformation` ADD CONSTRAINT `ExporterBasicInformation_exporterId_fkey` FOREIGN KEY (`exporterId`) REFERENCES `Exporter`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ExporterCompanyDetails` ADD CONSTRAINT `ExporterCompanyDetails_exporterId_fkey` FOREIGN KEY (`exporterId`) REFERENCES `Exporter`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ExporterLicenseDetails` ADD CONSTRAINT `ExporterLicenseDetails_exporterId_fkey` FOREIGN KEY (`exporterId`) REFERENCES `Exporter`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ExporterProductDetails` ADD CONSTRAINT `ExporterProductDetails_exporterId_fkey` FOREIGN KEY (`exporterId`) REFERENCES `Exporter`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ExporterAdditionalDetails` ADD CONSTRAINT `ExporterAdditionalDetails_exporterId_fkey` FOREIGN KEY (`exporterId`) REFERENCES `Exporter`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ExporterSocialMediaLinks` ADD CONSTRAINT `ExporterSocialMediaLinks_additionalInfoId_fkey` FOREIGN KEY (`additionalInfoId`) REFERENCES `ExporterAdditionalDetails`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
