import {
  LayoutDashboard,
  TrendingUp,
  Wallet,
  Target,
  BarChart3,
  CreditCard,
} from "lucide-react"
import type { NavItem, AccountType } from "./types"

// Navigation Items
export const NAV_ITEMS: NavItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/transactions", label: "Transactions", icon: TrendingUp },
  { href: "/accounts", label: "Accounts", icon: Wallet },
  { href: "/budgets", label: "Budgets", icon: Target },
  { href: "/categories", label: "Categories", icon: CreditCard },
  { href: "/analytics", label: "Analytics", icon: BarChart3 },
]

// Account Type Labels
export const ACCOUNT_TYPE_LABELS: Record<AccountType, string> = {
  checking: "Checking Account",
  savings: "Savings Account",
  credit_card: "Credit Card",
  investment: "Investment Account",
}

// Date Range Options for Analytics
export const DATE_RANGE_OPTIONS = [
  "Last Month",
  "Last 3 Months",
  "Last 6 Months",
  "Last Year",
  "All Time",
] as const

