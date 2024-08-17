import { name } from "./package.json";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "./src/main.ts",
  output: {
    format: "iife",
    file: `./dist/${name}-develop.js`,
  },
  plugins: [typescript()],
};
