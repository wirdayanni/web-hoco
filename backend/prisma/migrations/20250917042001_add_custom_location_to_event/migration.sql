/*
  Warnings:

  - You are about to drop the column `createdAt` on the `event` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `event` table. All the data in the column will be lost.
  - You are about to alter the column `shortDescription` on the `event` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `event` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `customLocation` VARCHAR(191) NULL,
    MODIFY `shortDescription` VARCHAR(191) NULL,
    MODIFY `description` VARCHAR(191) NULL;
