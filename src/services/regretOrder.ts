export async function regretOrder(orderId: number) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users/orders/${orderId}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          status: "CANCELLED",
        }),
      }
    );

    if (!response.ok) {
      throw new Error(
        "HTTP Error: " + response.text() + " status:" + response.status
      );
    }
    const order = await response.json();
    return order;
  } catch (error) {
    throw new Error("Error on change order status: " + error);
  }
}
