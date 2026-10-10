import { BUTTON_INTERACTION_CLASS } from "./buttonStyles";

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
    `font-medium px-6 py-4 sm:px-8 text-base sm:text-lg leading-tight rounded-full border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-practiceRed ${BUTTON_INTERACTION_CLASS}`;
  let colorClass = '';

  if (color === "practiceRed") {
    colorClass = "border-practiceRed bg-practiceRed text-white [@media(hover:hover)]:enabled:hover:bg-transparent [@media(hover:hover)]:enabled:hover:text-practiceRed";
  } else if (color === "practiceGrey") {
    colorClass = "border-practiceGrey bg-practiceGrey text-white [@media(hover:hover)]:enabled:hover:bg-transparent [@media(hover:hover)]:enabled:hover:text-practiceGrey";
  } else if (color === "practiceWhite") {
    colorClass =
      "border-practiceGrey bg-practiceWhite text-practiceGrey [@media(hover:hover)]:enabled:hover:bg-transparent";
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
