/*
  Warnings:

  - A unique constraint covering the columns `[menuId]` on the table `accesses` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `accesses_menuId_key` ON `accesses`(`menuId`);
