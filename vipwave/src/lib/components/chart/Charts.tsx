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

export default function Chart(props: { items: Song[] }) {
  const { items } = props;
  const table = useReactTable({
    data: items,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return <TaskTable table={table} songList={items} columns={columns} />;
}
