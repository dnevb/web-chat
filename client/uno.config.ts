import presetUno from "@unocss/preset-uno";
import presetWebFonts from "@unocss/preset-web-fonts";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import { defineConfig } from "unocss";

const css: any = ({ theme }) =>
  `* {
  font-family: "Public Sans", sans-serif;
  color: ${theme["colors"]["text"]};
}
svg {
  width: 100%;
  height: 100%;
}
`;

export default defineConfig({
  theme: {
    colors: {
      text: "#f4f3ee",
      brand: "#e0afa0",
      background: {
        light: "#001C36",
        normal: "#001022",
        dark: "#000814",
      },
    },
  },
  preflights: [{ getCSS: css }],
  transformers: [transformerVariantGroup()],
  presets: [
    presetUno({ dark: "media" }),
    presetWebFonts({ fonts: { sans: "Nunito Sans" } }),
  ],
});
