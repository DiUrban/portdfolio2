import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { groq, SanityClient } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Skill } from "../../typings";

const query = groq`*[_type=="skills"]`;

type Data = {
  skills: Skill[];
};

export default async function NextApiHandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const skills: Skill[] = await sanityClient.fetch(query);
  res.status(200).json({ skills });
}
