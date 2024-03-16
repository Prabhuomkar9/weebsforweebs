// App.tsx
import React from 'react';
import Slideshow from '@/components/slideshow';

const App: React.FC = () => {
  const images = [
    '/assets/jpg/rroom1.jpg',
    '/assets/jpg/rroom2.jpg',
    '/assets/jpg/room3.jpg',
    '/assets/jpg/rrom4.jpg',
     // Add more images as needed
  ];

  return (
    <div className="flex justify-center items-center h-screen">
      <Slideshow images={images} />
    </div>
  );
};

export default App;
