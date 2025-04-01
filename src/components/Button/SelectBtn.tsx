'use client';

import { ReactNode } from 'react';

interface SelectBtnProps {
  text: string;
  onClick: () => void;
  className?: ReactNode;
}

const SelectBtn = ({ text, onClick, className }: SelectBtnProps) => {
  return (
    <button className={`px-4 py-2 ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default SelectBtn;
