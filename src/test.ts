import { test } from "uvu";
import * as assert from "uvu/assert";
import { littleEagleImagesURL } from "./index";

test("littleEagleImagesURL()", () => {
  assert.is(
    littleEagleImagesURL({ id: "abc", secret: "xyz" }, {
      template: "plain",
      backgroundColor: "#00b4ff",
      text: [
        { text: "First", size: 17, color: "#aaa" },
        { text: "Second", size: 23, color: "#bbb" },
      ],
    }),
    "https://cdn.littleeagle.io/1/p/abc/plain?t1=First&t1-size=17&t1-color=%23aaa&t2=Second&t2-size=23&t2-color=%23bbb&bg-color=%2300b4ff&s=c950e58a395f384b6d6309a2ad0566db564fa11169a10c544e37540175fc91ac",
  );

  assert.is(
    littleEagleImagesURL({ id: "abc", secret: "xyz" }, {
      template: "overlay",
      backgroundColor: "#00b4ff",
      text: [
        { text: "First", size: 17, color: "#aaa" },
        { text: "Second", size: 23, color: "#bbb" },
      ],
    }),
    "https://cdn.littleeagle.io/1/p/abc/overlay?t1=First&t1-size=17&t1-color=%23aaa&t2=Second&t2-size=23&t2-color=%23bbb&bg-color=%2300b4ff&s=63cb87aff503b92c46a192cfb546634ac96eef71aee3424803eb69ac8b25bdf1",
  );
});

test.run();
