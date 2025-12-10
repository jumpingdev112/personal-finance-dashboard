import { Button } from "@/components/ui/button"
import { CategoryCard } from "@/components/category-card"
import { Plus, ShoppingCart, Zap, Car, Film, Utensils, Home, Heart } from "lucide-react"

export default function CategoriesPage() {
  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Categories</h1>
          <p className="mt-1 text-muted-foreground">Organize and manage expense categories</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Category
        </Button>
      </div>

      {/* Categories Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <CategoryCard
          name="Food & Dining"
          icon={<Utensils className="h-5 w-5" />}
          color="bg-orange-100 text-orange-600"
          transactionCount={24}
          totalSpent={2150}
        />
        <CategoryCard
          name="Shopping"
          icon={<ShoppingCart className="h-5 w-5" />}
          color="bg-blue-100 text-blue-600"
          transactionCount={12}
          totalSpent={1340}
        />
        <CategoryCard
          name="Transportation"
          icon={<Car className="h-5 w-5" />}
          color="bg-red-100 text-red-600"
          transactionCount={8}
          totalSpent={450}
        />
        <CategoryCard
          name="Entertainment"
          icon={<Film className="h-5 w-5" />}
          color="bg-purple-100 text-purple-600"
          transactionCount={15}
          totalSpent={680}
        />
        <CategoryCard
          name="Utilities"
          icon={<Zap className="h-5 w-5" />}
          color="bg-yellow-100 text-yellow-600"
          transactionCount={5}
          totalSpent={450}
        />
        <CategoryCard
          name="Housing"
          icon={<Home className="h-5 w-5" />}
          color="bg-green-100 text-green-600"
          transactionCount={2}
          totalSpent={2400}
        />
        <CategoryCard
          name="Healthcare"
          icon={<Heart className="h-5 w-5" />}
          color="bg-pink-100 text-pink-600"
          transactionCount={3}
          totalSpent={280}
        />
      </div>
    </div>
  )
}
