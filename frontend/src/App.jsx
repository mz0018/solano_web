import { lazy, Suspense } from "react";
import NavbarComponent from "./components/NavbarComponent";
import WhatWeDoFallback from "./fallbacks/WhatWeDoFallback";
const CarouselSection = lazy(() => import('./sections/CarouselSection'));
const CarouselFallback = lazy(() => import('./fallbacks/CarouselFallback'));
const WhatWeDoSection = lazy(() => import('./sections/WhatWeDoSection'));

const App = () => {

  return (
    <>
      <NavbarComponent />

      <Suspense fallback={<CarouselFallback />}>
        <CarouselSection />
      </Suspense>

      <Suspense fallback={<WhatWeDoFallback />}>
        <WhatWeDoSection />
      </Suspense>

    </>
  );
};

export default App;
