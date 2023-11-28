import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";
import { visionTool } from "@sanity/vision";
import { tags } from "sanity-plugin-tags";
import { CustomToolMenu } from "@/components/studio/MyToolMenu";

export default defineConfig({
  name: "default",
  title: "sanity-recipes",

  projectId: "mqoc5xyt",
  dataset: "production",
  basePath: "/studio",

  plugins: [deskTool(), visionTool(), tags({})],

  schema: {
    types: schemaTypes,
  },

  studio: {
    components: {
      toolMenu: CustomToolMenu,
    },
  },
});
