import { defineField } from "sanity";
import { BiBowlRice } from "react-icons/bi";

const recipe = {
  name: "recipe",
  title: "Recipe",
  type: "document",
  icon: BiBowlRice,
  fields: [
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      description: "Whats the recipe called",
      validation: (Rule) => Rule.required().min(5).max(45),
    }),
    defineField({
      name: "profile",
      title: "Profile",
      type: "reference",
      to: [{ type: "profile" }],
      description: "Recipe is made by",
      validation: (Rule) => [Rule.required().error("Please select a profile")],
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
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Add a custom slug for the URL or generate one from the name",
      options: { source: "headline" },
      validation: (rule) => rule.required(),
    }),
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
    {
      name: "steps",
      title: "Steps",
      type: "array",
      description: "Add Steps",
      of: [{ type: "step" }],
    },
  ],
};

export default recipe;
