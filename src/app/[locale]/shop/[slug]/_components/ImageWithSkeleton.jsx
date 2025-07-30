import { useState } from "react";
import Image from "next/image";

export function ImageWithSkeleton({ src, alt }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-full h-full relative">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-pulse bg-gray-300 w-36 h-40 rounded-lg" />
        </div>
      )}
      <Image
        src={src}
        width={400}
        height={500}
        alt={alt}
        className={`rounded-xl object-contain w-full h-full transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
