import React from 'react';
import { FaGithub, FaEnvelope } from "react-icons/fa";
import {
  SiPython, SiCplusplus, SiJavascript, SiNodedotjs, SiReact, SiMongodb,
  SiMysql, SiGit, SiGithub as SiGithubBadge, SiUnity, SiUnrealengine
} from "react-icons/si";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="bg-gradient-to-b from-gray-950 to-gray-900 text-white min-h-screen font-sans">

      {/* Hero Section */}
      <header className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506765515384-028b60a970df?fit=crop&w=1350&q=80')" }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-extrabold mb-4">Nicolás</h1>
          <p className="text-xl max-w-2xl px-4">Estudiante de Ingeniería Informática · Python · C++ · JavaScript · Node.js</p>
        </div>
      </header>

      {/* Sobre mí */}
      <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
        <p className="text-lg text-gray-300">Soy estudiante de Ingeniería Informática, con experiencia en Python y aprendiendo tecnologías como C++, JavaScript y Node.js.</p>
      </motion.section>

      {/* Proyectos */}
      <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Proyectos</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <ProjectCard title="IA_Practica3" description="Juego de 3 en raya con inteligencia artificial usando Minimax y alfa-beta" link="#" />
          <ProjectCard title="EDI_Practica2" description="Gestión de servidores de juegos con estructuras de datos en C++" link="#" />
          <ProjectCard title="IA_Practica" description="Resolución de laberintos con heurísticas en Python" link="#" />
        </div>
      </motion.section>

      {/* Tecnologías */}
      <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Tecnologías</h2>
        <div className="bg-gray-800 p-8 rounded-3xl grid grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
          {[SiPython, SiCplusplus, SiJavascript, SiNodedotjs, SiReact, SiMongodb, SiMysql, SiGit, SiGithubBadge, SiUnity, SiUnrealengine].map((Icon, idx) => (
            <div key={idx} className="bg-gray-700 p-4 rounded-lg"><Icon className="text-5xl text-gray-300" /></div>
          ))}
        </div>
      </motion.section>

      {/* Contacto */}
      <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Contacto</h2>
        <form className="max-w-md mx-auto flex flex-col gap-4">
          <input type="email" placeholder="Tu email" className="p-3 rounded-lg text-black" />
          <textarea rows="4" placeholder="Mensaje..." className="p-3 rounded-lg text-black" />
          <button type="submit" className="bg-blue-600 p-3 rounded-lg text-white hover:bg-blue-700">Enviar</button>
        </form>
        <div className="flex justify-center gap-6 mt-6">
          <a href="mailto:nicobs3436@gmail.com" className="text-2xl text-gray-300 hover:text-white"><FaEnvelope /></a>
          <a href="https://github.com/Nico3246" target="_blank" className="text-2xl text-gray-300 hover:text-white"><FaGithub /></a>
        </div>
      </motion.section>

      <footer className="text-center py-6 text-sm text-gray-500">© 2025 Nicolás. Todos los derechos reservados.</footer>
    </div>
  );
}

function ProjectCard({ title, description, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition">
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 rounded-full hover:bg-blue-700">Ver Proyecto</button>
    </a>
  );
}
