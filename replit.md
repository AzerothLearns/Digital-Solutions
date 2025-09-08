# CFNA Marketing Website

## Overview

A modern, responsive marketing website for CFNA Marketing built with React and TypeScript. The application serves as a digital business card and lead generation tool, featuring a single-page layout with sections for hero content, services showcase, company information, and a contact form. The site emphasizes data-driven marketing strategies and uses a professional dark theme with blue and teal accents to convey trustworthiness and innovation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**React Single-Page Application**: Built with Vite for fast development and optimized builds. The application uses a component-based architecture with TypeScript for type safety and better developer experience.

**Routing**: Uses Wouter for lightweight client-side routing. Currently implements a simple two-route structure (Home and 404 pages), with the main content organized as a single-page application with smooth scrolling navigation.

**State Management**: Leverages React Query (@tanstack/react-query) for server state management, particularly for handling contact form submissions and API interactions. Local component state is managed with React hooks.

**UI Components**: Built on Radix UI primitives with shadcn/ui component library providing accessible, customizable components. Uses Tailwind CSS for styling with a custom design system featuring CSS variables for consistent theming.

**Form Handling**: React Hook Form with Zod validation schemas for type-safe form validation and submission. The contact form includes comprehensive validation with user-friendly error messages.

### Backend Architecture

**Express.js Server**: RESTful API server handling contact form submissions and potential future endpoints. Implements middleware for request logging, JSON parsing, and error handling.

**Database Layer**: Currently uses in-memory storage (MemStorage class) for development/demo purposes. The architecture is designed with an interface pattern (IStorage) to easily swap to persistent storage solutions like PostgreSQL with Drizzle ORM.

**Data Validation**: Server-side validation using Zod schemas shared between frontend and backend, ensuring consistent data validation across the application.

### Design System

**Theme**: Custom dark theme with professional color palette featuring primary blue (#3B82F6) and secondary teal (#06B6D4) colors. Uses CSS custom properties for consistent theming and easy maintenance.

**Typography**: Inter font family for clean, professional appearance with appropriate font weights and sizes for different content types.

**Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints ensuring optimal user experience across all device sizes.

### External Dependencies

**UI/UX Libraries**:
- Radix UI primitives for accessible component foundations
- Tailwind CSS for utility-first styling
- Lucide React for consistent iconography
- Embla Carousel for potential future carousel implementations

**Development Tools**:
- Vite for build tooling and development server
- TypeScript for type safety
- ESBuild for production builds
- Replit-specific plugins for development environment integration

**Potential Database Integration**:
- Drizzle ORM configured for PostgreSQL (via @neondatabase/serverless)
- Database schema defined in shared directory for type consistency
- Migration system ready for production deployment

**Form and Validation**:
- React Hook Form for performant form handling
- Zod for schema validation and type generation
- Date-fns for date manipulation (potential future features)

**State Management**:
- TanStack Query for server state and API interactions
- Built-in React state management for local component state

The architecture supports easy scaling from the current single-page marketing site to a more complex application with user authentication, admin dashboards, and persistent data storage.