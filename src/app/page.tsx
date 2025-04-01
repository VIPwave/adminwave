'use client';

import LinkBlockBtn from '@/components/Button/LinkBlockBtn';

export default function Home() {
  return (
    <div className="flex flex-col w-full gap-2 px-5 py-6">
      <LinkBlockBtn text="⚡️ 원클릭 링크" href="/streaming" />
      <LinkBlockBtn text="📢 공지" href="/notice" />
      <LinkBlockBtn text="🎯 Todo List" href="/todolist" />
      <LinkBlockBtn text="🔗 공구 링크" href="/purchase" />
      <LinkBlockBtn text="📄 가이드" href="/guide" />
    </div>
  );
}
