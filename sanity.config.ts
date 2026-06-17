import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./src/sanity/schemaTypes";
import { apiVersion, dataset, projectId } from "./src/sanity/env";

export default defineConfig({
  basePath: "/studio",
  name: "makecloud",
  title: "MakeCloud CMS",
  projectId,
  dataset,
  plugins: [structureTool()],
  schema,
});