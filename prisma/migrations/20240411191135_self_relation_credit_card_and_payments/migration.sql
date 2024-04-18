/*
  Warnings:

  - A unique constraint covering the columns `[card_id]` on the table `payments` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "payments" ADD COLUMN     "card_id" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "payments_card_id_key" ON "payments"("card_id");

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_card_id_fkey" FOREIGN KEY ("card_id") REFERENCES "credit_card"("id") ON DELETE SET NULL ON UPDATE CASCADE;
