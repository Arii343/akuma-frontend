import { ReactNode } from "react";

interface ButtonProps {
  onClick?: () => void;
  className: string;
  type?: "button" | "reset" | "submit";
  children: ReactNode;
}

const Button = ({
  onClick,
  children,
  className,
  type = "button",
}: ButtonProps): React.ReactElement => {
  return (
    <button onClick={onClick} className={className} type={type}>
      {children}
    </button>
  );
};

export default Button;
