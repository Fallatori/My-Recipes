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
    input: MyInput,
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
