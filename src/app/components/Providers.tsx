"use client";
import { ReactNode } from "react";
// import { UserProvider } from "./context/UserContext";
import { LoadingProvider } from "./context/LoadingContext";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <LoadingProvider>
      {/* <UserProvider> */}
      {children}
      {/* </UserProvider> */}
    </LoadingProvider>
  );
}
