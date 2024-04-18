/*
  Warnings:

  - You are about to drop the column `imageSource` on the `order_item` table. All the data in the column will be lost.
  - You are about to drop the column `order_item_id` on the `orders` table. All the data in the column will be lost.
  - Added the required column `imageSrc` to the `order_item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "order_item" DROP COLUMN "imageSource",
ADD COLUMN     "imageSrc" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "order_item_id";
