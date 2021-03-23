import { db } from "../lib/db";

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

export async function getData(Area) {
  // db.jsのfirebaseのDB接続ファンクション
  // DBのpostsコレクション内を全て取得した結果 = result
  let result = await new Promise((resolve, reject) => {
    const id = Area.id;
    db.collection("houses")
      .where("univ", "==", id)
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

export async function getOneData(id) {
  // db.jsのfirebaseのDB接続ファンクション
  // DBのpostsコレクション内を全て取得した結果 = result
  const houseId = id.home;
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
  return { result };
}

export async function getFavoriteData() {
  // db.jsのfirebaseのDB接続ファンクション
  // DBのpostsコレクション内を全て取得した結果 = result
  let result = await new Promise((resolve, reject) => {
    db.collection("houses")
      .where("favo", "==", true)
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
