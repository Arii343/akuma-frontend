import { ReactNode } from "react";

interface ButtonProps {
  onClick?: () => void;
  className: string;
  type?: "button" | "reset" | "submit";
  ariaLabel?: string;
  children: ReactNode;
}

const Button = ({
  onClick,
  className,
  type = "button",
  ariaLabel = "",
  children,
}: ButtonProps): React.ReactElement => {
  return (
    <button
      onClick={onClick}
      className={className}
      type={type}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
