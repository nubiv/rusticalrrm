"use client"

import * as React from "react"
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { DataTablePagination } from "@/components/data-table-pagination"
import { DataTableToolbar } from "@/components/data-table-toolbar"

const servers = [
    {
      id: "1",
      client: "Compony 1",
      site: "LA Office1",
      hostname: "db-aws-01",
      description: "Karen's Laptop",
      user: "Steve",
      lastResponse: "Oct-15-2023 09:56",
      bootTime: "4 months ago",
    },
    {
      id: "2",
      client: "Compony 2",
      site: "LA Office2",
      hostname: "db-aws-02",
      description: "Sam's Laptop",
      user: "Luis",
      lastResponse: "Oct-23-2023 09:56",
      bootTime: "4 months ago",
    },
    {
      id: "3",
      client: "Compony 3",
      site: "LA Office3",
      hostname: "db-gc-02",
      description: "David's Laptop",
      user: "David",
      lastResponse: "Oct-23-2023 09:56",
      bootTime: "4 months ago",
    },
  ]

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  withToolbar: boolean
}

export function DataTable<TData, TValue>({
  columns,
  data,
  withToolbar
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = React.useState({})
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [sorting, setSorting] = React.useState<SortingState>([])

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  })

  return (
    <div className="space-y-4 h-1/2 overflow-auto">
      {/* <DataTableToolbar table={table} /> */}
      { withToolbar ? <DataTableToolbar table={table} /> : null}
      {/* <div className="rounded-md border resize-y">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div> */}
      {/* <DataTablePagination table={table} /> */}

        <div>
            <Table>
            <TableCaption>A list of servers.</TableCaption>
            <TableHeader>
                <TableRow>
                <TableHead className="w-[100px]">Client</TableHead>
                <TableHead>Site</TableHead>
                <TableHead>Hostname</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Last Response</TableHead>
                <TableHead className="text-right">Boot Time</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {( new Array(4).fill(servers).flat() as typeof servers ).map((server) => (
                <TableRow key={server.id}>
                    <TableCell>{server.client}</TableCell>
                    <TableCell>{server.site}</TableCell>
                    <TableCell>{server.hostname}</TableCell>
                    <TableCell>{server.description}</TableCell>
                    <TableCell>{server.user}</TableCell>
                    <TableCell>{server.lastResponse}</TableCell>
                    <TableCell className="text-right">{server.bootTime}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </div>
    </div>
  )
}