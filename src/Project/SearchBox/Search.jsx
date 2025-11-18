

import React, { useState } from "react";

export default function SearchBarDemo() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (!query.trim()) return;

    const searchTerm = query.toLowerCase();

    const sectionMap = {
      "top deals": "top-deals",
      deals: "top-deals",
      mobiles: "mobiles",
      mobile: "mobiles",
      tablets: "mobiles",
      electronics: "electronics",
      fashion: "fashion",
      kitchen: "home-kitchen",
      home: "home-kitchen",
      toys: "toys",
      furniture: "furniture",
      grocery: "grocery",
      flight: "flight-booking",
      flights: "flight-booking"
    };

    let matchedSection = null;

    for (let key in sectionMap) {
      if (searchTerm.includes(key)) {
        matchedSection = sectionMap[key];
        break;
      }
    }

    if (matchedSection) {
      document.getElementById(matchedSection)?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    } else {
      alert("No matching section found!");
    }
  };

  return (
    <div style={styles.container}>
      {/* HEADER WITH SEARCH BAR */}
      <div style={styles.header}>
        <h1 style={styles.logo}>ShopMart</h1>
        <div style={styles.searchContainer}>
          <svg
            width="26"
            height="26"
            style={styles.searchIcon}
            onClick={handleSearch}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Search Icon</title>
            <path
              d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z"
              stroke="#717478"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M16 16L21 21"
              stroke="#717478"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <input
            type="text"
            placeholder="Search for Products, Brands, and More"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            style={styles.searchInput}
          />
        </div>
      </div>

      {/* QUICK SEARCH SUGGESTIONS */}
      <div style={styles.suggestions}>
        <p style={styles.suggestionText}>Try searching:</p>
        {["mobiles", "fashion", "electronics", "top deals", "grocery", "furniture"].map((term) => (
          <button
            key={term}
            onClick={() => {
              setQuery(term);
              setTimeout(() => handleSearch(), 100);
            }}
            style={styles.suggestionBtn}
          >
            {term}
          </button>
        ))}
      </div>

      <Section id="top-deals" title="🔥 Top Deals">
        <ProductCard name="Wireless Earbuds" price="$29.99" discount="50% OFF" color="#ff6b6b" />
        <ProductCard name="Smart Watch" price="$79.99" discount="30% OFF" color="#4ecdc4" />
        <ProductCard name="Bluetooth Speaker" price="$39.99" discount="40% OFF" color="#ffe66d" />
        <ProductCard name="Power Bank" price="$19.99" discount="60% OFF" color="#95e1d3" />
      </Section>

      <Section id="mobiles" title="📱 Mobiles & Tablets">
        <ProductCard name="iPhone 15 Pro" price="$999" color="#1e3a8a" />
        <ProductCard name="Samsung Galaxy S24" price="$899" color="#7c3aed" />
        <ProductCard name="iPad Air" price="$599" color="#06b6d4" />
        <ProductCard name="OnePlus 12" price="$699" color="#dc2626" />
      </Section>

      <Section id="electronics" title="💻 Electronics">
        <ProductCard name="Laptop Dell XPS" price="$1299" color="#374151" />
        <ProductCard name="4K Monitor" price="$399" color="#0891b2" />
        <ProductCard name="Gaming Mouse" price="$49" color="#8b5cf6" />
        <ProductCard name="Mechanical Keyboard" price="$89" color="#ec4899" />
      </Section>

      <Section id="fashion" title="👗 Fashion">
        <ProductCard name="Designer Dress" price="$79" color="#f43f5e" />
        <ProductCard name="Leather Jacket" price="$149" color="#78350f" />
        <ProductCard name="Sneakers" price="$59" color="#059669" />
        <ProductCard name="Sunglasses" price="$29" color="#eab308" />
      </Section>

      <Section id="home-kitchen" title="🏠 Home & Kitchen">
        <ProductCard name="Air Fryer" price="$89" color="#dc2626" />
        <ProductCard name="Coffee Maker" price="$69" color="#92400e" />
        <ProductCard name="Blender" price="$49" color="#0284c7" />
        <ProductCard name="Cookware Set" price="$129" color="#4b5563" />
      </Section>

      <Section id="toys" title="🎮 Toys & Games">
        <ProductCard name="RC Car" price="$39" color="#ef4444" />
        <ProductCard name="Board Game Set" price="$29" color="#f59e0b" />
        <ProductCard name="Building Blocks" price="$24" color="#10b981" />
        <ProductCard name="Puzzle 1000pc" price="$19" color="#6366f1" />
      </Section>

      <Section id="furniture" title="🛋️ Furniture">
        <ProductCard name="Office Chair" price="$199" color="#1f2937" />
        <ProductCard name="Study Desk" price="$149" color="#92400e" />
        <ProductCard name="Bookshelf" price="$89" color="#0e7490" />
        <ProductCard name="Bean Bag" price="$59" color="#7c2d12" />
      </Section>

      <Section id="grocery" title="🛒 Grocery">
        <ProductCard name="Organic Rice 5kg" price="$12" color="#15803d" />
        <ProductCard name="Olive Oil 1L" price="$8" color="#ca8a04" />
        <ProductCard name="Pasta Pack" price="$5" color="#c2410c" />
        <ProductCard name="Green Tea Box" price="$7" color="#166534" />
      </Section>

      <Section id="flight-booking" title="✈️ Flight Booking">
        <FlightCard from="New York" to="London" price="$599" />
        <FlightCard from="Los Angeles" to="Tokyo" price="$799" />
        <FlightCard from="Dubai" to="Paris" price="$449" />
        <FlightCard from="Mumbai" to="Singapore" price="$299" />
      </Section>
    </div>
  );
}

