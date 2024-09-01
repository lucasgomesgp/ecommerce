export async function getAddresses() {
  try {
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/address`);
    return data.json();
  } catch (err) {
    throw new Error("Error on search addresses");
  }
};
