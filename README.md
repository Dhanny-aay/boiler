# Dashboard Template

A scalable, data-driven dashboard template built with React, TypeScript, and modern web technologies. This template includes offline capabilities, strict TypeScript configuration, and a robust component structure.

## Features

- **React + TypeScript**: Modern development with strict type safety
- **Offline-First**: Service Worker implementation with Workbox for caching
- **Professional Design**: Clean, modern interface with Manrope typography
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **State Management**: Context API with caching and error handling
- **Modular Components**: Scalable component architecture
- **PWA Ready**: Progressive Web App capabilities
- **Modern Icons**: Lucide React icon library for consistent iconography
- **Skeleton Loading**: Smooth loading states with animated placeholders
- **Enhanced UX**: Toast notifications and improved offline indicators

## Technology Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with PWA support
- **Styling**: Tailwind CSS with custom design system
- **Typography**: Manrope font family
- **Icons**: Lucide React icon library
- **State Management**: React Context API
- **Offline Support**: Workbox (Service Worker)
- **Type Safety**: TypeScript with strict mode

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Dashboard.tsx   # Main dashboard view
│   ├── Header.tsx      # Application header
│   ├── Layout.tsx      # Main layout wrapper
│   ├── MetricCard.tsx  # Metric display cards
│   ├── DataTable.tsx   # Data table component
│   └── ...
├── context/            # React Context providers
│   └── AppContext.tsx  # Global application state
├── hooks/              # Custom React hooks
│   └── useServiceWorker.ts
├── services/           # API and data services
│   └── mockApi.ts      # Mock API implementation
├── types/              # TypeScript type definitions
│   └── index.ts
└── main.tsx           # Application entry point
```

## Key Features

#### Design System
- **Typography**: Manrope font with clear weight hierarchy
- **Colors**: Primary blue theme (#0EA5E9) with consistent color palette
- **Spacing**: Generous padding and consistent gap spacing
- **Icons**: Lucide React icons throughout the interface
- **Cards**: Clean lift-off effect with rounded corners and shadows

#### Offline Capabilities
- Service Worker automatically caches static assets
- API responses are cached with TTL (Time To Live)
- Dual offline indicators (top banner + bottom-right toast)
- Graceful degradation when offline

#### Enhanced UX
- **Skeleton Loading**: Animated placeholders during data fetching
- **Responsive Design**: Mobile-first with responsive sidebar
- **Toast Notifications**: Non-intrusive offline alerts
- **Loading States**: Smooth transitions and feedback

#### TypeScript Strict Mode
- All variables and functions are explicitly typed
- Strict null checks enabled
- No implicit any types
- Comprehensive type safety

#### Component Architecture
- **Layout**: Responsive wrapper with mobile-hidden sidebar
- **Header**: Enhanced with New Report button and network status
- **Sidebar**: Navigation with Lucide icons and user profile
- **Dashboard**: Improved grid layout with skeleton loading
- **MetricCard**: New design with border-top accent and skeleton states
- **DataTable**: Enhanced typography and improved loading states

#### State Management
- React Context API for global state
- Caching layer for API responses
- Error handling and loading states
- Online/offline status tracking

## Customization

### Adding New Metrics

1. Update the `MetricCard` interface in `src/types/index.ts`
2. Modify the mock data in `src/services/mockApi.ts`
3. The dashboard will automatically display new metrics

### Integrating Charts

The template includes placeholder components for charts. To integrate your preferred charting library:

1. Install your charting library (e.g., Chart.js, D3.js, Recharts)
2. Replace the `ChartPlaceholder` component content
3. Update the TypeScript interfaces as needed

### Styling

The project uses Tailwind CSS for styling. Customize the design by:

1. Modifying `tailwind.config.js` for theme customization
2. Adding custom CSS classes in `src/index.css`
3. Using Tailwind utility classes in components

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## License

MIT License - feel free to use this template for your projects.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## Support

For questions or issues, please open a GitHub issue or contact the development team.
