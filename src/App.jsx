import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  return (
    <div className='flex flex-col min-h-screen bg-gray-50'>
        <Navbar />
        <Footer />
    </div>
    
  )
}

export default App;
