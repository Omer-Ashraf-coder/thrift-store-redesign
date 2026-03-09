"use client";

import { useState } from "react";
import { siteData } from "@/data/site";

export default function Hero() {
  const images = siteData.hero.images;
  const [currentIndex, setCurrentIndex] = useState(1); // start on 2nd image

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <section style={{ background: "#f7f5f1" }}>
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "80px 24px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "56px",
          alignItems: "center",
        }}
      >
        <div>
          <p
            style={{
              marginBottom: "12px",
              fontSize: "14px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.24em",
              color: "#047857",
            }}
          >
            {siteData.hero.eyebrow}
          </p>

          <h1
            style={{
              maxWidth: "640px",
              fontSize: "78px",
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              color: "#111111",
              margin: 0,
            }}
          >
            {siteData.hero.title}
          </h1>

          <p
            style={{
              marginTop: "24px",
              maxWidth: "560px",
              fontSize: "20px",
              lineHeight: 1.8,
              color: "#4b5563",
            }}
          >
            {siteData.hero.description}
          </p>

          <div
            style={{
              marginTop: "32px",
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="/locations"
              style={{
                display: "inline-block",
                padding: "14px 28px",
                borderRadius: "9999px",
                background: "#111111",
                color: "white",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Visit Our Store
            </a>

            <a
              href="/services"
              style={{
                display: "inline-block",
                padding: "14px 28px",
                borderRadius: "9999px",
                background: "white",
                color: "#111111",
                fontWeight: 600,
                textDecoration: "none",
                border: "1px solid #d1d5db",
              }}
            >
              View Services
            </a>
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <div
            style={{
              background: "#d8d0c1",
              padding: "12px",
              borderRadius: "32px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.10)",
            }}
          >
            <div
              style={{
                position: "relative",
                height: "420px",
                overflow: "hidden",
                borderRadius: "26px",
                background: "#f3efe8",
              }}
            >
              <img
                src={images[currentIndex]}
                alt={`Store photo ${currentIndex + 1}`}
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
          </div>

          {currentIndex === 1 && (
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous image"
              style={{
                position: "absolute",
                left: "16px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "54px",
                height: "54px",
                borderRadius: "9999px",
                border: "1.5px solid rgba(17,17,17,0.18)",
                background: "rgba(255,255,255,0.96)",
                color: "#111111",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 10px 24px rgba(0,0,0,0.12)",
                cursor: "pointer",
                zIndex: 100,
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
                transition:
                  "transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-50%) scale(1.04)";
                e.currentTarget.style.boxShadow = "0 14px 30px rgba(0,0,0,0.16)";
                e.currentTarget.style.background = "rgba(255,255,255,1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(-50%) scale(1)";
                e.currentTarget.style.boxShadow = "0 10px 24px rgba(0,0,0,0.12)";
                e.currentTarget.style.background = "rgba(255,255,255,0.96)";
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ width: "22px", height: "22px" }}
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          )}

          {currentIndex === 0 && (
            <button
              type="button"
              onClick={goNext}
              aria-label="Next image"
              style={{
                position: "absolute",
                right: "16px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "54px",
                height: "54px",
                borderRadius: "9999px",
                border: "1.5px solid rgba(17,17,17,0.18)",
                background: "rgba(255,255,255,0.96)",
                color: "#111111",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 10px 24px rgba(0,0,0,0.12)",
                cursor: "pointer",
                zIndex: 100,
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
                transition:
                  "transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-50%) scale(1.04)";
                e.currentTarget.style.boxShadow = "0 14px 30px rgba(0,0,0,0.16)";
                e.currentTarget.style.background = "rgba(255,255,255,1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(-50%) scale(1)";
                e.currentTarget.style.boxShadow = "0 10px 24px rgba(0,0,0,0.12)";
                e.currentTarget.style.background = "rgba(255,255,255,0.96)";
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ width: "22px", height: "22px" }}
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}