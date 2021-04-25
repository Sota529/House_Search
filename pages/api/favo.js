import { db } from "../../lib/db";
import { auth } from "../../lib/db";

export default async (req, res) => {
  const docId = req.query.docId;
  const UserId = req.query.UserId;
  let favo = req.query.favorite;
  if (favo === "true") {
    favo = true;
  } else {
    favo = false;
  }
  if (!UserId) {
    return;
  } else {
    await db
      .collection("houses")
      .doc(docId)
      .set({ favo: [UserId] }, { merge: true });
  }
};
