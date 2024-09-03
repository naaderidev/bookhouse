import React from "react";

export default function Badge({
  param,
  trueText,
  trueColor,
  falseText,
  falseColor,
}) {
  return (
    <span
      className={`text-brown-100 text-sm font-MorabbaLight px-3 py-1 rounded-md ${
        param === true ? trueColor : falseColor
      }`}
    >
      {param ? trueText : falseText}
    </span>
  );
}
