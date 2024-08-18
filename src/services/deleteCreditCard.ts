export async function deleteCreditCard(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/creditcard`,
    {
      method: "DELETE",
      body: JSON.stringify({
        id,
      }),
    }
  );
  const card = await response.json();
  return card;
}
