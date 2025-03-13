import React from "react";

export default function GridContainer({children}: {children: React.ReactNode}) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-4">{children}</div>
  );
}
