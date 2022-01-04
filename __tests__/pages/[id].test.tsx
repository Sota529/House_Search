import React from "react";
import Id from "src/pages/[id]";
import { render } from "../utils/index";

describe("物件一覧ページ", () => {
  it("スナップショットテスト", () => {
    const { container } = render(<Id />);
    expect(container).toMatchSnapshot();
  });
});
