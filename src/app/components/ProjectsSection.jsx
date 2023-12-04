import React from 'react'

import ProjectCard from "./ProjectCard";


// array projects
const projectsData = [
    {
        id: 1,
        title: "gtgram",
        description: "Aplicação de Rede Social para compartilhamento de fotos com React, Node, MongoDB e Express.",
        image: "/images/projects/gtgram.png",
        gitUrl: "https://github.com/gtamaral/gtGram-frontend",
        previewUrl: "https://gtgram.onrender.com/",
    },
    {
        id: 2,
        title: "About Movies",
        description: "Aplicação desenvolvida em React para fornecer informações sobre filmes usando a API TMDB como fonte de dados.",
        image: "/images/projects/movie.png",
        gitUrl: "https://github.com/gtamaral/AboutMovies",
        previewUrl: "https://about-movies-git-master-gtamaral.vercel.app/",
    },
    {
        id: 3,
        title: "Budget",
        description: "Aplicativo web em React para acompanhar orçamento, registrar despesas e calcular saldo, oferecendo controle financeiro de maneira intuitiva.",
        image: "/images/projects/carteira.png",
        gitUrl: "https://github.com/gtamaral/carteira-digital",
        previewUrl: "https://carteira-digital-chi.vercel.app/",
    },
    {
        id: 4,
        title: "Omnifood",
        description: "Landing page em HTML e CSS para um aplicativo de entrega de comida, garantindo uma experiência ao usuário como layouts atrativos e responsivos.",
        image: "/images/projects/food.png",
        gitUrl: "https://github.com/gtamaral/omnifood-study-css",
        previewUrl: "https://gtamaral.github.io/omnifood-study-css/",
    },
    {
        id: 5,
        title: "Secret word",
        description: "O projeto em React envolve adivinhar palavras a partir de dicas fornecidas, com uma base de dados categorizada por sugestões, desafiando os jogadores a revelar a palavra letra por letra.",
        image: "/images/projects/palavra.png",
        gitUrl: "https://github.com/gtamaral/Secret-Word",
        previewUrl: "https://secret-word-gamma.vercel.app/",
    },
    {
        id: 6,
        title: "To Do com SQL",
        description: " Gerenciamento de tarefas construído em Node.js e arquitetura MVC. ",
        image: "/images/projects/todo.png",
        gitUrl: "https://github.com/gtamaral/ToDo-SQL",
        previewUrl: "https://github.com/gtamaral/ToDo-SQL",
    },
    
]

const ProjectsSection = () => {
  return (
    <section id='projects'>
    <div className='w-70 flex self-center sm:justify-center justify-center text-center'>
        <h2 className='rounded-full border-2 border-blue-800 px-6 py-6 text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12  '>Projetos:</h2>
    </div>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>{projectsData.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} previewUrl={project.previewUrl}/>)}</div>
    </section>
  )
}

export default ProjectsSection