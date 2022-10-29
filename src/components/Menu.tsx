import { useState } from "react";

type Props = { listitems: string[]; placeholder: string };

export default function Menu({ listitems, placeholder }: Props) {
  const [currentSelected, setCurrentSelected] = useState(placeholder);

  const [showOptions, setShowOptions] = useState(false);
  return (
    <div className="cursor-pointer  w-min-32 border-1">
      <div
        className={`${
          currentSelected === placeholder && "text-neutral-400"
        } italic border p-1 text-center text-sm font-regular border-neutral-300 rounded-sm`}
        onClick={() => setShowOptions((e) => !e)}
      >
        {currentSelected}
      </div>
      {showOptions && (
        <div className="w-32 shadow-md bg-neutral-800 absolute flex flex-col items-center border">
          {listitems.map((item, index) => {
            return (
              <div
                key={index}
                className="p-2 w-min-32 text-neutral-200 hover:text-white text-center"
                onClick={() => {
                  setCurrentSelected(item);
                  setShowOptions((e) => !e);
                }}
              >
                {item}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
