"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

const serviceItems = [
  { label: "Cloud Strategy", href: "/services/page1" },
  { label: "Cloud Migration", href: "/services/page2" },
  { label: "Managed Services", href: "/services/page3" },
];

const partnerItems = [
  { label: "AWS Partner", href: "/partner/page1" },
  { label: "Azure Partner", href: "/partner/page2" },
  { label: "Google Cloud", href: "/partner/page3" },
];


const DropdownMenu = ({ items, onClose }: { items: { label: string; href: string }[]; onClose: () => void }) => (
  <div className="absolute top-full z-[99999] left-1/2 -translate-x-1/2 w-[220px] pt-2 ">
    

    <div className="bg-white rounded-[18px] shadow-2xl overflow-hidden border border-gray-100">
      {/* Top gradient bar */}
      <div className="h-[3px] bg-gradient-to-r from-[#E53023] to-[#345CA7]" />

      <div className="py-1">
        {items.map((item, i) => (
          <React.Fragment key={i}>
            <Link
              href={item.href}
              onClick={onClose}
              className="flex items-center gap-3 px-5 py-3 text-[14px] text-gray-700 font-medium hover:bg-red-50 hover:text-[#E53023] transition-all duration-150 group"
            >
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#E53023] to-[#345CA7]  opacity-60 group-hover:opacity-100 transition-opacity" />
              {item.label}
            </Link>
            {/* HR after every item except last */}
            {i < items.length - 1 && (
              <hr className="mx-4 border-gray-100" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [partnerOpen, setPartnerOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const [mobilePartnerOpen, setMobilePartnerOpen] = useState(false);

  const serviceRef = useRef<HTMLLIElement>(null);
  const partnerRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (serviceRef.current && !serviceRef.current.contains(e.target as Node)) {
        setServiceOpen(false);
      }
      if (partnerRef.current && !partnerRef.current.contains(e.target as Node)) {
        setPartnerOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full relative z-[9999]">

      {/* Top Bar */}
      <div className="bg-white flex justify-between items-center px-6 md:px-10 lg:px-16 xl:px-24 py-2">
        <div className="flex gap-6 md:gap-8 lg:gap-12">
          <img src="/aws-black_SVG-1.svg fill.svg" alt="amazon-logo" className="w-[40px] h-[24px] lg:w-[48.71px] lg:h-[29.17px]" />
          <img src="/microsoft-azure.svg fill.svg" alt="microsoft-logo" className="w-[26px] h-[24px] lg:w-[31.1px] lg:h-[29.31px]" />
          <img src="/google-cloud-inline.svg.svg" alt="cloud-logo" className="w-[30px] h-[24px] lg:w-[36.27px] lg:h-[29.17px]" />
        </div>
        <div className="flex gap-3">
          <img src="/Item.svg" className="w-[36px] h-[36px] lg:w-[40px] lg:h-[40px]" />
          <img src="/Item (1).svg" className="w-[36px] h-[36px] lg:w-[40px] lg:h-[40px]" />
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-gradient-to-r from-[#E53023] to-[#345CA7] text-white px-6 md:px-10 lg:px-16 xl:px-24 py-4 lg:py-5">

        <div className="flex items-center justify-between gap-4 lg:gap-8 xl:gap-16">

          {/* Logo */}
          <div className="">
            <Link href="/">
              <img src="/Mask group.svg" alt="" className="w-[160px] h-[36px] md:w-[220px] md:h-[48px] lg:w-[260px] lg:h-[54px] xl:w-[292px] xl:h-[60px]" />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex gap-5 lg:gap-8 xl:gap-12 text-[14px] lg:text-[15px] xl:text-[16px] items-center">

            <li>
              <Link href="/" className="whitespace-nowrap hover:opacity-80 transition-opacity">
                Home
              </Link>
            </li>

            {/* Service */}
<li
  ref={serviceRef}
  className="relative"
  onMouseEnter={() => { setServiceOpen(true); setPartnerOpen(false); }}
  onMouseLeave={() => setServiceOpen(false)}
>
  <button className="flex items-center gap-2 whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity">
    Service
    <img
      src="Vector.svg"
      className={`w-[7.45px] h-[4.06px] transition-transform duration-200 ${serviceOpen ? "rotate-180" : ""}`}
    />
  </button>
  {serviceOpen && (
    <DropdownMenu items={serviceItems} onClose={() => setServiceOpen(false)} />
  )}
</li>

{/* Partner */}
<li
  ref={partnerRef}
  className="relative"
  onMouseEnter={() => { setPartnerOpen(true); setServiceOpen(false); }}
  onMouseLeave={() => setPartnerOpen(false)}
>
  <button className="flex items-center gap-2 whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity">
    Partner
    <img
      src="Vector.svg"
      className={`w-[7.45px] h-[4.06px] transition-transform duration-200 ${partnerOpen ? "rotate-180" : ""}`}
    />
  </button>
  {partnerOpen && (
    <DropdownMenu items={partnerItems} onClose={() => setPartnerOpen(false)} />
  )}
</li>

            <li>
              <Link href="/case-study" className="whitespace-nowrap hover:opacity-80 transition-opacity">
                Case Study
              </Link>
            </li>

            <li>
              <Link href="/contact" className="whitespace-nowrap hover:opacity-80 transition-opacity">
                Contact
              </Link>
            </li>

          </ul>

          {/* Contact */}
          <div className="hidden md:block text-left shrink-0">
            <p className="text-[13px] lg:text-[14px] xl:text-[15px]">+91-234-567-8900</p>
            <p className="text-[15px] lg:text-[17px] xl:text-[20px] font-normal uppercase font-archivo whitespace-nowrap">
              Free Consultant
            </p>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden ml-auto shrink-0"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-[5px]">
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </div>
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-1 pb-2 text-[15px]">

            <Link href="/" className="py-2" onClick={() => setMenuOpen(false)}>Home</Link>

            {/* Mobile Service */}
            <div>
              <button
                onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
                className="flex items-center gap-2 py-2 w-full text-left"
              >
                Service
                <img src="Vector.svg" className={`w-[7.45px] h-[4.06px] transition-transform duration-200 ${mobileServiceOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileServiceOpen && (
                <div className="ml-1 pl-4 border-l-2 border-white/30 flex flex-col gap-1 pb-2">
                  {serviceItems.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      className="py-1.5 text-[14px] text-white/80 hover:text-white flex items-center gap-2"
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Partner */}
            <div>
              <button
                onClick={() => setMobilePartnerOpen(!mobilePartnerOpen)}
                className="flex items-center gap-2 py-2 w-full text-left"
              >
                Partner
                <img src="Vector.svg" className={`w-[7.45px] h-[4.06px] transition-transform duration-200 ${mobilePartnerOpen ? "rotate-180" : ""}`} />
              </button>
              {mobilePartnerOpen && (
                <div className="ml-1 pl-4 border-l-2 border-white/30 flex flex-col gap-1 pb-2">
                  {partnerItems.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      className="py-1.5 text-[14px] text-white/80 hover:text-white flex items-center gap-2"
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/case-study" className="py-2" onClick={() => setMenuOpen(false)}>Case Study</Link>
            <Link href="/contact" className="py-2" onClick={() => setMenuOpen(false)}>Contact</Link>

            <div className="border-t border-white/30 pt-3 mt-2">
              <p className="text-sm">+91-234-567-8900</p>
              <p className="text-[16px] font-normal uppercase font-archivo">Free Consultant</p>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default Navbar;