import React from "react";
import {cn} from "~/lib/utils";
interface GridContainerProps {
  children: React.ReactNode;
  width?: "small" | "medium" | "large";
}

export default function GridContainer({children, width = "small"}: GridContainerProps) {
  return (
    <div
      className={cn(
        "grid gap-4",
        width === "small" && "grid-cols-[repeat(auto-fill,minmax(150px,1fr))]",
        width === "medium" && "grid-cols-[repeat(auto-fill,minmax(200px,1fr))]",
        width === "large" && "grid-cols-[repeat(auto-fill,minmax(250px,1fr))]",
      )}
    >
      {children}
    </div>
  );
}
