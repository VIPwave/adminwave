'use client';

import LinkBlockBtn from '@/components/Button/LinkBlockBtn';

const AdminMainPage = () => {
  return (
    <div className="flex flex-col w-full gap-2 px-5 py-6">
      <LinkBlockBtn text="⚡️ 원클릭 링크" href="/admin/streaming" />
      <LinkBlockBtn text="📢 공지" href="/admin/notice" />
      <LinkBlockBtn text="🎯 Todo List" href="/admin/todolist" />
      <LinkBlockBtn text="🔗 공구 링크" href="/admin/purchase" />
      <LinkBlockBtn text="📄 가이드" href="/admin/guide" />
    </div>
  );
};

export default AdminMainPage;
