import { lazy, Suspense } from "react";
import NavbarComponent from "./components/NavbarComponent";
const CarouselSection = lazy(() => import('./sections/CarouselSection'));
const CarouselFallback = lazy(() => import('./fallbacks/CarouselFallback'));

const App = () => {

  return (
    <>
      <NavbarComponent />

      <Suspense fallback={CarouselFallback}>
        <CarouselSection />
      </Suspense>

      
    </>
  );
};

export default App;
