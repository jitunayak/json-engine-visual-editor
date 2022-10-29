import { item } from "./ChoiceBoxContainer";
import Menu from "./old/Menu";

type Props = { item: item };

export default function ChoiceBox({ item }: Props) {
  return (
    <div className=" text-sm w-auto p-2 m-4 font-medium grid grid-cols-3 gap-2">
      <div className="text-sm text-neutral-600">Attribute</div>
      <div className="text-sm text-neutral-600">Operator</div>
      <div className="text-sm text-neutral-600">Value</div>
      <Menu
        placeholder={"Choose Attribute"}
        listitems={["quantity", "country"]}
      />
      <Menu
        listitems={["in", "Equal", "GreaterThan"]}
        placeholder={"Choose Operator"}
      />
      {item.operator === "in" ? (
        <Menu placeholder={"Enter A Value"} listitems={["USA", "IND"]} />
      ) : (
        <input
          className="broder w-min-32 text-center bg-neutral-200 p-2"
          value={item.value}
        />
      )}
    </div>
  );
}
