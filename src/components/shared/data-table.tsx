import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export type DataTableColumn<T> = {
  key: string
  label: string
  render: (row: T) => React.ReactNode
}

export function DataTable<T>({
  actionsLabel,
  columns,
  editLabel = "Edit",
  openLabel = "Open",
  rows,
}: {
  actionsLabel: string
  columns: DataTableColumn<T>[]
  editLabel?: string
  openLabel?: string
  rows: T[]
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-surface-1">
      <div className="hidden overflow-x-auto md:block">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={column.key}>{column.label}</TableHead>
              ))}
              <TableHead className="text-end">{actionsLabel}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((column) => (
                  <TableCell key={column.key}>{column.render(row)}</TableCell>
                ))}
                <TableCell className="text-end">
                  <div className="opacity-0 transition-opacity focus-within:opacity-100 group-hover/row:opacity-100">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="icon-sm" variant="ghost">
                          <MoreHorizontal />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                      <DropdownMenuItem>{openLabel}</DropdownMenuItem>
                      <DropdownMenuItem>{editLabel}</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="divide-y divide-border md:hidden">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="space-y-3 p-4">
            {columns.map((column) => (
              <div key={column.key} className="flex justify-between gap-4 text-sm">
                <span className="text-muted-foreground">{column.label}</span>
                <span className="text-end">{column.render(row)}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
