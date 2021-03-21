import { db } from "../../lib/db";

export default async (req, res) => {
  console.log("start")
  let doc=req.query.id
  await db
    .collection("houses")
    .doc(doc)
    .update({ favo: true });
    res.send("更新しました")
};
