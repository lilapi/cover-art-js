![Little Eagle logo](assets/logo-700-black.svg)

# Little Eagle: Generate beautiful images on the fly.

Works with:

- Remix
- Next.js
- Express

## Get Started

```bash
npm add @littleeagle/images-node
```

## Usage

### As a GitHub User:

```ts
import { gitHubTemplateURL } from "@littleeagle/images-node";

const imageURL = gitHubTemplateURL({
  username: "BurntCaramel",
  backgroundColor: "#00b4ff",
  text: [
    { text: "First", size: 17, color: "#aaa" },
    { text: "Second", size: 23, color: "#bbb" },
  ],
  authorName: 'some-author',
  website: 'example.org',
});

// Use `imageURL` e.g. as the value in a `og:image` meta tag or src of an `<img>`.
```

#### `transformColor` option

```ts
import { gitHubTemplateURL } from "@littleeagle/images-node";

const imageURL = gitHubTemplateURL({
  username: "BurntCaramel",
  backgroundColor: "black",
  text: [
    { text: "First", size: 17, color: "red" },
    { text: "Second", size: 23, color: "red" },
  ],
  authorName: 'some-author',
  website: 'example.org',
}, {
  transformColor(input: string): string {
    switch (input) {
      case 'black': return '#000';
      case 'red': return '#f00';
      default: return input;
    }
  }
});

// Use `imageURL` e.g. as the value in a `og:image` meta tag or src of an `<img>`.
```

If you use Tailwind, you can use `transformColor` to transform say `red-500` into the Tailwind color. [Read out blog post on using Tailwind’s colors](https://little-eagle.fly.dev/blog/tailwind-colors) for more.

### With a LittleEagle.io Project:

1. [Sign up](https://littleeagle.io/api/auth/signin) to create a free account on
   [littleeagle.io](https://littleeagle.io/)
2. Find your project ID and secret in the Little Eagle dashboard. Set these as
   environment variables (suggested names: `LITTLE_EAGLE_PROJECT_ID` and
   `LITTLE_EAGLE_PROJECT_SECRET`).
   - Here’s how you
     [add environment variables using Vercel](https://vercel.com/support/articles/how-to-add-vercel-environment-variables).
3. Install the Little Eagle node package: `npm add @littleeagle/images-node`
4. Call the `littleEagleImagesURL()` function to generate your images URL. An example is provided below. It’s
   recommended you do this on the server as your secret shouldn’t be made
   public.

```ts
import { littleEagleImagesURL } from "@littleeagle/images-node";

const imageURL = littleEagleImagesURL({
  id: process.env.LITTLE_EAGLE_PROJECT_ID,
  secret: process.env.LITTLE_EAGLE_PROJECT_SECRET,
}, {
  template: "plain", // "plain" or "overlay" supported.
  // Any of the below options can be dynamic.
  // e.g. Load your text or image from your database or content management system!
  backgroundColor: "#00b4ff",
  imageURL:
    "https://images.unsplash.com/photo-1606890658317-7d14490b76fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNuZWFrZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
  text: [
    { text: "First", size: 17, color: "#aaa" },
    { text: "Second", size: 23, color: "#bbb" },
  ],
});

// Use `imageURL` e.g. as the value in a `og:image` meta tag.
```

## Example

- Remix: [little-eagle-remix-colors](https://github.com/littleeagleio/little-eagle-remix-colors)
