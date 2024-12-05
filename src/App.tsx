import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Fleet from './components/Fleet';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import './index.css';

// Only lazy load CarDetails since it's not needed on initial page load
const CarDetails = lazy(() => import('./components/CarDetails'));

function HomePage() {
  return (
    <>
      <Hero />
      <Fleet />
      <Services />
      <Contact />
    </>
  );
}

function App() {
  useEffect(() => {
    // Reduced minimum loading time for better UX
    const minimumLoadTime = 1000; // 1 second
    const startTime = Date.now();

    const removeLoadingScreen = () => {
      const loadingScreen = document.getElementById('loading-screen');
      if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.transition = 'opacity 0.3s ease-out';
        setTimeout(() => {
          loadingScreen.remove();
        }, 300); // Reduced fade out time
      }
    };

    // Preload critical resources
    Promise.all([
      // Add any critical image preloading here
      document.fonts.ready, // Wait for fonts to load
    ]).then(() => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minimumLoadTime - elapsedTime);
      setTimeout(removeLoadingScreen, remainingTime);
    });

    // Fallback in case promises don't resolve
    setTimeout(removeLoadingScreen, minimumLoadTime + 500);

    return () => {
      const loadingScreen = document.getElementById('loading-screen');
      if (loadingScreen) {
        loadingScreen.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/car/:id"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <CarDetails />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}