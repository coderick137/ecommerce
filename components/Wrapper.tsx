interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function Wrapper({ children, className }: WrapperProps) {
  return (
    <div
      className={`w-full max-w-7xl px-5 md:px-10 mx-auto ${className || ""}`}
    >
      {children}
    </div>
  );
}
