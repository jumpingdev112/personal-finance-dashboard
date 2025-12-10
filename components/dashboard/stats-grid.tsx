"use client"

import { TrendingUp, TrendingDown } from "lucide-react"
import { Card } from "@/components/ui/card"

interface StatItemProps {
  label: string
  value: string
  change: string
  trend: "up" | "down"
}

function StatItem({ label, value, change, trend }: StatItemProps) {
  return (
    <Card className="p-6">
      <p className="text-sm font-medium text-muted-foreground">{label}</p>
      <p className="mt-2 text-2xl font-bold text-foreground">{value}</p>
      <div className="mt-2 flex items-center gap-1">
        {trend === "up" ? (
          <TrendingUp className="h-4 w-4 text-destructive" />
        ) : (
          <TrendingDown className="h-4 w-4 text-primary" />
        )}
        <span className={`text-sm font-medium ${trend === "up" ? "text-destructive" : "text-primary"}`}>{change}</span>
      </div>
    </Card>
  )
}

export function StatsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      <StatItem label="Average Monthly Spending" value="$2,450" change="+12.5% vs last month" trend="up" />
      <StatItem label="Largest Expense" value="$1,200" change="Housing" trend="down" />
      <StatItem label="Savings This Month" value="$2,750" change="+8.2% vs last month" trend="down" />
      <StatItem label="Budget Adherence" value="92%" change="+5% improvement" trend="up" />
    </div>
  )
}
