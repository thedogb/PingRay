// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getAllPostTagSet } from "@/utils/posts";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string[]>,
) {
  const allTagSet = getAllPostTagSet();

  res.status(200).json(allTagSet);
}
