# Product Management 

A modern, responsive product management application built with React, TypeScript, and Vite. This application allows users to view, add, edit, and manage products with an intuitive user interface.

## Features

- **Dual View Modes**: Toggle between list and card views for better product visualization
- **Search Functionality**: Quickly find products using the search feature
- **Pagination**: Navigate through products with ease
- **CRUD Operations**: Full support for creating, reading, updating, and deleting products
- **Responsive Design**: Works on both desktop and mobile devices
- **Modern UI**: Built with Tailwind CSS for a clean, modern look

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide Icons
- **State Management**: React Hooks
- **Type Checking**: TypeScript
- **Linting**: ESLint
- **Code Formatting**: Prettier

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd project
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code quality issues
- `npm run typecheck` - Run TypeScript type checking

## Project Structure

```
src/
  ├── components/     # Reusable UI components
  ├── data/          # Mock data and API services
  ├── hooks/         # Custom React hooks
  ├── types/         # TypeScript type definitions
  ├── App.tsx        # Main application component
  ├── main.tsx       # Application entry point
  └── index.css      # Global styles
```

## Data Model

Products have the following structure:

```typescript
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  stock: number;
  description?: string;
  createdAt: string;
  isActive: boolean;
  tags: string[];
}
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)