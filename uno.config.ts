import {
  defineConfig,
  presetIcons,
  presetWebFonts,
  transformerDirectives,
} from "unocss";
import type { Theme } from "@unocss/preset-uno";
import presetUno from "@unocss/preset-uno";
import presetTheme from "unocss-preset-theme";

export default defineConfig({
  content: {
    filesystem: ["src/**/*.{ts,tsx}"],
  },
  theme: {
    colors: {
      darkslate: {
        50: "#3D3D3D",
        100: "#2C2C2C",
        200: "#262626",
        300: "#202020",
        400: "#1A1A1A",
        500: "#171717",
        600: "#141414",
        700: "#111111",
        800: "#0E0E0E",
        900: "#0B0B0B",
      },
      primary: {
        100: "#F9CDD3",
        200: "#F3A3AA",
        300: "#EC7981",
        400: "#E64F59",
        500: "#E63946",
        600: "#CF2F3D",
        700: "#B82534",
        800: "#A01B2B",
        900: "#891321",
      },
    },
  },
  presets: [
    presetWebFonts({
      provider: "fontshare",
      fonts: {
        sans: ["Cabinet Grotesk", "Satoshi"],
        serif: "Zodiak",
        display: "Sharpie",
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
    presetTheme<Theme>({
      theme: {},
    }),
  ],
  transformers: [transformerDirectives()],
});
