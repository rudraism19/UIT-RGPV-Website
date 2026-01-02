import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const Gallery = () => {
  // Load images: include the provided external images and any local images in `src/assets/gallery` (optional).
  const modules = import.meta.glob('/src/assets/gallery/*.{png,jpg,jpeg,webp}', { eager: true, as: 'url' }) as Record<string, string>;
  const localImages = Object.values(modules);
  // Add the requested images first, followed by any local images (if present)
  let images: string[] = [
    'https://uitshivpuri.rgpv.ac.in/images/slide4.jpg',
    'https://uitshivpuri.rgpv.ac.in/images/slide6.jpg',
    '/gallery/©By_SeputarGcam15 Oct 16_19.Iphone-16-Stabilizer-LMC-Format-Auto (2).jpg',
    '/gallery/©By_SeputarGcam15 Oct 16_19.Iphone-16-Stabilizer-LMC-Format-Auto.jpg',
    '/gallery/©By_SeputarGcam18 Aug 14_05.Iphone-16-Stabilizer-LMC-Format-Auto (1).jpg',
    '/gallery/©By_SeputarGcam20 Sep 18_13.Iphone-16-Stabilizer-LMC-Format-Auto (2).jpg',
    '/gallery/©By_SeputarGcam30 Sep 15_07.Iphone-16-Stabilizer-LMC-Format-Auto_exported_1437.jpg',
    ...localImages
  ];


  return (
    <div className="container mx-auto px-4 pt-8 pb-6 md:pt-10 lg:pt-12">
      <Card className="shadow-none">
        <CardHeader>
          <CardTitle>Gallery</CardTitle>
        </CardHeader>
        <CardContent>
          {images.length === 0 ? (
            <div className="py-12 text-center text-muted-foreground">No images available — the gallery is empty.</div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {images.map((src, i) => (
                <div key={i} className="w-full max-w-5xl mx-auto">
                  <img src={src} alt={`Gallery ${i + 1}`} className="w-full object-contain rounded-md shadow-sm" />
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Gallery;
