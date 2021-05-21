import { UpdateComment } from "../../lib/post";

export default async (req, res) => {
  const comment = req.query.Comment;
  const HouseId = req.query.HouseId;
  const UserId = req.query.UserId;
  const result = await UpdateComment(HouseId, comment, UserId);
};
