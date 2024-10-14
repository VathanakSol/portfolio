"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// Sample data for posts
const data: Post[] = [
  {
    id: "1",
    title: "My First Blog Post",
    status: "published",
    createdAt: "2023-01-15T09:00:00Z",
  },
  {
    id: "2",
    title: "10 Tips for Better Productivity",
    status: "draft",
    createdAt: "2023-02-20T14:30:00Z",
  },
  {
    id: "3",
    title: "The Future of AI in Web Development",
    status: "published",
    createdAt: "2023-03-10T11:15:00Z",
  },
  {
    id: "4",
    title: "How to Build a React Component Library",
    status: "draft",
    createdAt: "2023-04-05T16:45:00Z",
  },
  {
    id: "5",
    title: "Understanding TypeScript Generics",
    status: "published",
    createdAt: "2023-05-12T10:30:00Z",
  },
]

export type Post = {
  id: string
  title: string
  status: "draft" | "published"
  createdAt: string
}

export const columns: ColumnDef<Post>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Title
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue("title")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt"))
      return <div>{date.toLocaleDateString()}</div>
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const post = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(post.id)}
            >
              Copy post ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit post</DropdownMenuItem>
            <DropdownMenuItem>View post</DropdownMenuItem>
            <DropdownMenuItem>Delete post</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function PostsTable() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  
   const table = useReactTable({
     data,
     columns,
     onSortingChange: setSorting,
     onColumnFiltersChange: setColumnFilters,
     getCoreRowModel: getCoreRowModel(),
     getPaginationRowModel: getPaginationRowModel(),
     getSortedRowModel: getSortedRowModel(),
     getFilteredRowModel: getFilteredRowModel(),
     onColumnVisibilityChange: setColumnVisibility,
     state: {
       sorting,
       columnFilters,
       columnVisibility
     }
   });

   return (
     <div className="w-full">
       <div className="flex items-center py-4">
         <Input
           placeholder="Filter titles..."
           value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
           onChange={(event) =>
             table.getColumn("title")?.setFilterValue(event.target.value)
           }
           className="max-w-sm"
         />
         <DropdownMenu>
           <DropdownMenuTrigger asChild>
             <Button variant="outline" className="ml-auto">
               Columns <ChevronDown className="ml-2 h-4 w-4" />
             </Button>
           </DropdownMenuTrigger>
           <DropdownMenuContent align="end">
             {table
               .getAllColumns()
               .filter((column) => column.getCanHide())
               .map((column) => (
                 <DropdownMenuCheckboxItem
                   key={column.id}
                   className="capitalize"
                   checked={column.getIsVisible()}
                   onCheckedChange={(value) =>
                     column.toggleVisibility(!!value)
                   }
                 >
                   {column.id}
                 </DropdownMenuCheckboxItem>
               ))}
           </DropdownMenuContent>
         </DropdownMenu>
       </div>

       {/* Table Component */}
       <div className="rounded-md border">
         <Table>
           <TableHeader>
             {table.getHeaderGroups().map((headerGroup) => (
               <TableRow key={headerGroup.id}>
                 {headerGroup.headers.map((header) => (
                   <TableHead key={header.id}>
                     {flexRender(header.column.columnDef.header, header.getContext())}
                   </TableHead>
                 ))}
               </TableRow>
             ))}
           </TableHeader>

           <TableBody>
             {table.getRowModel().rows.map((row) => (
               <TableRow key={row.id}>
                 {row.getVisibleCells().map((cell) => (
                   <TableCell key={cell.id}>
                     {flexRender(cell.column.columnDef.cell, cell.getContext())}
                   </TableCell>
                 ))}
               </TableRow>
             ))}
           </TableBody>
         </Table>
       </div>

       {/* Pagination Controls */}
       {/* You can add pagination controls here if needed */}
     </div>
   )
}