function Section({ id, title, children }) {
  return (
    <div id={id} style={styles.section}>
      <h2 style={styles.sectionTitle}>{title}</h2>
      <div style={styles.productGrid}>{children}</div>
    </div>
  );
}

function ProductCard({ name, price, discount, color }) {
  return (
    <div style={styles.card}>
      <div style={{ ...styles.productImage, background: color }}>
        <span style={styles.productIcon}>🏷️</span>
      </div>
      <h3 style={styles.productName}>{name}</h3>
      <p style={styles.productPrice}>{price}</p>
      {discount && <span style={styles.discount}>{discount}</span>}
    </div>
  );
}

function FlightCard({ from, to, price }) {
  return (
    <div style={styles.card}>
      <div style={{ ...styles.productImage, background: "#3b82f6" }}>
        <span style={styles.productIcon}>✈️</span>
      </div>
      <h3 style={styles.productName}>{from} → {to}</h3>
      <p style={styles.productPrice}>{price}</p>
      <span style={styles.flightTag}>Round Trip</span>
    </div>
  );
}



const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    minHeight: "100vh",
    background: "#f8f9fa"
  },
  header: {
    position: "sticky",
    top: 0,
    background: "white",
    padding: "20px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    zIndex: 100,
    flexWrap: "wrap"
  },
  logo: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#2874f0",
    margin: 0
  },
  searchContainer: {
    width: "600px",
    maxWidth: "90%",
    height: "45px",
    background: "#f0f5ff",
    display: "flex",
    alignItems: "center",
    borderRadius: "8px",
    padding: "0 10px",
    border: "1px solid #d0d4d9",
    marginLeft: '40px'
  },
  searchIcon: {
    cursor: "pointer",
    marginRight: "8px"
  },
  searchInput: {
    width: "100%",
    height: "100%",
    border: "none",
    outline: "none",
    background: "transparent",
    fontSize: "16px",
    color: "#333"
  },
  suggestions: {
    padding: "15px 20px",
    background: "white",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    flexWrap: "wrap",
    borderBottom: "1px solid #e0e0e0"
  },
  suggestionText: {
    margin: 0,
    color: "#666",
    fontSize: "14px"
  },
  suggestionBtn: {
    padding: "6px 16px",
    background: "#f0f5ff",
    border: "1px solid #2874f0",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "13px",
    color: "#2874f0",
    fontWeight: "500"
  },
  section: {
    padding: "30px 20px",
    background: "white",
    marginBottom: "2px"
  },
  sectionTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#212121"
  },
  productGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px"
  },
  card: {
    background: "white",
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    padding: "15px",
    textAlign: "center",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
  },
  productImage: {
    width: "100%",
    height: "150px",
    borderRadius: "8px",
    marginBottom: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  productIcon: {
    fontSize: "48px"
  },
  productName: {
    fontSize: "16px",
    fontWeight: "600",
    margin: "8px 0",
    color: "#212121"
  },
  productPrice: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#388e3c",
    margin: "5px 0"
  },
  discount: {
    display: "inline-block",
    background: "#ff6b6b",
    color: "white",
    padding: "4px 8px",
    borderRadius: "4px",
    fontSize: "12px",
    fontWeight: "bold",
    marginTop: "8px"
  },
  flightTag: {
    display: "inline-block",
    background: "#e3f2fd",
    color: "#1976d2",
    padding: "4px 8px",
    borderRadius: "4px",
    fontSize: "12px",
    fontWeight: "600",
    marginTop: "8px"
  }
};