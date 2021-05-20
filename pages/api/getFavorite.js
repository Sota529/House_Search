import { getComment, getFavoriteData } from "../../lib/post";

export default async (req, res) => {
  const UserId = req.query.UserId;
  const datas = await getFavoriteData(UserId);
  const comments = await getComment(UserId);
  for (let i = 0; i < datas.length; i++) {
    for (let j = 0; j < datas.length; j++) {
      if (comments[i].id === datas[j].id) {
        datas[i]["comment"] = comments[j].comment;
      }
    }
  }
  res.json({
    props: { datas },
  });
};
