"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { User } from "lucide-react"

export function ProfileForm() {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-4 pb-6 border-b border-border mb-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <User className="h-8 w-8" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">Alex Johnson</h3>
          <p className="text-sm text-muted-foreground">alex@example.com</p>
        </div>
      </div>

      <form className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-foreground">First Name</label>
            <Input placeholder="Alex" className="mt-2" defaultValue="Alex" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">Last Name</label>
            <Input placeholder="Johnson" className="mt-2" defaultValue="Johnson" />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-foreground">Email Address</label>
          <Input placeholder="alex@example.com" type="email" className="mt-2" defaultValue="alex@example.com" />
        </div>

        <div>
          <label className="text-sm font-medium text-foreground">Currency</label>
          <select className="mt-2 w-full rounded-md border border-input bg-card px-3 py-2 text-sm text-foreground">
            <option>USD - US Dollar</option>
            <option>EUR - Euro</option>
            <option>GBP - British Pound</option>
            <option>CAD - Canadian Dollar</option>
          </select>
        </div>

        <div className="flex gap-3 pt-4">
          <Button>Save Changes</Button>
          <Button variant="outline" className="bg-transparent">
            Cancel
          </Button>
        </div>
      </form>
    </Card>
  )
}
