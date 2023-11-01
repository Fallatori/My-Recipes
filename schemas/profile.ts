import { defineField } from "sanity";
import { BiUser } from "react-icons/bi";

const profile = {
  name: "profile",
  title: "Profile",
  type: "document",
  icon: BiUser,
  fields: [
    defineField({
      name: "username",
      title: "Username",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    {
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      description: "Upload a profile picture",
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
      name: "shortBio",
      title: "Short Bio",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required().min(10).max(50),
    }),
    {
      name: "email",
      title: "Email Address",
      type: "string",
    },
  ],
};

export default profile;
