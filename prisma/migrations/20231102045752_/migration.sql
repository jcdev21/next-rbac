/*
  Warnings:

  - You are about to drop the column `roleId` on the `accesses` table. All the data in the column will be lost.
  - The primary key for the `roles` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `roles` table. All the data in the column will be lost.
  - You are about to drop the column `roleId` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `roles` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[roleName]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `roleName` to the `accesses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roleName` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `accesses` DROP FOREIGN KEY `accesses_roleId_fkey`;

-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_roleId_fkey`;

-- AlterTable
ALTER TABLE `accesses` DROP COLUMN `roleId`,
    ADD COLUMN `roleName` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `roles` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD PRIMARY KEY (`name`);

-- AlterTable
ALTER TABLE `users` DROP COLUMN `roleId`,
    ADD COLUMN `roleName` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `roles_name_key` ON `roles`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `users_roleName_key` ON `users`(`roleName`);

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_roleName_fkey` FOREIGN KEY (`roleName`) REFERENCES `roles`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `accesses` ADD CONSTRAINT `accesses_roleName_fkey` FOREIGN KEY (`roleName`) REFERENCES `roles`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;
