import { NextApiResponse } from "next";
import { getOneData } from "../../lib/firebase";

export default async (req: { query: { id: string } }, res: NextApiResponse) => {
  const Area = req.query.id;
  const data = await (await getOneData(Area)).result;
  res.json(data);
};
