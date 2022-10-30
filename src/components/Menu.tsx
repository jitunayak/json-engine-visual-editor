import { useState } from "react";

type Props = { listitems: string[]; placeholder: string; selected?: string };

export default function Menu({ listitems, placeholder, selected }: Props) {
  const [currentSelected, setCurrentSelected] = useState(placeholder);

  const [showOptions, setShowOptions] = useState(false);
  return (
    <div className="cursor-pointer  w-min-32 border-1">
      <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-blue-600">
        {listitems.map((item, index) => {
          return (
            <option
              key={index}
              selected={selected === item}
              onClick={() => {
                setCurrentSelected(item);
                setShowOptions((e) => !e);
              }}
            >
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}
