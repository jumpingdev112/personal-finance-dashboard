# Personal Finance Dashboard

A modern, feature-rich personal finance management dashboard built with Next.js, React, and TypeScript. Track your expenses, manage budgets, monitor accounts, and analyze your financial data with an intuitive and beautiful interface.

![Personal Finance Dashboard](https://img.shields.io/badge/Next.js-16.0.7-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-61dafb?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.9-38bdf8?logo=tailwind-css)

## ✨ Features

### 📊 Dashboard Overview
- **Financial Overview Cards**: Quick access to total balance, income, expenses, and savings
- **Monthly Spending Chart**: Visualize your spending trends over time
- **Expense Breakdown**: See where your money goes with category-based analysis
- **Recent Transactions**: Track your latest financial activities

### 💰 Account Management
- **Multiple Account Types**: Support for checking, savings, credit cards, and investment accounts
- **Balance Visibility Toggle**: Show or hide account balances for privacy
- **Account Summary**: View total balance and account count at a glance

### 📝 Transaction Tracking
- **Transaction Management**: Add, view, and manage all your transactions
- **Advanced Filtering**: Filter by date, category, type, and account
- **Transaction Categories**: Organize expenses into meaningful categories

### 💵 Budget Management
- **Category Budgets**: Set spending limits for different categories
- **Budget Tracking**: Monitor spending against budget limits with visual indicators
- **Over-Budget Alerts**: Get notified when you exceed your budget

### 🎯 Financial Goals
- **Goal Setting**: Create and track financial goals with deadlines
- **Progress Tracking**: Visualize your progress toward achieving goals
- **Multiple Goals**: Manage multiple goals simultaneously

### 📈 Analytics & Reports
- **Spending Trends**: Analyze your spending patterns over time
- **Category Comparison**: Compare spending across different categories
- **Custom Date Ranges**: View reports for various time periods
- **Statistical Insights**: Get detailed financial statistics

### 🗂️ Category Management
- **Custom Categories**: Create and organize expense categories
- **Category Analytics**: View spending per category with transaction counts
- **Visual Organization**: Color-coded categories for easy identification

### ⚙️ Settings
- **Profile Management**: Update your personal information
- **Notification Preferences**: Customize how you receive alerts
- **Security Settings**: Manage your account security

### 🎨 User Experience
- **Dark/Light Mode**: Toggle between themes for comfortable viewing
- **Responsive Design**: Fully responsive layout for desktop, tablet, and mobile
- **Modern UI**: Built with Radix UI and Tailwind CSS for a polished look
- **Accessibility**: WCAG compliant components

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ or higher
- **pnpm** (recommended) or npm/yarn
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd personal-finance-dashboard
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
pnpm build
pnpm start
```

## 📁 Project Structure

```
personal-finance-dashboard/
├── app/                      # Next.js app directory
│   ├── accounts/            # Accounts management page
│   ├── analytics/           # Analytics and reports page
│   ├── budgets/             # Budgets and goals page
│   ├── categories/          # Category management page
│   ├── dashboard/           # Main dashboard
│   │   ├── layout.tsx      # Dashboard layout with sidebar
│   │   └── page.tsx        # Dashboard home page
│   ├── settings/            # Settings page
│   ├── transactions/        # Transactions page
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page (redirects to dashboard)
├── components/              # React components (organized by feature)
│   ├── ui/                 # Reusable UI components (shadcn/ui)
│   ├── layout/             # Layout components
│   │   ├── sidebar.tsx     # Navigation sidebar
│   │   ├── top-nav.tsx     # Top navigation bar
│   │   ├── theme-provider.tsx # Theme provider for dark/light mode
│   │   └── index.ts        # Layout component exports
│   ├── dashboard/          # Dashboard-specific components
│   │   ├── overview-cards.tsx # Overview statistics cards
│   │   ├── monthly-chart.tsx # Monthly spending chart
│   │   ├── expense-breakdown.tsx # Expense breakdown pie chart
│   │   ├── recent-transactions.tsx # Recent transactions list
│   │   ├── stats-grid.tsx  # Statistics grid
│   │   ├── spending-trend.tsx # Spending trend line chart
│   │   ├── category-comparison.tsx # Category comparison chart
│   │   └── index.ts        # Dashboard component exports
│   ├── accounts/           # Account management components
│   │   ├── account-card.tsx # Account card component
│   │   └── index.ts        # Account component exports
│   ├── budgets/            # Budget management components
│   │   ├── budget-card.tsx # Budget card component
│   │   ├── goal-card.tsx   # Financial goal card component
│   │   └── index.ts        # Budget component exports
│   ├── categories/         # Category management components
│   │   ├── category-card.tsx # Category card component
│   │   └── index.ts        # Category component exports
│   ├── transactions/       # Transaction management components
│   │   ├── transaction-filters.tsx # Transaction filtering UI
│   │   ├── transaction-table.tsx # Transaction table component
│   │   └── index.ts        # Transaction component exports
│   └── settings/           # Settings page components
│       ├── profile-form.tsx # User profile form
│       ├── notification-settings.tsx # Notification preferences
│       ├── security-settings.tsx # Security settings
│       └── index.ts        # Settings component exports
├── lib/                    # Utility functions and types
│   ├── types.ts            # TypeScript type definitions
│   ├── constants.ts        # Application constants
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
├── styles/                 # Global styles
├── hooks/                  # Custom React hooks
├── .eslintrc.json         # ESLint configuration
├── .gitignore             # Git ignore file
├── next.config.mjs        # Next.js configuration
├── package.json           # Project dependencies
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

## 🛠️ Tech Stack

### Core Framework
- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety

### Styling
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Tailwind CSS Animate](https://www.tailwindcss-animate.com/)** - Animation utilities
- **[CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)** - Theming support

### UI Components
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible component primitives
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable components built with Radix UI and Tailwind CSS
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library

### Forms & Validation
- **[React Hook Form](https://react-hook-form.com/)** - Performant forms with easy validation
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation

### Charts & Visualization
- **[Recharts](https://recharts.org/)** - Composable charting library

### Utilities
- **[date-fns](https://date-fns.org/)** - Modern JavaScript date utility library
- **[clsx](https://github.com/lukeed/clsx)** - Utility for constructing className strings
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Merge Tailwind CSS classes

### Theming
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Perfect dark mode for Next.js

### Analytics
- **[Vercel Analytics](https://vercel.com/analytics)** - Web analytics

## 📝 Available Scripts

```bash
# Development
pnpm dev          # Start development server

# Production
pnpm build        # Build for production
pnpm start        # Start production server

# Code Quality
pnpm lint         # Run ESLint
```

## 🎨 Customization

### Theme Customization

The project uses CSS variables for theming. You can customize colors in `app/globals.css` or `styles/globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* ... other theme variables */
}
```

### Adding New Pages

1. Create a new directory in `app/` with `page.tsx`
2. The page will automatically be included in the routing
3. For pages with the dashboard layout, ensure they're nested under `/dashboard` or use the dashboard layout

### Adding New Components

1. Create component files in `components/`
2. Use TypeScript for type safety
3. Follow the existing component patterns

## 🔒 Security Considerations

This is a frontend-only application. For production use, you should:

- Implement authentication and authorization
- Add API endpoints with proper validation
- Use environment variables for sensitive configuration
- Implement rate limiting
- Add CSRF protection
- Use HTTPS in production

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the amazing component library
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Next.js](https://nextjs.org/) team for the excellent framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

## 📧 Support

If you have any questions or run into issues, please open an issue on GitHub.

---

Built with ❤️ using Next.js and TypeScript

