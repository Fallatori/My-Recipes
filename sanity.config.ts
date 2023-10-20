import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";
import { visionTool } from "@sanity/vision";

export default defineConfig({
  name: "default",
  title: "sanity-recipes",

  projectId: "mqoc5xyt",
  dataset: "production",
  basePath: "/studio",

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
