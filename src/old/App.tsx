import { useState } from "react";
import "./App.css";
import Menu from "./Menu";
export default function App() {
  const [state, setState] = useState({
    name: "koch",
    attributes: [
      {
        name: "quantity",
        type: "number",
      },
      {
        name: "country",
        type: "array",
      },
    ],
    decisions: [
      {
        conditions: {
          all: [
            {
              fact: "quantity",
              operator: "greaterThan",
              value: 5,
            },
            {
              fact: "country",
              operator: "in",
              value: ["IND", "USA"],
            },
            {
              any: [
                {
                  fact: "Name",
                  operator: "equals",
                  value: "jitu",
                },
                {
                  fact: "country",
                  operator: "in",
                  value: ["IND", "USA"],
                },
              ],
            },
          ],
        },
        event: {
          type: "RESULT",
          params: {},
        },
      },
    ],
  });

  const changeOperator = (id: string, operator: string) => {};
  const operators = () => {
    return state.decisions.map((s) =>
      Object.prototype.hasOwnProperty.call(s.conditions, "all") ? "all" : "any"
    );
  };
  return (
    <div>
      {state.decisions.map((conditions, index) => {
        return (
          <div className="border p-2">
            <h1 className="text-2xl font-bold">{state.name}</h1>
            <div className="items-center justify-center flex flex-row">
              {conditions.conditions?.all ? (
                <div className="border p-2 bg-white text-sm">All</div>
              ) : (
                <div className="text-sm">Any</div>
              )}
              <div>
                <Recursive conditions={conditions} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  function Recursive(conditions: any) {
    return (
      <>
        {conditions.conditions?.all.map((condition: any, index: number) => {
          return ChoiceBlock(condition);
        })}
      </>
    );
  }
  function ChoiceBlock(
    condition:
      | { fact: string; operator: string; value: number; any?: undefined }
      | { fact: string; operator: string; value: string[]; any?: undefined }
      | {
          any: (
            | { fact: string; operator: string; value: string }
            | { fact: string; operator: string; value: string[] }
          )[];
          fact?: undefined;
          operator?: undefined;
          value?: undefined;
        }
  ): JSX.Element {
    return (
      <div className="width-min grid grid-cols-3 grid-rows-2 m-2 gap-1 items-center border px-4 py-2 bg-white rounded-sm">
        <div className="text-sm">Attribute</div>
        <div className="text-sm">Operator</div>
        <div className="text-sm">Value</div>
        <Menu
          placeholder={"Choose Attribute"}
          setState={setState}
          listitems={state.attributes.map((s) => {
            return s.name;
          })}
        />
        <Menu
          setState={setState}
          listitems={["in", "Equal", "GreaterThan"]}
          placeholder={"Choose Operator"}
        />
        {condition.operator === "in" ? (
          <Menu
            setState={setState}
            placeholder={"Enter A Value"}
            listitems={condition.value as string[]}
          />
        ) : (
          <input
            className="broder w-min-32 text-center bg-neutral-200 p-2"
            value={condition.value}
          />
        )}
      </div>
    );
  }
}
