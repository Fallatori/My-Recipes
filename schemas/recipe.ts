import { defineField } from "sanity";
import { BiUser } from "react-icons/bi";
import ingredients from "./ingredient";

const recipe = {
  name: "recipe",
  title: "Recipe",
  type: "document",
  icon: BiUser,
  fields: [
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      description: "Whats the recipe called",
      validation: (Rule) => Rule.required().min(5).max(45),
    }),
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      description: "Upload a headline Image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "ingredients",
      title: "Ingredients",
      type: "array",
      description: "Add ingredients",
      of: [{ type: "ingredient" }],
    },
  ],
};

export default recipe;
