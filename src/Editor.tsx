import { Dispatch, SetStateAction, useState } from "react";
import { item } from "./ChoiceBoxContainer";
type Props = { source: item[]; setSource: Dispatch<SetStateAction<item[]>> };

export default function Editor({ source, setSource }: Props) {
  const [editorJson, setEditorJson] = useState<item[]>(source);

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl">Editor</h1>
      <button
        className="bg-blue-500 p-2 text-white font-medium rounded-sm"
        onClick={() => {
          setSource(editorJson);
        }}
      >
        Update
      </button>
      {/* <JSONInput
        placeholder={editorJson}
        height="550px"
        theme="dark_vscode_tribute" // light_mitsuketa_tribute
        onChange={(e: any) => {
          setEditorJson(e.jsObject);
          console.log(e.jsObject);
        }}
      /> */}
      <textarea
        className="h-96 min-h-96 w-96 p-4 bg-neutral-50 border overflow-y-auto"
        value={JSON.stringify(editorJson, undefined, 4)}
        onChange={(e) => setEditorJson(JSON.parse(e.target.value))}
      />
    </div>
  );
}
