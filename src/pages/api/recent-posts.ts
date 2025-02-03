// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getRecentPosts } from "@/utils/posts";

type Data = {
  id: string;
  title: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>,
) {
  const recentPosts = getRecentPosts(10);

  res.status(200).json(
    recentPosts.map((item) => ({
      id: item.id ?? "",
      title: item.title ?? "",
    })),
  );
}
