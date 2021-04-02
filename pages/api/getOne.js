import { getOneData } from "../../lib/post";

export default async (req, res) => {
  const Area = req.query.id;
  const data = await (await getOneData(Area)).result;
  res.json({
    props: { data },
  });
};
