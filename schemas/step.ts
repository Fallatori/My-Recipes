const step = {
  name: "step",
  title: "step",
  type: "object",
  fields: [
    {
      name: "stepImage",
      title: "stepImage",
      type: "image",
      fields: [
        {
          name: "flip",
          title: "Flip",
          type: "boolean",
        },
      ],
      description: "Upload an image",
      validation: (Rule: {
        custom: (
          arg0: (value: { asset: any }) => true | { message: string }
        ) => any;
      }) => [
        Rule.custom((value: { asset: any }) => {
          return value && value.asset
            ? true
            : {
                message: "An Image is Required!",
              };
        }),
      ],
    },
    {
      name: "shortDescription",
      title: "Short Description",
      type: "array",
      of: [{ type: "block" }],
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
