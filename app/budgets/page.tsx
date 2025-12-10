import { Button } from "@/components/ui/button"
import { BudgetCard } from "@/components/budget-card"
import { GoalCard } from "@/components/goal-card"
import { Plus } from "lucide-react"
import { Zap, Home, Plane } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BudgetsPage() {
  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Budgets & Goals</h1>
          <p className="mt-1 text-muted-foreground">Create and track your financial targets</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Budget
        </Button>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="budgets" className="w-full">
        <TabsList className="grid w-48 grid-cols-2">
          <TabsTrigger value="budgets">Budgets</TabsTrigger>
          <TabsTrigger value="goals">Goals</TabsTrigger>
        </TabsList>

        {/* Budgets Tab */}
        <TabsContent value="budgets" className="mt-6 space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <BudgetCard category="Food & Dining" spent={450} limit={600} />
            <BudgetCard category="Transportation" spent={380} limit={400} />
            <BudgetCard category="Entertainment" spent={220} limit={200} isOverBudget />
            <BudgetCard category="Shopping" spent={280} limit={500} />
            <BudgetCard category="Utilities" spent={145} limit={200} />
            <BudgetCard category="Healthcare" spent={0} limit={300} />
          </div>
        </TabsContent>

        {/* Goals Tab */}
        <TabsContent value="goals" className="mt-6 space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <GoalCard
              name="Emergency Fund"
              current={8500}
              target={15000}
              deadline="Dec 2025"
              icon={<Zap className="h-5 w-5" />}
            />
            <GoalCard
              name="Home Down Payment"
              current={42000}
              target={100000}
              deadline="Jun 2027"
              icon={<Home className="h-5 w-5" />}
            />
            <GoalCard
              name="Vacation Fund"
              current={3200}
              target={5000}
              deadline="Jul 2025"
              icon={<Plane className="h-5 w-5" />}
            />
            <GoalCard
              name="Car Upgrade"
              current={6800}
              target={25000}
              deadline="Dec 2026"
              icon={<Zap className="h-5 w-5" />}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
