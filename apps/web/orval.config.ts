import { defineConfig } from "orval";

// TODO: アーキテクチャを決めたら出力先を変更する
export default defineConfig({
  api: {
    input: "../../openapi.yaml",
    output: {
      mode: "tags-split",
      target: "src/generated/api.ts",
      schemas: "src/generated/model",
      client: "react-query",
      clean: true,
    },
  },
});
