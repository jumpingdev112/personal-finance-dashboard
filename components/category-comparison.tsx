"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Card } from "@/components/ui/card"

const data = [
  { category: "Food", current: 450, previous: 380 },
  { category: "Transport", current: 380, previous: 420 },
  { category: "Entertainment", current: 220, previous: 180 },
  { category: "Utilities", current: 145, previous: 140 },
  { category: "Shopping", current: 280, previous: 320 },
]

export function CategoryComparison() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-foreground">Category Comparison (Month over Month)</h3>
      <div className="mt-6">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis dataKey="category" stroke="var(--color-muted-foreground)" />
            <YAxis stroke="var(--color-muted-foreground)" />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--color-card)",
                border: "1px solid var(--color-border)",
              }}
              formatter={(value) => `$${value}`}
            />
            <Legend />
            <Bar dataKey="current" fill="var(--color-chart-1)" radius={[8, 8, 0, 0]} />
            <Bar dataKey="previous" fill="var(--color-chart-2)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
