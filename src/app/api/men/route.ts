import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(
  req: NextApiRequest,
) {
  try {
    const content = await fetch(
      `${process.env.STRAPI_API_URL}/products?filters[category][$notContainsi]=women&populate=*`,
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
