import axios from "axios";
type queryType = {
  docId: string;
  UserId: string;
  favorite: boolean;
};

describe("物件をお気に入りのテスト", () => {
  let httpRequestGetMock: jest.SpyInstance;
  beforeEach(() => {
    httpRequestGetMock = jest.spyOn(axios, "get");
    httpRequestGetMock.mockResolvedValue(200);
  });
  let query: queryType;
  const getApi = (query: {
    docId: string;
    UserId: string;
    favorite: boolean;
  }) => {
    axios.get(`//${location.host}/api/favo`, { params: query });
  };
  it("正常系", () => {
    query = {
      docId: "docId",
      UserId: "userId",
      favorite: false,
    };
    expect(getApi(query)).toBeCalled;
  });

  it("ログインされておらず、UserIDがない時", () => {
    query = {
      docId: "docId",
      UserId: "",
      favorite: false,
    };
    expect(getApi(query)).toEqual(400);
  });
});

export {};
