import React from "react"

// Account Types
export type AccountType = "checking" | "savings" | "credit_card" | "investment"

export interface Account {
  id: string
  name: string
  type: AccountType
  balance: number
  accountNumber: string
}

// Transaction Types
export type TransactionType = "income" | "expense" | "transfer"

export type TransactionCategory =
  | "food"
  | "transportation"
  | "entertainment"
  | "shopping"
  | "utilities"
  | "healthcare"
  | "salary"
  | "other"

export interface Transaction {
  id: string
  description: string
  amount: number
  type: TransactionType
  category: TransactionCategory
  date: Date
  accountId: string
}

// Budget Types
export interface Budget {
  id: string
  category: TransactionCategory
  limit: number
  spent: number
  period: "monthly" | "yearly"
}

// Goal Types
export interface Goal {
  id: string
  name: string
  current: number
  target: number
  deadline: string
  icon?: React.ReactNode
}

// Navigation Types
export interface NavItem {
  href: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

