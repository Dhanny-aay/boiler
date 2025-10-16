# 🚀 Boiler PWA Template: Production-Ready Dashboard

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/--typescript-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/--react-blue?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/--vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

> Tired of starting from scratch? This template is my production-grade, go-to boilerplate for scalable, data-driven dashboards. It includes all the modern must-haves baked in: TypeScript, PWA offline support, and a clean Tailwind design system.

## 🎯 What Problem Does This Solve?

Most templates focus only on design or only on basic functionality. This template is built for developers who need both architectural integrity and modern features from Day 1.

It provides a single, opinionated source for best-practice tech: guaranteeing strict type safety, a resilient offline experience, and a modular component structure for any SaaS MVP or enterprise application.

## 🌟 Key Architectural Features

| Feature Category       | Highlight                  | Technical Detail                                                                                                                                           |
| ---------------------- | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Offline Resilience** | Offline-First PWA          | Service Worker (via Workbox) caches static assets and API responses with TTL (Time To Live). Supports Graceful Degradation with dual offline indicators.   |
| **Code Integrity**     | TypeScript Strict Mode     | All variables and functions are explicitly typed; Strict null checks enabled; No implicit `any` types—comprehensive type safety enforced.                  |
| **Data Flow**          | Context API + Caching      | Simple, effective React Context API for global state management, enhanced with a custom Caching Layer for API responses and handling loading/error states. |
| **UX/UI**              | Professional Design System | Clean, modern interface with Tailwind CSS, Manrope typography, Lucide React icons, and responsive Skeleton Loading placeholders during data fetching.      |
| **Scalability**        | Modular Components         | Component architecture separated into logical concerns (Layout, MetricCard, DataTable) designed for easy addition and removal of features.                 |

## 🛠️ Technology Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Offline**: Workbox (Service Worker)
- **Icons**: Lucide React

## 🏃 Getting Started

### Prerequisites

- Node.js 16+
- `npm` or `yarn`

### Installation Steps

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Dhanny-aay/ts-next-pwa-dashboard.git
    cd ts-next-pwa-dashboard
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    > **Tip:** Check your browser's console for the Service Worker registration status!

### Build for Production

1.  **Create a production build:**

    ```bash
    npm run build
    ```

2.  **Preview the optimized build locally:**
    ```bash
    npm run preview
    ```

## 📂 Project Structure

The project maintains a clear separation of concerns for developer sanity.

```
src/
├── components/         # Reusable UI components
│   ├── Dashboard.tsx
│   ├── Header.tsx
│   ├── Layout.tsx
│   ├── MetricCard.tsx
│   └── DataTable.tsx
├── context/            # React Context providers (Global App State/Caching)
│   └── AppContext.tsx
├── hooks/              # Custom React hooks
│   └── useServiceWorker.ts
├── services/           # API and data services
│   └── mockApi.ts
├── types/              # TypeScript type definitions
│   └── index.ts
└── main.tsx            # Application entry point
```

## 🎨 Customization & Advanced Details

### Design System Overview

- **Typography**: Manrope font with a clear weight hierarchy.
- **Colors**: Primary blue theme (`#0EA5E9`) with a consistent color palette.
- **Spacing**: Generous padding and consistent gap spacing.
- **Icons**: Lucide React icons used throughout the interface.
- **Cards**: Clean lift-off effect with rounded corners and shadows.

### Component Deep Dive

- **Layout**: Responsive wrapper handling mobile-hidden sidebar logic.
- **Header**: Enhanced with a "New Report" button and real-time network status display.
- **Sidebar**: Navigation with Lucide icons and a user profile section.
- **Dashboard**: Improved grid layout with skeleton loading states.
- **MetricCard**: New design with a border-top accent and dedicated skeleton states.
- **DataTable**: Enhanced typography and improved loading states.

### Customization Steps

#### Adding New Metrics

1. Update the `MetricCard` interface in `src/types/index.ts`.
2. Modify the mock data in `src/services/mockApi.ts`.
3. The dashboard will automatically display the new metrics.

#### Integrating Charts

1. Install your preferred charting library (e.g., `chart.js`, `recharts`).
2. Replace the `ChartPlaceholder` component content with your chart implementation.
3. Update the TypeScript interfaces as needed.

#### Styling

- Modify `tailwind.config.js` for theme-level customization.
- Add global custom CSS classes in `src/index.css`.
- Use Tailwind utility classes directly in your components.

## 🤝 How to Contribute

This is an open-source project, and your contribution makes it better! We welcome PRs for features like i18n, E2E testing, or Auth integration.

Please review our `CONTRIBUTING.md` file for guidelines on reporting bugs and submitting Pull Requests.

## 🌐 Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 📄 License & Support

This project is distributed under the **MIT License**. Feel free to use this template for any of your projects, personal or commercial. For questions or issues, please open a GitHub issue.
