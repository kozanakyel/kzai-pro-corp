"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="text-3xl font-bold">Welcome to KZAI Pro</h1>
      </header>
      
      <main className="main-content">
        <p className="mt-4 text-lg">
          Your AI-powered solution for financial market predictions.
        </p>
        <button onClick={() => alert('Get Started clicked')}>
          Get Started
        </button>
      </main>

      <footer className="footer">
        <p>© 2024 KZAI Pro. All rights reserved.</p>
      </footer>
    </div>
  );
}