import React from "react";

import { useStateContext } from "../contexts/ContextProvider";

const Button = ({
  icon,
  bgColor,
  color,
  bgHoverColor,
  size,
  text,
  borderRadius,
  width,
}) => {
  const { setIsClicked, initialState } = useStateContext();

  return (
    <button
      type="button"
      onClick={() => setIsClicked(initialState)}
      //style={{ backgroundColor: bgColor, color, borderRadius }}
      style={{
        background: "linear-gradient(to bottom, #a3eef1, #38c0d2)",
        color: "black",
      }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor} hover:text-blue-500`}
      onMouseEnter={(e) => {
        e.currentTarget.style.background =
          "linear-gradient(to bottom, #4e4b55, #26222e)";
        e.currentTarget.style.color = "white";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background =
          "linear-gradient(to bottom, #a3eef1, #38c0d2)";
        e.currentTarget.style.color = "black";
      }}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
