import React from "react";

export default function GridContainer({children}: {children: React.ReactNode}) {
  return (
    <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(150px,1fr))]">{children}</div>
  );
}
