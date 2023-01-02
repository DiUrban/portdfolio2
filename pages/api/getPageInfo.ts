import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { groq, SanityClient } from "next-sanity";
import { sanityClient } from "../../sanity";
import { PageInfo } from "../../typings";

const query = groq`*[_type=="pageInfo"][0]{...,socials[]->}`;

type Data = {
  pageInfo: PageInfo[];
};

export default async function NextApiHandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const pageInfo: PageInfo[] = await sanityClient.fetch(query);
  res.status(200).json({ pageInfo });
}
