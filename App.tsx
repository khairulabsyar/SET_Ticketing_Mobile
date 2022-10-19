import React from "react";
import Navigation from "./Navigation";
import { AuthProvider, DialogProvider } from "./Providers";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export default function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </QueryClientProvider>
  );
}
