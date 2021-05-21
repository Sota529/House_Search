import { db } from "../../lib/db";
import firebase from 'firebase/app'
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
        .update({ favoUser: firebase.firestore.FieldValue.arrayUnion(UserId) })
        .catch((error) => {
          console.log(error);
        });
    } else {
      await db
        .collection("houses")
        .doc(docId)
        .update({ favoUser: firebase.firestore.FieldValue.arrayRemove(UserId) })
        .catch((error) => {
          console.log(error);
        });
    }
  }
};
