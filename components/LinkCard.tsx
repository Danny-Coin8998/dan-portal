"use client";

import Image from "next/image";
import { useState } from "react";

interface LinkCardProps {
  title: string;
  url: string;
  image: string;
  category?: string;
}

export default function LinkCard({ title, url, image, category }: LinkCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 h-full">
        {/* Image Container with Minimal Slide Effect */}
        <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-700">
          <div
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
              isHovered ? "translate-x-0 scale-105" : "translate-x-[-10%] scale-100"
            }`}
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-opacity duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          {/* Overlay gradient for smooth transition */}
          <div
            className={`absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/10 dark:to-gray-900/10 transition-opacity duration-700 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>

        {/* Content */}
        <div className="p-4">
          {category && (
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
              {category}
            </span>
          )}
          <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>
        </div>

        {/* Hover Indicator */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transition-transform duration-300 ${
            isHovered ? "scale-x-100" : "scale-x-0"
          }`}
        />
      </div>
    </a>
  );
}
