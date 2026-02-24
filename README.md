# Kicks E-commerce

## Overview
Kicks is a modern, responsive e-commerce storefront built as part of a frontend implementation task. The goal of this project was to translate a Figma design into a fully functional and responsive web application using modern frontend technologies.

The application focuses on UI accuracy, clean architecture, and efficient state and data management. It integrates a product API for dynamic product listing, product details, and category filtering.

---

## Live Demo
Live URL: [https://kicks-navy.vercel.app/](https://kicks-navy.vercel.app/)

---

## Design Source
Figma Design:  
https://www.figma.com/design/tL4Vl3H0y0XE5N7aqvvlE2/Frontend-task

---

## API Integration
This project uses the Platzi Fake Store API:

- Products API  
https://fakeapi.platzi.com/en/rest/products/

- Categories API  
https://fakeapi.platzi.com/en/rest/categories/

Dynamic features powered by API:
- Product listing (Landing page)
- Product details page
- Category filtering

---

## Technology Stack

Framework:
- Next.js (App Router)

Language:
- TypeScript

State Management:
- Redux Toolkit + RTK Query

Styling:
- Tailwind CSS

UI & Components:
- Radix UI
- Shadcn UI

Data Fetching:
- RTK Query

Additional Libraries:
- Swiper (Product sliders)
- Lucide React & React Icons
- Sonner (Toast notifications)

---

## Key Features
- Pixel-perfect UI implementation based on Figma.
- Fully responsive design (mobile, tablet, and desktop).
- Dynamic product listing from API.
- Product detail page with image gallery.
- Category-based filtering.
- Loading, empty, and error state handling.
- Modern and clean component architecture.
- Optimized performance with Next.js.
- Meaningful commit history and modular codebase.

---

## Bonus Features
- Cart functionality with local state.
- Smooth animations and transitions.
- Persistent cart using Redux state.

---

## Project Structure
- /app: Next.js App Router pages and layouts
- /components: Reusable UI components
- /redux: Redux store, slices, RTK Query API
- /lib: Utility functions and helpers
- /public: Static assets

---

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm / yarn / pnpm

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd kicks
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project
```bash
npm run dev
```
Open http://localhost:3000 in your browser to view the application.

### Building for Production
```bash
npm run build
```
