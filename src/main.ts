import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "virtual:uno.css";
import { router } from "./router.ts";
import MarkdownIt from "markdown-it";
import Shiki from "@shikijs/markdown-it";
import { transformerNotationHighlight } from "@shikijs/transformers";

export const md = MarkdownIt();
md.use(
  await Shiki({
    theme: "catppuccin-latte",
    transformers: [transformerNotationHighlight()],
  }),
);

createApp(App).use(router).mount("#app");
