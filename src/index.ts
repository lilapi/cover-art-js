import * as crypto from "crypto";

export interface TemplateOptions {
  template: "plain" | "overlay" | "message";
  width?: number;
  height?: number;
  text: Array<{ text: string; size: number | `${number}`; color: string }>;
  backgroundColor?: string;
  imageURL?: string;
  imagePosition?: "left" | "right";
  logoURL?: string;
}

function projectTemplateURL(
  projectID: string,
  options: TemplateOptions,
) {
  const url = new URL(
    `https://cdn.littleeagle.io/1/p/${projectID}/${options.template}`,
  );
  for (const [index, line] of Array.from(options.text.entries())) {
    const base = `t${index + 1}`;
    url.searchParams.set(base, line.text);
    url.searchParams.set(`${base}-size`, `${line.size}`);
    url.searchParams.set(`${base}-color`, line.color);
  }

  if (typeof options.width === "number") {
    url.searchParams.set("w", options.width.toString());
  }
  if (typeof options.height === "number") {
    url.searchParams.set("h", options.height.toString());
  }
  if (typeof options.backgroundColor === "string") {
    url.searchParams.set("bg-color", options.backgroundColor);
  }
  if (typeof options.imageURL === "string") {
    url.searchParams.set("img", options.imageURL);
  }
  if (typeof options.imagePosition === "string") {
    url.searchParams.set("img-pos", options.imagePosition);
  }
  if (typeof options.logoURL === "string") {
    url.searchParams.set("logo", options.logoURL);
  }

  return url;
}

export function littleEagleImagesURL(
  project: { id: string; secret: string },
  options: TemplateOptions,
) {
  const baseURL = projectTemplateURL(project.id, options);
  const signature = crypto.createHmac("sha256", project.secret).update(
    baseURL.pathname + baseURL.search,
  ).digest("hex");
  baseURL.searchParams.set("s", signature);
  return baseURL.toString();
}

export interface GitHubTemplateOptions {
  username: string;
  width?: number;
  height?: number;
  text: Array<{ text: string; size: number | `${number}`; color: string }>;
  backgroundColor?: string;
}
export function gitHubTemplateURL(
  options: GitHubTemplateOptions,
) {
  const url = new URL(
    `https://cdn.littleeagle.io/1/github/${options.username}`,
  );
  for (const [index, line] of Array.from(options.text.entries())) {
    const base = `t${index + 1}`;
    url.searchParams.set(base, line.text);
    url.searchParams.set(`${base}-size`, `${line.size}`);
    url.searchParams.set(`${base}-color`, line.color);
  }

  if (typeof options.width === "number") {
    url.searchParams.set("w", options.width.toString());
  }
  if (typeof options.height === "number") {
    url.searchParams.set("h", options.height.toString());
  }
  if (typeof options.backgroundColor === "string") {
    url.searchParams.set("bg-color", options.backgroundColor);
  }

  return url.toString();
}
