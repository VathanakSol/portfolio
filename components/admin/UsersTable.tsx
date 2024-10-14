"use client";

import * as React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export type User = {
  id: string;
  email: string;
  role: string;
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => row.getValue("email"),
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => row.getValue("role"),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const user = row.original;

      const handleUpdate = () => {
        // Implement update logic here
        console.log(`Update user: ${user.id}`);
      };

      const handleDelete = () => {
        // Implement delete logic here
        console.log(`Delete user: ${user.id}`);
      };

      return (
        <div className="flex space-x-2">
          <Button onClick={handleUpdate}>Update</Button>
          <Button variant="destructive" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      );
    },
  },
];

export function UsersTable() {
    const [data, setData] = React.useState<User[]>([]);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<string | null>(null);
    const [searchTerm, setSearchTerm] = React.useState("");

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/users");
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const users = await response.json();
      setData(users);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const filteredData = data.filter(user =>
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  React.useEffect(() => {
    fetchUsers();
  }, []);

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (loading) return <div className="flex justify-center">Loading...</div>;
  
  if (error) return (
    <div className="text-red-500">
      <p>Error: {error}</p>
      <Button onClick={fetchUsers}>Retry</Button>
    </div>
  );

  return (
    <div className="container mx-auto p-4">
      <input 
        type="text" 
        placeholder="Search users..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        className="mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
      />
      <Table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
        <TableHeader className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id} className="py-3 px-5 text-left">
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length > 0 ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} className="hover:bg-gray-50 even:bg-gray-100">
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="py-3 px-5 border-b border-gray-200 text-sm text-gray-600">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
                
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="text-center py-3">No users found</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
