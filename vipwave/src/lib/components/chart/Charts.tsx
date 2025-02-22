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
    accessorKey: "rank",
    header: "순위",
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
