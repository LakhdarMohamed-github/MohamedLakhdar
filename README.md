# Lakhdar Mohamed - Portfolio Website

A professional portfolio website built with React.js and Bootstrap, showcasing the skills, experience, and projects of Mohamed Lakhdar, a Software Developer.

## Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations and hover effects
- **Bootstrap Integration**: Uses React Bootstrap for consistent styling and responsive components
- **Professional Sections**:
  - Hero section with profile picture and introduction
  - About section with soft skills and languages
  - Professional experience with detailed job descriptions
  - Technical skills organized by categories
  - Education background
  - Contact section with social media links

## Technologies Used

- React.js 18
- React Bootstrap
- Bootstrap 5
- Bootstrap Icons
- Vite (build tool)
- CSS3 with custom animations

## Setup Instructions

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Extract the zip file to your desired location
2. Navigate to the project directory:
   ```bash
   cd lakhdar-portfolio
   ```

3. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

## Project Structure

```
lakhdar-portfolio/
├── public/
│   ├── profile-pic.png      # Profile picture
│   └── favicon.ico
├── src/
│   ├── App.jsx              # Main application component
│   ├── App.css              # Custom styles
│   ├── main.jsx             # Application entry point
│   └── components/          # Reusable UI components
├── dist/                    # Production build (after npm run build)
├── package.json
└── README.md
```

## Customization

### Updating Content
All portfolio content is stored in the `resumeData` object in `src/App.jsx`. You can easily update:
- Personal information
- Work experience
- Skills
- Education
- Contact information

### Styling
Custom styles are in `src/App.css`. The design uses:
- CSS Grid and Flexbox for layouts
- CSS custom properties for consistent theming
- Smooth transitions and hover effects
- Responsive breakpoints

### Profile Picture
Replace `public/profile-pic.png` with your own profile picture (recommended size: 400x400px).

## Contact Information

- **Email**: mohamed.lakhdar.pro@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/lakhdar-mohamed/
- **GitHub**: https://github.com/LakhdarMohamed-github

## License

This project is created for Mohamed Lakhdar's personal portfolio. Feel free to use it as inspiration for your own portfolio.

