import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextApiRequest,
) {
  try {
    // const url = new URL(req.url as string);
    // const data = url.searchParams.get("filters");
    const content = await fetch(
      `${process.env.STRAPI_API_URL}/products??filters[category][$contains]=women&populate=*`,
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
