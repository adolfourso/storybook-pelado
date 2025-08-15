# Storybook Pelado

A comprehensive React component library built with Storybook, featuring modern development tools and accessibility-first design.

## 🚀 Features

- **React 19** with Vite for fast development
- **Storybook 9** for component development and documentation
- **TypeScript** support for type safety
- **Bootstrap 5** with React Bootstrap components
- **Accessibility testing** with axe-core integration
- **Comprehensive testing** with Vitest and React Testing Library
- **Modern tooling** with ESLint, Prettier-ready setup

## 📦 Components

This library includes 10 carefully crafted React components:

- **Button** - Primary and secondary variants with multiple sizes
- **Card** - Flexible content containers with Bootstrap styling
- **Alert** - Contextual feedback messages
- **Modal** - Accessible dialog overlays
- **Badge** - Small status indicators
- **Breadcrumb** - Navigation hierarchy
- **Header** - Application headers with user actions
- **Spinner** - Loading indicators
- **ProgressBar** - Visual progress indicators
- **Page** - Complete page layouts

## 🛠 Development

### Prerequisites

- Node.js >= 18
- npm >= 9

### Installation

```bash
npm install
```

### Available Scripts

```bash
# Start Storybook development server
npm run storybook

# Build Storybook for production
npm run build-storybook

# Run tests
npm run test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage

# Test Storybook stories
npm run test-storybook

# Build React app
npm run build

# Lint code
npm run lint
```

### Development Server

```bash
npm run storybook
```

Visit http://localhost:6006 to view your components in Storybook.

## 🧪 Testing

The project includes comprehensive testing setup:

- **Unit Tests**: Vitest with React Testing Library
- **Component Tests**: Storybook test runner
- **Accessibility Tests**: axe-core integration in error mode
- **Browser Tests**: Playwright for cross-browser testing

## ♿ Accessibility

Accessibility is a first-class citizen in this project:

- Components follow WCAG 2.1 AA guidelines
- Automated a11y testing with axe-core
- Keyboard navigation support
- Screen reader compatibility
- Color contrast validation

## 🎨 Styling

- **Bootstrap 5** for consistent design system
- **React Bootstrap** components for seamless integration
- **Custom CSS** for component-specific styling
- **Responsive design** mobile-first approach

## 📁 Project Structure

```
src/
├── stories/           # Storybook stories and components
│   ├── Button.jsx     # Button component
│   ├── Button.stories.js
│   └── ...
├── test/             # Test configuration
└── ...
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
