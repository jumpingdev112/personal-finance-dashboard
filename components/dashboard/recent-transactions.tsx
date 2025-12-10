"use client"

import type React from "react"

import { ArrowUpRight, ArrowDownLeft, Coffee, ShoppingCart, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"

interface Transaction {
  id: string
  description: string
  category: string
  amount: string
  type: "income" | "expense"
  date: string
  icon: React.ReactNode
}

const transactions: Transaction[] = [
  {
    id: "1",
    description: "Starbucks Coffee",
    category: "Food & Dining",
    amount: "$5.45",
    type: "expense",
    date: "Today",
    icon: <Coffee className="h-4 w-4" />,
  },
  {
    id: "2",
    description: "Amazon Purchase",
    category: "Shopping",
    amount: "$89.99",
    type: "expense",
    date: "Yesterday",
    icon: <ShoppingCart className="h-4 w-4" />,
  },
  {
    id: "3",
    description: "Salary Deposit",
    category: "Income",
    amount: "+$5,200.00",
    type: "income",
    date: "3 days ago",
    icon: <ArrowDownLeft className="h-4 w-4" />,
  },
  {
    id: "4",
    description: "Electric Bill",
    category: "Utilities",
    amount: "$145.00",
    type: "expense",
    date: "1 week ago",
    icon: <Zap className="h-4 w-4" />,
  },
  {
    id: "5",
    description: "Netflix Subscription",
    category: "Entertainment",
    amount: "$15.99",
    type: "expense",
    date: "1 week ago",
    icon: <ArrowUpRight className="h-4 w-4" />,
  },
]

export function RecentTransactions() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">Recent Transactions</h3>
        <a href="/transactions" className="text-sm font-medium text-primary hover:underline">
          View All
        </a>
      </div>

      <div className="mt-6 space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between border-b border-border pb-4 last:border-0"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-muted p-2 text-muted-foreground">{transaction.icon}</div>
              <div>
                <p className="font-medium text-foreground">{transaction.description}</p>
                <p className="text-sm text-muted-foreground">{transaction.category}</p>
              </div>
            </div>
            <div className="text-right">
              <p className={`font-semibold ${transaction.type === "income" ? "text-primary" : "text-destructive"}`}>
                {transaction.type === "income" ? "+" : "-"}
                {transaction.amount}
              </p>
              <p className="text-sm text-muted-foreground">{transaction.date}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
