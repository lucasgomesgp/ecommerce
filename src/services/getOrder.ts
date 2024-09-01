export async function getOrder(id: number) {
  try {
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/orders/${id}`);
    return data.json();
  } catch (err) {
    throw new Error("Error on get order");
  }
}