import { lazy, Suspense } from "react";
import NavbarComponent from "./components/NavbarComponent";
import WhatWeDoFallback from "./fallbacks/WhatWeDoFallback";
const CarouselSection = lazy(() => import('./sections/CarouselSection'));
const CarouselFallback = lazy(() => import('./fallbacks/CarouselFallback'));
const WhatWeDoSection = lazy(() => import('./sections/WhatWeDoSection'));
const WhySolanoSection = lazy(() => import('./sections/WhySolanoSection')); 
const WhySolanoFallback = lazy(() => import('./fallbacks/WhySolanoFallback'));
const SubFooterSection = lazy(() => import('./sections/SubFooterSection'));
const SubFooterFallback = lazy(() => import('./fallbacks/SubfooterFallback'));
const FooterSection = lazy(() => import('./sections/FooterSection'));
const FooterFallback = lazy(() => import('./fallbacks/FooterFallback'));

// const FooterSection = lazy(() => 
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(import('./sections/FooterSection'))
//     }, 50000)
//   })
// )

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

      <Suspense fallback={<WhySolanoFallback/>}>
        <WhySolanoSection />
      </Suspense>

      <Suspense fallback={<SubFooterFallback />}>
        <SubFooterSection />
      </Suspense>

      <Suspense fallback={<FooterFallback />}>
        <FooterSection />
      </Suspense>
    </>
  );
};

export default App;
