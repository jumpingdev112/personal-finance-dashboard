"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Card } from "@/components/ui/card"

const data = [
  { month: "Jan", income: 5200, expenses: 2100, savings: 3100 },
  { month: "Feb", income: 5200, expenses: 2300, savings: 2900 },
  { month: "Mar", income: 5200, expenses: 1900, savings: 3300 },
  { month: "Apr", income: 5200, expenses: 2500, savings: 2700 },
  { month: "May", income: 5200, expenses: 2200, savings: 3000 },
  { month: "Jun", income: 5200, expenses: 2800, savings: 2400 },
]

export function MonthlyChart() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-foreground">Income vs Expenses</h3>
      <div className="mt-6">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
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
            <Bar dataKey="income" fill="var(--color-chart-1)" radius={[8, 8, 0, 0]} />
            <Bar dataKey="expenses" fill="var(--color-chart-2)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
