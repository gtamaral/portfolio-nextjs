"use client";

import React, {useTransition, useState} from 'react'
import Image from "next/image";

// components
import TabBottom from './TabBottom';

const TAB_DATA = [
    // {
    //     title: "Skills",
    //     id: "skills",
    //     content: (
    //         <ul className='list-disc pl-2'>
    //             <li>React</li>
    //             <li>Node.js</li>
    //             <li>Javascript</li>
    //             <li>Express</li>
    //             <li>Python</li>
    //             <li>MongoDb</li>
    //             <li>Firebase</li>
    //             <li>SQL</li>
    //         </ul>
    //     )
    // },
    {
        title: "Education",
        id: "education", 
        content: (
            <ul className='list-disc pl-2'> 
                <li>Bacharelando em Sistemas de Informação, no Centro de Informática (CIN) da UFPE.</li>
                <li>Ensino médio completo no Instituto Federal de Pernambuco (IFPE).</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications", 
        content: (
            <ul className='list-disc pl-2'>
                <li>Desenvolvimento avançado em NodeJS, Udemy, 2023.</li>
                <li>Desenvolvimento avançado em ReactJs, Udemy, 2023.</li>
                <li>Responsives websites with HTML and CSS, Udemy, 2023.</li>
                <li>Git e Github, DIO, 2023.</li>
                <li>Fundamentos de programação e tecnologia, Rocketseat, 2023.</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("education");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        });
    };

  return (
    <section className='text-white' id='about'>
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src="/images/about.jpg" alt='about image' width={600} height={600} className='hidden sm:block'/>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4 mt-8'>About me</h2>
                <p className='text-base lg:text-lg'>
Sou estudante de Sistemas de Informação, com expertise em desenvolvimento web e um olhar atento para as tendências da indústria. Meu objetivo é crescer como desenvolvedor, aplicando minha paixão pela tecnologia. Estou entusiasmado para explorar desafios que me permitam aplicar minha criatividade e habilidades, contribuindo para soluções inovadoras e impactantes.</p>
                <div className='flex flex-row justify-start mt-8'>
                    {/* <TabBottom 
                     selectTab={()=> handleTabChange("skills")} 
                     active={tab==="skills"}>
                        {" "}
                        Skills
                    </TabBottom> */}

                    <TabBottom
                     selectTab={()=> handleTabChange("education")} 
                     active={tab==="education"}>
                        {" "}
                        Education
                    </TabBottom>

                    <TabBottom
                     selectTab={()=> handleTabChange("certifications")} 
                     active={tab==="certifications"}>
                        {" "}
                        Certifications
                    </TabBottom>
                    
                </div>
                <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection