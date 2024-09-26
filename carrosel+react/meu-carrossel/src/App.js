import React from 'react';
import Carousel from './Carousel';
import './index.css'; // Certifique-se de importar o CSS do Tailwind

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Carousel />
    </div>
  );
}

export default App;
