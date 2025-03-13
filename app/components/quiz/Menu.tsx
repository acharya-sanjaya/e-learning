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
      <div className="fixed inset-0 flex h-20 w-full items-center justify-center border-b-2 border-b-gray-300 backdrop-blur-md dark:border-b-slate-700">
        <Icon
          onClick={() => {
            navigate(-1);
          }}
          iconName="arrowLeft"
          className="absolute left-4 size-8 active:stroke-blue-500"
        />
        <div className="mx-20 line-clamp-1 select-none text-center text-3xl font-bold">
          {items[activeIndex]}
        </div>

        <Icon
          onClick={() => {
            setShowMenu(true);
          }}
          iconName="hamburger"
          className="absolute right-4 size-10 rounded-lg border-2 border-slate-800 p-1.5 active:bg-blue-500 dark:border-gray-200"
        />
      </div>
      <div
        className={cn(
          "fixed right-0 top-0 z-10 flex h-screen w-screen flex-col items-center gap-2 p-4 backdrop-blur-md transition-transform duration-500 md:w-[400px]",
          showMenu ? "translate-x-0" : "translate-x-full",
        )}
      >
        <Icon
          iconName="close"
          className="ml-auto size-10 backdrop:block"
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
          className="w-full flex-1"
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
