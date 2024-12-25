import {cn} from "~/lib/utils";

interface SelectProps {
  value: boolean;
  handleChange: () => void;
  labelOn?: string;
  labelOff?: string;
  className?: string;
  switchSize?: number;
  labelClassName?: string;
  bgOn?: string;
  bgOff?: string;
  borderOn?: string;
  borderOff?: string;
}

const Select = ({
  value,
  handleChange,
  className,
  labelOn,
  labelOff,
  labelClassName,
  switchSize = 50,
  bgOn = "bg-blue-400",
  bgOff = "bg-gray-300 dark:bg-gray-500",
  borderOn = "border-blue-400",
  borderOff = "border-gray-300 dark:border-gray-500",
}: SelectProps) => {
  switchSize < 0 && 0;
  return (
    <div
      className={cn("flex items-center gap-4 w-fit", className)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key in ["Enter", " "] && handleChange()}
      onClick={handleChange}
    >
      <div
        className="w-12 h-6 rounded-full overflow-hidden"
        style={{
          width: switchSize,
          height: switchSize / 2,
        }}
      >
        <div
          className={cn("relative flex justify-center h-full rounded-full transition-transform")}
          style={{
            width: switchSize * 1.5,
            height: switchSize / 2,
            transform: `translateX(${value ? 0 : -switchSize / 2}px)`,
          }}
        >
          <div className={cn("w-1/2", bgOn)}></div>
          <div className={cn("w-1/2", bgOff)}></div>
          <div
            className={cn(
              "absolute h-full bg-gray-100 rounded-full border-4",
              value ? borderOn : borderOff
            )}
            style={{
              width: switchSize / 2,
            }}
          ></div>
        </div>
      </div>
      {labelOn && labelOff && (
        <div className={cn("select-none text-4xl font-bold", labelClassName)}>
          {value ? labelOn : labelOff}
        </div>
      )}
    </div>
  );
};

export default Select;
