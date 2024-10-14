"use client";

import Image from "next/image";
import React from "react";

interface MediaItem {
  id: string;
  src: string;
  alt: string;
}

const mediaItems: MediaItem[] = [
  {
    id: "1",
    src: "/images/image1.jpg", 
    alt: "Description of image 1",
  },
  {
    id: "2",
    src: "/images/image2.jpg",
    alt: "Description of image 2",
  },
  {
    id: "3",
    src: "/images/image3.jpg",
    alt: "Description of image 3",
  },
];

export const MediaGallery = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {mediaItems.map((item) => (
        <figure key={item.id} className="overflow-hidden rounded-lg shadow-lg">
          <Image
            src={item.src}
            alt={item.alt}
            width={600}  // Set a more flexible width
            height={400} // Set a more flexible height
            className="w-full h-auto object-cover"
            layout="responsive" // Responsive image handling
            quality={75} // Image quality optimization
          />
          <figcaption className="text-center text-sm text-gray-500 mt-2">{item.alt}</figcaption>
        </figure>
      ))}
    </div>
  );
};

export default MediaGallery;
