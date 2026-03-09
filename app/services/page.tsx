import { siteData } from "@/data/site";

export default function ServicesPage() {
  const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    siteData.contact.emailDisplay
  )}`;

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
            marginLeft: "32px",
            width: "980px",
          }}
        >
          <p
            style={{
              margin: 0,
              marginBottom: "16px",
              fontSize: "13px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.24em",
              color: "#047857",
            }}
          >
            SERVICES
          </p>

          <h1
            style={{
              margin: 0,
              maxWidth: "900px",
              fontSize: "62px",
              lineHeight: 1.02,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              color: "#111111",
            }}
          >
            Clean-out services for homes, apartments, and other spaces.
          </h1>

          <p
            style={{
              margin: "24px 0 0",
              maxWidth: "920px",
              fontSize: "17px",
              lineHeight: 1.85,
              color: "#374151",
            }}
          >
            We provide clean-out help for local customers who need assistance
            with removing items from homes, apartments, estates, and other
            spaces. Contact us directly to discuss your project, availability,
            and pricing for the service.
          </p>

          <div
            style={{
              marginTop: "46px",
              display: "flex",
              flexDirection: "column",
              gap: "22px",
            }}
          >
            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e7e2da",
                borderRadius: "34px",
                padding: "30px 32px 28px",
                boxShadow:
                  "0 1px 0 rgba(0,0,0,0.03), 0 3px 10px rgba(0,0,0,0.03)",
              }}
            >
              <h2
                style={{
                  margin: 0,
                  fontSize: "24px",
                  lineHeight: 1.2,
                  fontWeight: 700,
                  color: "#111111",
                }}
              >
                What We Help With
              </h2>

              <p
                style={{
                  margin: "20px 0 0",
                  fontSize: "15px",
                  lineHeight: 1.9,
                  color: "#374151",
                }}
              >
                Home clean-outs, apartment clean-outs, estate clean-outs, and
                other general local clean-out needs.
              </p>
            </div>

            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e7e2da",
                borderRadius: "34px",
                padding: "30px 32px 28px",
                boxShadow:
                  "0 1px 0 rgba(0,0,0,0.03), 0 3px 10px rgba(0,0,0,0.03)",
              }}
            >
              <h2
                style={{
                  margin: 0,
                  fontSize: "24px",
                  lineHeight: 1.2,
                  fontWeight: 700,
                  color: "#111111",
                }}
              >
                How to Get Started
              </h2>

              <p
                style={{
                  margin: "20px 0 0",
                  fontSize: "15px",
                  lineHeight: 1.9,
                  color: "#374151",
                }}
              >
                Call or email our team with details about the job, location, and
                timing. We can then discuss the next steps, pricing, and whether
                the project is a good fit.
              </p>
            </div>

            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e7e2da",
                borderRadius: "34px",
                padding: "30px 32px 28px",
                boxShadow:
                  "0 1px 0 rgba(0,0,0,0.03), 0 3px 10px rgba(0,0,0,0.03)",
              }}
            >
              <h2
                style={{
                  margin: 0,
                  fontSize: "24px",
                  lineHeight: 1.2,
                  fontWeight: 700,
                  color: "#111111",
                }}
              >
                Need More Information?
              </h2>

              <p
                style={{
                  margin: "20px 0 0",
                  fontSize: "15px",
                  lineHeight: 1.9,
                  color: "#374151",
                }}
              >
                Reach out directly for scheduling questions, availability,
                service details, and clean-out pricing.
              </p>
            </div>
          </div>

          <div
            style={{
              marginTop: "38px",
              display: "flex",
              gap: "16px",
            }}
          >
            <a
              href={siteData.contact.phoneHref}
              style={{
                display: "inline-block",
                padding: "14px 24px",
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
              href={gmailCompose}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "14px 24px",
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
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}