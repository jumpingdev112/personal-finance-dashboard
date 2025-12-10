"use client"

import type React from "react"

import { ArrowUpRight, ArrowDownLeft, DollarSign, TrendingUp } from "lucide-react"
import { Card } from "@/components/ui/card"

interface OverviewCardProps {
  title: string
  value: string
  change: string
  trend: "up" | "down"
  icon: React.ReactNode
}

function OverviewCard({ title, value, change, trend, icon }: OverviewCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="mt-2 text-2xl font-bold text-foreground">{value}</p>
        </div>
        <div className="rounded-lg bg-primary/10 p-3 text-primary">{icon}</div>
      </div>
      <div className="mt-4 flex items-center gap-1">
        {trend === "up" ? (
          <ArrowUpRight className="h-4 w-4 text-destructive" />
        ) : (
          <ArrowDownLeft className="h-4 w-4 text-primary" />
        )}
        <span className={`text-sm font-medium ${trend === "up" ? "text-destructive" : "text-primary"}`}>{change}</span>
        <span className="text-sm text-muted-foreground">from last month</span>
      </div>
    </Card>
  )
}

export function OverviewCards() {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      <OverviewCard
        title="Total Balance"
        value="$28,450.00"
        change="+12.5%"
        trend="up"
        icon={<DollarSign className="h-6 w-6" />}
      />
      <OverviewCard
        title="Monthly Income"
        value="$5,200.00"
        change="+8.2%"
        trend="down"
        icon={<TrendingUp className="h-6 w-6" />}
      />
      <OverviewCard
        title="Monthly Expenses"
        value="$2,850.00"
        change="-15.3%"
        trend="down"
        icon={<ArrowDownLeft className="h-6 w-6" />}
      />
      <OverviewCard
        title="Savings Rate"
        value="45.2%"
        change="+3.1%"
        trend="up"
        icon={<TrendingUp className="h-6 w-6" />}
      />
    </div>
  )
}
