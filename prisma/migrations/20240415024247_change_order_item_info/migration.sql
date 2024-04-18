/*
  Warnings:

  - Added the required column `color` to the `order_item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageSource` to the `order_item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `order_item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "order_item" ADD COLUMN     "color" TEXT NOT NULL,
ADD COLUMN     "imageSource" TEXT NOT NULL,
ADD COLUMN     "size" TEXT NOT NULL;
