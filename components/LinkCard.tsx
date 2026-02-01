"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface LinkCardProps {
  title: string;
  url: string;
  folder: string;
  imageCount: number;
  category?: string;
}

export default function LinkCard({ title, url, folder, imageCount, category }: LinkCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide when hovered
  useEffect(() => {
    if (!isHovered || imageCount <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageCount);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [isHovered, imageCount]);

  // Reset to first image when hover ends
  useEffect(() => {
    if (!isHovered) {
      setCurrentIndex(0);
    }
  }, [isHovered]);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 h-full transform hover:-translate-y-1">
        {/* Image Container with Zoom + Slide Effect */}
        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
          {Array.from({ length: imageCount }).map((_, index) => {
            const imagePath = `/${folder}/${index + 1}.png`;
            const isActive = index === currentIndex;
            const isNext = index === (currentIndex + 1) % imageCount;
            const isPrev = index === (currentIndex - 1 + imageCount) % imageCount;

            return (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  isActive
                    ? "translate-x-0 scale-110 opacity-100 z-10"
                    : isNext
                    ? "translate-x-full scale-100 opacity-0 z-0"
                    : isPrev
                    ? "-translate-x-full scale-100 opacity-0 z-0"
                    : "translate-x-0 scale-100 opacity-0 z-0"
                } ${isHovered && isActive ? "scale-110" : "scale-100"}`}
              >
                <Image
                  src={imagePath}
                  alt={`${title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            );
          })}
          
          {/* Slide indicators */}
          {imageCount > 1 && (
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
              {Array.from({ length: imageCount }).map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-6 bg-white"
                      : "w-1.5 bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          {category && (
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              {category}
            </span>
          )}
          <h3 className="mt-2 text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>
        </div>

        {/* Hover Indicator Bar */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-transform duration-500 origin-left ${
            isHovered ? "scale-x-100" : "scale-x-0"
          }`}
        />
      </div>
    </a>
  );
}
