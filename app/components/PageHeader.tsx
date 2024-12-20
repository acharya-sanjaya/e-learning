import {useNavigate} from "@remix-run/react";
import Icon, {IconNameType} from "~/Icons";
import {cn} from "~/lib/utils";

const PageHeader = ({
  iconName = "arrowLeft",
  label,
  labelClassName,
}: {
  label: string;
  labelClassName?: string;
  iconName?: IconNameType;
}) => {
  const navigate = useNavigate();
  return (
    <div className="relative z-[99999]">
      <div className="fixed inset-0 w-screen flex justify-center items-center h-20 backdrop-blur-md">
        <Icon
          onClick={() => {
            navigate(-1);
          }}
          iconName={iconName}
          className="size-8 absolute left-4"
        />
        <div className={cn("text-3xl font-bold", labelClassName)}>{label}</div>
      </div>

      <div className="h-20">
        {/* This div is to prevent the header from being covered by the content */}
      </div>
    </div>
  );
};

export default PageHeader;
