import {
  DummyField,
  DummyItem,
  DummyPreview,
  MyInput,
} from "@/components/studio/MyInput";

const step = {
  name: "step",
  title: "step",
  type: "object",
  components: {
    field: DummyField,
    input: MyInput,
    item: DummyItem,
    preview: DummyPreview,
  },
  fields: [
    {
      name: "stepImage",
      title: "stepImage",
      type: "image",
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
