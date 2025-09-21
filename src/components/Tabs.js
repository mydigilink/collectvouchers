"use client";

import { useState } from "react";

export default function Tabs({ title, featuredMerchants }) {
  const [activeTab, setActiveTab] = useState("all");
console.log(title)
  const tabs = [
    { key: "all", label: "All Offer" },
    { key: "today", label: "Today's Best Offer" },
    { key: "upcoming", label: "Upcoming Offer" },
    { key: "current", label: "Currently Using" },
  ];

  // Filter merchants based on the active tab if needed
 // const filteredMerchants = featuredMerchants; // Replace with filtering logic if API provides categories

  return (
    <div>
     
  <div className="d-flex justify-content-between align-items-center mb-4">
      <h3 className="fw-bold mt-4 mb-0">{title}</h3>
       
    <div className="flex gap-2 mt-4 mb-0">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={activeTab === tab.key ? "active" : ""}
          >
            {tab.label}
          </button>
        ))}
      </div>


 </div>
      <div>
        {activeTab === "all" && (
            
<>

{featuredMerchants.map((merchant, idx) => (
        <div className="col-12 col-sm-6 col-md-3" key={idx}>
            <Link
                href={`/${country}/${merchant.pageSlug}`}>
          <div className="card shadow-sm h-100 border-0 position-relative">
            {merchant.vip && (
              <span className="badge bg-warning text-dark position-absolute top-0 start-50 translate-middle-x mt-2">
                ⭐ VIP
              </span>
            )}
            <div
              className="d-flex align-items-center justify-content-center bg-white border-bottom"
              style={{ height: "120px" }}
            >
              <Image
                src={merchant.brandLogo}
                alt={merchant.brandName}
                width={150}
                height={60}
                style={{ objectFit: "contain", maxHeight: "80px" }}
              />
            </div>
            <div className="card-body">
              <div className="text-muted small fw-normal mb-0">{merchant.brandName}</div>
              <div className="text-sm card-text fw-normal mt-0">
                {merchant.exclusive && (
                  <span className="badge bg-danger text-white fw-normal mb-0">EXCLUSIVE</span>
                )}{" "}
                {merchant.offerDescription || `Check deals at ${merchant.brandName}`}
              </div>
            </div>
          </div></Link>
        </div>
      ))}
      </>

        )}
        {activeTab === "today" && <p>Today's Best Offers...</p>}
        {activeTab === "upcoming" && <p>Upcoming Offers...</p>}
        {activeTab === "current" && <p>Currently Using...</p>}
      </div>
    </div>
  );
}
