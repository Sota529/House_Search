import { NextApiRequest, NextApiResponse } from "next";
import { getComment, getFavoriteData } from "../../lib/post";

export default async (
  req: { query: { UserId: string | undefined } },
  res: NextApiResponse
) => {
  const UserId = req.query.UserId;
  if (UserId === undefined) {
    return;
  }
  const datas = await getFavoriteData(UserId);
  const comments = (await getComment(UserId)) as unknown as {
    id: string;
    comment: string;
  }[];
  if (datas === undefined) {
    return;
  }
  for (let i = 0; i < datas?.length; i++) {
    for (let j = 0; j < comments?.length; j++) {
      if (comments[j].id === datas[i].id) {
        datas[i]["comment"] = comments[j].comment;
      }
    }
  }
  res.json({
    datas,
  });
};
