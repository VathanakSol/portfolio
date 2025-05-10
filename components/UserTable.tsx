'use client'

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type User = {
  id: string
  email: string
  role: string
}

export default function UserTable({ users: initialUsers }: { users: User[] }) {
  const [users, setUsers] = useState(initialUsers)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [loadingId, setLoadingId] = useState<string | null>(null)
  const [tempUserData, setTempUserData] = useState<{ email?: string; role?: string }>({})

  const handleEdit = (user: User) => {
    setEditingId(user.id)
    setTempUserData({ email: user.email, role: user.role })
  }

  const handleSave = async (userId: string) => {
    setLoadingId(userId);
    
    // Simulate save logic (e.g., API call)
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Update the user list with new data
    setUsers(users.map(user => 
      user.id === userId ? { ...user, ...tempUserData } : user
    ));
    
    toast.success("User updated successfully!");
    setEditingId(null);
    setLoadingId(null);
  }

  const handleDelete = async (userId: string) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    setLoadingId(userId);
    
    // Simulate delete logic (e.g., API call)
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Remove the user from the list
    setUsers(users.filter(user => user.id !== userId));
    
    toast.success("User deleted successfully!");
    setLoadingId(null);
  }

  return (
    <>
      <ToastContainer />
      <div className="overflow-x-auto">
        <Table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <TableHeader>
            <TableRow className="bg-gray-100 text-gray-700">
              <TableHead className="py-3 px-4 text-left">Email</TableHead>
              <TableHead className="py-3 px-4 text-left">Role</TableHead>
              <TableHead className="py-3 px-4 text-left">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} className="border-b hover:bg-gray-50">
                <TableCell className="py-3 px-4">
                  {editingId === user.id ? (
                    <Input 
                      defaultValue={tempUserData.email} 
                      onChange={(e) => setTempUserData({ ...tempUserData, email: e.target.value })}
                      required
                      className="border border-gray-300 rounded-md p-1"
                    />
                  ) : (
                    user.email
                  )}
                </TableCell>
                <TableCell className="py-3 px-4">
                  {editingId === user.id ? (
                    <Select 
                      defaultValue={tempUserData.role}                                                             
                    >
                      <option value="USER">User</option>
                      <option value="ADMIN">Admin</option>
                    </Select>
                  ) : (
                    user.role
                  )}
                </TableCell>
                <TableCell className="py-3 px-4 flex space-x-2">
                  {editingId === user.id ? (
                    <>
                      <Button 
                        onClick={() => handleSave(user.id)} 
                        disabled={loadingId === user.id}
                        className={`bg-blue-500 text-white hover:bg-blue-600 ${loadingId === user.id ? "opacity-50 cursor-not-allowed" : ""}`}
                      >
                        {loadingId === user.id ? "Saving..." : "Save"}
                      </Button>
                      <Button onClick={() => setEditingId(null)} className="bg-gray-300 hover:bg-gray-400">
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button onClick={() => handleEdit(user)} className="bg-yellow-500 text-white hover:bg-yellow-600">Edit</Button>
                      <Button variant="destructive" onClick={() => handleDelete(user.id)} disabled={loadingId === user.id} className={`bg-red-500 text-white hover:bg-red-600 ${loadingId === user.id ? "opacity-50 cursor-not-allowed" : ""}`}>
                        {loadingId === user.id ? "Deleting..." : "Delete"}
                      </Button>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}