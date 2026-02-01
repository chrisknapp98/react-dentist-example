type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  color?: "practiceRed" | "practiceGrey" | "practiceWhite";
  className?: string; // optional for future customization
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export function Button({
  children,
  onClick,
  color = "practiceRed",
  className,
  type = "button",
  disabled,
}: ButtonProps) {
  const baseClass =
    "font-medium px-6 py-2.5 rounded-full shadow-md transition-transform duration-200 ease-out transform-gpu hover:scale-[1.03] active:scale-[0.99]";
  let colorClass = '';

  if (color === "practiceRed") {
    colorClass = "bg-practiceRed text-white hover:bg-practiceRed/90";
  } else if (color === "practiceGrey") {
    colorClass = "bg-practiceGrey text-white hover:bg-practiceGrey/90";
  } else if (color === "practiceWhite") {
    colorClass =
      "bg-practiceWhite text-practiceGrey border border-practiceGrey hover:bg-practiceGrey/10";
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClass} ${colorClass} ${className ?? ""} ${disabled ? "opacity-60" : ""}`}
    >
      {children}
    </button>
  );
}
