import { PreviewValue } from "sanity";

const ingredient = {
  name: "ingredient",
  title: "Ingredient",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "amount",
      title: "Amount",
      type: "string",
    },
  ],
  preview: {
    select: {
      ingredient: "name",
      amount: "amount",
    },
    // Displays Ingredient and amount in the preview
    prepare({ ingredient, amount }: PreviewProps): PreviewValue {
      return {
        title: `${ingredient} ${amount}`,
      };
    },
  },
};

interface PreviewProps {
  ingredient?: string;
  amount?: string;
}

export default ingredient;
