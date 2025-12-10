"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Eye, EyeOff } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from "react"
import type { AccountType } from "@/lib/types"
import { ACCOUNT_TYPE_LABELS } from "@/lib/constants"

interface AccountCardProps {
  name: string
  type: AccountType
  balance: number
  accountNumber: string
}

export function AccountCard({ name, type, balance, accountNumber }: AccountCardProps) {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <Card className="p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-foreground">{name}</h3>
          <p className="text-sm text-muted-foreground">{ACCOUNT_TYPE_LABELS[type]}</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit Account</DropdownMenuItem>
            <DropdownMenuItem>View Transactions</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="mb-4 rounded-lg bg-muted p-4">
        <p className="text-xs text-muted-foreground mb-2">Balance</p>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold text-foreground">{isVisible ? `$${balance.toLocaleString()}` : "****"}</p>
          <button onClick={() => setIsVisible(!isVisible)} className="text-muted-foreground hover:text-foreground">
            {isVisible ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <p className="text-xs text-muted-foreground">...{accountNumber.slice(-4)}</p>
    </Card>
  )
}
