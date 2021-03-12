import { db } from '../lib/db';

  export async function getData()  {
  // db.jsのfirebaseのDB接続ファンクション
  // DBのpostsコレクション内を全て取得した結果 = result
  let result = await new Promise((resolve, reject) => {
    db.collection('houses')
    .get()
    .then(snapshot => {
      let data = []
      snapshot.forEach((doc) => {
        data.push(
          Object.assign({
            id: doc.id
          }, doc.data())
        )
      })
      resolve(data)
    }).catch(error => {
      reject([])
    })
  })
  return {result}
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
