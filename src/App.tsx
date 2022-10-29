import { useState } from "react";
import ChoiceBoxContainer, { item } from "./ChoiceBoxContainer";
import Editor from "./Editor";
function App() {
  const [details, setDetails] = useState<item[]>([
    {
      any: [
        {
          fact: "quantity",
          operator: "greaterThan",
          value: "5",
        },
        {
          fact: "country",
          operator: "in",
          value: "IND",
        },
        {
          all: [
            {
              fact: "quantity",
              operator: "greaterThan",
              value: "23",
            },
            {
              fact: "country",
              operator: "in",
              value: "IND",
            },
          ],
        },
      ],
    },
  ]);
  return (
    <div className="flex flex-col justify-center items-center p-10">
      <div className="flex flex-row">
        <div className="flex flex-col">
          <h1 className="text-2xl font-medium">Rules Engine Visual Editor</h1>
          <ChoiceBoxContainer items={details} />
        </div>
        <Editor source={details} setSource={setDetails} />
      </div>
    </div>
  );
}

export default App;
