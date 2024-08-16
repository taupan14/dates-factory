const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getPaymentMethods(request, response) {
  try {
    const payments = await prisma.payment.findMany({});
    response.status(200).json(payments);
  } catch (error) {
    console.log(error);
  }
  // response.status(200).json(["Credit Card", "Debit Card", "Paypal"]);
}

module.exports = { getPaymentMethods };
