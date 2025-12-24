# Petaling Care - Official Website

Website rasmi untuk Petaling Care, sebuah pertubuhan bukan kerajaan (NGO) yang komited untuk memperkasa komuniti melalui pembangunan berterusan.

## 🌟 Features

- **Modern Design**: Beautiful, responsive design with animations
- **3D Elements**: Interactive 3D background using Three.js
- **Smooth Animations**: Framer Motion for smooth transitions
- **Optimized Performance**: Static site generation for fast loading
- **SEO Ready**: Meta tags and structured data
- **Deployment Ready**: Configured for Vercel and Hostinger

## 🚀 Tech Stack

- **Framework**: Next.js 15
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **3D Graphics**: React Three Fiber + Three.js
- **Language**: TypeScript
- **Deployment**: Vercel / Hostinger

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🔧 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect Next.js and deploy

### Hostinger
1. Build the project: `npm run build`
2. Upload the contents of the `out` folder to your Hostinger hosting
3. Ensure your hosting supports static file serving

## 📁 Project Structure

```
petaling-care/
├── public/
│   └── images/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── 3d/
│   │   │   └── ThreeBackground.tsx
│   │   ├── sections/
│   │   │   ├── About.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── CoreValues.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── GetInvolved.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Impact.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── Objectives.tsx
│   │   │   ├── Programs.tsx
│   │   │   └── VisionMission.tsx
│   │   └── ui/
│   │       ├── AnimatedCounter.tsx
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Container.tsx
│   │       ├── FloatingElements.tsx
│   │       ├── Icons.tsx
│   │       └── SectionHeading.tsx
│   └── lib/
│       ├── constants.ts
│       └── utils.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json
```

## 🎨 Color Theme

Based on the Petaling Care logo:

- **Primary (Teal)**: `#00af9b`
- **Secondary (Gold/Orange)**: `#fab400`
- **Accent (Green)**: `#4caf50`
- **Coral**: `#f0694b`

## 📞 Contact

- **Email**: petalingcare@gmail.com
- **Facebook**: [Petaling Care](https://facebook.com/PetalingCare)
- **Instagram**: [@petalingcareofficial](https://instagram.com/petalingcareofficial)
- **TikTok**: [@petalingcareofficial](https://tiktok.com/@petalingcareofficial)

## 📄 License

This project is created for Petaling Care. All rights reserved.
