import { lazy, Suspense } from "react";
import NavbarComponent from "./components/NavbarComponent";
import WhatWeDoFallback from "./fallbacks/WhatWeDoFallback";
// const CarouselSection = lazy(() => import('./sections/CarouselSection'));
const CarouselFallback = lazy(() => import('./fallbacks/CarouselFallback'));
// const WhatWeDoSection = lazy(() => import('./sections/WhatWeDoSection'));
// const WhySolanoSection = lazy(() => import('./sections/WhySolanoSection')); 
const WhySolanoFallback = lazy(() => import('./fallbacks/WhySolanoFallback'));
// const SubFooterSection = lazy(() => import('./sections/SubFooterSection'));
const SubFooterFallback = lazy(() => import('./fallbacks/SubfooterFallback'));

const WhatWeDoSection = lazy(() => 
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('./sections/WhatWeDoSection'))
    }, 20000)
  })
)

const CarouselSection = lazy(() => 
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('./sections/CarouselSection'))
    }, 20000)
  })
)

const WhySolanoSection = lazy(() => 
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('./sections/WhySolanoSection'))
    }, 20000)
  })
)

const SubFooterSection = lazy(() => 
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('./sections/SubFooterSection'))
    }, 20000)
  })
)

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
    </>
  );
};

export default App;
