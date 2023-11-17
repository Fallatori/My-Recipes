import { Button } from "@sanity/ui";
import { IoMdAdd } from "react-icons/io";

export function MyInput(props: any) {
  console.log({ props });
  return (
    <div>
      {props.renderDefault(props)}
      <Button
        fontSize={[2, 2, 3]}
        icon={IoMdAdd}
        mode="ghost"
        padding={[3, 3, 4]}
        tone="positive"
        text="Add"
        type="button"
      />
    </div>
  );
}

export function DummyItem(props: any) {
  console.log("Item", { props });
  if (props.open) console.log("opened", props.value.shortDescription);
  return <div>{props.renderDefault(props)}</div>;
}

export function DummyField(props: any) {
  console.log("field", { props });
  return <div>{props.renderDefault(props)}</div>;
}

export function DummyPreview(props: any) {
  console.log("Preview", { props });
  return <div>{props.renderDefault(props)}</div>;
}
