// Top Navigation bar with links (e.g. Home, Dashboard, Logout)
import React from 'react';

type NavBarProps = {
  color: "periwinkle" | "yellow"| "pink"| "teal";
  className?: string;
};

export default function Navbar({ color }: NavBarProps) {
  // Map color prop to Tailwind background classes
  const bgColorClass = {
    periwinkle: "bg-[#8F8EFF] text-black",
    yellow: "bg-[#FDF3D3] text-black h-[150px]",
    pink: "bg-[#DBB1FF]",
    teal:'bg-[#d1efec]',
  }[color] ;

  return (
    <nav className={`${bgColorClass} border-b border-gray-300 p-4 shadow-sm`}>
      
    </nav>
  );
}
