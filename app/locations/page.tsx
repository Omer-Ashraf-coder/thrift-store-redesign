import { siteData } from "@/data/site";

export default function LocationsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f7f5f1",
        color: "#171717",
      }}
    >
      <section
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "84px 24px 120px",
        }}
      >
        <div
          style={{
            marginLeft: "160px",
          }}
        >
          <p
            style={{
              margin: 0,
              marginBottom: "18px",
              fontSize: "14px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.24em",
              color: "#047857",
            }}
          >
            LOCATIONS
          </p>

          <h1
            style={{
              margin: 0,
              maxWidth: "620px",
              fontSize: "56px",
              lineHeight: 0.95,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              color: "#111111",
            }}
          >
            Visit one of our North Bergen locations.
          </h1>
        </div>

        <div
          style={{
            marginTop: "56px",
            marginLeft: "160px",
            display: "grid",
            gridTemplateColumns: "480px 480px",
            gap: "28px",
          }}
        >
          {siteData.locations.map((location) => (
            <div
              key={location.name}
              style={{
                background: "#ffffff",
                border: "1px solid #e7e2da",
                borderRadius: "34px",
                padding: "28px 30px 26px",
                boxShadow:
                  "0 1px 0 rgba(0,0,0,0.03), 0 3px 10px rgba(0,0,0,0.03)",
              }}
            >
              <h2
                style={{
                  margin: 0,
                  fontSize: "26px",
                  lineHeight: 1.15,
                  fontWeight: 700,
                  color: "#111111",
                }}
              >
                {location.name}
              </h2>

              <p
                style={{
                  margin: "24px 0 0",
                  fontSize: "17px",
                  lineHeight: 1.6,
                  color: "#374151",
                }}
              >
                {location.addressLine1}
                <br />
                {location.addressLine2}
              </p>

              <p
                style={{
                  margin: "22px 0 0",
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#6b7280",
                }}
              >
                {location.details}
              </p>

              <p
                style={{
                  margin: "2px 0 0",
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#374151",
                }}
              >
                {location.hours}
              </p>

              <div style={{ marginTop: "24px" }}>
                <a
                  href={location.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    padding: "12px 18px",
                    borderRadius: "999px",
                    background: "#111111",
                    color: "#ffffff",
                    fontSize: "15px",
                    fontWeight: 700,
                    textDecoration: "none",
                    lineHeight: 1,
                  }}
                >
                  Get Directions
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}