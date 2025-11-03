import whatsdotfun from '../assets/whatsdotfun.jpg';
import aethokit from '../assets/aethokit.jpg';
import xertis from '../assets/xertis.jpg';
import neofi from '../assets/neofi.png';
import { ArrowRight } from 'lucide-react';
import { link } from 'fs';
export default function Projects() {
    const projects = [
        {
            title: "Aethokit", 
            img: aethokit, 
            category: "Blockchain Development",
            date: "August 2025",
            description: "Aethokit is a set of Software Development Kits (SDKs) designed for developers to sponsor gas transactions on the Solana blockchain.",
            link: 'https://www.npmjs.com/package/@kenolabs/aethokit'
        },
        {
            title: "Xertis", 
            img: xertis, 
            category: "Web Development",
            date: "January 2025",
            description: "Built on blockchain, Xertis guarantees trust, transparency, and authenticity—revolutionizing the way certificates are issued and verified.",
            link: 'https://xertis.vercel.app'
        },
        {
            title: "NeoFi", 
            img: neofi, 
            category: "Web Development",
            date: "September 2025",
            description: "Experience the future of finance with NeoFi, a cutting-edge DeFi platform that empowers users to lend, borrow, and trade digital assets securely and efficiently.",
            link: 'https://neo-fi-black.vercel.app'
        },
        {
            title: "Whatsdotfun", 
            img: whatsdotfun, 
            category: "Blockchain Development",
            date: "OCtober 2025",
            description: "The first whatsapp degen trading bot on solana. Instantly create and snipe memcoins directly on whatsapp. Built by degens for degens."
        }
    ]
  return (
    <section id='projects'>
        <header className="header" >
            <h1>Our Projects</h1>
            <p className="md:w-[70%] w-full text-center">
                Witness the brilliance of our previous projects. Our portfolio showcases the successful collaborations we've had with diverse clients across various industries. Let our work speak for itself.
            </p>
        </header>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 2xl:gap-20 pt-10 md:mt-10 mt-1">
            {projects.map((project, index) => (
                <div key={index} className="2xl:p-[50px] p-6 md:p-10 relative">   
                    <div className="absolute inset-0 bg-grayBorder/40 backdrop-blur-sm fade-mask border-grayText/5 border"></div>
                    <div className="z-5 relative">
                        <div className="2xl:h-[400px] h-[300px] mb-[50px] relative">
                            <img src={project.img} alt="whatsdotfun project" className=" h-full w-full rounded-md object-cover object-center"/>
                            <a href={project.link} target='_blank' className="flex items-center gap-2 mt-4 absolute -bottom-5 bg-primaryB cursor-pointer px-3 py-2.5 md:px-5 rounded-full border-grayText/20 border left-1/2 -translate-x-1/2">
                                <p className="text-white">
                                    {project.title === 'Whatsdotfun' ? 'In progress' : 'View Project'}
                                </p>
                                <ArrowRight size={20}/>
                            </a>
                        </div>
                        <div className="flex flex-col gap-6">
                            <h3 className="font-mont 2xl:text-2xl text-lg md:text-xl font-semibold">{project.title}</h3>
                            <div className="flex justify-between font-mont text-white">
                                <p className="text-white">Category:      
                                     <br className='md:hidden'/>    {project.category}</p>
                               
                                <p className="text-white">{project.date}</p>
                            </div>
                            <p>{project.description}</p>
                        </div>
                    </div>
                    
                </div>
            ))}
            
        </div>
    </section>
  )
}
