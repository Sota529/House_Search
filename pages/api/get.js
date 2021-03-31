import { getAllData } from "../../lib/post";

export default async (req, res) => {
  const Area = req.query.id;
  const Sort = req.query.sort;
  const datas = await (await getAllData(Area, Sort)).result;
  res.json( {
    props: { datas },
  });
};
