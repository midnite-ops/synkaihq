import Navbar from "../components/Navbar"
import blockchain from '../assets/Home/blockchain.jpg';
import webDesign from '../assets/Home/web-design.jpg';
import mobileApp from '../assets/Home/mobile.jpg';
import brand from '../assets/Home/brand.jpg';
import hero from "../assets/newHero.jpg"
import Footer from "../components/Footer";
import Projects from "../components/Projects";
export default function Home() {
    const services = [
        {
            title: "Web Design", 
            img: webDesign, style: 'col-span-2 ',
            description: "Creating visually stunning and user-friendly websites that captivate your audience."
        },
        {
            title: "Mobile App Development", 
            img: mobileApp, 
            description: "Building seamless and intuitive mobile applications for iOS and Android platforms."
        },
        {
            title: "Blockchain Development", 
            img: blockchain,
            description: "Developing secure and scalable blockchain solutions for various industries."
        },
        {
            title: "Brand Identity", 
            img: brand, style: 'col-span-2',
            description: "Crafting unique brand identities that resonate with your target audience."
        },
    ]
  return (
    <main className="container-pad flex flex-col gap-50 ">
        <Navbar />
        <section id="home" className="text-white h-screen flex items-center ">
            <div className="flex-1">
                <div className="w-[90%] mb-[60px]">
                    <h1 className=" font-bold text-[34px] md:text-5xl 2xl:text-[58px] mb-6 leading-tight ">
                        Digital Solutions <span className="text-grayText">That Drive Success</span>
                    </h1>
                    <p>
                        At <span className="font-bold">SYNKAIHQ</span>, we believe in the transformative power of digital solutions. Our team of experts is dedicated to helping businesses like yours thrive in the fast-paced digital landscape. From captivating web design to data-driven marketing strategies, we are committed to delivering results that exceed expectations.
                    </p>
                </div>
                <div>
                    <p className="text-white">Unlock Your Digital Potential today</p>
                    <div className="flex gap-4 mt-5">
                        <button className="res-text px-4.5 py-2.5  bg-white text-primaryB rounded-full">Get Started</button>
                        <button className="res-text px-4.5 py-2.5  bg-secondaryB rounded-full btn text-white">Free Consultation</button>
                    </div>
                </div>
                
            </div>
            <div className="flex-1 bg-black h-screen 2xl:-mr-[162px] -mr-20">
                <img src={hero} alt="hero background" className="grayscale h-full object-contain"/>
            </div>
        </section>

        <section id="about-us">
            <div className="header">
                <h1>Numbers That Show Our Success</h1>
            </div>
            <div className="border grid md:grid-cols-2 lg:grid-cols-3 gap-10 2xl:gap-20 py-20 px-10 mt-10">
                <div className="flex flex-col items-center">
                    <h3 className="text-5xl font-orbi mb-2">5+</h3>
                    <p className="mb-4">Projects Completed</p>
                    <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis nam commodi ad dolorem, provident sed atque dignissimos dolores accusantium! Veniam distinctio iste deserunt nihil minus dolorum alias cum amet unde.</p>
                </div>

                <div className="flex flex-col items-center">
                    <h3 className="text-5xl font-orbi mb-2">20+</h3>
                    <p className="mb-4">Client Satisfaction</p>
                    <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis nam commodi ad dolorem, provident sed atque dignissimos dolores accusantium! Veniam distinctio iste deserunt nihil minus dolorum alias cum amet unde.</p>
                </div>

                <div className="flex flex-col items-center">
                    <h3 className="text-5xl font-orbi mb-2">10+</h3>
                    <p className="mb-4">Team Members</p>
                    <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis nam commodi ad dolorem, provident sed atque dignissimos dolores accusantium! Veniam distinctio iste deserunt nihil minus dolorum alias cum amet unde.</p>
                </div>
                
            </div>
        </section>

        <section id="services" className="services">
            <div className="header">
                <h1>Our Services</h1>
                <p className="w-[70%] text-center">
                    Our comprehensive range of services includes web design, mobile app development, brand identity, blockchain developement, and more. Whether you're a startup or an established enterprise, our experts will craft solutions that drive results.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 2xl:gap-20 pt-20 mb-10 mt-10 ">
                {services.map((service) => (
                    <div key={service.title} className={`${service.style} h-[366px] relative cursor-pointer`}>
                        <img src={service.img} alt={service.title} className="h-full object-cover w-full absolute" />
                        <div className="absolute inset-0 bg-linear-to-r from-gray-400/80 to-white-500/60"></div>
                        <div className="relative z-5 p-5">
                            <h3 className="font-orbi mb-1">Category</h3>
                            <p className="text-white mb-4">{service.title}</p>
                            <p className={`text-white ${service.title === 'Brand Identity' || service.title === 'Web Design' ? 'w-[50%]' : 'w-[70%]'}`}>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* <button className="border text-white py-2.5 w-full">See More</button> */}
        </section>

        {/* <section id="faq">
            <div className="header flex-col items-center gap-5">
                <h1>Frequently Asked Questions</h1>
                <p className="w-[70%] text-center">
                    Got questions? We've got answers. Check out our frequently asked questions section to find valuable insights into our processes, pricing, and more. Transparency is at the core of our client interactions.

                </p>
            </div>
            
            <div className="center">
                <div className='text-center'>
                    <div className="border-btn">FAQ</div>
                </div>
                <h1>Get Answers To Common Questions</h1>
                <p className="gray-text ">
                From basics to advanced topics, find everything you need to know right here. Let us help you simplify the process and find the clarity you're looking
                </p>
            </div>

            <Accordion
            type="single"
            collapsible
            className="w-full md:w-[70%] flex flex-col gap-7.5 justify-center"
            defaultValue="">
                {faq.map((item, index) => (
                    <AccordionItem key={index} value={`item ${index}`} className='py-4 px-5 border! border-grayT rounded-sm'>
                        <AccordionTrigger className='bg-transparent text-white hover:no-underline'>{item}</AccordionTrigger>
                        <AccordionContent>
                            <div className="flex flex-col gap-4 px-6 flex-start">
                                <p className="text-start">
                                    Our flagship product combines cutting-edge technology with sleek
                                    design. Built with premium materials, it offers unparalleled
                                    performance and reliability.
                                </p>
                                <p className="text-start">
                                    Key features include advanced processing capabilities, and an
                                    intuitive user interface designed for both beginners and experts.
                                </p>
                            </div>
                        </AccordionContent>
                    </AccordionItem>  
                ))}
            </Accordion>
        </section> */}
            
       <Projects />
       <Footer/>
    </main>
  )
}
