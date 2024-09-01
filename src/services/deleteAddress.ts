export async function deleteAddress(id: string) {
    try {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/address`, {
            method: "DELETE",
            body: JSON.stringify({
                id,
            }),
        });
    } catch (err) {
        throw new Error("Error on delete address");
    }
}