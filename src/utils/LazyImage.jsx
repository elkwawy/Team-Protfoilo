import React, { memo, useEffect, useRef } from 'react';
import { Img } from 'react-image';
import LoadingSpinner from './LoadingSpinner';

const LazyImage =  memo(({ src, alt,className,height}) => {
    const imageRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                setImageSrc(src); 
                observer.disconnect();
                }
            });
        });

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
        <Img
            loader={<div className={`w-full my-auto min-h-[${height}] bg-gray-100 rounded-md flex items-center justify-center` }><LoadingSpinner/></div>}
            ref={imageRef}
            src={src}
            alt={alt || 'Image'}
            loading="lazy"
            className={className}
        />
    );
})

export default LazyImage;