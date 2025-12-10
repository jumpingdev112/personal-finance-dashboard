"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface CategoryCardProps {
  name: string
  icon: React.ReactNode
  color: string
  transactionCount: number
  totalSpent: number
}

export function CategoryCard({ name, icon, color, transactionCount, totalSpent }: CategoryCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`rounded-lg p-2 ${color}`}>{icon}</div>
          <div>
            <h3 className="font-semibold text-foreground">{name}</h3>
            <p className="text-sm text-muted-foreground">{transactionCount} transactions</p>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit Category</DropdownMenuItem>
            <DropdownMenuItem>View Transactions</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="rounded-lg bg-muted p-3">
        <p className="text-xs text-muted-foreground mb-1">Total Spent</p>
        <p className="text-lg font-bold text-foreground">${totalSpent.toLocaleString()}</p>
      </div>
    </Card>
  )
}
