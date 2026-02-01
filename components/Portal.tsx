"use client";

import LinkCard from "./LinkCard";
import { portalLinks } from "@/data/links";

export default function Portal() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            DAN Portal
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Your gateway to all DAN services
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {portalLinks.map((link, index) => (
            <LinkCard key={index} {...link} />
          ))}
        </div>
      </div>
    </div>
  );
}
