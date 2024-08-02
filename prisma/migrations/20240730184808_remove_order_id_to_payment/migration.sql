/*
  Warnings:

  - You are about to drop the column `paymentsId` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `orderId` on the `payment` table. All the data in the column will be lost.
  - Added the required column `paymentId` to the `order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "payment" DROP CONSTRAINT "payment_orderId_fkey";

-- AlterTable
ALTER TABLE "order" DROP COLUMN "paymentsId",
ADD COLUMN     "paymentId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "payment" DROP COLUMN "orderId";

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_paymentId_fkey" FOREIGN KEY ("paymentId") REFERENCES "payment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
