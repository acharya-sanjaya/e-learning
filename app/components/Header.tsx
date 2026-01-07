import Icon from "~/Icons";
import {cn} from "~/lib/utils";

interface HeaderProps {
  label: string;
  labelClassName?: string;
  menuOn: boolean; // true = menu is open, false = closed
  onMenuClick: () => void; // called when icon clicked
}

const Header = ({label, labelClassName, menuOn, onMenuClick}: HeaderProps) => {
  return (
    <div className="relative z-[999]">
      {/* Fixed header */}
      <div className="fixed inset-0 flex h-20 w-full items-center justify-center border-b-2 border-b-gray-300 backdrop-blur-md dark:border-b-slate-700">
        {/* Title */}
        <div
          className={cn(
            "mx-20 line-clamp-1 select-none text-center text-3xl font-bold",
            labelClassName,
          )}
        >
          {label}
        </div>

        {/* Hamburger or Close icon */}
        <Icon
          onClick={onMenuClick}
          iconName={menuOn ? "close" : "hamburger"}
          className={cn(
            "absolute right-4 size-10 p-1.5 active:bg-blue-500",
            !menuOn && "rounded-lg border-2 border-slate-800 dark:border-gray-200",
          )}
        />
      </div>

      {/* Spacer to prevent content overlap */}
      <div className="h-20" />
    </div>
  );
};

export default Header;
