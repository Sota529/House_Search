import { db } from "../lib/db";
import firebase from 'firebase/app'

export const univs = [
  { id: "Tokyo", Name: "東京" },
  { id: "Waseda", Name: "早稲田" },
  { id: "Tokyorika", Name: "東京理科" },
  { id: "Tokoha", Name: "常葉" },
  { id: "Keio", Name: "慶応" },
  { id: "Meizi", Name: "明治" },
  { id: "Chiba", Name: "千葉" },
  { id: "Rikyo", Name: "立教" },
  { id: "Hosei", Name: "法政" },
  { id: "Dentsu", Name: "電気通信" },
];
export function getPostId() {
  return univs.map(({ id }) => {
    return {
      params: {
        id: id,
      },
    };
  });
}

export async function gethouselID() {
  let result = await new Promise((resolve, reject) => {
    db.collection("houses")
      .get()
      .then((snapshot) => {
        let data = [];
        snapshot.forEach((doc) => {
          data.push(
            Object.assign(
              {
                id: doc.id,
              },
              doc.data()
            )
          );
        });
        resolve(data);
      })
      .catch((error) => {
        reject([]);
      });
  });
  return result.map(({ id }) => {
    return {
      params: {
        home: id,
      },
    };
  });
}

export async function getAllData(Area, Sort) {
  // db.jsのfirebaseのDB接続ファンクション
  // DBのpostsコレクション内を全て取得した結果 = result
  if (Sort === "0") {
    let result = await new Promise((resolve, reject) => {
      db.collection("houses")
        .where("univ", "==", Area)
        .get()
        .then((snapshot) => {
          let data = [];
          snapshot.forEach((doc) => {
            data.push(
              Object.assign(
                {
                  doc: doc.id,
                },
                doc.data()
              )
            );
          });
          resolve(data);
        })
        .catch((error) => {
          console.log(`error:${error}`);
          reject([]);
        });
    });
    return { result };
  } else {
    let result = await new Promise((resolve, reject) => {
      db.collection("houses")
        .where("univ", "==", Area)
        .where("price", "<=", Number(Sort))
        .get()
        .then((snapshot) => {
          let data = [];
          snapshot.forEach((doc) => {
            data.push(
              Object.assign(
                {
                  doc: doc.id,
                },
                doc.data()
              )
            );
          });
          resolve(data);
        })
        .catch((error) => {
          console.log(`error:${error}`);
          reject([]);
        });
    });
    return { result };
  }
}

export async function getOneData(id) {
  // db.jsのfirebaseのDB接続ファンクション
  // DBのpostsコレクション内を全て取得した結果 = result
  const houseId = id;
  let result = await new Promise((resolve, reject) => {
    db.collection("houses")
      .where("id", "==", houseId)
      .get()
      .then((snapshot) => {
        let data = [];
        snapshot.forEach((doc) => {
          data.push(
            Object.assign(
              {
                doc: doc.id,
              },
              doc.data()
            )
          );
        });
        resolve(data);
      })
      .catch((error) => {
        reject([]);
      });
  });
  return { result };
}

export async function getFavoriteData(UserId) {
  if (!UserId) {
    return;
  }
  let datas = [];
  await db
    .collection("houses")
    .where("favoUser", "array-contains", UserId)
    .get()
    .then((docs) => {
      docs.forEach((doc) => {
        datas.push(
          Object.assign(
            {
              doc: doc.id,
            },
            doc.data()
          )
        );
      });
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
  // console.log(datas);
  return datas;
}

export async function getComment(UserId) {
  if (!UserId) {
    return;
  }
  let comments;
  await db
    .collection("users")
    .doc(UserId)
    .get()
    .then((doc) => {
      if (doc.exists) {
        comments = doc.data().comments;
      } else {
        db.collection("users").doc(UserId).set({ initialcreate: null });
      }
    })
    .catch((error) => {
      console.log(error);
    });
  return comments;
}
export async function UpdateComment(HouseId, comment, UserId) {
  const date = { id: HouseId, comment: comment };
  db.collection("users")
    .doc(UserId)
    .update({ comments: firebase.firestore.FieldValue.arrayUnion(date) });
}
