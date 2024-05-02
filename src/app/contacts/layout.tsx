import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Escape room",
    description: "Контакти",
  };

  export default function Contacts({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {children}
      </section>
    )
  }