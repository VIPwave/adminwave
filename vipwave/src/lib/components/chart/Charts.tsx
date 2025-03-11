"use client";

import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import TaskTable, { Song } from "./ChartTable";
import Image from "next/image";

const columns: ColumnDef<Song>[] = [
  {
    id: "album_image",
    accessorKey: "album_image",
    header: "",
    enableSorting: false,
    cell: (row) => {
      const url = String(row.getValue());
      return <Image src={url} alt="album_image" width={56} height={56} unoptimized />;
    },
    size: 35,
  },
  {
    accessorKey: "title",
    header: "곡 정보",
    enableSorting: false,
    cell: (current) => {
      const title = current.row.original.title;
      const singer = current.row.original.singer;
      return (
        <div>
          <span className="overflow-hidden text-ellipsis">{title}</span>
          <div className="text-gray-400">{singer}</div>
        </div>
      );
    },
    size: 150,
  },
  {
    accessorKey: "rank_variance",
    header: "",
    enableSorting: false,
    cell: (current) => {
      const rankVariance = Number(current.row.original.rank_variance);
      const rankType = current.row.original.rank_type;

      if (rankType === "new") {
        return <div className="text-center font-bold">NEW</div>;
      }
      if (rankType === "static") {
        return <div className="text-center">-</div>;
      }

      let color = "text-red-500";
      let icon = "▲";

      if (rankType === "up") {
        color = "text-red-500";
        icon = "▲";
      } else if (rankType === "down") {
        color = "text-blue-500";
        icon = "▼";
      }

      return (
        <div className="text-center">
          <span className={color}>{icon}</span>
          {Math.abs(rankVariance) != 0 && <span>{Math.abs(rankVariance)}</span>}
        </div>
      );
    },
    size: 8,
  },
  {
    accessorKey: "rank",
    header: () => <div className="text-center">순위</div>,
    enableSorting: false,
    size: 8,
  },
];

export default function Chart(props: { items: Song[] }) {
  const { items } = props;
  const table = useReactTable({
    data: items,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return <TaskTable table={table} songList={items} columns={columns} />;
}
