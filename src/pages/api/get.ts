import { NextApiResponse } from "next";
import { getAllData } from "../../lib/post";
import { HouseInfoType } from "../../type";

export default async (
  req: { query: { id: string; sort: number } },
  res: NextApiResponse
) => {
  const Area = req.query.id;
  const Sort = req.query.sort;
  const datas = (await getAllData(Area, Sort)) as unknown as HouseInfoType[];

  const data: { [time: number]: HouseInfoType[] } = {
    5: [],
    10: [],
    15: [],
    20: [],
    25: [],
  };

  datas.map((d) => {
    data[d.time].push(d);
  });
  res.json({
    data,
  });
};
