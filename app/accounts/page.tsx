import { Button } from "@/components/ui/button"
import { AccountCard } from "@/components/accounts/account-card"
import { Plus } from "lucide-react"

export default function AccountsPage() {
  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Accounts</h1>
          <p className="mt-1 text-muted-foreground">Manage your financial accounts</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Account
        </Button>
      </div>

      {/* Accounts Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AccountCard name="Main Checking" type="checking" balance={8450} accountNumber="1234567890" />
        <AccountCard name="Emergency Fund" type="savings" balance={15250} accountNumber="0987654321" />
        <AccountCard name="Credit Card" type="credit_card" balance={2340} accountNumber="5678901234" />
        <AccountCard name="Investment Account" type="investment" balance={45600} accountNumber="4321098765" />
      </div>

      {/* Summary */}
      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="text-lg font-semibold text-foreground">Account Summary</h3>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-sm text-muted-foreground">Total Balance</p>
            <p className="mt-1 text-2xl font-bold text-foreground">$71,640</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Accounts</p>
            <p className="mt-1 text-2xl font-bold text-foreground">4</p>
          </div>
        </div>
      </div>
    </div>
  )
}
