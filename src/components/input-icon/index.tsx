import React from "react";
import { IconBaseProps } from "react-icons";
import { cn } from "../../lib/utils";

interface InputIconProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ComponentType<IconBaseProps>;
  iconSize?: number;
}

const InputIcon: React.FC<InputIconProps> = ({
  icon: Icon,
  iconSize = 24,
  className,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={cn(
        "h-14 w-14 rounded-l-md border flex items-center justify-center",
        className
      )}
    >
      {<Icon size={iconSize} />}
    </div>
  );
};

export default InputIcon;
