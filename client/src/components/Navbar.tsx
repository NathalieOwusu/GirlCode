// Top Navigation bar with links (e.g. Home, Dashboard, Logout)
import React from 'react';

type NavBarProps = {
  color: "teal" | "yellow";
  children?: React.ReactNode; 
  className?: string;
};

export default function Navbar({ color, children }: NavBarProps) {
  // Map color prop to Tailwind background classes
  const bgColorClass = {
    teal: "bg-[#D1EFEC] text-black",
    yellow: "bg-[#FDF3D3] text-black h-[150px]",
  }[color] || "bg-white text-gray-800";

  return (
    <nav className={`${bgColorClass} border-b border-gray-300 p-4 shadow-sm`}>
      {children}
    </nav>
  );
}
