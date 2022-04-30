const assert = require("assert");
import SpotlightPainter from "../src/index";
import { BasicGLProvider } from "parsegraph-compileprogram";

describe("Package", function () {
  it("works", () => {
    const ctx = new BasicGLProvider();
    ctx.setExplicitSize(400, 400);
    const painter = new SpotlightPainter(ctx);
    assert.ok(painter);
  });
});
