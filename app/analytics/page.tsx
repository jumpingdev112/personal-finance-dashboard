import { Card } from "@/components/ui/card"
import { StatsGrid } from "@/components/dashboard/stats-grid"
import { SpendingTrend } from "@/components/dashboard/spending-trend"
import { CategoryComparison } from "@/components/dashboard/category-comparison"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics & Reports</h1>
          <p className="mt-1 text-muted-foreground">Deep dive into your spending patterns and insights</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2 bg-transparent">
              <Calendar className="h-4 w-4" />
              Last 6 Months
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Last Month</DropdownMenuItem>
            <DropdownMenuItem>Last 3 Months</DropdownMenuItem>
            <DropdownMenuItem>Last 6 Months</DropdownMenuItem>
            <DropdownMenuItem>Last Year</DropdownMenuItem>
            <DropdownMenuItem>All Time</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Stats Grid */}
      <StatsGrid />

      {/* Charts */}
      <div className="space-y-6">
        <SpendingTrend />
        <CategoryComparison />
      </div>

      {/* Insights */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-foreground">Key Insights</h3>
        <div className="mt-4 space-y-3">
          <div className="flex items-start gap-3 rounded-lg bg-primary/5 p-3">
            <div className="mt-0.5 h-2 w-2 rounded-full bg-primary" />
            <p className="text-sm text-foreground">
              Your spending is <strong>12% higher</strong> than last month. Focus on discretionary expenses.
            </p>
          </div>
          <div className="flex items-start gap-3 rounded-lg bg-accent/5 p-3">
            <div className="mt-0.5 h-2 w-2 rounded-full bg-accent" />
            <p className="text-sm text-foreground">
              <strong>Food & Dining</strong> is your largest category at 18% of total spending.
            </p>
          </div>
          <div className="flex items-start gap-3 rounded-lg bg-primary/5 p-3">
            <div className="mt-0.5 h-2 w-2 rounded-full bg-primary" />
            <p className="text-sm text-foreground">
              You've exceeded your entertainment budget. Consider adjusting your limit for next month.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
