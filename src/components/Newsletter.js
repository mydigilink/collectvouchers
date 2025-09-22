"use client";

import { useState } from "react";
import WaitlistSection from "./WaitlistSection";

export default function Newsletter({countryCode}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    try {
      // Replace with your API (e.g., Mailchimp, custom endpoint, etc.)
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email,countryCode }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="newsletter-container bg-white  py-5 px-5 rounded-3 shadow-sm text-center">
      {/* <h3 className="fw-bold mb-2 text-black">📩 Get Early Access</h3>
      <p className="text-black mb-4">
   Your shortcut to savings starts here. Subscribe & enjoy exclusive perks.
      </p> */}

      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column flex-md-row justify-content-center gap-2"
        style={{ maxWidth: "100%", margin: "0 auto" }}
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control p-3 rounded-2"
          placeholder="Enter your email"
        />
        <button
          type="submit"
          className="btn btn-primary px-0 w-50  rounded-2 fw-semibold"
        >
          Notify Me
        </button>
      </form>

      {status === "success" && (
          <> <h3 className="text-success mt-3 mb-0">🎉 Thanks for subscribing!</h3>
            <small className="text-black mt-3 mb-0">We will keep you updated.</small>
            
            </> 
    
      )}
      {status === "error" && (
        <p className="text-danger mt-3 mb-0">
          ❌ Something went wrong. Please try again.
        </p>
      )}
      {/* <WaitlistSection /> */}
    </div>
  );
}
