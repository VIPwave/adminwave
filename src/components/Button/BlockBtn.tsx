'use client';

import Image from 'next/image';

interface BlockBtnProps {
  text: string;
  iconSrc?: string;
  onClick: () => void;
  className?: string;
}

const BlockBtn = ({ text, iconSrc, onClick, className }: BlockBtnProps) => {
  return (
    <div
      className={`flex px-4 py-3 items-center gap-4 bg-chart text-white text-[16px] min-h-[60px] whitespace-normal break-words leading-tight ${className}`}
      onClick={onClick}
    >
      {iconSrc && (
        <Image
          className="rounded-lg"
          src={iconSrc}
          alt={`${text} logo`}
          width={30}
          height={30}
          priority
          unoptimized
        />
      )}
      {text}
    </div>
  );
};

export default BlockBtn;
