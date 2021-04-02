import { getAllData } from "../../lib/post";

export default async (req, res) => {
  const Area = req.query.id;
  const Sort = req.query.sort;
  const datas = await (await getAllData(Area, Sort)).result;
  // let processedData = {};
  // let data5 = [];
  // let data10 = [];
  // let data15 = [];
  // let data20 = [];
  // let data25 = [];
  // datas.map(({ time, ...others }) => {
  //   if (time === 5) {
  //     data5.push(others);
  //   } else if (time === 10) {
  //     data10.push(others);
  //   } else if (time === 15) {
  //     data15.push(others);
  //   } else if (time === 20) {
  //     data20.push(others);
  //   } else if (time === 25) {
  //     data25.push(others);
  //   }
  // });
  // processedData = { 5: data5, 10: data10, 15: data15, 20: data20, 25: data25 };
  res.json({
    props: {datas },
  });
};
