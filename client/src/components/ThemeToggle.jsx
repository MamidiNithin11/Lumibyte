import React from "react";

export default function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-3 py-2 border rounded dark:border-gray-600"
    >
      {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
