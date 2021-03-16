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

export async function getDetailID() {
  let result = await new Promise((resolve, reject) => {
    const query = "東京";
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
  return result.map(({id})=>{
    return {
      params:{
        home:id
      }
    }
    
  })
}

export async function getData(Area) {
  // db.jsのfirebaseのDB接続ファンクション
  // DBのpostsコレクション内を全て取得した結果 = result
  let result = await new Promise((resolve, reject) => {
    const query = "東京";
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

export async function SerchData(id) {
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

const sample = [
  {
    id: "confort",
    name: "コンフォート",
    price: 80000,
    location: "東京都文京区",
    time: 15,
  },
  {
    id: "kind",
    name: "キャインド",
    price: 120000,
    location: "東京都港区",
    time: 10,
  },
];

export function DataFetch() {
  return sample.map((data) => {
    return data;
  });
}
