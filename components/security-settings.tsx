"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Lock, Shield } from "lucide-react"

export function SecuritySettings() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-foreground mb-6">Security & Privacy</h3>

      <div className="space-y-6">
        {/* Password Section */}
        <div className="border-b border-border pb-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <Lock className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium text-foreground">Password</p>
                <p className="text-sm text-muted-foreground">Last changed 3 months ago</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="bg-transparent">
              Change Password
            </Button>
          </div>
        </div>

        {/* Two-Factor Authentication */}
        <div className="border-b border-border pb-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium text-foreground">Two-Factor Authentication</p>
                <p className="text-sm text-muted-foreground">Protect your account with an additional security layer</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="bg-transparent">
              Enable
            </Button>
          </div>
        </div>

        {/* Login History */}
        <div>
          <p className="font-medium text-foreground mb-4">Recent Login Activity</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
              <div>
                <p className="text-sm font-medium text-foreground">Chrome on Windows</p>
                <p className="text-xs text-muted-foreground">Today at 10:30 AM</p>
              </div>
              <p className="text-xs text-muted-foreground">192.168.1.1</p>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
              <div>
                <p className="text-sm font-medium text-foreground">Safari on iPhone</p>
                <p className="text-xs text-muted-foreground">Yesterday at 3:45 PM</p>
              </div>
              <p className="text-xs text-muted-foreground">192.168.1.50</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
