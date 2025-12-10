import { OverviewCards } from "@/components/dashboard/overview-cards"
import { MonthlyChart } from "@/components/dashboard/monthly-chart"
import { ExpenseBreakdown } from "@/components/dashboard/expense-breakdown"
import { RecentTransactions } from "@/components/dashboard/recent-transactions"

export default function DashboardPage() {
  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Welcome back, Alex</h1>
        <p className="mt-1 text-muted-foreground">Here's your financial overview</p>
      </div>

      {/* Overview Cards */}
      <OverviewCards />

      {/* Charts Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <MonthlyChart />
        </div>
        <ExpenseBreakdown />
      </div>

      {/* Recent Transactions */}
      <RecentTransactions />
    </div>
  )
}
