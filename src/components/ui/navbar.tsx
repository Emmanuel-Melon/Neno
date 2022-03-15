import React from "react";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <header>
      <nav
        style={{
          background: "transparent",
        }}
      >
        {session ? <p>{session?.user?.name}</p> : null}
      </nav>
    </header>
  );
}
