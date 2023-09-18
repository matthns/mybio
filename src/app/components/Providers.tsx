"use client";

import { ReactNode } from "react";
import { UserProvider } from "./UserContext";
import { LoadingProvider } from "./LoadingContext";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <LoadingProvider>
      <UserProvider>{children}</UserProvider>
    </LoadingProvider>
  );
}
