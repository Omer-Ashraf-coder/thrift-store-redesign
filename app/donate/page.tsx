import { siteData } from "@/data/site";

export default function DonatePage() {
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
          padding: "96px 24px 120px",
        }}
      >
        <div
          style={{
            marginLeft: "96px",
            width: "1170px",
          }}
        >
          <p
            style={{
              margin: 0,
              marginBottom: "18px",
              fontSize: "13px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.24em",
              color: "#047857",
            }}
          >
            DONATE
          </p>

          <h1
            style={{
              margin: 0,
              maxWidth: "920px",
              fontSize: "68px",
              lineHeight: 1.02,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              color: "#111111",
            }}
          >
            Donate gently used items in North Bergen.
          </h1>

          <p
            style={{
              margin: "28px 0 0",
              maxWidth: "980px",
              fontSize: "17px",
              lineHeight: 1.75,
              color: "#374151",
            }}
          >
            We welcome community item donations and make it easy to drop off
            gently used goods at our store. We also appreciate financial
            contributions that help support our establishment, our mission, and
            future growth in the community.
          </p>

          <div
            style={{
              marginTop: "44px",
              display: "grid",
              gridTemplateColumns: "372px 372px 372px",
              gap: "28px",
            }}
          >
            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e7e2da",
                borderRadius: "34px",
                padding: "34px 34px 30px",
                boxShadow:
                  "0 1px 0 rgba(0,0,0,0.03), 0 3px 10px rgba(0,0,0,0.03)",
              }}
            >
              <h2
                style={{
                  margin: 0,
                  fontSize: "30px",
                  lineHeight: 1.15,
                  fontWeight: 700,
                  color: "#111111",
                }}
              >
                Common Donations
              </h2>

              <p
                style={{
                  margin: "24px 0 0",
                  fontSize: "16px",
                  lineHeight: 1.85,
                  color: "#374151",
                }}
              >
                Clothing, shoes, household items, décor, furniture, and other
                gently used goods in clean and usable condition.
              </p>
            </div>

            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e7e2da",
                borderRadius: "34px",
                padding: "34px 34px 30px",
                boxShadow:
                  "0 1px 0 rgba(0,0,0,0.03), 0 3px 10px rgba(0,0,0,0.03)",
              }}
            >
              <h2
                style={{
                  margin: 0,
                  fontSize: "30px",
                  lineHeight: 1.15,
                  fontWeight: 700,
                  color: "#111111",
                }}
              >
                Drop-Off Hours
              </h2>

              <p
                style={{
                  margin: "24px 0 0",
                  fontSize: "16px",
                  lineHeight: 1.85,
                  color: "#374151",
                }}
              >
                Main Store: {siteData.locations[0].hours}
                <br />
                Second Location: {siteData.locations[1].hours}
              </p>
            </div>

            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e7e2da",
                borderRadius: "34px",
                padding: "34px 34px 30px",
                boxShadow:
                  "0 1px 0 rgba(0,0,0,0.03), 0 3px 10px rgba(0,0,0,0.03)",
              }}
            >
              <h2
                style={{
                  margin: 0,
                  fontSize: "30px",
                  lineHeight: 1.15,
                  fontWeight: 700,
                  color: "#111111",
                }}
              >
                Financial Contributions
              </h2>

              <p
                style={{
                  margin: "24px 0 0",
                  fontSize: "16px",
                  lineHeight: 1.85,
                  color: "#374151",
                }}
              >
                In addition to donating items, community members may also choose
                to make a financial contribution to support the store, future
                improvements, and continued service to the local community.
              </p>

              <a
                href="https://www.paypal.com/donate/?hosted_button_id=KS32BTGG4R6X8#"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "24px",
                  padding: "14px 22px",
                  borderRadius: "999px",
                  background: "#111111",
                  color: "#ffffff",
                  fontSize: "15px",
                  fontWeight: 700,
                  textDecoration: "none",
                  lineHeight: 1,
                }}
              >
                Donate via PayPal
              </a>

              <p
                style={{
                  margin: "14px 0 0",
                  fontSize: "13px",
                  lineHeight: 1.7,
                  color: "#6b7280",
                }}
              >
              </p>
            </div>
          </div>

          <div
            style={{
              marginTop: "30px",
              display: "flex",
              gap: "18px",
            }}
          >
            <a
              href={siteData.contact.phoneHref}
              style={{
                display: "inline-block",
                padding: "14px 28px",
                borderRadius: "999px",
                background: "#111111",
                color: "#ffffff",
                fontSize: "15px",
                fontWeight: 700,
                textDecoration: "none",
                lineHeight: 1,
              }}
            >
              Call {siteData.contact.phoneDisplay}
            </a>

            <a
              href="/locations"
              style={{
                display: "inline-block",
                padding: "14px 28px",
                borderRadius: "999px",
                background: "#ffffff",
                color: "#111111",
                border: "1px solid #d6d3d1",
                fontSize: "15px",
                fontWeight: 700,
                textDecoration: "none",
                lineHeight: 1,
              }}
            >
              View Locations
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}