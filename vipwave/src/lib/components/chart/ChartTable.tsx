"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ColumnDef,
  flexRender,
  Table as ReactTable,
} from "@tanstack/react-table";

export type Song = {
  rank: number;
  rank_type: "up" | "down" | "static" | "new";
  rank_variance: number;
  album_image: string;
  title: string;
  singer: string;
};

type ChartTableProps = {
  songList: Song[];
  columns: ColumnDef<Song>[];
  table: ReactTable<Song>;
};

export default function TaskTable(props: ChartTableProps) {
  const { table, columns } = props;

  return (
    <div className="w-full bg-zinc-900">
      <div>
        <Table>
          <TableHeader className="border-t-2 border-t-black p-8">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="font-bold">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="item-center align-middle p-2"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} className="h-18">
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className={
                        cell.column.getIndex() !== 1 &&
                        cell.column.getIndex() !== 5
                          ? "justify-center text-center"
                          : ""
                      }
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow className="py-4">
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  현재 순위에 없습니다.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
