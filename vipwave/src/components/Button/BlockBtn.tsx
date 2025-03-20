'use client';

import Image from 'next/image';
import Link from 'next/link';

interface BlockBtnProps {
  text: string;
  iconSrc?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const BlockBtn = ({
  text,
  iconSrc,
  href,
  onClick,
  className,
}: BlockBtnProps) => {
  const Content = (
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
      <span>{text}</span>
    </div>
  );

  return href ? (
    <Link href={href} target="_blank">
      {Content}
    </Link>
  ) : (
    Content
  );
};

export default BlockBtn;
