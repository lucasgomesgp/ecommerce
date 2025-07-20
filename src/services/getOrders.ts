export async function getOrders() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users/orders`
    );
    if (!response.ok) {
      console.log("Error on response from API: ", response.status);
      return undefined;
    }
    return response.json();
  } catch (err) {
    throw new Error("Error on get orders");
  }
}
