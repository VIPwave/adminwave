import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { ChevronRight } from "lucide-react";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale("ko");

export default function TodoList(props: { title: string }) {
  const now = dayjs().tz("Asia/Seoul");

  const today = now.format("YYYY년 MM월 DD일");

  return (
    <div>
      <div className="flex py-2 border-b border-primary">
        <span className="font-bold grow">{props.title}</span>
        <span className="text-gray-500 text-xs flex items-center">{today}</span>
      </div>

      <div className="mt-2">
        <Todo index={1} title="스밍 열심히 하기" isLink={false} />
        <Todo index={2} title="음악방송 투표 참여하기" isLink={false} />
        <Todo index={3} title="음원 다운로드 참여하기" isLink={false} />
        <Todo index={4} title="선물하기" isLink={false} />
        <Todo index={5} title="지니 음악나누기" isLink={false} />
      </div>
    </div>
  );
}

function Todo(props: { index: number; title: string; isLink?: boolean }) {
  const { index, title, isLink } = props;

  return (
    <div className="w-full flex justify-between items-center py-2">
      <div className="flex gap-4">
        <span className="text-gray-400">{index}</span>
        <span>{title}</span>
      </div>
      {isLink && <ChevronRight className="h-5 w-5 text-gray-400" />}
    </div>
  );
}
