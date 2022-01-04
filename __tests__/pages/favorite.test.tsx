import React from "react";
import Favorite from "src/pages/favorite";
import { render } from "../utils/index";

describe("トップページ", () => {
  it("スナップショットテスト", () => {
    const { container } = render(<Favorite />);
    expect(container).toMatchSnapshot();
  });
});
