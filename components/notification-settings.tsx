"use client"

import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

interface NotificationToggleProps {
  label: string
  description: string
  enabled: boolean
}

function NotificationToggle({ label, description, enabled }: NotificationToggleProps) {
  return (
    <div className="flex items-center justify-between border-b border-border py-4 last:border-0">
      <div>
        <p className="font-medium text-foreground">{label}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <Switch defaultChecked={enabled} />
    </div>
  )
}

export function NotificationSettings() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-foreground mb-6">Notifications</h3>

      <div className="space-y-0">
        <NotificationToggle
          label="Budget Alerts"
          description="Get notified when you're approaching budget limits"
          enabled={true}
        />
        <NotificationToggle
          label="Large Transactions"
          description="Alert me for transactions above $500"
          enabled={true}
        />
        <NotificationToggle
          label="Weekly Summary"
          description="Receive a weekly spending summary every Monday"
          enabled={true}
        />
        <NotificationToggle
          label="Goal Progress"
          description="Get updates on your savings goal progress"
          enabled={false}
        />
        <NotificationToggle
          label="Security Alerts"
          description="Important security notifications and login alerts"
          enabled={true}
        />
      </div>
    </Card>
  )
}
