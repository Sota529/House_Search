import React from "react";
import Home from "../../src/pages/index";
import {  render } from "../utils/index";

describe("トップページ", () => {
  it("スナップショットテスト", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
