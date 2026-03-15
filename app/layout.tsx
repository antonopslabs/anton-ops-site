export const metadata = {
  title: "Anton Ops Labs – Agency Autopilot",
  description:
        "Automation playbooks and AI workflows that help agencies increase revenue and reduce busywork.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          backgroundColor: "#050816",
                    color: "#f9fafb",
        }}
      >
        {children}
      </body>
    </html>
  );
}
