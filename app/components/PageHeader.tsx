import {useNavigate} from "@remix-run/react";
import Icon from "~/Icons";
import {cn} from "~/lib/utils";

const PageHeader = ({label, labelClassName}: {label: string; labelClassName?: string}) => {
  const navigate = useNavigate();
  return (
    <div className="relative flex justify-center items-center mb-10">
      <Icon
        thickness={2}
        onClick={() => {
          navigate(-1);
        }}
        iconName="close"
        className="size-8 absolute left-0"
      />
      <div className={cn("text-3xl font-bold", labelClassName)}>{label}</div>
    </div>
  );
};

export default PageHeader;
