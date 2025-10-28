import { useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'About Us', href: '#about-us' },
    { name: 'Contact Us', href: '#footer' },
  ]

  const location = useLocation().pathname;
  const [activeLink, setActiveLink] = useState(location);

  return (
    <nav className="text-white flex justify-between items-center py-6 bg fixed right-0 left-0 z-10 bg-primaryB/15 border-b border-grayBorder 2xl:px-[162px] px-20 backdrop-blur-md">
        <div>
            <h2 className='font-orbi font-bold text-2xl'>SYNKAIHQ</h2>
        </div>
        <ul className="font-poppins text-base 2xl:text-lg flex items-center gap-7.5">
            {navLinks.map((link) => (
                <li key={link.name} className={`${activeLink === link.href ? 'py-2 cursor-pointer px-6 bg-secondaryB rounded-full' : ''} `} onClick={() => setActiveLink(link.href)}>
                   <a href={link.href}>{link.name}</a> 
                </li>
            ))}
        </ul>
    </nav>
  )
}
