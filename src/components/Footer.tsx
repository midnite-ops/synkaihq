import footerBg from '../assets/Footer/background.svg'
import github from '../assets/Footer/github-2.svg';
import linkedin from '../assets/Footer/linkedin-2.svg';
import twitter from '../assets/Footer/twitter-2.svg';
export default function Footer() {
  return (
  <footer id='footer' className="h-fit md:h-screen pb-20 md:pb-0 flex flex-col items-center justify-center relative">
        <div className='absolute bg-cover  bg-top -z-2 inset-0' style={{backgroundImage: `url(${footerBg})`}}></div>
        <div className='flex flex-col items-center gap-[50px]'>
            <h1 className=" font-bold text-[34px] md:text-5xl 2xl:text-[58px] mb-6 leading-tight md:w-[90%] w-full text-center">
                Let's bring your ideas to life and take them to the <span className="text-grayText">next level!</span>
            </h1>
            <button className='btn bg-white text-primaryB font-extrabold border border-grayBorder' onClick={() => window.location.href = 'mailto:midnite048@gmail.com?subject=Inquiry to SynkaiHQ&body=Hello!'}>LET'S GET IN TOUCH</button>
        </div>
        <div className='flex-col md:flex-row gap-6 flex justify-center md:justify-between items-center mt-22 md:mt-32 w-full'>
            <div>
                <p className='text-white'>Copyright for <span className='font-orbi'>SYNKAIHQ</span> @2025</p>
            </div>
            <div className='flex gap-5'>
                <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-80 transition border border-white  p-0.5 rounded-[10px]"
                >
                    <img src={github} alt="Twitter icon" className="w-7 invert brightness-100" />
                </a>
                <a href="#" className="inline-block hover:opacity-80 transition border border-white  p-0.5 rounded-[10px]">
                    <img src={linkedin} alt="Twitter icon" className="w-7 invert brightness-100" />
                </a>
                <a href="#" className="inline-block hover:opacity-80 transition border border-white  p-0.5 rounded-[10px]">
                    <img src={twitter} alt="Twitter icon" className="w-7 invert brightness-100" />
                </a>
            </div>
            
        </div>
  </footer>

  )
}
