# 🚀 Personal Portfolio Website

<div align="center">

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled_Components-6.1.17-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

<br/>

A modern, responsive portfolio website showcasing projects, skills, and professional experience with stunning animations and seamless user experience.

<br/>

[Live Demo](#) • [Report Bug](#) • [Request Feature](#)

</div>

---

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, professional design with smooth animations
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 📧 **Contact Form** - Integrated with Web3Forms for seamless communication
- 🔍 **SEO Optimized** - Meta tags, Open Graph, Twitter Cards, and structured data
- ♿ **Accessible** - WCAG compliant with semantic HTML
- 🎯 **Type Safe** - Built with TypeScript for better code quality
- 🌙 **Error Handling** - Error boundaries for graceful error recovery
- ⏳ **Loading States** - Elegant loading screens and transitions

---

## 🛠️ Tech Stack

### Core

- **React 19.1.0** - UI library
- **TypeScript 5.8.3** - Type safety
- **Vite 6.3.5** - Build tool & dev server

### Styling & Animation

- **Styled Components 6.1.17** - CSS-in-JS styling
- **Framer Motion 12.10.0** - Animation library

### Form & Communication

- **Web3Forms** - Contact form service (no backend required)

### Code Quality

- **ESLint 9.17.0** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting

---

## 📂 Project Structure

```
Portfolio-project-dev/
├── public/
│   ├── robots.txt           # SEO crawler directives
│   └── sitemap.xml          # Site map for search engines
├── src/
│   ├── assets/              # Images, icons, and static files
│   ├── components/
│   │   ├── About/           # About section
│   │   ├── Contact/         # Contact section with form
│   │   ├── ErrorBoundary/   # Error handling component
│   │   ├── Form/            # Contact form component
│   │   ├── HeaderSection/   # Header & navigation
│   │   ├── HeroSection/     # Hero/landing section
│   │   ├── Loading/         # Loading screen
│   │   ├── Projects/        # Projects showcase
│   │   ├── Skills/          # Skills display
│   │   └── ...              # Other UI components
│   ├── constants/           # App constants and data
│   │   ├── AboutConstant.ts # About section data
│   │   └── ProjectConstant.ts # Projects data
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # App entry point
│   └── index.css            # Global styles
├── .env                     # Environment variables (not in git)
├── .env.example             # Environment variables template
├── .gitignore               # Git ignore rules
├── index.html               # HTML entry point
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
└── vite.config.ts           # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/stranger0407/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your Web3Forms access key:

   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```

   Get your free access key at [web3forms.com](https://web3forms.com)

4. **Start development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) in your browser

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |

---

## 🎨 Customization

### Update Personal Information

1. **Hero Section**
   - Edit `src/components/HeroSection/Hero.tsx`
   - Update name, title, and description

2. **About Section**
   - Edit `src/components/About/About.tsx`
   - Update bio and personal information

3. **Skills**
   - Update `src/constants/AboutConstant.ts`
   - Add/remove skills as needed

4. **Projects**
   - Update `src/constants/ProjectConstant.ts`
   - Add your projects with images, descriptions, and links

5. **Contact Information**
   - Edit `src/components/Contact/Contact.tsx`
   - Update email, phone, location, and social links

### Modify Color Scheme

Edit CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
  /* ... more colors */
}
```

---

## 📧 Contact Form Setup

This portfolio uses **Web3Forms** for the contact form:

1. Visit [web3forms.com](https://web3forms.com)
2. Sign up with your email
3. Get your access key
4. Add it to `.env` file
5. Restart the dev server

**No backend required!** Form submissions are sent directly to your email.

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Add environment variable: `VITE_WEB3FORMS_ACCESS_KEY`
5. Click Deploy!

### Deploy to Netlify

1. Build the project:

   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to Netlify
3. Add environment variables in Netlify dashboard

### Other Platforms

The portfolio can be deployed to any static hosting service:

- GitHub Pages
- Cloudflare Pages
- Firebase Hosting
- AWS S3 + CloudFront

---

## 🔍 SEO Features

- ✅ Comprehensive meta tags
- ✅ Open Graph protocol for social sharing
- ✅ Twitter Card support
- ✅ Structured data (JSON-LD) for rich snippets
- ✅ Sitemap.xml for search engines
- ✅ Robots.txt for crawler directives
- ✅ Semantic HTML for better accessibility
- ✅ Optimized images and lazy loading

---

## 🎯 Performance Optimizations

- ⚡ **Code Splitting** - Lazy loading for faster initial load
- 🗜️ **Minification** - Terser for optimized JavaScript
- 📦 **Tree Shaking** - Remove unused code
- 🖼️ **Image Optimization** - Optimized assets
- 🚀 **Fast Refresh** - Instant feedback during development
- 💾 **Chunk Optimization** - Vendor code splitting

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Raja Jha**

- 🌐 Portfolio: [Your Portfolio URL]
- 💼 LinkedIn: [linkedin.com/in/raja](https://linkedin.com/in/raja)
- 🐙 GitHub: [github.com/stranger0407](https://github.com/stranger0407)
- 📧 Email: rgjha2001@gmail.com
- 🏙️ Location: Pune, India

---

## 🙏 Acknowledgments

- [React](https://react.dev) - UI library
- [Vite](https://vitejs.dev) - Build tool
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Web3Forms](https://web3forms.com) - Contact form service
- [Styled Components](https://styled-components.com) - CSS-in-JS
- Icons from [Font Awesome](https://fontawesome.com) & custom SVGs

---

<div align="center">

### ⭐ Star this repo if you found it helpful!

Made with ❤️ by [Raja Jha](https://github.com/stranger0407)

</div>
