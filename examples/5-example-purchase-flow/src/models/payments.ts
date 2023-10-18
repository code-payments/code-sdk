export interface Payment {
  intent: string;
  itemId: string;
  status: "pending" | "completed";
}

// You should use a database instead of an in-memory array.
// This is just for demonstration purposes.

const payments: Payment[] = [];

export const addPaymentIntent = (intent: string, itemId: string) => {
  payments.push({ intent, itemId, status: "pending" });
};

export const findPaymentByIntent = (intent: string): Payment | undefined => {
  return payments.find(payment => payment.intent === intent);
};

export const findPaymentsByItem = (itemId: string): Payment[] => {
  return payments.filter(payment => payment.itemId === itemId);
};

export const updatePaymentAfterPurchase = (intent: string) => {
  const payment = findPaymentByIntent(intent);
  if (payment) {
    payment.status = "completed";
  }
};