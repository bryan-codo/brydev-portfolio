  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiVuedotjs />, title: "Vue", href: "https://vuejs.org" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiNuxtdotjs />, title: "Nuxt", href: "https://nuxt.com" },
    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiPhp />, title: "PHP", href: "https://www.php.net" },
    { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiVite />, title: "Vite", href: "https://vitejs.dev" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
    { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
    { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
    { node: <SiPython/>, title: "Python", href: "https://www.python.org/"},
    { node: <SiC/>, title: "C#", href: "https://dotnet.microsoft.com/en-us/languages/csharp"},
  ];  const skillIcons = {
    'HTML/CSS': <SiHtml5 className="text-orange-500" />,
    'React': <SiReact className="text-cyan-500" />,
    'Node.js': <SiNodedotjs className="text-green-600" />,
    'PHP': <SiPhp className="text-indigo-600" />,
    'SQL': <SiMysql className="text-blue-600" />,
    'JavaScript': <SiJavascript className="text-yellow-500" />,
    'Tailwind CSS': <SiTailwindcss className="text-cyan-400" />
  };
  
import React from 'react';
import { SiReact, SiNodedotjs, SiPhp, SiMysql, SiJavascript, SiTailwindcss, SiHtml5, SiVuedotjs, SiVite, SiNuxtdotjs, SiTypescript, SiNextdotjs, SiMongodb, SiPostgresql, SiPython, SiC } from 'react-icons/si';
import LogoLoop from './LogoLoop';

export default function AboutSection({ skills = [
  { name: 'HTML/CSS', level: 95 },
  { name: 'React', level: 85 },
  { name: 'Node.js', level: 85 },
  { name: 'PHP', level: 80 },
  { name: 'SQL', level: 80 },
  { name: 'JavaScript', level: 80 },
  { name: 'Tailwind CSS', level: 75 }
] }) {
  const highlights = [
    { icon: '🏆', label: 'Magna Cum Laude', description: 'Bachelor of Science in IT' },
    { icon: '💻', label: 'Full-Stack Developer', description: 'CEU Vault Project' },
    { icon: '⚡', label: '500+ Hours', description: 'in front of the laptop' },
    { icon: '🎯', label: 'Quick Learner', description: 'Mastering emerging techcologies' }
  ];

  const skillCategories = {
    'Frontend': ['HTML/CSS', 'Next.js', 'React.js', 'Vue', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Vite', 'Nuxt3'],
    'Backend': ['Node.js', 'PHP', 'Express.js', 'C# (In progress)', 'Python (In progress)'],
    'Database': ['MongoDB', 'PostgreSQL', 'MySQL']
  };

  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-black mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Bio Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Who I Am</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                I'm a passionate <span className="font-semibold text-green-600">full-stack developer</span> freshly out of college with a drive to master modern technologies. Graduated <span className="font-semibold">Magna Cum Laude</span> from Centro Escolar University, I combine academic excellence with practical hands-on experience.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I specialize in building robust web applications using <span className="font-semibold">React</span>, <span className="font-semibold">Javascript</span>, <span className="font-semibold">PHP</span>, and <span className="font-semibold">modern CSS frameworks</span>. I believe in writing clean, maintainable code and creating user experiences that are both beautiful and functional.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Philosophy</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                I code patiently and passionately, I can't sleep well when I can't solve something. I'm committed to continuous learning, tackling emerging technologies with enthusiasm, and collaborating with teams in the company that value innovation. My goal is to build solutions that not only meet requirements but exceed expectations for clients and employers.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-4">
            {/* Profile Picture */}
          <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all w-fit mx-auto">
            <img 
              src="/assets/Picture.png" 
              alt="Bryan Dela Cruz" 
              className="w-48 h-48 rounded-lg object-cover"
            />
          </div>

          {highlights.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-green-200 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-green-50 to-blue-50 p-3 rounded-lg group-hover:scale-110 transition-transform text-2xl">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{item.label}</p>
                    <p className="text-xs text-gray-600 mt-1">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills - Logo Loop */}
        <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Technical Skills</h3>
          <p className="text-gray-600 mb-10">Proficient in modern web technologies and frameworks</p>
          
          {/* Animated Logo Loop */}
          <div style={{ height: '80px', position: 'relative', overflow: 'hidden', marginBottom: '30px' }}>
            <LogoLoop
              logos={techLogos}
              speed={120}
              direction="left"
              logoHeight={48}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#ffffff"
              ariaLabel="Technology stack"
            />
          </div>

          {/* Skills by Category */}
          <div className="border-t border-gray-200 pt-8">
            <h4 className="text-lg font-bold text-gray-900 mb-6">Skills by Category</h4>
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(skillCategories).map(([category, categorySkills]) => (
                <div key={category}>
                  <h5 className="font-semibold text-green-600 mb-4 text-base">{category}</h5>
                  <ul className="space-y-2">
                    {categorySkills.map(skill => (
                      <li 
                        key={skill}
                        className="flex items-center text-gray-700 hover:text-green-600 transition-colors"
                      >
                        <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}