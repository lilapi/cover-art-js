import { test } from "uvu";
import * as assert from "uvu/assert";
import { littleEagleImagesURL } from "./index";

test("littleEagleImagesURL()", () => {
  assert.is(
    littleEagleImagesURL({ id: "abc", secret: "xyz" }, {
      template: "plain",
      backgroundColor: "#00b4ff",
      imageURL:
        "https://images.unsplash.com/photo-1606890658317-7d14490b76fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNuZWFrZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
      text: [
        { text: "First", size: 17, color: "#aaa" },
        { text: "Second", size: 23, color: "#bbb" },
      ],
    }),
    "https://cdn.littleeagle.io/1/p/abc/plain?t1=First&t1-size=17&t1-color=%23aaa&t2=Second&t2-size=23&t2-color=%23bbb&bg-color=%2300b4ff&img=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1606890658317-7d14490b76fd%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNuZWFrZXJ8ZW58MHx8MHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D600%26q%3D60&s=9928519b717414dce664a7a180150e9e0db659f3519a0dd0d008567b2f07eedb",
  );

  assert.is(
    littleEagleImagesURL({ id: "abc", secret: "xyz" }, {
      template: "overlay",
      backgroundColor: "#00b4ff",
      imageURL:
        "https://images.unsplash.com/photo-1606890658317-7d14490b76fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNuZWFrZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
      text: [
        { text: "First", size: 17, color: "#aaa" },
        { text: "Second", size: 23, color: "#bbb" },
      ],
    }),
    "https://cdn.littleeagle.io/1/p/abc/overlay?t1=First&t1-size=17&t1-color=%23aaa&t2=Second&t2-size=23&t2-color=%23bbb&bg-color=%2300b4ff&img=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1606890658317-7d14490b76fd%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNuZWFrZXJ8ZW58MHx8MHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D600%26q%3D60&s=79ece2529fecefcdc25e7eb65c540e2e4b650c3ed5362ff35c0f66b2ba935701",
  );
});

test.run();
