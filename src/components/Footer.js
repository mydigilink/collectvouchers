"use client";
import Link from "next/link";
import Image from "next/image";
import SocialIcons from "./SocialIcons";
import BackToTop from "./BackToTop";

export default function Footer({ searchParms }) {
  const country = searchParms?.countryCode || "us";

  return (
    <>
      <footer className="bg-dark text-white pt-5" role="contentinfo">
        <div className="container pt-5">
          <div className="row">
            {/* Savings */}
            {/* <div className="col-md-3 mb-4" role="navigation" aria-label="Savings">
              <h5 className="text-white text-lg mb-3 text-uppercase fw-bold">Savings</h5>
              <ul className="list-unstyled" role="list">
                <li><Link href={`/${country}`} className="text-white text-decoration-none text-sm">About Us</Link></li>
                <li><Link href={`/${country}`} className="text-white text-decoration-none text-sm">Terms & Conditions</Link></li>
                <li><Link href={`/${country}`} className="text-white text-decoration-none text-sm">Printable Vouchers</Link></li>
                <li><Link href={`/${country}`} className="text-white text-decoration-none text-sm">Student Vouchers</Link></li>
                <li><Link href={`/${country}`} className="text-white text-decoration-none text-sm">All Brands</Link></li>
                <li><Link href={`/${country}`} className="text-white text-decoration-none text-sm">NHS Discounts</Link></li>
                <li><Link href={`/${country}`} className="text-white text-decoration-none text-sm">Black Friday</Link></li>
                <li><Link href={`/${country}`} className="text-white text-decoration-none text-sm">VoucherCodes VIP</Link></li>
              </ul>
            </div> */}

          

            {/* About */}
            <div className="col-md-3 mb-4" role="navigation" aria-label="About">
              <h5 className="text-white text-lg mb-3 text-uppercase fw-bold">information</h5>
              <ul className="list-unstyled" role="list">
                <li><Link href={`/${country}`} className="text-white text-decoration-none text-sm">About Us</Link></li>
                {/* <li><Link href={`/${country}`} className="text-white text-decoration-none text-sm">Partner With Us</Link></li> */}
                <li><Link href={`/${country}/blog/`} className="text-white text-decoration-none text-sm">Blogs</Link></li>
                <li><Link href={`/${country}`} className="text-white text-decoration-none text-sm">Careers</Link></li>
                {/* <li><Link href={`/${country}`} className="text-white text-decoration-none text-sm">Charity</Link></li> */}
                <li><Link href={`/${country}`} className="text-white text-decoration-none text-sm">Community</Link></li>
                <li><Link href={`/${country}`} className="text-white text-decoration-none text-sm">Tech Insights</Link></li>
              </ul>
            </div>
  {/* Help */}
            <div className="col-md-3 mb-4" role="navigation" aria-label="Help">
              <h5 className="text-white text-lg mb-3 text-uppercase fw-bold">Help</h5>
              <ul className="list-unstyled" role="list">
                <li><Link href={`/${country}`} className="text-white text-decoration-none text-sm">Support</Link></li>
                <li><Link href={`/${country}`} className="text-white text-decoration-none text-sm">Reward FAQs</Link></li>
                <li><Link href={`/${country}`} className="text-white text-decoration-none text-sm">Contact Us</Link></li>
                <li><Link href={`/${country}`} className="text-white text-decoration-none text-sm">Code Guarantee</Link></li>
                <li><Link href={`/${country}`} className="text-white text-decoration-none text-sm">Accessibility</Link></li>
              </ul>
            </div>
            {/* Browser Extension & Social */}
            {/* <div className="col-md-3 mb-4">
              <h5 className="text-white text-lg mb-3 text-uppercase fw-bold mt-3">Browser Extension</h5>
              <Image
                width={150}
                height={80}
                src="/icons/chrome-store.svg"
                alt="Install our Chrome Extension"
              />

              <h5 className="text-white text-lg mb-3 text-uppercase fw-bold mt-3">Join Us</h5>
              <SocialIcons color="#fff" />
            </div> */}
          </div>

          {/* Social Icons (fallback) */}
          {/* <div className="text-center my-3" role="navigation" aria-label="Social Media">
            <a href={`/${country}`} aria-label="TikTok" className="text-white me-3"><i className="bi bi-tiktok fs-4"></i></a>
            <a href={`/${country}`} aria-label="Instagram" className="text-white me-3"><i className="bi bi-instagram fs-4"></i></a>
            <a href={`/${country}`} aria-label="Facebook" className="text-white me-3"><i className="bi bi-facebook fs-4"></i></a>
            <a href={`/${country}`} aria-label="LinkedIn" className="text-white"><i className="bi bi-linkedin fs-4"></i></a>
          </div> */}

        
         

        
        </div>
        <div className="text-center mt-3 pt-3 border-top border-secondary">
            {/* Bottom Links */}
          <nav
            className="text-center mt-3"
            role="navigation"
            aria-label="Legal and Policies"
          >
            <Link href="/privacy-policy" className="text-white text-decoration-none text-sm mx-2">Privacy Notice</Link>
            <Link href="/partner-with-us" className="text-white text-decoration-none text-sm mx-2">Partner With Us</Link>
            <Link href="/terms-and-conditions" className="text-white text-decoration-none text-sm mx-2">Terms and Conditions</Link>
          </nav>
           {/* Legal */}
          <div className="text-center small text-white mt-3 pb-4" aria-label="Legal information">
        <small>   © {new Date().getFullYear()}  CollectVouchers — All rights reserved. CollectVouchers® is a registered trademark. Made with ❤️ by the CollectVouchers Design Team.
        </small>  </div>
          
        </div>
      </footer>

      {/* Back to top button */}
      <BackToTop />
    </>
  );
}
