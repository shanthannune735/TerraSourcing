import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDropright } from "react-icons/io";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { Dropdown } from "flowbite-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="relative">
      <div className="flex flex-row lg:gap-4 text-dark font-sf-regular text-sm items-center py-2 max-w-[1280px] mx-auto justify-center md:justify-end gap-2">
        <p className="flex flex-row">
          <span className="hidden md:flex pr-2">Email: </span>
          contact@terrasourcing.com
        </p>
        <div className="border h-[10px]"></div>
        <p className="flex flex-row">
          <span className="hidden md:flex pr-2">Phone: </span>
          +91 9704226664
        </p>
      </div>
      <nav className="bg-secondary px-4 relative z-50">
        <div className="flex flex-row justify-between py-2 items-center max-w-[1280px] mx-auto">
          <Link to={"/"}>
            <img src="/logo.png" width={120} height={60} alt="Logo" />
          </Link>
          <div className="flex-row gap-8 hidden lg:flex">
            <Link to={"/"}>Home</Link>
            <Dropdown label="Importer" inline>
              <Link to={"/importer/registration?step=company-details"} onClick={handleLinkClick}><Dropdown.Item>Register</Dropdown.Item></Link>
              <Link to={"/importer/login"} onClick={handleLinkClick}><Dropdown.Item>Login</Dropdown.Item></Link>
              <Link to={"/"} onClick={handleLinkClick}><Dropdown.Item>Connect With Exporters</Dropdown.Item></Link>
            </Dropdown>
            <Dropdown label="Exporter" inline>
              <Link to={"/exporter/registration?step=info"} onClick={handleLinkClick}><Dropdown.Item>Register</Dropdown.Item></Link>
              <Link to={"/exporter/login"} onClick={handleLinkClick}><Dropdown.Item>Login</Dropdown.Item></Link>
              <Link to={"/exporter/lead-verification"} onClick={handleLinkClick}><Dropdown.Item>Lead Verification</Dropdown.Item></Link>
              <Link to={"/exporter/market-research-report"} onClick={handleLinkClick}><Dropdown.Item>Market Research Report</Dropdown.Item></Link>
            </Dropdown>
            <Link to={"/"} onClick={handleLinkClick}>Logistics</Link>
            <Link to={"/training"} onClick={handleLinkClick}>Training</Link>
            <Link to={"/pricing"} onClick={handleLinkClick}>Pricing</Link>
            <Link to={"/webinarAndEvents"} onClick={handleLinkClick}>Webinar & Events</Link>
          </div>
          <div className="bg-primary text-white px-4 py-1 rounded-full w-fit flex-row items-center gap-1 h-fit hidden md:flex">
            <Link to={"/contact-us"}>Contact Us</Link>
            <span className="text-white text-xl">
              <IoIosArrowDropright />
            </span>
          </div>
          <div className="text-dark text-2xl lg:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <RxCross2 className="text-dark" /> : <RxHamburgerMenu />}
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div ref={menuRef} className="bg-white shadow-md absolute right-4 rounded-lg py-2 z-50">
          <Link to={"/"} className="block px-8 py-2 hover:bg-gray-200" onClick={handleLinkClick}>Home</Link>
          <div className="text-center flex flex-col items-center justify-center pl-1 pb-2">
            <Dropdown label="Importer" inline>
              <Link to={"/importer/registration?step=company-details"} onClick={handleLinkClick}><Dropdown.Item>Register</Dropdown.Item></Link>
              <Link to={"/importer/login"} onClick={handleLinkClick}><Dropdown.Item>Login</Dropdown.Item></Link>
              <Link to={"/"} onClick={handleLinkClick}><Dropdown.Item>Connect With Exporters</Dropdown.Item></Link>
            </Dropdown>
          </div>
          <div className="text-center flex flex-col items-center justify-center pl-1">
            <Dropdown label="Exporter" inline>
              <Link to={"/exporter/registration?step=info"} onClick={handleLinkClick}><Dropdown.Item>Register</Dropdown.Item></Link>
              <Link to={"/exporter/login"} onClick={handleLinkClick}><Dropdown.Item>Login</Dropdown.Item></Link>
              <Link to={"/exporter/lead-verification"} onClick={handleLinkClick}><Dropdown.Item>Lead Verification</Dropdown.Item></Link>
              <Link to={"/exporter/market-research-report"} onClick={handleLinkClick}><Dropdown.Item>Market Research Report</Dropdown.Item></Link>
            </Dropdown>
          </div>
          <Link to={"/"} className="block px-8 py-2 hover:bg-gray-200" onClick={handleLinkClick}>Logistics</Link>
          <Link to={"/training"} className="block px-8 py-2 hover:bg-gray-200" onClick={handleLinkClick}>Training</Link>
          <Link to={"/contact"} className="block px-8 py-2 hover:bg-gray-200" onClick={handleLinkClick}>Contact Us</Link>
        </div>
      )}
    </header>
  );
}
