import { defineConfig, presetIcons, presetWebFonts } from "unocss";
import presetUno from "@unocss/preset-uno";

export default defineConfig({
  theme: {
    colors: {
      persianBlue: {
        "50": "#eef6ff",
        "100": "#dcecff",
        "200": "#b2daff",
        "300": "#6dbcff",
        "400": "#2099ff",
        "500": "#007cff",
        "600": "#005fdf",
        "700": "#004bb4",
        "800": "#004095",
        "900": "#00357a",
        "950": "#000814",
      },
    },
  },
  presets: [
    presetWebFonts({
      provider: "fontshare",
      fonts: {
        sans: ["Cabinet Grotesk", "Satoshi"],
        serif: "Zodiak",
        display: "Sharpie"
      },
    }),
    presetUno(),
    presetIcons({
      collections: {
        hero: () =>
          import("@iconify/json/json/heroicons.json").then((i) => i.default),
        ri: () => import("@iconify/json/json/ri.json").then((i) => i.default),
      },
    }),
  ],
});
