type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  color?: 'practiceRed' | 'practiceGrey' | 'practiceWhite';
  className?: string; // optional for future customization
};

export function Button({ children, onClick, color = 'practiceRed', className }: ButtonProps) {
  const baseClass = 'font-medium px-6 py-2.5 rounded-lg shadow-md transition-all duration-150 transform hover:scale-105';
  let colorClass = '';

  if (color === 'practiceRed') {
    colorClass = 'bg-practiceRed text-white hover:bg-practiceRed/90';
  } else if (color === 'practiceGrey') {
    colorClass = 'bg-practiceGrey text-white hover:bg-practiceGrey/90';
  } else if (color === 'practiceWhite') {
    colorClass = 'bg-practiceWhite text-practiceGrey border border-practiceGrey hover:bg-practiceGrey/10';
  }

  return (
    <button onClick={onClick} className={`${baseClass} ${colorClass} ${className ?? ''}`}>
      {children}
    </button>
  );
}
