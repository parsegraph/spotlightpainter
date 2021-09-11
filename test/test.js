var assert = require("assert");
import SpotlightPainter from "../dist/parsegraph-spotlightpainter";
import {BasicGLProvider} from 'parsegraph-compileprogram';
import {mockDOM} from 'node-canvas-webgl';
mockDOM(window);

describe("Package", function () {
  it("works", ()=>{
    let ctx = new BasicGLProvider();
    ctx.setExplicitSize(400, 400);
    const painter = new SpotlightPainter(ctx);
    assert.ok(painter);
  });
});
