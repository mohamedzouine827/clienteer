import * as React from "react";

interface ArrowDownProps {
  className?: string;
}

const ArrowDown: React.FC<ArrowDownProps> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
  >
    <path
      fill="#0F0F0F"
      d="M5.695 8.705a1 1 0 0 0 0 1.414l4.892 4.887a2 2 0 0 0 2.828 0l4.89-4.89A1 1 0 1 0 16.891 8.7l-4.186 4.186a1 1 0 0 1-1.414 0L7.109 8.705a1 1 0 0 0-1.414 0Z"
    />
  </svg>
);

export default ArrowDown;
