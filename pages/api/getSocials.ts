import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { groq, SanityClient } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Social } from "../../typings";

const query = groq`*[_type=="socials"]`;

type Data = {
  socials: Social[];
};

export default async function NextApiHandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const socials: Social[] = await sanityClient.fetch(query);
  res.status(200).json({ socials });
}
