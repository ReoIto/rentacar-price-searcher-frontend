import React from "react";

export default function TableHeader() {
  const headerColumns = [
    "No",
    "販売元",
    "車種",
    "乗車人数",
    "価格内容",
    "価格",
  ];

  return (
    <thead className=" bg-gray-200">
      <tr>
        {headerColumns.map((col) => {
          return (
            <th
              key={col}
              scope="col"
              className="px-6 py-3 text-xs font-bold text-left text-gray-800"
            >
              {col}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}
