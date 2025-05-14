//Resuable styled button components
type ButtonProps = {
    color: "black" | "blue" | "white";
    children: React.ReactNode;
  };
  
  export default function Button({ color, children }: ButtonProps) {
    const colors = {
      black: "bg-black text-white",
      blue: "bg-blue-500 text-white",
      white: "bg-white text-black",
    };
  
    return (
      <button
        className={`${colors[color]} rounded-full px-2 py-1.5 font-sans text-sm leading-6 font-medium shadow`}
      >
        {children}
      </button>
    );
  }
  