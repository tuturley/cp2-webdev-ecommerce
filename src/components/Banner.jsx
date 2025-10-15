import React from "react";

export default function Banner({ title, subtitle }) {
  return (
    <div className="bg-blue-100 rounded-lg p-4 mb-4 text-center">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600">{subtitle}</p>
    </div>
  );
}
