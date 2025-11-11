// src/data/portfolioData.js
export const projects = [
    {
        id: 1,
        title: "Sanders",
        description: "Full-stack e-commerce platform (Can do logins, OTP(Nodemailer), sign-up, carting items although items are not yet that sorted)",
        technologies: ["Vue", "Vite", "TailwindCSS", "Typescript", "Nuxt3", "Next.js", "Node.js", "MongoDB"],
        github: "#",
        demo: "https://sanders-theta.vercel.app/",
        imageUrl: "https://raw.githubusercontent.com/bryan-codo/brydev-portfolio/main/public/assets/Screenshot%20(81).png"
    },
    {
        id: 2,
        title: "CEU Vault",
        description: "A Digitalized system for faculty and students in CEU that lets them, the stakeholders, borrow equipment from anywhere.",
        technologies: ["Node.js", "HTML/CSS", "Redis", "Postgres SQL", "Bootstrap"],
        github: "#",
        demo: "https://ceu-vault.vercel.app/home-page/",
        imageUrl: "https://raw.githubusercontent.com/bryan-codo/portfolio-real/main/images/ceu-vault.png"
    },
    {
        id: 3,
        title: "CarsRFun",
        description: "A Reseller website that fetches data from a self-made API and displays car listings with details such as make, model, year, and price. (Initial build, more improvements coming soon.",
        technologies: ["Next.js", "TailwindCSS", "Typescript", "Supabase", "React"],
        github: "#",
        demo: "https://carsrfun.vercel.app/",
        imageUrl: "https://raw.githubusercontent.com/bryan-codo/brydev-portfolio/main/public/assets/Screenshot%20(42).png#"

    }
];

export const skills = [
    { name: "JavaScript", level: 80 },
    { name: "React", level: 85 },
    { name: "PHP", level: 80 },
    { name: "Node.js", level: 85 },
    { name: "HTML/CSS", level: 95 },
    { name: "SQL", level: 80 },
    { name: "Tailwind CSS", level: 75 }
];
