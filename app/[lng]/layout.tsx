import React from "react";

export default function Layout({
  children,
  sidebar,
  details,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  details: React.ReactNode;
}) {
  return (
    <div className="flex flex-col [&_a]:underline">
      <div className="flex flex-row">
        <div className="flex flex-col w-60 p-2 border border-gray-200">
          {sidebar}
        </div>
        <div className="flex-1 flex flex-col  border border-gray-200">
          {details}
        </div>
      </div>
      {children}
    </div>
  );
}
