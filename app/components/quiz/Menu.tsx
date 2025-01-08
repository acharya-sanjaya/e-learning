import {useNavigate} from "@remix-run/react";
import {useState} from "react";
import Icon from "~/Icons";
import {cn} from "~/lib/utils";
import Button from "~/components/Button";

interface MenuProps {
  items: string[];
  activeIndex?: number;
  handleChangeItem: (x: number) => void;
}

const Menu = ({items, activeIndex = 0, handleChangeItem}: MenuProps) => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="relative z-[999]">
      <div className="fixed inset-0 w-full flex justify-center items-center h-20 backdrop-blur-md border-b-2 border-b-gray-300 dark:border-b-slate-700">
        <Icon
          onClick={() => {
            navigate(-1);
          }}
          iconName="arrowLeft"
          className="size-8 absolute left-4 active:stroke-blue-500"
        />
        <div className="text-3xl text-center font-bold select-none mx-20 line-clamp-1">
          {items[activeIndex]}
        </div>

        <Icon
          onClick={() => {
            setShowMenu(true);
          }}
          iconName="hamburger"
          className="size-10 absolute right-4 border-2 border-slate-800 dark:border-gray-200 p-1.5 rounded-lg active:bg-blue-500"
        />
      </div>
      <div
        className={cn(
          "fixed top-0 right-0 p-4 flex flex-col items-center gap-2 w-screen md:w-[400px] h-screen z-10 backdrop-blur-md transition-transform duration-500",
          showMenu ? "translate-x-0" : "translate-x-full"
        )}
      >
        <Icon
          iconName="close"
          className="size-10 ml-auto backdrop:block"
          thickness={2}
          onClick={() => {
            setShowMenu(false);
          }}
        />
        {items.map((item, index) => (
          <Button
            key={index}
            isActive={index === activeIndex}
            label={item}
            className="w-full"
            onClick={() => {
              handleChangeItem(index);
            }}
          />
        ))}
        <div
          className="flex-1 w-full"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e}
          onClick={() => {
            setShowMenu(false);
          }}
        ></div>
      </div>

      <div className="h-20">
        {/* This div is to prevent the header from being covered by the content */}
      </div>
    </div>
  );
};

export default Menu;
