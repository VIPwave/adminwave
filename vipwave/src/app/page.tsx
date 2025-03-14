import Image from 'next/image';
import bigbangImg from '../../public/bang_1.jpeg';
import TodoList from '@/lib/components/todoList/TodoList';
import NoticeList from '@/lib/components/notice/Notice';

export default function Home() {
  return (
    <>
      <div className="relative h-[200px] md:h-[300px] ">
        <Image
          src={bigbangImg}
          alt="BIGBANG concert stage"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="p-5 bg-gradient-to-t to-primary/20 from-transparent">
        <TodoList title="TODOLIST" />
        <NoticeList title="음원총공팀에서 알립니다" />
      </div>
    </>
  );
}
