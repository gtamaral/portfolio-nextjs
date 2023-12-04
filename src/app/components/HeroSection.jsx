// img
import Image from "next/image"
// import { useRouter } from "next/router";



const HeroSection = () => {
    // const router = useRouter()



    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">

                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to via-blue-500 to-green-100"> Olá, eu sou {""}</span> Rodrigo Jucá!
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                   Desenvolvedor fullstack apaixonado por criar soluções inovadoras.
                </p>
                <div>
                    {/* <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-700 via-blue-500 to-green-900 hover:bg-slate-200 text-white">Hire me</button> */}
                    {/* <a href="https://www.instagram.com/">Linkedin</a>
                    <a href="https://www.instagram.com/">Github</a> */}
                    {/* <button onClick={() => router.push("/about")} title={"about"} className="px-1 py-1 w-full sm:w-fit rounded-full hover:bg-slate-800 text-white border border-blue-800 mt-3 mb-6">
                            <span className="block bg-[#121212] hover:bg-blue-600 rounded-full px-5 py-2 ">Saiba mais</span>                        
                    </button> */}
                </div>
                {/* icons insta -> linkedin -> gitub */}
                <div className=" sm:w-fit socials flex flex-row gap-4 justify-center ml-4">
                    
                    {/* GITHUB */}
                    <a className="sm:justify-center"href="https://github.com/gtamaral"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg></a>

                    {/* LINKEDIN */}
                    <a href="https://www.linkedin.com/in/rodrigojucadev/"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4"/>
</svg></a>

                </div>
                </div>
                <div className="col-span-5 place-self-center mt-20 ml-10 mb-16 lg:mt-0">
                    <div className="rounded-full bg-[#2424af] w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] relative sm:flex">
                        <Image
                        src="/images/foto-perfil.jpeg" 
                        alt="hero image" 
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full w-200 h-200 bor border-2 border-solid border-white"
                        width={300}
                        height={300}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;