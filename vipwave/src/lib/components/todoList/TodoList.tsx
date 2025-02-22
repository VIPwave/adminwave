import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function TodoList(props: { title: string }) {
  const date = "2025년 02월 25일";

  return (
    <>
      <div className="flex py-2 border-b border-gray-600 px-2">
        <span className="font-bold grow">{props.title}</span>
        <span className="text-gray-500 text-xs flex items-center">{date}</span>
      </div>

      <div>
        <Todo index={1} title="스밍하기" isLink={false} />
        <Todo index={2} title="음원 다운로드" isLink={false} />
        <Todo index={3} title="선물하기" isLink={false} />
        <Todo index={4} title="지니 음악나누기" isLink={false} />
      </div>
    </>
  );
}

function Todo(props: { index: number; title: string; isLink?: boolean }) {
  const { index, title, isLink } = props;

  return (
    <Button
      variant="ghost"
      className="w-full flex justify-between items-center"
    >
      <div className="flex gap-4">
        <span className="text-gray-400">{index}</span>
        <span>{title}</span>
      </div>
      {isLink && <ChevronRight className="h-5 w-5 text-gray-400" />}
    </Button>
  );
}
