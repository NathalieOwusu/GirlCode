//Resuable styled button components
import { Link } from 'react-router-dom'
type ButtonProps = {
    color: "black" | "blue" | "white";
    label: string;
    onClick?: () => void;
    type?: 'button' | 'submit';
  };
  
  
  export default function Button({ color, label, onClick, type = "submit" }: ButtonProps) {
    const colors = {
      black: "bg-black text-white",
      blue: "bg-blue-500 text-white",
      white: "bg-white text-black",
    };
  
    return (
       <div className="w-full">
      <button
      type={type}
        className={`${colors[color]} w-full rounded-full lacquer-regular text-lg leading-6 shadow  bg-purple-400 text-white py-3  hover:bg-purple-700 transition cursor-pointer`}
      >
        {label}

      </button>
      
    
    </div>
    );
  }
  