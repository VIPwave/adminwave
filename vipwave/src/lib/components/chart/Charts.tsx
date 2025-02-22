"use client";

import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import TaskTable, { Song } from "./ChartTable";

const columns: ColumnDef<Song>[] = [
  {
    id: "album_image",
    accessorKey: "album_image",
    header: "",
    enableSorting: false,
  },
  {
    accessorKey: "title",
    header: "곡 정보",
    enableSorting: false,
  },
  {
    accessorKey: "rank_type",
    header: "",
    enableSorting: false,
  },
  {
    accessorKey: "rank_variance",
    header: "",
    enableSorting: false,
  },
  {
    accessorKey: "rank",
    header: () => <div className="text-center">순위</div>,
    enableSorting: false,
  },
];

const TABLE_DATA: Song[] = [
  {
    rank: 1,
    rank_type: "new",
    rank_variance: 0,
    album_image: "../../public/b_3.jpeg",
    title: "DRAMA",
    singer: "G-DRAGON",
  },
  {
    rank: 2,
    rank_type: "new",
    rank_variance: 0,
    album_image: "test",
    title: "DRAMA",
    singer: "G-DRAGON",
  },
];

export default function Chart() {
  const table = useReactTable({
    data: TABLE_DATA,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return <TaskTable table={table} songList={TABLE_DATA} columns={columns} />;
}
