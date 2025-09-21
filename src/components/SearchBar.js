"use client";

import { useEffect, useState } from "react";

export default function SearchBar() {
  const suggestions = [
    "Brands & Stores",
    "iPhone",
    "Kitchen Appliances",
    "Samsung M51",
    "Grocery",
    "Books, Shoes",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index >= suggestions.length) return;

    if (
      !deleting &&
      subIndex === suggestions[index].length // finished typing
    ) {
      setTimeout(() => setDeleting(true), 1500); // pause before deleting
      return;
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % suggestions.length); // next word
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 50 : 100); // typing speed vs deleting speed

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, suggestions]);

  useEffect(() => {
    setText(suggestions[index].substring(0, subIndex));
  }, [subIndex, index, suggestions]);

  return (
    <form
      role="search"
      aria-label="Site search"
      className="d-none d-md-flex flex-grow-1 mx-4"
      style={{ maxWidth: "500px" }}
    >
      <div className="input-group border-1 p-1 w-100">
        <label htmlFor="desktop-search" className="visually-hidden">
          Search site
        </label>
        <span className="input-group-text bg-white border-0">
          <svg
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            width="20"
            height="20"
            fill="#999"
          >
            <path d="M17.641 15.91L14.03 12.3A7.753 7.753 0 0 0 2.27 2.27 7.752 7.752 0 0 0 12.3 14.03l3.612 3.611a1.22 1.22 0 0 0 1.73 0 1.224 1.224 0 0 0 0-1.73zM3.482 12.022a6.045 6.045 0 0 1 0-8.539 5.999 5.999 0 0 1 4.27-1.769c1.612 0 3.129.628 4.27 1.769a6.045 6.045 0 0 1 0 8.54 5.999 5.999 0 0 1-4.27 1.768 6 6 0 0 1-4.27-1.769z" />
          </svg>
        </span>

        {/* Typing Animation Placeholder */}
        <input
          id="desktop-search"
          type="search"
          className="form-control border-0 p-2"
          placeholder={`Search "${text}"`}
          aria-label="Search input"
        />
      </div>
    </form>
  );
}
