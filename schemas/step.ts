const step = {
  name: "step",
  title: "step",
  type: "object",
  fields: [
    {
      name: "stepImage",
      title: "stepImage",
      type: "image",
      description: "Upload an image",
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 2,
    },
  ],
  preview: {
    select: {
      title: "shortDescription",
      media: "stepImage",
    },
  },
};

export default step;
