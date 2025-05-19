# CCES Frontend

A modern, responsive web application built with Next.js and React, featuring a beautiful UI and robust functionality.

## Plan
https://hyper-impulse-d65.notion.site/Citizen-Complaints-and-Engagement-System-383a63ae4f4f4afc9cebb51868e95381

## Live Demo
[Live Demo](https://cces-frontend-git-main-reconforts-projects.vercel.app/)

## 🚀 Technology Stack

- **Framework**: Next.js 15.3.2
- **Language**: TypeScript
- **UI Library**: React 19
- **Styling**: Tailwind CSS
- **Form Handling**: Formik with Yup validation
- **State Management**: React Context API
- **UI Components**: 
  - Framer Motion (Animations)
- **Data Visualization**: Chart.js with react-chartjs-2
- **HTTP Client**: Axios
- **Notifications**: React Hot Toast
- **Icons**: Lucide React & React Icons

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (Latest LTS version recommended)
- npm or yarn package manager
- Git

## 🛠️ Installation

1. Clone the repository:
```bash
git clone [git@github.com:Reconfort/CCES-Frontend.git]
cd CCES-Frontend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add necessary environment variables:
```env
# Add your environment variables here
```

## 🚀 Running the Application

### Development Mode
```bash
npm run dev
# or
yarn dev
```
The application will be available at `http://localhost:3000`

### Production Build
```bash
npm run build
npm start
# or
yarn build
yarn start
```

## 📁 Project Structure

```
CCES-Frontend/
├── app/              # Next.js app directory
├── components/       # Reusable React components
├── contexts/        # React Context providers
├── hooks/           # Custom React hooks
├── lib/             # Utility functions and configurations
├── models/          # TypeScript interfaces and types
├── public/          # Static assets
└── styles/          # Global styles and Tailwind configurations
```

## 🧪 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## 🎨 Features

- Modern and responsive UI design
- Type-safe development with TypeScript
- Form validation with Formik and Yup
- Interactive charts and data visualization
- Smooth animations with Framer Motion
- Toast notifications for user feedback
- Component-based architecture
- Custom hooks for reusable logic

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- Reconfort Daniel - Initial work
