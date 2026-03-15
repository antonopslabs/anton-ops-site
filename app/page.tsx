export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 16px",
      }}
    >
      <div style={{ maxWidth: 960, width: "100%" }}>
        {/* Hero */}
        <header style={{ marginBottom: 48 }}>
          <div style={{ marginBottom: 12, fontSize: 14, color: "#a5b4fc" }}>
                        ANTON OPS LABS · AGENCY AUTOPILOT
          </div>
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 44px)",
              margin: "0 0 16px 0",
              lineHeight: 1.1,
            }}
          >
            Turn your agency into an autopilot machine.
          </h1>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.6,
                            color: "#d1d5db",
              maxWidth: 640,
            }}
          >
            We build AI‑powered automation playbooks that help small and mid‑size
            agencies generate more leads, deliver client work faster, and cut
            busywork{" "}
            <span style={{ fontWeight: 600 }}>without hiring more people.</span>
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
            <a
              href="#waitlist"
              style={{
                padding: "10px 18px",
                                borderRadius: 999,
                background:
                  "linear-gradient(135deg, #6366f1, #a855f7, #ec4899)",
                color: "#f9fafb",
                fontWeight: 600,
                textDecoration: "none",
                fontSize: 14,
              }}
            >
              Join the early access list
            </a>
            <a
              href="#how-it-works"
              style={{
                padding: "10px 18px",
                                borderRadius: 999,
                border: "1px solid #4b5563",
                color: "#e5e7eb",
                textDecoration: "none",
                fontSize: 14,
              }}
            >
              See how it works
            </a>
          </div>

          <div
            style={{
              marginTop: 16,
              fontSize: 13,
                            color: "#9ca3af",
            }}
          >
            Built by Anton Ops Labs. We do not sell leads, we sell the machines
            that create them.
          </div>
        </header>

        {/* Three-column value props */}
        <section
          id="how-it-works"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
                        marginBottom: 40,
          }}
        >
          <div
            style={{
              borderRadius: 16,
              border: "1px solid #111827",
              background:
                "radial-gradient(circle at top left, #111827, #020617)",
              padding: 20,
            }}
          >
            <h2 style={{ fontSize: 18, marginBottom: 8 }}>Playbooks, not theory</h2>
            <p style={{ fontSize: 14, color: "#d1d5db", lineHeight: 1.6 }}>
              Concrete workflows, prompts, and automations designed for real
                            agencies: from inbound lead capture to outbound, fulfillment, and
              reporting.
            </p>
          </div>

          <div
            style={{
              borderRadius: 16,
              border: "1px solid #111827",
              background:
                "radial-gradient(circle at top left, #111827, #020617)",
              padding: 20,
            }}
          >
            <h2 style={{ fontSize: 18, marginBottom: 8 }}>Implementation‑ready</h2>
                        <p style={{ fontSize: 14, color: "#d1d5db", lineHeight: 1.6 }}>
              Zapier/Make recipes, example scripts, and email templates you can
              drop into your stack. No 200‑page PDF you’ll never ship.
            </p>
          </div>

          <div
            style={{
              borderRadius: 16,
              border: "1px solid #111827",
              background:
                "radial-gradient(circle at top left, #111827, #020617)",
              padding: 20,
            }}
          >
                        <h2 style={{ fontSize: 18, marginBottom: 8 }}>Built for ROl</h2>
            <p style={{ fontSize: 14, color: "#d1d5db", lineHeight: 1.6 }}>
              Everything is aimed at a simple outcome: more qualified leads and
              more client revenue per headcount.
            </p>
          </div>
        </section>

        {/* Early access / waitlist */}
        <section
          id="waitlist"
          style={{
            borderRadius: 20,
            border: "1px solid #111827",
            background:
                            "radial-gradient(circle at top left, #1f2937, #020617)",
            padding: 24,
            marginBottom: 40,
          }}
        >
          <h2 style={{ fontSize: 20, marginBottom: 8 }}>
            Early access: Agency Autopilot Playbook
          </h2>
          <p
            style={{
              fontSize: 14,
              color: "#e5e7eb",
              lineHeight: 1.6,
              marginBottom: 16,
            }}
                      >
            We’re finishing version 1 now. It includes lead gen workflows,
            fulfillment automations, client reporting templates, and a setup
            checklist your ops person can follow.
          </p>
          <p
            style={{
              fontSize: 13,
              color: "#9ca3af",
              marginBottom: 16,
            }}
          >
            Drop your email below and we’ll invite you as soon as the first
            cohort opens. Early customers get discounted pricing and direct
            input on what we build next.
                      </p>
          <form
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              alignItems: "center",
            }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="you@agency.com"
              style={{
                flex: 1,
                                minWidth: 220,
                padding: "10px 12px",
                borderRadius: 999,
                border: "1px solid #4b5563",
                backgroundColor: "transparent",
                color: "#f9fafb",
                fontSize: 14,
              }}
            />
            <button
              type="submit"
              style={{
                padding: "10px 18px",
                borderRadius: 999,
                border: "none",
                                background:
                  "linear-gradient(135deg, #22c55e, #22d3ee, #6366f1)",
                color: "#0b1120",
                fontWeight: 600,
                fontSize: 14,
                cursor: "pointer",
              }}
            >
              Join waitlist (coming soon)
            </button>
          </form>
          <div
            style={{
              fontSize: 12,
              color: "#6b7280",
                            marginTop: 8,
            }}
          >
            Form not wired up yet. For now, DM{" "}
            <span style={{ fontWeight: 600 }}>@antonlabsai</span> on X.
          </div>
        </section>

        {/* Footer */}
        <footer
          style={{
            fontSize: 12,
            color: "#6b7280",
            borderTop: "1px solid #111827",
            paddingTop: 16,
                        marginTop: 16,
          }}
        >
          © {new Date().getFullYear()} Anton Ops Labs. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
