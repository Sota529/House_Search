import { NextApiResponse } from "next";
import { getAllData } from "../../lib/post";
import { HouseInfoType } from "../type";

export default async (
  req: { query: { id: string; sort: string } },
  res: NextApiResponse
) => {
  const Area = req.query.id;
  const Sort = req.query.sort;
  const datas = (await await getAllData(
    Area,
    Sort
  )) as unknown as HouseInfoType[];

  const result: { [time: number]: HouseInfoType[] } = {};

  datas.map((d) => {
    result[d.time].push(d);
  });
  res.json({
    result,
  });
};
