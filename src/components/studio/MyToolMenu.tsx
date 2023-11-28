// ./components/custom-toolmenu.tsx|jsx

import { ToolMenuProps, ToolLink } from "sanity";
import { Button, Flex } from "@sanity/ui";
import Link from "next/link";

export function CustomToolMenu(props: ToolMenuProps) {
  const { activeToolName, context, tools } = props;
  const isSidebar = context === "sidebar";

  // Change flex direction depending on context
  const direction = isSidebar ? "column" : "row";
  console.log(props);

  return (
    <Flex gap={1} direction={direction}>
      {tools.map((tool) => (
        <Button
          as={ToolLink}
          icon={tool.icon}
          key={tool.name}
          name={tool.name}
          padding={3}
          selected={tool.name === activeToolName}
          text={tool.title || tool.name}
          tone="primary"
        />
      ))}
      <Button as={Link} padding={3} text="Home" tone="primary" href="/" />
    </Flex>
  );
}
