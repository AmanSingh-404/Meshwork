export function HeroMockup() {
  return (
    <div
      className="rounded-[18px] overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.045)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(28px)",
        WebkitBackdropFilter: "blur(28px)",
        boxShadow:
          "0 40px 100px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.1)",
      }}
    >
      {/* Browser bar */}
      <div
        className="flex items-center gap-[7px] px-[18px] py-[14px]"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="w-[11px] h-[11px] rounded-full bg-[#FF5F56]" />
        <div className="w-[11px] h-[11px] rounded-full bg-[#FFBD2E]" />
        <div className="w-[11px] h-[11px] rounded-full bg-[#27C93F]" />
        <div
          className="mx-auto px-[14px] py-[4px] rounded-[6px] text-[12px]"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "rgba(255,255,255,0.28)",
          }}
        >
          app.collabiq.io / workspace / platform-team
        </div>
      </div>

      {/* App body */}
      <div className="grid grid-cols-[200px_1fr] min-h-[320px]">
        {/* Sidebar */}
        <MockupSidebar />

        {/* Main chat area */}
        <div className="p-6">
          {/* User question */}
          <div
            className="flex items-start gap-2 rounded-[10px] px-4 py-3 text-[13px] mb-3.5"
            style={{
              background: "rgba(124,111,255,0.12)",
              border: "1px solid rgba(124,111,255,0.2)",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            <span>💬</span>
            How does the auth token refresh flow work in our backend?
          </div>

          {/* AI answer */}
          <div
            className="rounded-[10px] px-4 py-3.5 text-[13px] leading-[1.7]"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "rgba(255,255,255,0.55)",
            }}
          >
            The token refresh uses a sliding-window approach with a 15-min
            access token and a 7-day refresh token stored in httpOnly cookies.
            On expiry the client silently POSTs to{" "}
            <code
              className="rounded px-[5px] py-[1px] text-[11px]"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              /auth/refresh
            </code>{" "}
            and receives a new pair…
            <span className="cursor-blink" />
            <div className="mt-2 flex flex-wrap gap-1.5">
              {[
                "📄 auth-design.md · §3",
                "📄 backend-notes.md · p.7",
                "📄 api-spec.pdf · p.12",
              ].map((cite) => (
                <span
                  key={cite}
                  className="inline-flex items-center gap-1 rounded px-[6px] py-[1px] text-[10.5px]"
                  style={{
                    background: "rgba(15,207,176,0.1)",
                    border: "1px solid rgba(15,207,176,0.2)",
                    color: "#0FCFB0",
                  }}
                >
                  {cite}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MockupSidebar() {
  const items = [
    { label: "AI Assistant", active: true, green: true },
    { label: "Documents", active: false },
    { label: "Live Notes", active: false },
    { label: "Analytics", active: false },
  ];
  const teamItems = [{ label: "Members" }, { label: "Settings" }];

  return (
    <div
      className="py-4"
      style={{ borderRight: "1px solid rgba(255,255,255,0.08)" }}
    >
      <p
        className="px-4 py-1.5 text-[10px] font-medium tracking-[.1em] uppercase mb-1"
        style={{ color: "rgba(255,255,255,0.28)" }}
      >
        Workspace
      </p>
      {items.map((item) => (
        <div
          key={item.label}
          className="flex items-center gap-2 px-4 py-[7px] text-[13px] cursor-pointer transition-colors"
          style={{
            color: item.active
              ? "rgba(255,255,255,1)"
              : "rgba(255,255,255,0.55)",
            background: item.active ? "rgba(255,255,255,0.05)" : undefined,
            borderLeft: item.active ? "2px solid #7C6FFF" : "2px solid transparent",
          }}
        >
          <span
            className="w-[7px] h-[7px] rounded-full flex-shrink-0"
            style={{
              background: item.green ? "#0FCFB0" : "rgba(255,255,255,0.15)",
              boxShadow: item.green ? "0 0 6px #0FCFB0" : undefined,
            }}
          />
          {item.label}
        </div>
      ))}

      <p
        className="px-4 py-1.5 text-[10px] font-medium tracking-[.1em] uppercase mt-4 mb-1"
        style={{ color: "rgba(255,255,255,0.28)" }}
      >
        Team
      </p>
      {teamItems.map((item) => (
        <div
          key={item.label}
          className="flex items-center gap-2 px-4 py-[7px] text-[13px] cursor-pointer"
          style={{
            color: "rgba(255,255,255,0.55)",
            borderLeft: "2px solid transparent",
          }}
        >
          <span
            className="w-[7px] h-[7px] rounded-full flex-shrink-0"
            style={{ background: "rgba(255,255,255,0.15)" }}
          />
          {item.label}
        </div>
      ))}
    </div>
  );
}
