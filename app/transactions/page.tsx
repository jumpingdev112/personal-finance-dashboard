import { Button } from "@/components/ui/button"
import { TransactionFilters } from "@/components/transactions/transaction-filters"
import { TransactionTable } from "@/components/transactions/transaction-table"
import { Plus } from "lucide-react"

export default function TransactionsPage() {
  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Transactions</h1>
          <p className="mt-1 text-muted-foreground">Manage and track all your transactions</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Transaction
        </Button>
      </div>

      {/* Filters */}
      <TransactionFilters />

      {/* Transactions Table */}
      <TransactionTable />
    </div>
  )
}
