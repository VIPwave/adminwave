import Image from "next/image";
import bigbangImg from "../../public/b_3.jpeg";
import TodoList from "@/lib/components/todoList/TodoList";
import NoticeList from "@/lib/components/notice/Notice";

export default function Home() {
  return (
    <>
      <div className="relative h-[200px] md:h-[300px]">
        <Image
          src={bigbangImg}
          alt="BIGBANG concert stage"
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4">
        <TodoList title="TODOLIST" />
        <NoticeList title="음원총공팀에서 알립니다" />
      </div>
    </>
  );
}
