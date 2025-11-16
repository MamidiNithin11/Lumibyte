import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function MessageBubble({ sender, message, table, children }) {
  const isUser = sender === "user";

  return (
    <div className={`w-full flex mb-4 ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`
          max-w-3xl px-4 py-3 rounded-2xl text-sm shadow
          ${isUser
            ? "bg-blue-600 text-white"
            : "bg-gray-100"}
        `}
        style={{ lineHeight: "1.6" }}
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  style={oneDark}
                  PreTag="div"
                  language={match[1]}
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className="bg-gray-300 px-1 py-0.5 rounded text-red-600" {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {message}
        </ReactMarkdown>
        {table && table.length > 0 && (
          <div className="mt-3 rounded bg-white border">
            <table className="text-sm w-full">
              <tbody>
                {table.map((row, i) => (
                  <tr key={i} className="border-b">
                    <td className="p-2 font-semibold w-40">{row.key}</td>
                    <td className="p-2">{String(row.value)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
