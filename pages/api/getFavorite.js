import { getFavoriteData } from "../../lib/post";

export default async (req, res) => {
  const Area = req.query.id;
  const datas = await (await getFavoriteData(Area)).result;
  res.json({
    props: { datas },
  });
};