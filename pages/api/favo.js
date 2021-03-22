import { db } from "../../lib/db";

export default async (req, res) => {
  const doc = req.query.id;
  const favo = req.query.favorite;
  console.log(typeof favo);
  let que = Boolean("");
  if (favo === "true") {
    que = false;
    {
      que = true;
    }
  }
  await db.collection("houses").doc(doc).update({ favo: que });
  res.send("更新しました");
};
