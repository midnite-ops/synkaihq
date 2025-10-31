import { useState } from "react"
import { useLocation } from "react-router-dom"
import { X } from "lucide-react"
import menu from "../assets/menu.svg"
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet"

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "About Us", href: "#about-us" },
    { name: "Contact Us", href: "#footer" },
  ]

  const location = useLocation().pathname
  const [open, setOpen] = useState(false)
  const [activeLink, setActiveLink] = useState(location)

  const handleLinkClick = (href: string) => {
    setActiveLink(href)
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="text-white flex justify-between items-center py-4 md:py-6 fixed right-0 left-0 z-10 bg-primaryB/15 border-b border-grayBorder container-pad backdrop-blur-md">
      {/* Logo */}
      <div>
        <h2 className="font-orbi font-bold text-2xl">SYNKAIHQ</h2>
      </div>

      {/* Desktop Nav */}
      <ul className="font-poppins text-base 2xl:text-lg items-center gap-7.5 hidden lg:flex">
        {navLinks.map((link) => (
          <li
            key={link.name}
            className={`${
              activeLink === link.href
                ? "py-2 px-6 bg-secondaryB rounded-full cursor-pointer"
                : "cursor-pointer"
            }`}
            onClick={() => handleLinkClick(link.href)}
          >
            {link.name}
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <div className="block lg:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="p-3 bg-grayBorder rounded-full">
              <img src={menu} alt="menu" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-primaryB border-l border-white/10 text-white backdrop-blur-md px-5"
          >
            <div className="flex justify-between items-center mb-8 py-7 ">
              <h2 className="text-xl font-semibold font-orbi">SYNKAIHQ</h2>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X size={22} />
              </button>
            </div>

            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className={`text-gray-300 hover:text-white text-lg transition-colors text-left ${
                    activeLink === link.href
                      ? "text-white font-semibold"
                      : ""
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}


/**
 * <nav className="text-white flex justify-between items-center py-4 md:py-6 bg fixed right-0 left-0 z-10 bg-primaryB/15 border-b border-grayBorder container-pad backdrop-blur-md">
        <div>
            <h2 className='font-orbi font-bold text-2xl'>SYNKAIHQ</h2>
        </div>
        <ul className="font-poppins text-base 2xl:text-lg items-center gap-7.5 hidden lg:flex">
            {navLinks.map((link) => (
                <li key={link.name} className={`${activeLink === link.href ? 'py-2 cursor-pointer px-6 bg-secondaryB rounded-full' : ''} `} onClick={() => setActiveLink(link.href)}>
                   <a href={link.href}>{link.name}</a> 
                </li>
            ))}
        </ul>
        <div className='block lg:hidden p-3 bg-grayBorder rounded-full'>
          <img src={menu} alt="a hamburger menu for the navbar" />
        </div>
    </nav>
 */

