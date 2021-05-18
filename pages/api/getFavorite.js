import { getComment, getFavoriteData } from "../../lib/post";

export default async (req, res) => {
  const UserId = req.query.UserId;
  const datas = await getFavoriteData(UserId);
  const comments = await getComment(UserId);
  res.json({
    props: { datas, comments },
  });
};
