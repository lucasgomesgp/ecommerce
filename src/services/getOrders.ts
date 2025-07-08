export async function getOrders() {
  try {
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/orders`);
    return data.json();
  } catch (err) {
    throw new Error("Error on get orders");
  }
}
