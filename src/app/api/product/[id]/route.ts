import type { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(
  req: NextApiRequest,
  { params }: { params: { id: string } }
) {
  try {
    const content = await fetch(
      `${process.env.STRAPI_API_URL}/products/${params.id}?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
        },
      }
    );
    const data = await content.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: err });
  }
}
