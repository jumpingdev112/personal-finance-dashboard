"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Target } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface GoalCardProps {
  name: string
  current: number
  target: number
  deadline: string
  icon?: React.ReactNode
}

export function GoalCard({ name, current, target, deadline, icon }: GoalCardProps) {
  const percentage = (current / target) * 100
  const remaining = target - current

  return (
    <Card className="p-6">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-primary/10 p-2 text-primary">{icon || <Target className="h-5 w-5" />}</div>
          <div>
            <h3 className="font-semibold text-foreground">{name}</h3>
            <p className="text-sm text-muted-foreground">Target: ${target.toLocaleString()}</p>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit Goal</DropdownMenuItem>
            <DropdownMenuItem>Add Funds</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="mt-4">
        <Progress value={Math.min(percentage, 100)} className="h-2" />
        <div className="mt-2 flex items-center justify-between text-sm">
          <span className="font-medium text-foreground">${current.toLocaleString()}</span>
          <span className="text-muted-foreground">{percentage.toFixed(0)}% complete</span>
        </div>
      </div>

      <div className="mt-3 rounded-lg bg-muted p-3">
        <p className="text-xs text-muted-foreground">
          <span className="font-medium">${remaining.toLocaleString()}</span> needed by{" "}
          <span className="font-medium">{deadline}</span>
        </p>
      </div>
    </Card>
  )
}
