'use client';

import Image from 'next/image';
import Link from 'next/link';

interface LinkBlockBtnProps {
  text: string;
  iconSrc?: string;
  href: string;
  target?: string;
  className?: string;
}

const LinkBlockBtn = ({
  text,
  iconSrc,
  href,
  target = '_self',
  className,
}: LinkBlockBtnProps) => {
  return (
    <Link
      href={href}
      target={target}
      className={`flex px-4 py-3 items-center gap-4 bg-chart text-white text-[16px] min-h-[60px] whitespace-normal break-words leading-tight ${className}`}
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
    </Link>
  );
};

export default LinkBlockBtn;
