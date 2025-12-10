import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProfileForm } from "@/components/profile-form"
import { NotificationSettings } from "@/components/notification-settings"
import { SecuritySettings } from "@/components/security-settings"

export default function SettingsPage() {
  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="mt-1 text-muted-foreground">Manage your account and preferences</p>
      </div>

      {/* Settings Tabs */}
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-72 grid-cols-3">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <div className="mt-6">
          {/* Profile Tab */}
          <TabsContent value="profile">
            <ProfileForm />
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications">
            <NotificationSettings />
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security">
            <SecuritySettings />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}
