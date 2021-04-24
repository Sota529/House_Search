import { db } from "../../lib/db";
import { auth } from "../../lib/db";

export default async (req, res) => {
  const docId = req.query.docId;
  const UserId = req.query.UserId;
  const favo = req.query.favorite;
  if (!UserId) {
    return;
  } else {
    await db
      .collection("users")
      .doc(UserId)
      .set({ favo: { [docId]: favo } }, { merge: true });
  }
};
