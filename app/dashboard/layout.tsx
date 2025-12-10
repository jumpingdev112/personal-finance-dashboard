import type React from "react"
import { Sidebar } from "@/components/sidebar"
import { TopNav } from "@/components/top-nav"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex flex-1 flex-col ml-64">
        <TopNav />
        <main className="flex-1 overflow-auto bg-background">{children}</main>
      </div>
    </div>
  )
}
