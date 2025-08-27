# Portfolio Website Project

## Overview

This is a professional portfolio website for Ahilesh Shankar, a Program & Portfolio Management Professional. The project is built as a full-stack React application with Express.js backend, featuring a modern UI built with shadcn/ui components and styled with Tailwind CSS. The site showcases professional experience, education, skills, awards, and contact information in an elegant, responsive design with smooth animations and interactive elements.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

The frontend is built using **React 18** with **TypeScript** in a single-page application (SPA) architecture:

- **Component Structure**: Modular component design using shadcn/ui component library for consistent UI elements
- **Styling**: Tailwind CSS with CSS custom properties for theming and responsive design
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Components**: Comprehensive shadcn/ui component library including cards, buttons, forms, navigation, and layout components

### Backend Architecture

The backend follows a **REST API** pattern using **Express.js**:

- **Server Framework**: Express.js with TypeScript for type safety
- **API Structure**: RESTful endpoints prefixed with `/api`
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage class)
- **Middleware**: Request logging, JSON parsing, and error handling
- **Development Setup**: Vite middleware integration for seamless full-stack development

### Data Storage Solutions

**Database Configuration**:
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL with Neon Database serverless integration
- **Schema Management**: Centralized schema definitions in `/shared/schema.ts`
- **Migrations**: Drizzle Kit for database schema migrations

**Current Implementation**:
- In-memory storage (MemStorage) for development/demo purposes
- User entity with basic CRUD operations
- Extensible storage interface for easy database integration

### Authentication and Authorization

The project includes foundational authentication structures:
- User schema with username/password fields
- Zod validation schemas for user input
- Session management capabilities (connect-pg-simple for PostgreSQL sessions)
- Storage interface methods for user management (getUser, getUserByUsername, createUser)

### External Dependencies

**Core Framework Dependencies**:
- React 18 with TypeScript
- Express.js for backend API
- Vite for build tooling and development server

**UI and Styling**:
- shadcn/ui component library with Radix UI primitives
- Tailwind CSS for utility-first styling
- Lucide React for icons
- Google Fonts integration (Inter, Architects Daughter, DM Sans, Fira Code, Geist Mono)

**Database and ORM**:
- Drizzle ORM for database operations
- @neondatabase/serverless for PostgreSQL connectivity
- Drizzle Kit for schema management and migrations

**Development and Utilities**:
- TanStack Query for server state management
- React Hook Form with Zod resolvers for form validation
- date-fns for date manipulation
- clsx and class-variance-authority for conditional styling
- Wouter for lightweight routing

**Replit Integration**:
- @replit/vite-plugin-runtime-error-modal for development error handling
- @replit/vite-plugin-cartographer for enhanced development experience
- Replit development banner integration

The architecture supports both development and production environments with proper build configurations, static file serving, and environment-specific optimizations.