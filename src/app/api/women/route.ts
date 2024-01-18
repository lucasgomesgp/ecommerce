import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextApiRequest,
) {
  try {
    
    const content = await fetch(
      
      `${process.env.STRAPI_API_URL}/products?filters[category][$containsi]=women&populate=*`,
      {
        cache: "no-cache",
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
