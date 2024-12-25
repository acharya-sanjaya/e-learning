import {cn} from "~/lib/utils";

interface TabsProps {
  activeIndex: number;
  options: string[];
  handleChange: (newOption: string) => void;
  className?: string;
}
export default function Tabs({options, activeIndex, handleChange, className}: TabsProps) {
  return (
    <div className="flex w-fit h-fit rounded-full overflow-hidden border border-gray-100 dark:border-slate-900 flex-nowrap">
      {options.map((option, index) => (
        <div
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key in ["Enter", " "] && handleChange(option)}
          key={option}
          className={cn(
            "font-bold text-sm select-none flex items-center px-4 py-2",
            index > 0 && "border-l-2 border-l-gray-100 dark:border-l-slate-900",
            activeIndex === index
              ? "bg-slate-900 text-gray-100 dark:bg-gray-100 dark:text-slate-900"
              : "bg-gray-300 dark:bg-slate-700",
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
