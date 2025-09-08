# Mohan's Portfolio

A modern, responsive personal portfolio website built with React, TypeScript, and Vite. Showcases projects, skills, and provides a contact form for potential collaborations.

## 🚀 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **Type-Safe**: Full TypeScript support for better code quality
- **Accessible**: Semantic HTML and ARIA attributes for screen readers
- **Contact Form**: Integrated with Formspree for easy contact handling
- **SEO Friendly**: Proper meta tags and structured content

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **Styling**: CSS3 with modern features
- **Linting**: ESLint with TypeScript support
- **Deployment**: Ready for static hosting (Vercel, Netlify, etc.)

## 📋 Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

## 🚀 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/madhanmohanreddyperam06/FUTURE_FS_01.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. (Optional) Set up environment variables for the contact form:
   Create a `.env` file in the root directory and add your Formspree ID:
   ```
   VITE_FORMSPREE_ID=your_formspree_id_here
   ```

## 🏃‍♂️ Usage

### Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

Build the project:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

### Linting

Run ESLint to check for code issues:
```bash
npm run lint
```

## 📁 Project Structure

```
portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/  # (if you add more components)
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## 🎨 Customization

### Personal Information
Update the following in `src/App.tsx`:
- Name and branding in the `Header` component
- Personal details in the `Hero` and `About` components
- Skills list in the `Skills` component
- Projects in the `Projects` component
- Contact email in the `Contact` component

### Styling
Modify `src/App.css` and `src/index.css` to customize the appearance:
- Color scheme
- Typography
- Layout spacing
- Responsive breakpoints

### Contact Form
The contact form uses Formspree for handling submissions. To set it up:
1. Create a free account at [Formspree](https://formspree.io/)
2. Get your form ID
3. Add it to your `.env` file as `VITE_FORMSPREE_ID`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects if needed

### Other Platforms
The built files in the `dist` folder can be deployed to any static hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

Madhan Mohan Reddy Peram - [madhanmohanreddyperam06@gmail.com] - [https://github.com/madhanmohanreddyperam06]

Project Link: https://github.com/madhanmohanreddyperam06/FUTURE_FS_01.git
