import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular carga inicial
    const timer = setTimeout(() => {
      setIsLoading(false);
      console.log('Aplicación cargada completamente');
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-crema-suave flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-tierra-rosada mx-auto mb-4"></div>
          <p className="text-tierra-rosada font-medium">Cargando Get Up & Glow...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-crema-suave flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
