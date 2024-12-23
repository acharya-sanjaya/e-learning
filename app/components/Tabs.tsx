import {cn} from "~/lib/utils";

interface TabsProps {
  activeIndex: number;
  options: string[];
  handleChange: (newOption: string) => void;
  className?: string;
}
export default function Tabs({options, activeIndex, handleChange, className}: TabsProps) {
  return (
    <div className="flex w-fit h-fit rounded-full overflow-hidden border border-gray-200 dark:border-gray-600 flex-nowrap">
      {options.map((option, index) => (
        <div
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key in ["Enter", " "] && handleChange(option)}
          key={option}
          className={cn(
            "font-bold text-md select-none flex items-center px-4 py-2",
            index > 0 && "border-l-2 border-l-gray-200 dark:border-l-gray-600",
            activeIndex === index
              ? "bg-gray-800 text-white dark:bg-gray-200 dark:text-black"
              : "bg-gray-300 dark:bg-gray-500",
            className
          )}
          onClick={() => handleChange(option)}
        >
          {option}
        </div>
      ))}
    </div>
  );
}
