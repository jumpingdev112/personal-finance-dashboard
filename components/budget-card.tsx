"use client"

import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, AlertCircle } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface BudgetCardProps {
  category: string
  spent: number
  limit: number
  isOverBudget?: boolean
}

export function BudgetCard({ category, spent, limit, isOverBudget = false }: BudgetCardProps) {
  const percentage = (spent / limit) * 100
  const remaining = Math.max(0, limit - spent)

  return (
    <Card className="p-6">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-foreground">{category}</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            ${spent.toFixed(2)} of ${limit.toFixed(2)}
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit Budget</DropdownMenuItem>
            <DropdownMenuItem>Reset</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="mt-4">
        <Progress value={Math.min(percentage, 100)} className="h-2" />
        <div className="mt-2 flex items-center justify-between">
          <span className={`text-sm font-medium ${percentage > 100 ? "text-destructive" : "text-primary"}`}>
            {percentage.toFixed(0)}% used
          </span>
          <span className="text-sm text-muted-foreground">${remaining.toFixed(2)} remaining</span>
        </div>
      </div>

      {isOverBudget && (
        <div className="mt-3 flex items-center gap-2 rounded-lg bg-destructive/10 p-2">
          <AlertCircle className="h-4 w-4 text-destructive" />
          <span className="text-xs font-medium text-destructive">Over budget by ${(spent - limit).toFixed(2)}</span>
        </div>
      )}
    </Card>
  )
}
