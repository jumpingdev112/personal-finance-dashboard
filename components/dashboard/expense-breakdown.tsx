"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { Card } from "@/components/ui/card"

const data = [
  { name: "Housing", value: 1200, fill: "var(--color-chart-1)" },
  { name: "Food & Dining", value: 450, fill: "var(--color-chart-2)" },
  { name: "Transportation", value: 380, fill: "var(--color-chart-3)" },
  { name: "Entertainment", value: 220, fill: "var(--color-chart-4)" },
  { name: "Other", value: 200, fill: "var(--color-chart-5)" },
]

export function ExpenseBreakdown() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-foreground">Expense Breakdown</h3>
      <div className="mt-6">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" labelLine={false} outerRadius={100} fill="#8884d8" dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `$${value}`} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
