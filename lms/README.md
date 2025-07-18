# LMS - Learning Management System

A modern Learning Management System built with React, Node.js, and MongoDB.

## Setup

### Environment Variables

1. Copy the example environment file:
   ```
   cp .env.example .env
   ```

2. Fill in your Google OAuth credentials in the `.env` file:
   ```
   GOOGLE_CLIENT_ID=your_google_client_id_here
   GOOGLE_CLIENT_SECRET=your_google_client_secret_here
   ```

### Installation

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm run dev
   ```

### Backend Setup

Navigate to the server directory and install dependencies:
```
cd ../server
npm install
npm start
```

## Technology Stack

- Frontend: React + Vite
- Backend: Node.js + Express
- Database: MongoDB
- Authentication: Google OAuth 2.0

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
