import { Button } from "@sanity/ui";
import { IoMdAdd } from "react-icons/io";

export function MyInput(props: any) {
  return (
    <div>
      {props.renderDefault({ ...props, sopp: true })}
      <div className="mt-4 flex justify-center">
        <Button
          fontSize={[2, 2, 3]}
          icon={IoMdAdd}
          mode="ghost"
          padding={[3, 3, 4]}
          tone="positive"
          text="Add"
          type="button"
          onClick={() => {
            console.log("Click");
            props.onFieldClose();
          }}
        />
      </div>
    </div>
  );
}

export function DummyItem(props: any) {
  console.log("Item", { props });
  if (props.open) console.log("opened", props.value.shortDescription);
  return (
    <div>
      {props.renderDefault({ ...props, kake: true })}
      <button onClick={props.onClose}>Click me!</button>
    </div>
  );
}

export function DummyField(props: any) {
  console.log("field", { props });
  return <div>{props.renderDefault({ ...props, kanin: false })}</div>;
}

export function DummyPreview(props: any) {
  //   console.log("Preview", { props });
  return <div>{props.renderDefault({ ...props, _WUT: true })}</div>;
}
