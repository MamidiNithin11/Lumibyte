import React from "react";

export default function TableResponse({ table }) {
  if (!table || table.length === 0) return null;

  return (
    <table className="mt-3 text-sm bg-white dark:bg-gray-900 rounded w-full">
      <tbody>
        {table.map((row, i) => (
          <tr key={i} className="border-b dark:border-gray-700">
            <td className="px-3 py-2 font-semibold">{row.key}</td>
            <td className="px-3 py-2">{String(row.value)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
