import { PortableTextBlock, PortableTextObject } from "sanity";

interface ChildNode {
  text: string;
}

interface Block {
  _type: string;
  children: ChildNode[];
}

export function portableTextToPlainText(blocks: PortableTextBlock[] = []) {
  return (
    blocks
      // loop through each block
      .map((block) => {
        // if it's not a text block with children,
        // return nothing
        if (block._type !== "block" || !block.children) {
          return "";
        }
        // loop through the children spans, and join the
        // text strings
        return (block.children as ChildNode[])
          .map((child) => child.text)
          .join("");
      })
      // join the paragraphs leaving split by two linebreaks
      .join("\n\n")
  );
}
