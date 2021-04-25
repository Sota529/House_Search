import { db } from "../../lib/db";
import firebase from "firebase";
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
    if (favo === true) {
      await db
        .collection("houses")
        .doc(docId)
        .update({ favo: firebase.firestore.FieldValue.arrayUnion(UserId) })
        .catch((error) => {
          alert(error);
        });
    } else {
      await db
        .collection("houses")
        .doc(docId)
        .update({ favo: firebase.firestore.FieldValue.arrayRemove(UserId) })
        .catch((error) => {
          alert(error);
        });
    }
  }
};
