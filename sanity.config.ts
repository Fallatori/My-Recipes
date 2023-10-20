import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "default",
  title: "sanity-recipes",

  projectId: "mqoc5xyt",
  dataset: "production",
  basePath: "/studio",

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
});
