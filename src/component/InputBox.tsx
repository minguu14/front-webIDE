import React from "react";

export default function InputBox({ type, placeholder }: any) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-96 h-11 border-2 rounded p-6 mb-2"
    />
  );
}
