import React from 'react';

const Image = React.memo(({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    style={{ marginRight: '10px', width: '200px', height: 'auto' }}
    onError={(e) => {
      e.target.src = 'fallback_image_url.jpg'; // Replace with a fallback image URL
    }}
  />
));

const GalleryImage = ({ images }) => {
  return (
    <div style={{ display: 'flex' }}>
      {images.map((imageUrl, index) => (
        <Image key={index} src={imageUrl} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default GalleryImage;
