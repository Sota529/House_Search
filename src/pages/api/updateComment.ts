import { NextApiResponse } from "next";
import { UpdateComment } from "../../lib/firebase";

export default async (
  req: { query: { Comment: string; HouseId: string; UserId: string } },
  res: NextApiResponse
) => {
  const comment = req.query.Comment;
  const HouseId = req.query.HouseId;
  const UserId = req.query.UserId;
  const result = await UpdateComment(HouseId, comment, UserId);
  res.json({
    result,
  });
};
