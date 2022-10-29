import ChoiceBox from "./ChoiceBox";

export type item = {
  fact?: string;
  operator?: string;
  value?: string;
  all?: item[];
  any?: item[];
};

type Props = { items?: item[] };

export default function ChoiceBoxContainer({ items }: Props) {
  return (
    <div className="border ml-0 m-6">
      {items?.map((item, index) => {
        return Object.prototype.hasOwnProperty.call(item, "all") ? (
          LogicalContainer(ChoiceBoxContainer)
        ) : Object.prototype.hasOwnProperty.call(item, "any") ? (
          LogicalContainer(ChoiceBoxContainer)
        ) : (
          <ChoiceBox
            item={{
              fact: item.fact,
              operator: item.operator,
              value: item.value,
            }}
          />
        );

        function LogicalContainer(
          ChoiceBoxContainer: ({ items }: Props) => JSX.Element
        ): JSX.Element {
          return (
            <div className="items-center justify-center flex">
              <p className="p-4 border w-min mr-0 m-2">
                {item?.all ? "all" : "any"}
              </p>
              <div className="w-20 h-px bg-neutral-200"></div>
              {ChoiceBoxContainer({ items: item?.all ?? item?.any })}
            </div>
          );
        }
      })}
    </div>
  );
}
