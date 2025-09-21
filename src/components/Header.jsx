"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Sidebars from "./Sidebars";
import SocialIcons from "./SocialIcons";
import SearchBar from "./SearchBar";

const countries = [
  { code: "EG", name: "Egypt", flag: "https://flagcdn.com/w20/eg.png" },
  { code: "HK", name: "Hong Kong", flag: "https://flagcdn.com/w20/hk.png" },
  { code: "IN", name: "India", flag: "https://flagcdn.com/w20/in.png" },
  { code: "ID", name: "Indonesia", flag: "https://flagcdn.com/w20/id.png" },
  { code: "MY", name: "Malaysia", flag: "https://flagcdn.com/w20/my.png" },
  { code: "PH", name: "Philippines", flag: "https://flagcdn.com/w20/ph.png" },
  { code: "SG", name: "Singapore", flag: "https://flagcdn.com/w20/sg.png" },
  { code: "ZA", name: "South Africa", flag: "https://flagcdn.com/w20/za.png" },
  { code: "TW", name: "Taiwan", flag: "https://flagcdn.com/w20/tw.png" },
  { code: "TH", name: "Thailand", flag: "https://flagcdn.com/w20/th.png" },
  { code: "AE", name: "UAE", flag: "https://flagcdn.com/w20/ae.png" },
  { code: "GB", name: "United Kingdom", flag: "https://flagcdn.com/w20/gb.png" },
  { code: "VN", name: "Vietnam", flag: "https://flagcdn.com/w20/vn.png" },
];
export default function Header({ searchParms }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const country = searchParms?.countryCode;
 const [selected, setSelected] = useState(countries[1]); // default Hong Kong
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-light" role="banner">
      {/* Top Announcement Bar */}
      {/* <div
        className="bg-dark text-white text-center py-1 small"
        role="region"
        aria-label="Announcement"
      >
        <span>
          Want exclusives like £5 for 2 shops?{" "}
          <Link
            href="/vip"
            className="text-warning fw-bold"
            aria-label="Become a VIP member"
          >
            Become a VIP ⭐
          </Link>
        </span>
      </div> */}

      {/* Main Header Row */}
      <div className="shadow" style={{ background: "rgb(255 255 255)" }}>
        <div
          className="container d-flex align-items-center justify-content-between py-2"
          role="navigation"
          aria-label="Primary navigation"
        >
          {/* Logo */}
          <Link
            href={`/${country}`}
            className="d-flex align-items-center text-decoration-none"
            aria-label="Homepage"
          >
            <Image
              src="/logo.jpeg"
              alt="CollectVouchers Logo"
              width={230}
              height={80}
              priority
              className="me-2"
            />
          </Link>

          {/* Search bar */}
      <SearchBar />
 <div className="relative w-60">
     <div className="dropdown-wrapper" style={{ position: "relative" }}>
  <button onClick={() => setOpen(!open)}>
    <img src={selected.flag} alt={selected.name} className="mx-2" width="20" height="14" />  {selected.name} ▼
  </button>

  {open && (
    <div className="country-dropdown">
      {countries.map((country) => (
        <button
          key={country.code}
          onClick={() => {
            setSelected(country);
            setOpen(false);
          }}
        >
          <img src={country.flag} alt={country.name} width="20" height="14" />
          {country.name}
        </button>
      ))}
    </div>
  )}
</div>

    </div>
          {/* Mobile Menu Toggle */}
          <button
            className="btn d-md-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              viewBox="0 0 16 16"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fillRule="evenodd"
                d="M1.5 12.5a.75.75 0 0 1 0-1.5h13a.75.75 0 0 1 0 1.5h-13zm0-5a.75.75 0 0 1 0-1.5h13a.75.75 0 0 1 0 1.5h-13zm0-5a.75.75 0 0 1 0-1.5h13a.75.75 0 0 1 0 1.5h-13z"
              />
            </svg>
          </button>

         
        </div>
      </div>

      {/* Desktop Nav */}
      <nav
        className="bg-white border-top border-bottom d-none d-md-block"
        role="navigation"
        aria-label="Secondary navigation"
      ><div className="container d-flex align-items-center justify-content-between">
        <div className=" d-flex justify-content-start py-3 flex-wrap">
          <Link href={`/${country}/`} className="nav-link px-3 text-dark">
            Home
          </Link>
          <Link href={`/${country}/stores`} className="nav-link px-3 text-dark">
            
Top Stores




          </Link>
              <Link href={`/${country}/categories`} className="nav-link px-3 text-dark">
            Trending Stores
          </Link>
            <Link href={`/${country}/categories`} className="nav-link px-3 text-dark">
            Browse Categories
          </Link>
          <Link href={`/${country}/coupons`} className="nav-link px-3 text-dark">
            Coupons
          </Link>
          <Link href={`/${country}/guides`} className="nav-link px-3 text-dark">
            Deal Guides
          </Link>
          <Link href={`/${country}/`} className="nav-link px-3 text-dark">
           Best Deals
          </Link>
        </div>
        <div className=" justify-content-end  flex-wrap d-flex">
             
              {/* Right Sidebar */}
          <div className="d-none d-md-flex align-items-center">
            <Sidebars />
          </div>
             {/* <SocialIcons color="#000" /> */}
             </div>
             </div>
      </nav>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <nav
          id="mobile-menu"
          className="bg-white border-top d-md-none"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="container d-flex flex-column py-2">
            <form className="mb-2" role="search" aria-label="Mobile search">
              <label htmlFor="mobile-search" className="visually-hidden">
                Search site
              </label>
              <input
                id="mobile-search"
                type="search"
                className="form-control"
                placeholder="Search deals, stores or coupons"
              />
            </form>
            <Link href={`/${country}/categories`} className="nav-link px-3 text-dark">
              Categories
            </Link>
            <Link href={`/${country}/stores`} className="nav-link px-3 text-dark">
              Stores
            </Link>
            <Link href={`/${country}/coupons`} className="nav-link px-3 text-dark">
              Coupons
            </Link>
            <Link href={`/${country}/guides`} className="nav-link px-3 text-dark">
              Shopping Guide
            </Link>
            <Link href={`/${country}/`} className="nav-link px-3 text-dark">
              Back-to-School
            </Link>
            <div className="py-2">
              <Sidebars />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
