import { getFavoriteData } from "../../lib/post";

export default async (req, res) => {
  const UserId = req.query.UserId;
  const datas = await getFavoriteData(UserId);
  res.json({
    props: { datas },
  });
};
