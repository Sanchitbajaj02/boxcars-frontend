# BoxCars Automotive Website

A modern automotive website built with Next.js, featuring a sleek UI and comprehensive car listing functionality.

## Features

- Modern, responsive design
- Car listings and details
- Advanced search and filtering
- User authentication
- Dark/Light mode support
- Form validation with React Hook Form and Zod
- Toast notifications with Sonner
- Type-safe development with TypeScript

## Tech Stack

- **Framework:** Next.js 15.3.2
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn UI
- **Form Handling:** React Hook Form + Zod
- **State Management:** React Query
- **HTTP Client:** Axios
- **Notifications:** Sonner
- **Code Quality:** ESLint + Prettier

## Getting Started

1. Clone the repository

```bash
git clone https://github.com/Sanchitbajaj02/boxcars-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Set up your environment variables:
Copy the contents of `.env.example` to create a `.env.local` file in the root directory and add your environment variables.

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Project Structure

```
src/
├── app/          # Next.js app directory
├── components/   # Reusable UI components
├── lib/          # Utility functions and configurations
└── types/        # TypeScript type definitions
```

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/docs)
- [React Query Documentation](https://tanstack.com/query/latest)

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
