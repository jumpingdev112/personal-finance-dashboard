"use client"

import type React from "react"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface TransactionData {
  id: string
  description: string
  category: string
  amount: string
  type: "income" | "expense"
  date: string
  icon: React.ReactNode
}

const transactions: TransactionData[] = [
  {
    id: "1",
    description: "Starbucks Coffee",
    category: "Food & Dining",
    amount: "$5.45",
    type: "expense",
    date: "Dec 10, 2024",
    icon: null,
  },
  {
    id: "2",
    description: "Amazon Purchase",
    category: "Shopping",
    amount: "$89.99",
    type: "expense",
    date: "Dec 9, 2024",
    icon: null,
  },
  {
    id: "3",
    description: "Salary Deposit",
    category: "Income",
    amount: "$5,200.00",
    type: "income",
    date: "Dec 1, 2024",
    icon: null,
  },
  {
    id: "4",
    description: "Electric Bill",
    category: "Utilities",
    amount: "$145.00",
    type: "expense",
    date: "Nov 28, 2024",
    icon: null,
  },
  {
    id: "5",
    description: "Netflix Subscription",
    category: "Entertainment",
    amount: "$15.99",
    type: "expense",
    date: "Nov 27, 2024",
    icon: null,
  },
  {
    id: "6",
    description: "Gas Station",
    category: "Transportation",
    amount: "$45.00",
    type: "expense",
    date: "Nov 25, 2024",
    icon: null,
  },
  {
    id: "7",
    description: "Freelance Payment",
    category: "Income",
    amount: "$800.00",
    type: "income",
    date: "Nov 20, 2024",
    icon: null,
  },
  {
    id: "8",
    description: "Restaurant Dinner",
    category: "Food & Dining",
    amount: "$62.50",
    type: "expense",
    date: "Nov 18, 2024",
    icon: null,
  },
]

export function TransactionTable() {
  return (
    <div className="rounded-lg border border-border bg-card">
      <Table>
        <TableHeader>
          <TableRow className="border-border hover:bg-transparent">
            <TableHead className="text-foreground">Description</TableHead>
            <TableHead className="text-foreground">Category</TableHead>
            <TableHead className="text-right text-foreground">Amount</TableHead>
            <TableHead className="text-foreground">Type</TableHead>
            <TableHead className="text-foreground">Date</TableHead>
            <TableHead className="w-12 text-foreground">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id} className="border-border hover:bg-muted/50">
              <TableCell className="font-medium text-foreground">{transaction.description}</TableCell>
              <TableCell className="text-muted-foreground">{transaction.category}</TableCell>
              <TableCell className="text-right">
                <span
                  className={
                    transaction.type === "income" ? "text-primary font-semibold" : "text-destructive font-semibold"
                  }
                >
                  {transaction.type === "income" ? "+" : "-"}
                  {transaction.amount}
                </span>
              </TableCell>
              <TableCell>
                <Badge
                  variant={transaction.type === "income" ? "default" : "secondary"}
                  className={
                    transaction.type === "income"
                      ? "bg-primary text-primary-foreground"
                      : "bg-destructive/10 text-destructive"
                  }
                >
                  {transaction.type === "income" ? "Income" : "Expense"}
                </Badge>
              </TableCell>
              <TableCell className="text-muted-foreground">{transaction.date}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
