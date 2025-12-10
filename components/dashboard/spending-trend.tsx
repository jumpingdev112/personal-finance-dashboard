"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Card } from "@/components/ui/card"

const data = [
  { month: "Jan", spending: 2100, budget: 2500 },
  { month: "Feb", spending: 2300, budget: 2500 },
  { month: "Mar", spending: 1900, budget: 2500 },
  { month: "Apr", spending: 2500, budget: 2500 },
  { month: "May", spending: 2200, budget: 2500 },
  { month: "Jun", spending: 2800, budget: 2500 },
]

export function SpendingTrend() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-foreground">Spending Trend</h3>
      <div className="mt-6">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis dataKey="month" stroke="var(--color-muted-foreground)" />
            <YAxis stroke="var(--color-muted-foreground)" />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--color-card)",
                border: "1px solid var(--color-border)",
              }}
              formatter={(value) => `$${value}`}
            />
            <Legend />
            <Line type="monotone" dataKey="spending" stroke="var(--color-chart-1)" strokeWidth={2} />
            <Line
              type="monotone"
              dataKey="budget"
              stroke="var(--color-chart-2)"
              strokeWidth={2}
              strokeDasharray="5 5"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
