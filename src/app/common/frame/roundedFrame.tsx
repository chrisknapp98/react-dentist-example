type RoundedFrameProps = {
  title: string;
  children?: React.ReactNode;
  className?: string;
  bodyClassName?: string;
};

export function RoundedFrame({
  title,
  children,
  className,
  bodyClassName = "p-4",
}: RoundedFrameProps) {
  return (
    <div
      className={`max-w-[45ch] rounded-2xl bg-practiceRed overflow-hidden shadow-lg items-center flex flex-col ${className ?? ""}`}
    >
      <div className="text-white text-xl font-bold text-center p-2">
        {title}
      </div>
      <div
        className={`rounded-t-2xl bg-backgroundLightGray w-full h-full overflow-hidden min-h-40 justify-center items-center flex ${
          bodyClassName ?? ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}
