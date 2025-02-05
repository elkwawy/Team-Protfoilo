import React, { memo, useEffect, useRef, useState } from "react";
import { Img } from "react-image";

const LazyImage = memo(({ src, alt, className,parent}) => {
  const imageRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null); // Holds image source

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageSrc(src); // Set the actual image source only when visible
            observer.unobserve(entry.target); // Stop observing after it's loaded
          }
        });
      },
      { rootMargin: "100px" } // Load slightly before it appears
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [src]);

  return (
    <div ref={imageRef} className={`${parent}`}>
      {imageSrc ? (
        <Img
          src={imageSrc}
          alt={alt || "Image"}
          loading="lazy"
          width={"100%"}
          height={"100%"}
          loader={<div className={`${parent} bg-[#e8f4fd] animate-pulse`} />}
          className={className}
        />
      ) : (
        <div  className={`${parent} bg-[#e8f4fd] animate-pulse`} />
      )}
    </div>
  );
});

export default LazyImage;
